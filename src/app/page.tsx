import { Sidebar } from "@/components/sidebar";
import { SectionNav } from "@/components/section-nav";
import { AboutSection } from "@/components/about-section";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectsSection } from "@/components/projects-section";

export default function Home() {
  return (
    <div className='mx-auto min-h-screen max-w-screen-2xl px-6 pt-21 pb-8 md:px-12 md:py-20 lg:px-24 lg:py-0 '>
      <div className='lg:flex lg:justify-between lg:gap-4'>
        {/* Left: sticky sidebar */}
        <header className='lg:top-0 lg:flex lg:h-screen lg:w-[35%] lg:flex-col lg:justify-between lg:py-24'>
          <Sidebar />
        </header>

        {/* Right: scrollable content */}
        <main className='pt-12 lg:w-[55%] lg:py-24 lg:h-screen relative'>
          <SectionNav />
          <div
            id='content-wrapper'
            className='content-wrapper p-2 my-6 pr-5 lg:relative lg:overflow-y-auto lg:h-full'
          >
            <AboutSection />
            <ExperienceSection />
            <ProjectsSection />
            <div className='pb-10' aria-hidden='true' />
          </div>
        </main>
      </div>
    </div>
  );
}
