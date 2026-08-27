import { createFileRoute } from "@tanstack/react-router";
import Page from "@/pages/BusinessInitiatives";

export const Route = createFileRoute("/business/initiatives/")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Initiatives — Beta AIVI" },
      { name: "description", content: "Track, create and govern every AI initiative in your portfolio." },
      { property: "og:title", content: "Initiatives — Beta AIVI" },
      { property: "og:description", content: "Track, create and govern every AI initiative in your portfolio." },
    ],
  }),
  component: Page,
});
