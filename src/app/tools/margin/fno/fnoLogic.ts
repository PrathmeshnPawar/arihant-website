import { useState, useMemo } from "react";

/* ================= TYPES ================= */

export type Exchange = "NFO" | "BFO" | "NCD" | "BCD";
export type Product = "Futures" | "Options";
export type OptionType = "Calls" | "Puts";
export type Side = "Buy" | "Sell";

export interface FnOFormState {
    exchange: Exchange;
    product: Product;
    symbol: string | null;
    expiry: string | null;
    optionType: OptionType;
    strike: number;
    qty: number;
    trade_type: Side;
    ltp: number;
}

export interface BasketItem extends FnOFormState {
    id: number;
    contract: string;
    initialMargin: number;
    exposure: number;
    netPremium: number;
    total: number;
    isCalculating: boolean;
}

/* ================= CONSTANTS ================= */

const EXCHANGE_SEGMENT: Record<Exchange, number> = {
    NFO: 2,
    BFO: 5,
    NCD: 3,
    BCD: 6,
};

const initialFormState: FnOFormState = {
    exchange: "NFO",
    product: "Options",
    symbol: null,
    expiry: null,
    optionType: "Calls",
    strike: 0,
    qty: 0,
    trade_type: "Buy",
    ltp: 0,
};

/* ================= MARGIN API CALL ================= */

async function fetchMarginFromAPI(
    token: number,
    exchange_segment: number,
    ltp: number,
    netqty: number,
    side: 1 | 2,
): Promise<{ spanMargin: number; expMargin: number; netPremium: number }> {
    const response = await fetch("/api/margin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            request: {
                data: {
                    tokens: [{ token, exchange_segment, ltp, netqty, side }],
                },
                request_type: "subscribe",
                streaming_type: "MarginCalculation",
            },
        }),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to fetch margin");
    }

    return await response.json();
}

/* ================= MAIN HOOK ================= */

export function useFnOLogic() {
    const [basket, setBasket] = useState<BasketItem[]>([]);
    const [form, setForm] = useState<FnOFormState>(initialFormState);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    /* ── SUMMARY ── */
    const summary = useMemo(() => {
        return basket.reduce(
            (acc, curr) => ({
                span:       acc.span       + curr.initialMargin,
                exposure:   acc.exposure   + curr.exposure,
                netPremium: acc.netPremium + curr.netPremium,
                total:      acc.total      + curr.total,
            }),
            { span: 0, exposure: 0, netPremium: 0, total: 0 }
        );
    }, [basket]);

    /* ── ADD POSITION ── */
    const handleAdd = async () => {
        setError(null);

        if (!form.symbol)  { setError("Please select a symbol."); return; }
        if (!form.expiry)  { setError("Please select an expiry."); return; }
        if (!form.qty || form.qty === 0) { setError("Please enter a valid quantity."); return; }
        if (form.product === "Options" && (!form.strike || form.strike === 0)) {
            setError("Please select a strike price."); return;
        }

        const isDuplicate = basket.some(item =>
            item.symbol     === form.symbol &&
            item.expiry     === form.expiry &&
            item.strike     === form.strike &&
            item.optionType === form.optionType &&
            item.product    === form.product
        );
        if (isDuplicate) { setError("This contract is already in your basket."); return; }

        // Capture values directly — no snapshot needed
        const symbol     = form.symbol;
        const expiry     = form.expiry;
        const exchange   = form.exchange;
        const product    = form.product;
        const strike     = form.strike;
        const optionType = form.optionType;
        const qty        = form.qty;
        const side       = form.trade_type;
        const ltp        = form.ltp;

        console.log("Adding position:", { symbol, expiry, exchange, product, strike, optionType, qty, side, ltp });

        const tempId = Date.now();
        const optSuffix = product === "Options"
            ? ` ${strike} ${optionType === "Calls" ? "CE" : "PE"}`
            : " FUT";

        setBasket(prev => [...prev, {
            ...form,
            id:            tempId,
            contract:      `${symbol} ${expiry}${optSuffix}`,
            initialMargin: 0,
            exposure:      0,
            netPremium:    0,
            total:         0,
            isCalculating: true,
        }]);

        resetForm();

        try {
            const tokenPayload = {
                symbol,
                expiry,
                exchange,
                strike:     product === "Futures" ? 0 : Number(strike),
                optionType: product === "Futures" ? "XX" : optionType === "Calls" ? "CE" : "PE",
            };

            console.log("Token payload:", tokenPayload);  // ← verify strike here

            const { token } = await fetch("/api/contracts/token", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(tokenPayload),
            }).then(r => r.json());

            console.log("Token received:", token);  // ← verify token here

            if (!token) throw new Error(`No token found for ${symbol}`);

            const exchange_segment = EXCHANGE_SEGMENT[exchange as Exchange];
            const tradeSide: 1 | 2 = side === "Buy" ? 1 : 2;
            const tradeLtp = product === "Futures" ? 0.01 : (ltp > 0 ? ltp : 1);

            const { spanMargin, expMargin, netPremium } = await fetchMarginFromAPI(
                token, exchange_segment, tradeLtp, Number(qty), tradeSide,
            );

            const spanClamped    = Math.max(0, Math.round(spanMargin));
            const expClamped     = Math.max(0, Math.round(expMargin));
            const premiumClamped = Math.max(0, Math.round(netPremium));

            const total = product === "Options"
                ? side === "Buy"
                    ? spanClamped + expClamped + premiumClamped
                    : Math.max(0, spanClamped + expClamped - premiumClamped)
                : spanClamped + expClamped;

            setBasket(prev => prev.map(item =>
                item.id === tempId
                    ? {
                        ...item,
                        initialMargin: spanClamped,
                        exposure:      expClamped,
                        netPremium:    premiumClamped,
                        total,
                        isCalculating: false,
                    }
                    : item
            ));

        } catch (err: unknown) {
            setBasket(prev => prev.filter(i => i.id !== tempId));
            setError(err instanceof Error ? err.message : "An unexpected error occurred");
        }
    };

    /* ── HELPERS ── */
    const resetForm   = () => setForm(initialFormState);
    const resetBasket = () => setBasket([]);
    const removeItem  = (id: number) =>
        setBasket(prev => prev.filter(i => i.id !== id));

    return {
        basket,
        form,
        setForm,
        summary,
        handleAdd,
        removeItem,
        resetBasket,
        resetForm,
        error,
        loading,
    };
}