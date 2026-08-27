import { createFileRoute } from "@tanstack/react-router";
import InitiativeDetailPage from "@/pages/BusinessInitiativeDetail";

export const Route = createFileRoute("/business/initiatives/$id")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Initiative detail — Beta AIVI" },
      { name: "description", content: "Full value case, costs, benefits and lifecycle for a single AI initiative." },
      { property: "og:title", content: "Initiative detail — Beta AIVI" },
      { property: "og:description", content: "Full value case, costs, benefits and lifecycle for a single AI initiative." },
    ],
  }),
  component: InitiativeDetailRoute,
});

function InitiativeDetailRoute() {
  const { id } = Route.useParams();
  return <InitiativeDetailPage key={id} params={{ id }} />;
}
