"use client";

import { useEffect, useRef } from "react";

/**
 * A cyan ring that trails the pointer with soft easing and grows over
 * interactive elements. Desktop / fine-pointer only — the CSS hides it on
 * touch devices and under prefers-reduced-motion, and this effect bails out
 * early there too.
 */
export default function CursorRing() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const el = ref.current;
    if (!el) return;

    let targetX = -100;
    let targetY = -100;
    let x = -100;
    let y = -100;
    let scale = 1;
    let targetScale = 1;
    let hovering = false;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      el.classList.add("is-active");

      const target = e.target as Element | null;
      const interactive = target?.closest(
        "a, button, [role='button'], [data-cursor]"
      );
      const next = Boolean(interactive);
      if (next !== hovering) {
        hovering = next;
        targetScale = hovering ? 1.65 : 1;
        el.classList.toggle("is-hover", hovering);
      }
    };

    const onLeave = () => el.classList.remove("is-active");

    const loop = () => {
      x += (targetX - x) * 0.18;
      y += (targetY - y) * 0.18;
      scale += (targetScale - scale) * 0.18;
      el.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <div ref={ref} className="cursor-ring" aria-hidden="true" />;
}
