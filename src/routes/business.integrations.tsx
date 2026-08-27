import { createFileRoute } from "@tanstack/react-router";
import Page from "@/pages/BusinessIntegrations";

export const Route = createFileRoute("/business/integrations")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Integrations — Beta AIVI" },
      { name: "description", content: "Connect finance, cloud and delivery systems to Beta AIVI." },
      { property: "og:title", content: "Integrations — Beta AIVI" },
      { property: "og:description", content: "Connect finance, cloud and delivery systems to Beta AIVI." },
    ],
  }),
  component: Page,
});
