import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const authToken = process.env.SESSION_TOKEN;
        const gscid = process.env.GSCID;

        if (!authToken) {
            return NextResponse.json({ error: 'No token provided' }, { status: 401 });
        }

        if (!gscid) {
            return NextResponse.json({ error: 'No gscid configured' }, { status: 500 });
        }

        // Override gscid from env, ignore whatever client sent
        const safeBody = {
            request: {
                ...body.request,
                data: {
                    ...body.request.data,
                    gscid,   // ← always use server-side value
                },
            },
        };

        const externalResponse = await fetch("http://restapi.greeksoft.in:7267/MarginCalculatorAPI", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": authToken,
            },
            body: JSON.stringify(safeBody),
        });

        console.log("Greeksoft status:", externalResponse.status);
        const raw = await externalResponse.text();
        console.log("Greeksoft raw response:", raw);

        const data = JSON.parse(raw);
        const marginData = data?.response?.data;

        if (!marginData) {
            return NextResponse.json({ error: 'Invalid response from margin API' }, { status: 502 });
        }

        return NextResponse.json({
            spanMargin: marginData.NewPosSpanMargin,
            expMargin: marginData.NewPosExpMargin,
        });

    } catch (error) {
        console.error("Proxy error:", error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}