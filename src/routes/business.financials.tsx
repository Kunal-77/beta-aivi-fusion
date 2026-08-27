import { createFileRoute } from "@tanstack/react-router";
import Page from "@/pages/BusinessFinancials";

export const Route = createFileRoute("/business/financials")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Financials — Beta AIVI" },
      { name: "description", content: "Forecasts, costs, benefits realization and cash flow for AI initiatives." },
      { property: "og:title", content: "Financials — Beta AIVI" },
      { property: "og:description", content: "Forecasts, costs, benefits realization and cash flow for AI initiatives." },
    ],
  }),
  component: Page,
});
