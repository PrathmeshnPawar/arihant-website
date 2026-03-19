export async function GET() {
    const token = process.env.SESSION_TOKEN;

    if (!token) {
        return Response.json({ error: "No session token configured" }, { status: 401 });
    }

    return Response.json({ token });
}
