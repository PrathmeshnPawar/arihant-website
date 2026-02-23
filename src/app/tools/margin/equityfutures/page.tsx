"use client";

import React, { useState, useMemo } from "react";
import { dummyEquityFutures } from "@/utils/EquityFuturesData";
import CalculationModal from "./CalculationModal";

/* ================= TYPES ================= */

type Order = "asc" | "desc";

interface Row {
  id: number;
  contract: string;
  price: number;
  nrmlMargin: number;
  marginRate: number;
  expiry: string;
  lotSize: number;
}

/* ================= HELPERS ================= */

const formatCurrency = (val?: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(val ?? 0);

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) return -1;
  if (b[orderBy] > a[orderBy]) return 1;
  return 0;
}

function getComparator<Key extends keyof any>(order: Order, orderBy: Key) {
  return order === "desc"
    ? (a: Record<Key, any>, b: Record<Key, any>) =>
        descendingComparator(a, b, orderBy)
    : (a: Record<Key, any>, b: Record<Key, any>) =>
        -descendingComparator(a, b, orderBy);
}

/* ================= COMPONENT ================= */

export default function EquityFuturesTable() {
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof Row>("contract");

  const [selectedContract, setSelectedContract] = useState<Row | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [cashAvailable, setCashAvailable] = useState<number | string>(100000);

  const handleSort = (property: keyof Row) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const sortedRows = useMemo(() => {
    return [...dummyEquityFutures].sort(getComparator(order, orderBy));
  }, [order, orderBy]);

  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      {/* HEADER */}
      <div className="rounded-2xl border border-border/40 bg-white p-6 shadow-sm mb-6">
        <h1 className="text-2xl font-bold text-arihant-violet">
          Equity Futures
        </h1>
        <p className="text-sm text-gray-500">
          Basket Order Simulation & Hedge Benefit Analysis
        </p>
      </div>

      {/* TABLE */}
      <div className="rounded-2xl border border-border/40 bg-white shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              {[
                { id: "contract", label: "Contract" },
                { id: "price", label: "Price" },
                { id: "nrmlMargin", label: "NRML Margin" },
                { id: "marginRate", label: "Margin Rate" },
              ].map((head) => (
                <th
                  key={head.id}
                  onClick={() => handleSort(head.id as keyof Row)}
                  className="px-4 py-3 text-left font-semibold cursor-pointer select-none"
                >
                  {head.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {sortedRows.map((row) => (
              <tr
                key={row.id}
                onClick={() => {
                  setSelectedContract(row);
                  setModalOpen(true);
                }}
                className="border-t hover:bg-gray-50 cursor-pointer"
              >
                <td className="px-4 py-3">{row.contract}</td>
                <td>{formatCurrency(row.price)}</td>
                <td>{formatCurrency(row.nrmlMargin)}</td>
                <td>{(row.marginRate * 100).toFixed(2)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      <CalculationModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        contract={selectedContract}
        setSelectedContract={setSelectedContract}
        cashAvailable={cashAvailable}
        setCashAvailable={setCashAvailable}
      />
    </section>
  );
}
