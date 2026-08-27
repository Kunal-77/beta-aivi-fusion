import { createFileRoute } from "@tanstack/react-router";
import Page from "@/pages/SignInPage";

export const Route = createFileRoute("/sign-in/$")({
  ssr: false,
  component: Page,
});
