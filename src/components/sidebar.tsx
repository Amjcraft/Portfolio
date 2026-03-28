"use client";

import Link from "next/link";
import { cn } from "mighty-ui";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { GitHubIcon, LinkedInIcon, TwitterXIcon } from "@/components/icons";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

const SOCIAL_LINKS = [
  {
    href: "https://github.com/amjcraft",
    label: "GitHub",
    icon: GitHubIcon,
  },
  {
    href: "https://linkedin.com",
    label: "LinkedIn",
    icon: LinkedInIcon,
  },
  {
    href: "https://twitter.com",
    label: "Twitter / X",
    icon: TwitterXIcon,
  },
];

export function Sidebar() {
  const activeSection = useScrollSpy(["about", "experience", "projects"]);

  return (
    <div className="flex h-full flex-col justify-between">
      <div>
        {/* Identity */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-card-foreground">
            Aaron Jones
          </h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-card-foreground">
            Senior Frontend Engineer
          </h2>
          <p className="mt-4 max-w-xs text-sm leading-normal">
            I&apos;ve spent the last decade building tools for developers. Now
            those tools need to work for AI too.
          </p>
        </div>

        {/* Nav */}
        <nav className="mt-16 hidden lg:block" aria-label="On-page sections">
          <ul className="flex flex-col">
            {NAV_ITEMS.map(({ id, label }) => {
              const isActive = activeSection === id;
              return (
                <li key={id}>
                  <Link
                    href={`#${id}`}
                    className={cn(
                      "group flex items-center gap-4 py-3 transition-colors",
                      isActive
                        ? "text-card-foreground"
                        : "text-foreground hover:text-card-foreground",
                    )}
                  >
                    <span
                      className={cn(
                        "inline-block h-px bg-current transition-all duration-300",
                        isActive ? "w-16" : "w-8 group-hover:w-16",
                      )}
                    />
                    <span
                      className={cn(
                        "text-xs font-bold uppercase tracking-widest transition-colors",
                        isActive ? "text-card-foreground" : "",
                      )}
                    >
                      {label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Social links */}
      <div className="flex items-center gap-5 mt-8 lg:mt-0">
        {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-foreground transition-colors hover:text-card-foreground"
          >
            <Icon className="size-5" />
          </a>
        ))}
      </div>
    </div>
  );
}
