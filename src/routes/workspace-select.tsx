import { createFileRoute } from "@tanstack/react-router";
import Page from "@/pages/WorkspaceSelectPage";

export const Route = createFileRoute("/workspace-select")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Choose workspace — Beta AIVI" },
      { name: "description", content: "Select a personal or business workspace in Beta AIVI." },
      { property: "og:title", content: "Choose workspace — Beta AIVI" },
      { property: "og:description", content: "Select a personal or business workspace in Beta AIVI." },
    ],
  }),
  component: Page,
});
