import type { ReactNode } from "react";
import { ViewTransition } from "react";

/**
 * Smooth route transition: the old page blurs out, the new page focuses in.
 * Must be the root element of every page (a DOM node above it would disable
 * exit/enter animations). Layout chrome (header/footer) stays outside so it
 * crossfades in place instead of moving.
 */
export default function PageTransition({ children }: { children: ReactNode }) {
  return (
    <ViewTransition enter="page-in" exit="page-out" default="none">
      {children}
    </ViewTransition>
  );
}
