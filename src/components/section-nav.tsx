"use client";

import { useEffect, useState } from "react";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { Button, cn } from "mighty-ui";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

function scrollToSection(id: string) {
  const container = document.getElementById("content-wrapper");
  const target = document.getElementById(id);
  if (!target) return;

  // On desktop the container has its own scroll; on mobile the window scrolls
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
  const activeSection = useScrollSpy(
    ["about", "experience", "projects"],
    "content-wrapper",
  );
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 0);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      aria-label='On-page sections'
      className={cn(
        "fixed top-0 z-10 flex justify-center items-center gap-1 border-b bg-background/80 backdrop-blur py-2 transition-shadow w-full",
        "lg:static lg:w-auto lg:justify-start lg:border-none lg:bg-transparent lg:backdrop-blur-none lg:py-0 lg:shadow-none",
        scrolled && "shadow-md lg:shadow-none",
      )}
    >
      {NAV_ITEMS.map(({ id, label }) => {
        const isActive = activeSection === id;
        return (
          <Button
            key={id}
            variant={isActive ? "secondary" : "ghost"}
            size='sm'
            onClick={() => scrollToSection(id)}
          >
            {label}
          </Button>
        );
      })}
    </nav>
  );
}
