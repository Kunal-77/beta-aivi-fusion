/**
 * Base URL of the AIVI backend API.
 *
 * Configure with VITE_API_URL (browser-safe). Falls back to the local
 * FastAPI dev server used by the original AIVI project.
 */
export const API_BASE =
  (import.meta.env['VITE_API_URL'] as string | undefined) || "http://127.0.0.1:8000";
