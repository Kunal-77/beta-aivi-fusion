import { createFileRoute } from "@tanstack/react-router";
import Page from "@/pages/BusinessAiStudio";

export const Route = createFileRoute("/business/ai-studio")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "AI Studio — Beta AIVI" },
      { name: "description", content: "Build and govern AI assets powering initiative value intelligence." },
      { property: "og:title", content: "AI Studio — Beta AIVI" },
      { property: "og:description", content: "Build and govern AI assets powering initiative value intelligence." },
    ],
  }),
  component: Page,
});
