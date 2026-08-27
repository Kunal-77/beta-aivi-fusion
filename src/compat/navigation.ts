import { useNavigate, useRouter as useTanstackRouter, useRouterState } from "@tanstack/react-router";
import { useMemo } from "react";

/**
 * Compatibility layer for the previous framework's `next/navigation` hooks so
 * every existing AIVI page/component keeps its original navigation logic.
 */
export function usePathname(): string {
  return useRouterState({ select: (s) => s.location.pathname });
}

export function useSearchParams(): URLSearchParams {
  const search = useRouterState({ select: (s) => s.location.searchStr });
  return useMemo(() => new URLSearchParams(search ?? ""), [search]);
}

export function useRouter() {
  const navigate = useNavigate();
  const router = useTanstackRouter();

  return useMemo(
    () => ({
      push: (href: string) => {
        void navigate({ href });
      },
      replace: (href: string) => {
        void navigate({ href, replace: true });
      },
      back: () => {
        router.history.back();
      },
      forward: () => {
        router.history.forward();
      },
      refresh: () => {
        void router.invalidate();
      },
      prefetch: (_href: string) => {},
    }),
    [navigate, router],
  );
}
