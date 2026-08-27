import { createFileRoute, Outlet } from "@tanstack/react-router";
import { useAuth } from "@clerk/react";
import { LoadingState, WorkspaceRouter } from "@/components/ui";

export const Route = createFileRoute("/business")({
  ssr: false,
  component: BusinessLayout,
});

function BusinessLayout() {
  const { isLoaded } = useAuth();

  if (!isLoaded) {
    return <LoadingState message="Loading Workspace..." />;
  }

  return (
    <>
      <WorkspaceRouter />
      <Outlet />
    </>
  );
}
