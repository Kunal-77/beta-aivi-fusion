import { createFileRoute } from "@tanstack/react-router";
import Page from "@/pages/SsoCallbackPage";

export const Route = createFileRoute("/sso-callback")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Signing in — Beta AIVI" },
      { name: "description", content: "Completing secure single sign-on for Beta AIVI." },
      { property: "og:title", content: "Signing in — Beta AIVI" },
      { property: "og:description", content: "Completing secure single sign-on for Beta AIVI." },
    ],
  }),
  component: Page,
});
