"use client";

import { useEffect, useRef } from "react";

/**
 * Very low-opacity radial glow that tracks the pointer, sitting behind all
 * content (z-index: -1) so it reads as an interactive background layer.
 * The orb is moved with transform (GPU) rather than repainting a gradient.
 * Hidden on touch devices and under prefers-reduced-motion via CSS; the
 * listener is skipped there too.
 */
export default function PointerGlow() {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const orb = orbRef.current;
    if (!orb) return;

    let raf = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;

    const paint = () => {
      orb.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      raf = 0;
    };

    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (raf) return;
      raf = requestAnimationFrame(paint);
    };

    window.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="pointer-glow" aria-hidden="true">
      <div ref={orbRef} />
    </div>
  );
}
