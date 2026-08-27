import { createFileRoute } from "@tanstack/react-router";
import Page from "@/pages/ForgotPasswordPage";

export const Route = createFileRoute("/forgot-password")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Reset password — Beta AIVI" },
      { name: "description", content: "Recover access to your Beta AIVI workspace." },
      { property: "og:title", content: "Reset password — Beta AIVI" },
      { property: "og:description", content: "Recover access to your Beta AIVI workspace." },
    ],
  }),
  component: Page,
});
