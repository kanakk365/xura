import type { NextRequest } from "next/server";

type ServiceKey = "partners" | "advertisers";

type VerifyBody = {
  email?: string;
  otp?: string;
  tab?: ServiceKey;
};

const SERVICE_CONFIG: Record<ServiceKey, { baseUrl: string; path: string }> = {
  advertisers: {
    baseUrl: process.env.ADVERTISER_API_URL ?? "",
    path: "/api/verify-otp",
  },
  partners: {
    baseUrl: process.env.EV_PARTNER_API_URL ?? "",
    path: "/api/auth/verify-email",
  },
};

function parseService(request: NextRequest, body: VerifyBody): ServiceKey | null {
  const tabParam = request.nextUrl.searchParams.get("tab") as ServiceKey | null;
  const requestedTab = tabParam ?? body.tab;

  return requestedTab === "partners" || requestedTab === "advertisers"
    ? requestedTab
    : null;
}

export async function POST(request: NextRequest) {
  let body: VerifyBody;
  try {
    body = await request.json();
  } catch {
    return Response.json({ status: false, message: "Invalid request body" }, { status: 400 });
  }

  const service = parseService(request, body);
  if (!service) {
    return Response.json(
      { status: false, message: "Missing or invalid tab parameter" },
      { status: 400 }
    );
  }

  if (!body?.email || typeof body.email !== "string") {
    return Response.json({ status: false, message: "Missing email" }, { status: 400 });
  }

  if (!body?.otp || typeof body.otp !== "string") {
    return Response.json({ status: false, message: "Missing otp" }, { status: 400 });
  }

  const { baseUrl, path } = SERVICE_CONFIG[service];
  if (!baseUrl) {
    return Response.json(
      {
        status: false,
        message:
          `Missing ${service === "partners" ? "EV_PARTNER_API_URL" : "ADVERTISER_API_URL"} environment variable`,
      },
      { status: 500 }
    );
  }

  let res: Response;
  try {
    const url = `${baseUrl.replace(/\/+$/, "")}${path}`;
    res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  } catch {
    return Response.json({ status: false, message: "Could not reach verification server" }, { status: 502 });
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
