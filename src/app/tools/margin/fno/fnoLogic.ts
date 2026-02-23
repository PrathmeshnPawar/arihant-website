import { useState, useMemo } from "react";
import { calculateFnOMargin } from "@/utils/calculations";

/* ================= TYPES ================= */

export type Exchange = "NFO" | "BFO" | "MCX" | "CDS";
export type Product = "Futures" | "Options";
export type OptionType = "Calls" | "Puts";
export type Side = "Buy" | "Sell";

export interface SymbolOption {
  label: string;
}

export interface FnOFormState {
  exchange: Exchange;
  product: Product;
  symbol: SymbolOption | null;
  optionType: OptionType;
  strike: string;
  qty: number;
  side: Side;
}

export interface BasketItem extends FnOFormState {
  id: number;
  contract: string;
  initialMargin: number;
  exposure: number;
  total: number;
}

/* ================= INITIAL STATE ================= */

const initialFormState: FnOFormState = {
  exchange: "NFO",
  product: "Options",
  symbol: null,
  optionType: "Calls",
  strike: "",
  qty: 500,
  side: "Buy",
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

/* ================= LOGIC HOOK ================= */

export function useFnOLogic() {
  const [basket, setBasket] = useState<BasketItem[]>([]);
  const [form, setForm] = useState<FnOFormState>(initialFormState);

  const summary = useMemo(() => {
    return basket.reduce(
      (acc, curr) => ({
        span: acc.span + curr.initialMargin,
        exposure: acc.exposure + curr.exposure,
        total: acc.total + curr.total,
      }),
      { span: 0, exposure: 0, total: 0 },
    );
  }, [basket]);

  const handleAdd = () => {
    if (!form.symbol) {
      alert("Please select a symbol");
      return;
    }

    const isDuplicate = basket.some(
      (item) =>
        item.contract === form.symbol!.label && item.exchange === form.exchange,
    );

    if (isDuplicate) {
      alert(`The symbol ${form.symbol.label} is already in your basket.`);
      return;
    }

    const price = 100;

    const initialMargin = Math.round(
      calculateFnOMargin(price, Number(form.qty), form.exchange),
    );

    const exposure = Math.round(initialMargin * 0.3);

    const newItem: BasketItem = {
      ...form,
      id: Date.now(),
      contract: form.symbol.label,
      initialMargin,
      exposure,
      total: initialMargin + exposure,
    };

    setBasket((prev) => [...prev, newItem]);
  };

  const resetForm = () => {
    setForm(initialFormState);
  };

  const removeItem = (id: number) =>
    setBasket((prev) => prev.filter((item) => item.id !== id));

  const resetBasket = () => setBasket([]);

  return {
    basket,
    form,
    setForm,
    summary,
    handleAdd,
    removeItem,
    resetBasket,
    resetForm,
  };
}
