import rawData from "@/data/nfo.json";

const data = rawData as {
    data: {
        symbols: {
            baseSym: string;
            expiryDate: string;
            strikePrice: number;
            optionType: string;
            excTkn: number;
            lotSize: number;
        }[];
    };
};

export interface Contract {
    symbol: string;
    expiry: string;
    strike: number;
    optionType: string;
    token: number;
    lotSize: number;
}

let contracts: Contract[] = [];

export function loadContracts(): void {
    if (contracts.length > 0) return;

    contracts = data.data.symbols.map((s) => ({
        symbol: s.baseSym,
        expiry: s.expiryDate,
        strike: s.strikePrice,
        optionType: s.optionType,
        token: s.excTkn,
        lotSize: s.lotSize,
    }));
}

export function getContracts(): Contract[] {
    return contracts;
}