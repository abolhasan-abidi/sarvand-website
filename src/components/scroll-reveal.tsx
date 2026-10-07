"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("scroll-reveal-enabled");

    const targets = [
      "main section :is(h1, h2, h3, p, li, a, strong, small)",
      "main section .about-feature",
      "main section .about-value-number",
      "body > footer .footer-brand",
      "body > footer .footer-copyright",
      "body > footer .footer-social-icon",
    ].join(", ");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) return;

    let observer: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("scroll-reveal-visible");
            observer?.unobserve(entry.target);
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -48px 0px" },
      );
    }

    const registered = new WeakSet<HTMLElement>();
    const groupIndexes = new WeakMap<Element, number>();
    const register = (element: Element) => {
      if (!(element instanceof HTMLElement) || registered.has(element)) return;
      registered.add(element);
      element.classList.add("scroll-reveal");
      const group = element.closest("section, footer") ?? element;
      const index = groupIndexes.get(group) ?? 0;
      groupIndexes.set(group, index + 1);
      element.style.setProperty("--scroll-reveal-delay", `${Math.min(index * 80, 400)}ms`);
      if (observer) observer.observe(element);
      else element.classList.add("scroll-reveal-visible");
    };

    const registerTree = (node: Node) => {
      if (!(node instanceof Element)) return;
      if (node.matches(targets)) register(node);
      node.querySelectorAll<HTMLElement>(targets).forEach(register);
    };

    document.querySelectorAll<HTMLElement>(targets).forEach(register);
    const mutations = new MutationObserver((records) => {
      records.forEach((record) => record.addedNodes.forEach(registerTree));
    });
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer?.disconnect();
      mutations.disconnect();
    };
  }, []);

  return null;
}
