import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/business/")({
  ssr: false,
  component: () => <Navigate to="/business/initiatives" replace />,
});
