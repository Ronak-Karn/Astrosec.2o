"use client";

import { useEffect } from "react";

/**
 * Scroll blur reveal: adds `.is-sharp` to `[data-blur]` elements the first
 * time they enter the viewport, so sections come from soft to sharp once.
 * A MutationObserver picks up elements added by client-side navigation.
 * Reduced-motion users skip it entirely (handled in CSS).
 */
export default function BlurObserver() {
  useEffect(() => {
    const seen = new WeakSet<Element>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-sharp");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const observe = (root: Element | Document) => {
      const nodes =
        root instanceof Element
          ? [root, ...root.querySelectorAll<HTMLElement>("[data-blur]")]
          : Array.from(root.querySelectorAll<HTMLElement>("[data-blur]"));
      for (const node of nodes) {
        if (node.hasAttribute("data-blur") && !seen.has(node)) {
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
