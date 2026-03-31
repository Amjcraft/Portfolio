"use client";

import { GitHubIcon, LinkedInIcon, TwitterXIcon } from "@/components/icons";

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
  return (
    <div className='flex h-full flex-col justify-between text-center lg:text-left'>
      <div>
        {/* Identity */}
        <div>
          <h1 className='text-5xl font-bold tracking-tight text-card-foreground'>
            Aaron Jones
          </h1>
          <h2 className='mt-3 text-xl font-medium tracking-tight text-card-foreground'>
            Senior Frontend Engineer
          </h2>
          <p className='mt-4 max-w-md lg:max-w-xs m-auto lg:m-0 text-sm leading-normal text-center lg:text-left'>
            I&apos;ve spent the last decade building tools for developers. Now
            those tools need to work for AI too.
          </p>
        </div>
      </div>

      {/* Social links */}
      <div className='flex items-center justify-center gap-5 mt-8 lg:mt-0 lg:justify-start'>
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
  );
}
