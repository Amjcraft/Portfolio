"use client";

import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { SectionNav } from "@/components/section-nav";

const SOCIAL_LINKS = [
  {
    href: "https://github.com/amjcraft",
    label: "GitHub",
    icon: GitHubIcon,
  },
  {
    href: "https://linkedin.com/in/amjcraft",
    label: "LinkedIn",
    icon: LinkedInIcon,
  },
];

export function Sidebar() {
  return (
    <div className='flex h-full flex-col justify-between text-center lg:text-left'>
      {/* Identity + nav grouped at top */}
      <div>
        <h1 className='text-5xl font-bold tracking-tight text-card-foreground'>
          <span className='text-primary'>Aaron</span> Jones
        </h1>
        <h2 className='mt-3 text-xl font-medium tracking-tight text-card-foreground'>
          Senior Frontend Engineer
        </h2>
        <p className='mt-4 max-w-md lg:max-w-xs m-auto lg:m-0 text-sm leading-normal text-center lg:text-left'>
          I&apos;ve spent the last decade building tools for developers. Now
          those tools need to work for AI too.
        </p>
        <p className='mt-8 max-w-md lg:max-w-xs m-auto lg:mx-0 text-sm italic text-muted-foreground text-center lg:text-left'>
          &ldquo;Let&apos;s go exploring.&rdquo;
        </p>
        <div className='mt-32'>
          <SectionNav />
        </div>
      </div>

      {/* Social links */}
      <div>
        <div className='flex items-center justify-center gap-5 lg:justify-start'>
          {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={label}
              className='text-foreground transition-colors hover:text-card-foreground'
            >
              <Icon className='size-5' />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
