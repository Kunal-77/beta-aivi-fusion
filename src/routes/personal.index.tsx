import { createFileRoute } from "@tanstack/react-router";
import Page from "@/pages/PersonalPage";

export const Route = createFileRoute("/personal/")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Personal workspace — Beta AIVI" },
      { name: "description", content: "Track personal AI subscriptions, usage and spend in Beta AIVI." },
      { property: "og:title", content: "Personal workspace — Beta AIVI" },
      { property: "og:description", content: "Track personal AI subscriptions, usage and spend in Beta AIVI." },
    ],
  }),
  component: Page,
});
