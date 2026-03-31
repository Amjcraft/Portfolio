"use client";

import { ArrowUpRight } from "lucide-react";
import { Badge, Typography } from "mighty-ui";

const EXPERIENCE = [
  {
    dates: "Nov 2023 — Jul 2025",
    title: "Senior Frontend Engineer",
    company: "Ambassador Labs",
    href: "https://ambassadorlabs.com",
    description:
      "Frontend technical lead on a 7-person team building Blackbird, a new SaaS API development platform for developers. Greenfield codebase, close product partnership from day one — I wasn't just executing designs, I was in the room helping figure out what the flows should be, iterating with low-fi mocks and Figma and folding in real usage feedback to shape the final UX. Integrated AI/LLM workflows directly into the product: a chatbot that helped users generate and refine OpenAPI specs, and a codebase analyzer that inferred specs from existing services. Also set up the full frontend testing approach with Playwright and Jest, which made releases noticeably more predictable.",
    skills: ["React", "TypeScript", "OpenAPI", "AI/LLM", "Playwright", "Figma"],
  },
  {
    dates: "Jan 2020 — Jul 2023",
    title: "Senior Frontend Engineer",
    company: "Stoplight",
    href: "https://stoplight.io",
    description:
      "Senior engineer in a 30+ person product org, working across the Stoplight platform — modernizing the core admin app and building complex, data-heavy interfaces for the Studio API design tool. Served as the main maintainer of the Mosaic design system: the component library and guidelines that multiple product teams relied on for a consistent, predictable UI. Improved developer experience by building a shared component repository and rolling out Chromatic, making it easier to discover, reuse, and test components across teams.",
    skills: [
      "React",
      "TypeScript",
      "Storybook",
      "Chromatic",
      "Design Systems",
      "Accessibility",
    ],
  },
  {
    dates: "Dec 2016 — Nov 2020",
    title: "Senior Frontend Developer",
    company: "Kibo Commerce",
    href: "https://kibocommerce.com",
    description:
      "Worked on a large-scale SaaS platform serving major retail clients. The big project was migrating from Ext JS to React and Redux — moving a mature, client-facing platform to a modern stack without disrupting the teams and businesses depending on it. That kind of work builds a certain discipline: you get comfortable with ambiguity, learn to make pragmatic calls, and develop a healthy respect for what came before you. Also spent a lot of time mentoring through this period — code reviews, pairing, weighing in on sprint planning to keep solutions pragmatic.",
    skills: [
      "React",
      "Redux",
      "Ext JS",
      "Backbone.js",
      "ASP.NET",
      "E-commerce",
    ],
  },
  {
    dates: "Oct 2015 — Dec 2016",
    title: "Frontend Developer",
    company: "Volusion",
    href: "https://volusion.com",
    description:
      "Built standalone web applications on the Integrations team, extending platform functionality by connecting internal systems with third-party services. Worked across AngularJS, React/Redux, ASP.NET MVC, Express, and Node — a broad stack that required context-switching quickly and shipping reliably.",
    skills: ["React", "AngularJS", "Node.js", "ASP.NET MVC", "E-commerce"],
  },
  {
    dates: "Aug 2010 — Aug 2015",
    title: "Web Developer",
    company: "Texas A&M Engineering Extension Service",
    href: "https://teex.org",
    description:
      "Started here as a student developer, eventually moved into a full-time role as Web Communication Specialist. Built and maintained the agency's SharePoint sites and a .NET-based class scheduling application. The users were agency staff, not developers — real people trying to get a job done, with no patience for software that got in the way. That context shaped how I think about UX more than anything else: when your users aren't technical, the interface has to do more of the work.",
    skills: ["ASP.NET", "SharePoint", "jQuery", "SASS", "SQL"],
  },
  {
    dates: "2009 — 2011",
    title: "Freelance Web Developer",
    company: "Independent",
    href: null,
    description:
      "Built 14+ websites for small businesses as part of a two-person team — WordPress, static sites, end-to-end. Client calls, design, development, deployment. The kind of experience that gives you range you don't fully appreciate until later. Somewhere in there I figured out that I liked this — not just the code, but the whole act of making something that works and feels right.",
    skills: ["WordPress", "HTML", "CSS", "JavaScript"],
  },
];

export function ExperienceSection() {
  return (
    <section
      id='experience'
      className='mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24'
    >
      <Typography variant={"h2"}>Experience</Typography>
      {/* Mobile section heading */}
      <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/80 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only'>
        <h2 className='text-xs font-bold uppercase tracking-widest text-card-foreground'>
          Experience
        </h2>
      </div>

      <div className='flex flex-col gap-1'>
        {EXPERIENCE.map((job, i) => {
          const Wrapper = job.href ? "a" : "div";
          const wrapperProps = job.href
            ? { href: job.href, target: "_blank", rel: "noopener noreferrer" }
            : {};

          return (
            <Wrapper
              key={i}
              {...(wrapperProps as object)}
              className='group relative grid grid-cols-8 gap-4 rounded-md px-4 py-4 transition-all hover:bg-card hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.08)] hover:drop-shadow-lg'
            >
              <div className='col-span-2 pt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground'>
                {job.dates}
              </div>
              <div className='col-span-6'>
                <h3 className='flex items-center gap-1 text-sm font-medium leading-snug text-card-foreground transition-colors group-hover:text-primary'>
                  {job.title} · {job.company}
                  {job.href && (
                    <ArrowUpRight className='size-3.5 shrink-0 translate-y-px opacity-0 transition-all group-hover:opacity-100' />
                  )}
                </h3>
                <p className='mt-2 text-sm leading-normal'>{job.description}</p>
                <ul
                  className='mt-4 flex flex-wrap gap-2'
                  aria-label='Technologies used'
                >
                  {job.skills.map((skill) => (
                    <li key={skill}>
                      <Badge variant='secondary'>{skill}</Badge>
                    </li>
                  ))}
                </ul>
              </div>
            </Wrapper>
          );
        })}
      </div>

      <div className='mt-10 px-4'>
        <a
          href='#'
          className='group inline-flex items-center gap-1.5 text-sm font-semibold text-card-foreground transition-colors hover:text-primary'
        >
          View Full Résumé
          <ArrowUpRight className='size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
        </a>
      </div>
    </section>
  );
}
