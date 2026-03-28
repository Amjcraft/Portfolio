export function AboutSection() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24"
    >
      {/* Mobile section heading — sticky while in viewport */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/80 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only">
        <h2 className="text-xs font-bold uppercase tracking-widest text-card-foreground">
          About
        </h2>
      </div>

      <div className="space-y-4 text-sm leading-relaxed">
        <p>
          Most of my career has been spent building tools for developers — API
          platforms, design systems, the kind of software other engineers live
          inside all day. Developers aren&apos;t a forgiving audience, which
          means the work has always had to be both technically solid and
          genuinely usable. That combination is what kept me coming back.
        </p>
        <p>
          The job is bigger now. Frontend used to mean translating designs into
          components. It still does, but the scope has expanded. The products I
          want to build sit at the intersection of developer tooling,
          AI-driven workflows, and UX that makes complex systems feel
          manageable. I&apos;ve been working toward that overlap for a while —
          building AI integrations into API platforms, owning design systems
          across product teams, partnering closely with product to shape what
          gets built and why.
        </p>
        <p>
          I&apos;m a frontend engineer who gets pulled toward the product side.
          Not just how something is built, but what it does, why it works, and
          whether the person using it can actually get something done. That
          instinct comes from years of building for real users with real
          constraints — from internal tooling at a research university to
          developer platforms serving teams at scale.
        </p>
      </div>
    </section>
  );
}
