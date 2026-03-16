import { loadContracts, getContracts } from "@/lib/contracts";

export async function POST(req: Request) {
    loadContracts();

    const { symbol, expiry, strike, optionType } = await req.json();

    const contracts = getContracts();

    const isFutures = !strike || Number(strike) === 0;

    const contract = isFutures
        ? contracts.find(
            (c) =>
                c.symbol === symbol &&
                c.expiry === expiry &&
                c.optionType === "XX"
        )
        : contracts.find(
            (c) =>
                c.symbol === symbol &&
                c.expiry === expiry &&
                c.strike === Number(strike) &&
                c.optionType === optionType
        );

    if (!contract) {
        return Response.json({ token: null });
    }

    return Response.json({ token: contract.token });
}

export async function GET() {
    return Response.json({ error: "Method not allowed. Use POST." }, { status: 405 });
}