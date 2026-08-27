import { useNavigate, useRouter } from "@tanstack/react-router";
import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";

type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  prefetch?: boolean;
  replace?: boolean;
  scroll?: boolean;
  children?: ReactNode;
};

/**
 * Drop-in replacement for the previous framework's <Link href="..."> component.
 * Keeps every existing call site untouched while routing through TanStack Router.
 */
export default function Link({
  href,
  replace,
  prefetch: _prefetch,
  scroll: _scroll,
  onClick,
  children,
  ...rest
}: LinkProps) {
  const navigate = useNavigate();
  const router = useRouter();

  const isExternal =
    /^([a-z]+:)?\/\//i.test(href) || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("#");

  function handlePreload() {
    if (isExternal) return;
    void router.preloadRoute({ href }).catch(() => {});
  }

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);
    if (event.defaultPrevented) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    if (rest.target && rest.target !== "_self") return;
    if (/^([a-z]+:)?\/\//i.test(href) || href.startsWith("mailto:") || href.startsWith("tel:")) return;
    event.preventDefault();
    void navigate({ href, replace });
  }

  return (
    <a href={href} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}

export { Link };
