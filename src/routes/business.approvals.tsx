import { createFileRoute } from "@tanstack/react-router";
import Page from "@/pages/BusinessApprovals";

export const Route = createFileRoute("/business/approvals")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Approvals — Beta AIVI" },
      { name: "description", content: "Review and action initiative stage-gate approvals in Beta AIVI." },
      { property: "og:title", content: "Approvals — Beta AIVI" },
      { property: "og:description", content: "Review and action initiative stage-gate approvals in Beta AIVI." },
    ],
  }),
  component: Page,
});
