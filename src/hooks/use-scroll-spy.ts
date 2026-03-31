"use client";

import { useEffect, useState } from "react";

export function useScrollSpy(ids: string[], rootId?: string) {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    const rootEl = rootId ? document.getElementById(rootId) : null;
    // Only use the container as root if it actually has its own scroll (desktop).
    // On mobile the container flows naturally and the window scrolls instead.
    const root =
      rootEl && rootEl.scrollHeight > rootEl.clientHeight ? rootEl : null;
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(id);
          }
        },
        { root, rootMargin: "-30% 0px -65% 0px" },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => { obs.disconnect(); });
  }, [ids, rootId]);

  return activeId;
}
