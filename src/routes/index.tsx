import { createFileRoute } from "@tanstack/react-router";
import LandingPage from "@/pages/LandingPage";

export const Route = createFileRoute("/")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Beta AIVI — AI Initiative Value Intelligence" },
      { name: "description", content: "Prove the value of every AI initiative: portfolio ROI, governance, financial realization and explainable value intelligence." },
      { property: "og:title", content: "Beta AIVI — AI Initiative Value Intelligence" },
      { property: "og:description", content: "Prove the value of every AI initiative: portfolio ROI, governance, financial realization and explainable value intelligence." },
    ],
  }),
  component: LandingPage,
});
