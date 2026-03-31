"use client";

import { ArrowUpRight } from "lucide-react";
import { Badge, Typography } from "mighty-ui";

const PROJECTS = [
  {
    title: "Blackbird",
    href: "https://ambassadorlabs.com",
    github: null,
    description:
      "SaaS API platform built from scratch at Ambassador Labs. Greenfield React codebase with a small, tight team. Shaped the product from early flows through launch — including AI-assisted features that let developers generate and validate OpenAPI specs through a chat interface.",
    tech: ["React", "TypeScript", "OpenAPI", "AI/LLM", "SaaS"],
  },
  {
    title: "Mosaic Design System",
    href: "https://stoplight.io",
    github: null,
    description:
      "Component library and UI guidelines used across multiple product teams at Stoplight. Owned the system end-to-end — architecture, contribution standards, versioning, and cross-team adoption. The kind of work that compounds: done right, it makes every team that touches it faster.",
    tech: [
      "React",
      "TypeScript",
      "Storybook",
      "Design Tokens",
      "Accessibility",
    ],
  },
  {
    title: "API Spec AI Integration",
    href: null,
    github: null,
    description:
      "Two AI-driven features shipped at Ambassador Labs: a chatbot interface for generating and refining OpenAPI specs, and a codebase analyzer that inferred specs from existing service code. At the time it felt like a feature. In retrospect, a preview of where the whole space is going.",
    tech: ["React", "TypeScript", "OpenAPI", "LLM Integration", "Developer UX"],
  },
];

export function ProjectsSection() {
  return (
    <section id='projects' className=' scroll-mt-16 lg:scroll-mt-24'>
      <Typography variant={"h2"}>Projects</Typography>
      {/* Mobile section heading */}
      <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/80 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only'>
        <h2 className='text-xs font-bold uppercase tracking-widest text-card-foreground'>
          Projects
        </h2>
      </div>

      <div className='flex flex-col gap-1'>
        {PROJECTS.map((project, i) => (
          <div
            key={i}
            className='group relative rounded-md px-4 py-4 transition-all hover:bg-card hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.08)] hover:drop-shadow-lg'
          >
            <div className='flex items-start justify-between gap-4'>
              <h3 className='text-sm font-medium leading-snug text-card-foreground transition-colors group-hover:text-primary'>
                {project.href ? (
                  <a
                    href={project.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-1'
                  >
                    {project.title}
                    <ArrowUpRight className='size-3.5 shrink-0 translate-y-px opacity-0 transition-all group-hover:opacity-100' />
                  </a>
                ) : (
                  project.title
                )}
              </h3>
            </div>
            <p className='mt-2 text-sm leading-normal'>{project.description}</p>
            <ul
              className='mt-4 flex flex-wrap gap-2'
              aria-label='Technologies used'
            >
              {project.tech.map((t) => (
                <li key={t}>
                  <Badge variant='secondary'>{t}</Badge>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
