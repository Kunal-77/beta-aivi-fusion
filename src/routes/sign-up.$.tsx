import { createFileRoute } from "@tanstack/react-router";
import Page from "@/pages/SignUpPage";

export const Route = createFileRoute("/sign-up/$")({
  ssr: false,
  component: Page,
});
