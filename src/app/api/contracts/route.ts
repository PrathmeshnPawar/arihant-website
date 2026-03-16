import { loadContracts, getContracts } from "@/lib/contracts";

export async function GET() {
    loadContracts(); // synchronous, no await needed

    const contracts = getContracts();

    return Response.json({ contracts });  // return ALL, not just 200
}