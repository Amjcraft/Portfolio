"use client";

import { useEffect, useState } from "react";

export function useScrollSpy(ids: string[], rootId?: string) {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    function update() {
      const containerEl = rootId ? document.getElementById(rootId) : null;

      // If scrolled to the bottom, the last section is always active.
      const atBottom = containerEl
        ? containerEl.scrollTop + containerEl.clientHeight >= containerEl.scrollHeight - 8
        : window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 8;

      if (atBottom) {
        setActiveId(ids[ids.length - 1] ?? ids[0]);
        return;
      }

      // Threshold: 20% down from the top of the scroll container (or viewport).
      const threshold = containerEl
        ? containerEl.getBoundingClientRect().top + containerEl.clientHeight * 0.2
        : window.innerHeight * 0.2;

      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= threshold) {
          current = id;
        }
      }
      setActiveId(current ?? ids[0]);
    }

    update();

    const containerEl = rootId ? document.getElementById(rootId) : null;
    const scrollTarget: EventTarget = containerEl ?? window;
    scrollTarget.addEventListener("scroll", update, { passive: true });
    return () => scrollTarget.removeEventListener("scroll", update);
  }, [ids, rootId]);

  return activeId;
}
