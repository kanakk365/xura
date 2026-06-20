import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ status: false, message: "Invalid request body" }, { status: 400 });
  }

  let res: Response;
  try {
    res = await fetch(`${process.env.ADVERTISER_API_URL}/api/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  } catch {
    return Response.json({ status: false, message: "Could not reach registration server" }, { status: 502 });
  }

  const text = await res.text();
  let data: unknown;
  try {
    data = JSON.parse(text);
  } catch {
    return Response.json(
      { status: false, message: `Server returned unexpected response (HTTP ${res.status})` },
      { status: 502 }
    );
  }

  return Response.json(data, { status: res.status });
}
