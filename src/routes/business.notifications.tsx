import { createFileRoute } from "@tanstack/react-router";
import Page from "@/pages/BusinessNotifications";

export const Route = createFileRoute("/business/notifications")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Notifications — Beta AIVI" },
      { name: "description", content: "Alerts, approvals and value signals across your AI portfolio." },
      { property: "og:title", content: "Notifications — Beta AIVI" },
      { property: "og:description", content: "Alerts, approvals and value signals across your AI portfolio." },
    ],
  }),
  component: Page,
});
