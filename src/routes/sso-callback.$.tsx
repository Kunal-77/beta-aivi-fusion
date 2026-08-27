import { createFileRoute } from "@tanstack/react-router";
import Page from "@/pages/SsoCallbackPage";

export const Route = createFileRoute("/sso-callback/$")({
  ssr: false,
  component: Page,
});
