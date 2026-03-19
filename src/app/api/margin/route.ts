import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const authToken = process.env.SESSION_TOKEN;
        const gscid = process.env.GSCID;

        if (!authToken) return NextResponse.json({ error: 'Session token missing' }, { status: 401 });
        if (!gscid) return NextResponse.json({ error: 'GSCID not configured' }, { status: 500 });

        const safeBody = {
            request: {
                ...body.request,
                data: {
                    ...body.request.data,
                    gscid,
                },
            },
        };

        console.log("Greeksoft request:", JSON.stringify(safeBody));

        const externalResponse = await fetch(
            "http://restapi.greeksoft.in:7267/MarginCalculatorAPI",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": authToken,
                },
                body: JSON.stringify(safeBody),
            }
        );

        // Always read body first before checking status
        const raw = await externalResponse.text();
        console.log("Greeksoft status:", externalResponse.status);
        console.log("Greeksoft response:", raw);

        if (!externalResponse.ok) {
            return NextResponse.json(
                { error: `Greeksoft error ${externalResponse.status}: ${raw}` },
                { status: 502 }
            );
        }

        let data: any;
        try {
            data = JSON.parse(raw);
        } catch {
            return NextResponse.json(
                { error: `Greeksoft returned invalid JSON: ${raw}` },
                { status: 502 }
            );
        }

        // Handle Greeksoft application-level errors
        if (data?.response?.Error) {
            return NextResponse.json(
                { error: `Greeksoft: ${data.response.Error}` },
                { status: 502 }
            );
        }

        const marginData = data?.response?.data;
        if (!marginData) {
            return NextResponse.json(
                { error: 'Invalid response structure from Greeksoft' },
                { status: 502 }
            );
        }

        return NextResponse.json({
            spanMargin: marginData.NewPosSpanMargin ?? 0,
            expMargin: marginData.NewPosExpMargin ?? 0,
            netPremium: marginData.NewPosPremium ?? 0
        });

    } catch (error: any) {
        console.error("Margin proxy error:", error.message);
        return NextResponse.json(
            { error: error.message || 'Internal Server Error' },
            { status: 500 }
        );
    }
}