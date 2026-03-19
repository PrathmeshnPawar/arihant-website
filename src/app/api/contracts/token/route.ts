import {findToken} from "@/lib/contracts";

export async function POST(req: Request) {
    const { symbol, expiry, strike, optionType, exchange } = await req.json();
    const token = await findToken(symbol, expiry, Number(strike), optionType, exchange);
    return Response.json({ token });
}