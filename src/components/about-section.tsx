"use client";

import { Badge } from "mighty-ui";
import { SectionHeading } from "@/components/section-heading";

const CORE_SKILLS = [
  "UX Engineering",
  "Design Systems",
  "Developer Tooling",
  "AI/LLM",
  "Product Engineering",
  "Frontend Architecture",
];

export function AboutSection() {
  return (
    <section id='about' className='mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24'>
      <SectionHeading>About</SectionHeading>
      <div className='space-y-4 text-sm leading-relaxed'>
        <p>
          I've spent the last decade building products on the web. E-commerce,
          SaaS platforms, design systems, and developer tooling for internal
          teams and external users. A lot of different products, but I always
          with the same goal in mind of crafting intuitive interfaces for
          complex workflows and figuring out how to build them well.
        </p>
        <p>
          These days I'm most interested in how the frontend fits into AI-driven
          tools and workflows. Design systems, component architecture, the
          interfaces that sit on top of agents and LLMs. There's still a lot to
          figure out, and that's where I want to be working.
        </p>
      </div>
      <ul className='mt-6 flex flex-wrap gap-2' aria-label='Core skills'>
        {CORE_SKILLS.map((skill) => (
          <li key={skill}>
            <Badge variant='outline'>{skill}</Badge>
          </li>
        ))}
      </ul>
    </section>
  );
}
