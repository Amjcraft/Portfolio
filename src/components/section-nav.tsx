"use client";

import { useEffect, useState } from "react";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { Button, cn } from "mighty-ui";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

// Stable reference — prevents useScrollSpy's effect from re-running every render
const SECTION_IDS = NAV_ITEMS.map((n) => n.id);

function scrollToSection(id: string) {
  const container = document.getElementById("content-wrapper");
  const target = document.getElementById(id);
  if (!target) return;

  if (container && container.scrollHeight > container.clientHeight) {
    const top =
      target.getBoundingClientRect().top -
      container.getBoundingClientRect().top +
      container.scrollTop;
    container.scrollTo({ top, behavior: "smooth" });
  } else {
    target.scrollIntoView({ behavior: "smooth" });
  }
}

export function SectionNav() {
  // Desktop scrolls inside content-wrapper; mobile scrolls the window
  const activeSectionDesktop = useScrollSpy(SECTION_IDS, "content-wrapper");
  const activeSectionMobile = useScrollSpy(SECTION_IDS);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 0);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Mobile: fixed top bar */}
      <nav
        aria-label="On-page sections"
        className={cn(
          "fixed top-0 left-0 z-10 flex items-center justify-center gap-1 border-b bg-background/80 backdrop-blur py-2 transition-shadow w-full lg:hidden",
          scrolled && "shadow-md",
        )}
      >
        {NAV_ITEMS.map(({ id, label }) => (
          <Button
            key={id}
            variant={activeSectionMobile === id ? "secondary" : "ghost"}
            size="sm"
            onClick={() => scrollToSection(id)}
          >
            {label}
          </Button>
        ))}
      </nav>

      {/* Desktop: vertical line-indicator nav (rendered inside sidebar) */}
      <nav
        aria-label="On-page sections"
        className="hidden lg:flex lg:flex-col lg:gap-5"
      >
        {NAV_ITEMS.map(({ id, label }) => {
          const isActive = activeSectionDesktop === id;
          return (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="group flex items-center gap-4 cursor-pointer"
            >
              <span
                className={cn(
                  "h-px transition-all duration-300",
                  isActive
                    ? "w-12 bg-card-foreground"
                    : "w-6 bg-muted-foreground group-hover:w-10 group-hover:bg-foreground",
                )}
              />
              <span
                className={cn(
                  "text-xs font-semibold uppercase tracking-widest transition-colors",
                  isActive
                    ? "text-card-foreground"
                    : "text-muted-foreground group-hover:text-foreground",
                )}
              >
                {label}
              </span>
            </button>
          );
        })}
      </nav>
    </>
  );
}
