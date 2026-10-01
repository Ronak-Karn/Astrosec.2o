"use client";

import { useEffect } from "react";

/**
 * Global scroll-reveal: adds `.is-visible` to `[data-reveal]` elements the
 * first time they enter the viewport. A MutationObserver picks up elements
 * added later by client-side navigation. Elements are revealed immediately
 * if they are already on screen, and reduced-motion users skip the effect
 * entirely (handled in CSS).
 */
export default function RevealObserver() {
  useEffect(() => {
    const seen = new WeakSet<Element>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const observe = (root: Element | Document) => {
      const nodes =
        root instanceof Element
          ? [root, ...root.querySelectorAll<HTMLElement>("[data-reveal]")]
          : Array.from(
              root.querySelectorAll<HTMLElement>("[data-reveal]")
            );
      for (const node of nodes) {
        if (node.hasAttribute("data-reveal") && !seen.has(node)) {
          seen.add(node);
          observer.observe(node);
        }
      }
    };

    observe(document);

    const mutation = new MutationObserver((records) => {
      for (const record of records) {
        for (const node of record.addedNodes) {
          if (node.nodeType === Node.ELEMENT_NODE) {
            observe(node as Element);
          }
        }
      }
    });

    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutation.disconnect();
      observer.disconnect();
    };
  }, []);

  return null;
}
