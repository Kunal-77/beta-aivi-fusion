import { createFileRoute } from "@tanstack/react-router";
import Page from "@/pages/SignUpPage";

export const Route = createFileRoute("/sign-up/$")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Create account — Beta AIVI" },
      { name: "description", content: "Create your Beta AIVI account and start measuring AI initiative value." },
      { property: "og:title", content: "Create account — Beta AIVI" },
      { property: "og:description", content: "Create your Beta AIVI account and start measuring AI initiative value." },
    ],
  }),
  component: Page,
});
