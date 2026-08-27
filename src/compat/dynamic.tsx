import { Suspense, lazy, type ComponentType, type ReactNode } from "react";

type DynamicOptions = { ssr?: boolean; loading?: () => ReactNode };

/**
 * Compatibility shim for the previous framework's `next/dynamic`, so existing
 * lazy-loaded dashboard sections keep their original code-splitting behaviour.
 */
export default function dynamic<P extends object>(
  loader: () => Promise<{ default: ComponentType<P> } | ComponentType<P>>,
  options: DynamicOptions = {},
) {
  const Lazy = lazy(async () => {
    const mod = await loader();
    return "default" in (mod as { default?: unknown })
      ? (mod as { default: ComponentType<P> })
      : { default: mod as ComponentType<P> };
  });

  return function DynamicComponent(props: P) {
    return (
      <Suspense fallback={options.loading ? options.loading() : null}>
        <Lazy {...props} />
      </Suspense>
    );
  };
}
