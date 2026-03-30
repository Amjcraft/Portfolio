"use client";

import { useEffect, useState } from "react";

export function useScrollSpy(ids: string[], rootId?: string) {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    const root = rootId ? document.getElementById(rootId) : null;
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

    return () => observers.forEach((obs) => obs.disconnect());
  }, [ids, rootId]);

  return activeId;
}
