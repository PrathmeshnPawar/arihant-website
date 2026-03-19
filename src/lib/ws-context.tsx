"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { greeksoftWS } from "./greeksoft-ws";

type WSStatus = "connecting" | "connected" | "disconnected" | "error";

interface WSContextValue {
    ws: typeof greeksoftWS;
    status: WSStatus;
}

const WSContext = createContext<WSContextValue | null>(null);

export function WSProvider({ children }: { children: React.ReactNode }) {
    const [status, setStatus] = useState<WSStatus>("disconnected");

    useEffect(() => {
        async function init() {
            try {
                setStatus("connecting");

                // Fetch auth token from server — never expose in client env
                const res = await fetch("/api/auth/token");
                if (!res.ok) throw new Error("Failed to fetch auth token");
                const { token } = await res.json();

                greeksoftWS.connect(token, {
                    onOpen: () => setStatus("connected"),
                    onClose: () => setStatus("disconnected"),
                    onError: () => setStatus("error"),
                });
            } catch (err) {
                console.error("WS init failed:", err);
                setStatus("error");
            }
        }

        init();

        return () => {
            greeksoftWS.disconnect();
            setStatus("disconnected");
        };
    }, []);

    return (
        <WSContext.Provider value={{ ws: greeksoftWS, status }}>
    {children}
    </WSContext.Provider>
);
}

export function useWS() {
    const ctx = useContext(WSContext);
    if (!ctx) throw new Error("useWS must be used inside WSProvider");
    return ctx;
}