import { createFileRoute } from "@tanstack/react-router";
import Page from "@/pages/SignInPage";

export const Route = createFileRoute("/sign-in/$")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Sign in — Beta AIVI" },
      { name: "description", content: "Sign in to your Beta AIVI workspace to manage AI initiative value." },
      { property: "og:title", content: "Sign in — Beta AIVI" },
      { property: "og:description", content: "Sign in to your Beta AIVI workspace to manage AI initiative value." },
    ],
  }),
  component: Page,
});
