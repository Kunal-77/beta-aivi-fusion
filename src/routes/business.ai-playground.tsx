import { createFileRoute } from "@tanstack/react-router";
import Page from "@/pages/BusinessAiPlayground";

export const Route = createFileRoute("/business/ai-playground")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "AI Playground — Beta AIVI" },
      { name: "description", content: "Experiment with AIVI models and prompts against live initiative data." },
      { property: "og:title", content: "AI Playground — Beta AIVI" },
      { property: "og:description", content: "Experiment with AIVI models and prompts against live initiative data." },
    ],
  }),
  component: Page,
});
