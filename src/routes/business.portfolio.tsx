import { createFileRoute } from "@tanstack/react-router";
import Page from "@/pages/BusinessPortfolio";

export const Route = createFileRoute("/business/portfolio")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Portfolio — Beta AIVI" },
      { name: "description", content: "Portfolio-level ROI, risk and value visualisations for AI initiatives." },
      { property: "og:title", content: "Portfolio — Beta AIVI" },
      { property: "og:description", content: "Portfolio-level ROI, risk and value visualisations for AI initiatives." },
    ],
  }),
  component: Page,
});
