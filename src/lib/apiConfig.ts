/**
 * Base URL of the AIVI backend API.
 *
 * The upstream FastAPI service does not send CORS headers for this origin,
 * so browser requests are routed through a same-origin proxy
 * (src/routes/api/public/aivi.$.ts). On the server we call it directly.
 */
const UPSTREAM =
  (import.meta.env['VITE_API_URL'] as string | undefined) || "http://127.0.0.1:8000";

const PROXY_PREFIX = "/api/public/aivi";

export const API_BASE =
  typeof window !== "undefined" ? `${window.location.origin}${PROXY_PREFIX}` : UPSTREAM;

export const API_UPSTREAM = UPSTREAM;
