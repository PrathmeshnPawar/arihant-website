import { useState, useMemo } from "react";

/* ================= TYPES ================= */

export type Exchange = "NFO" | "BFO" | "MCX" | "CDS";
export type Product = "Futures" | "Options";
export type OptionType = "Calls" | "Puts";
export type Side = "Buy" | "Sell";

export interface FnOFormState {
    exchange: Exchange;
    product: Product;
    symbol: string | null;
    expiry: string | null;      // raw unix timestamp string e.g. "1459348200"
    optionType: OptionType;
    strike: number;
    qty: number;
    side: Side;
    ltp: number;
}

export interface BasketItem extends FnOFormState {
    id: number;
    contract: string;
    initialMargin: number;
    exposure: number;
    total: number;
}

/* ================= EXCHANGE SEGMENTS ================= */

const EXCHANGE_SEGMENT: Record<Exchange, number> = {
    NFO: 2,
    BFO: 5,
    MCX: 2,
    CDS: 3,
};

/* ================= INITIAL STATE ================= */

const initialFormState: FnOFormState = {
    exchange: "NFO",
    product: "Options",
    symbol: null,
    expiry: null,
    optionType: "Calls",
    strike: 0,
    qty: 500,
    side: "Buy",
    ltp: 580,
};

/* ================= STYLES ================= */

export const labelStyle = {
    fontSize: 10.5,
    marginBottom: 4,
    color: "#5F6368",
    fontWeight: 700,
    textTransform: "uppercase" as const,
    letterSpacing: 0.4,
};

export const numberCell = {
    textAlign: "right" as const,
    fontVariantNumeric: "tabular-nums" as const,
};

/* ================= MARGIN API CALL ================= */

async function fetchMarginFromAPI(
    token: number,
    exchange_segment: number,
    ltp: number,
    netqty: number,
    side: 1 | 2,
): Promise<{ spanMargin: number; expMargin: number }> {

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

export function useFnOLogic(
    authToken: string = process.env.NEXT_PUBLIC_SESSION_TOKEN || "",
    gscid: string = process.env.NEXT_PUBLIC_GSCID || "RUSHI45"
) {

    const [basket, setBasket] = useState<BasketItem[]>([]);
    const [form, setForm] = useState<FnOFormState>(initialFormState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    /* ================= SUMMARY ================= */

    const summary = useMemo(() => {
        return basket.reduce(
            (acc, curr) => ({
                span: acc.span + curr.initialMargin,
                exposure: acc.exposure + curr.exposure,
                total: acc.total + curr.total,
            }),
            { span: 0, exposure: 0, total: 0 }
        );
    }, [basket]);

    /* ================= ADD POSITION ================= */

    const handleAdd = async () => {
        setError(null);

        if (!form.symbol) {
            alert("Please select a symbol");
            return;
        }

        if (!form.expiry) {
            alert("Please select a symbol with a valid expiry");
            return;
        }

        if (form.product === "Options" && (!form.strike || form.strike === 0)) {
            setError("Please enter a Strike Price for Options.");
            return;
        }

        const isDuplicate = basket.some(
            (item) =>
                item.contract === form.symbol &&
                item.exchange === form.exchange
        );

        if (isDuplicate) {
            alert(`The symbol ${form.symbol} is already in your basket.`);
            return;
        }

        /* ================= TOKEN LOOKUP ================= */

        // In fnoLogic.ts handleAdd — wrap the token fetch too:
        let token: number | null = null;
        try {
            const res = await fetch("/api/contracts/token", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    ...(authToken ? { Authorization: authToken } : {}),
                },
                body: JSON.stringify({
                    symbol: form.symbol,
                    expiry: form.expiry,
                    strike: form.strike,
                    optionType: form.optionType === "Calls" ? "CE" : "PE",
                }),
            });
            const json = await res.json();
            token = json.token;
        } catch (err) {
            setError("Failed to look up contract token.");
            return;
        }

        if (!token) {
            setError(`No etoken mapped for symbol: ${form.symbol}`);
            return;
        }

        const exchange_segment = EXCHANGE_SEGMENT[form.exchange];
        const side: 1 | 2 = form.side === "Buy" ? 1 : 2;

        setLoading(true);

        try {

            const { spanMargin, expMargin } = await fetchMarginFromAPI(
                token,
                exchange_segment,
                form.ltp,
                Number(form.qty),
                side,

            );

            const newItem: BasketItem = {
                ...form,
                id: Date.now(),
                contract: form.symbol,
                initialMargin: Math.round(spanMargin),
                exposure: Math.round(expMargin),
                total: Math.round(spanMargin + expMargin),
            };

            setBasket((prev) => [...prev, newItem]);

        } catch (err: unknown) {

            const message =
                err instanceof Error ? err.message : "API call failed";

            setError(message);

        } finally {
            setLoading(false);
        }
    };

    /* ================= HELPERS ================= */

    const resetForm = () => setForm(initialFormState);

    const removeItem = (id: number) =>
        setBasket((prev) => prev.filter((item) => item.id !== id));

    const resetBasket = () => setBasket([]);

    /* ================= RETURN ================= */

    return {
        basket,
        form,
        setForm,
        summary,
        handleAdd,
        removeItem,
        resetBasket,
        resetForm,
        loading,
        error,
    };
}