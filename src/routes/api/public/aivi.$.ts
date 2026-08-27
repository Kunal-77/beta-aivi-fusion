import { createFileRoute } from "@tanstack/react-router";

const UPSTREAM =
  process.env["AIVI_API_URL"] ||
  process.env["VITE_API_URL"] ||
  "https://ai-initiative-value-intelligence-api.onrender.com";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Authorization, Content-Type",
  "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, DELETE, OPTIONS",
};

async function proxy({ request, params }: { request: Request; params: { _splat?: string } }) {
  const path = params._splat ?? "";
  const search = new URL(request.url).search;
  const target = `${UPSTREAM.replace(/\/$/, "")}/${path}${search}`;

  const headers = new Headers();
  const auth = request.headers.get("authorization");
  if (auth) headers.set("authorization", auth);
  const ct = request.headers.get("content-type");
  if (ct) headers.set("content-type", ct);
  headers.set("accept", request.headers.get("accept") ?? "application/json");

  const init: RequestInit = { method: request.method, headers };
  if (!["GET", "HEAD"].includes(request.method)) {
    init.body = await request.text();
  }

  try {
    const res = await fetch(target, init);
    const body = await res.arrayBuffer();
    const out = new Headers(CORS);
    out.set("content-type", res.headers.get("content-type") ?? "application/json");
    return new Response(body, { status: res.status, headers: out });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Upstream request failed", detail: String(err) }),
      { status: 502, headers: { ...CORS, "content-type": "application/json" } },
    );
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
