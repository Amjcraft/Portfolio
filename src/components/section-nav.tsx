"use client";

import { Button } from "mighty-ui";
import { useScrollSpy } from "@/hooks/use-scroll-spy";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

function scrollToSection(id: string) {
  const container = document.getElementById("content-wrapper");
  const target = document.getElementById(id);
  if (!container || !target) return;
  const top =
    target.getBoundingClientRect().top -
    container.getBoundingClientRect().top +
    container.scrollTop;
  container.scrollTo({ top, behavior: "smooth" });
}

export function SectionNav() {
  const activeSection = useScrollSpy(
    ["about", "experience", "projects"],
    "content-wrapper",
  );

  return (
    <nav aria-label='On-page sections' className='flex items-center gap-1'>
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
