import { createFileRoute } from "@tanstack/react-router";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Authorization, Content-Type, X-Requested-With, Accept, Origin",
  "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, DELETE, OPTIONS",
  "Access-Control-Max-Age": "86400",
};

function jsonResponse(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS, "content-type": "application/json" },
  });
}

function getUpstream(): string {
  const configured =
    process.env["AIVI_API_URL"] ||
    process.env["VITE_API_URL"] ||
    "https://ai-initiative-value-intelligence-api.onrender.com";
  const parsed = new URL(configured);

  if (parsed.protocol !== "https:" && parsed.hostname !== "localhost" && parsed.hostname !== "127.0.0.1") {
    throw new Error("AIVI API URL must use HTTPS");
  }

  return parsed.toString().replace(/\/$/, "");
}

async function proxy({ request, params }: { request: Request; params: { _splat?: string } }) {
  try {
    const path = params._splat ?? "";
    const search = new URL(request.url).search;
    const target = `${getUpstream()}/${path}${search}`;

    const headers = new Headers();
    const auth = request.headers.get("authorization");
    if (auth) headers.set("authorization", auth);
    const contentType = request.headers.get("content-type");
    if (contentType) headers.set("content-type", contentType);
    headers.set("accept", request.headers.get("accept") ?? "application/json");

    const init: RequestInit = { method: request.method, headers };
    if (!["GET", "HEAD"].includes(request.method)) {
      init.body = await request.text();
    }

    const res = await fetch(target, init);
    const body = await res.arrayBuffer();
    const out = new Headers(CORS);
    out.set("content-type", res.headers.get("content-type") ?? "application/json");
    return new Response(body, { status: res.status, headers: out });
  } catch (error) {
    console.error("AIVI proxy request failed", error);
    return jsonResponse({ error: "AIVI backend is temporarily unavailable" }, 502);
  }
}

export const Route = createFileRoute("/api/public/aivi/$")({
  server: {
    handlers: {
      GET: proxy,
      POST: proxy,
      PUT: proxy,
      PATCH: proxy,
      DELETE: proxy,
      OPTIONS: () => new Response(null, { status: 204, headers: CORS }),
    },
  },
});
