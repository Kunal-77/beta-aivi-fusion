import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/business/initiatives")({
  ssr: false,
  component: () => <Outlet />,
});
