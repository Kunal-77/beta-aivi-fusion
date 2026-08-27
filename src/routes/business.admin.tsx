import { createFileRoute } from "@tanstack/react-router";
import Page from "@/pages/BusinessAdmin";

export const Route = createFileRoute("/business/admin")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Administration — Beta AIVI" },
      { name: "description", content: "Manage members, roles and workspace configuration in Beta AIVI." },
      { property: "og:title", content: "Administration — Beta AIVI" },
      { property: "og:description", content: "Manage members, roles and workspace configuration in Beta AIVI." },
    ],
  }),
  component: Page,
});
