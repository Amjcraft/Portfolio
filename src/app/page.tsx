import { Sidebar } from "@/components/sidebar";
import { AboutSection } from "@/components/about-section";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectsSection } from "@/components/projects-section";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        {/* Left: sticky sidebar */}
        <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[45%] lg:flex-col lg:justify-between lg:py-24">
          <Sidebar />
        </header>

        {/* Right: scrollable content */}
        <main className="pt-12 lg:w-[55%] lg:py-24">
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />

          <footer className="pb-16 lg:pb-24">
            <p className="text-xs leading-normal text-muted-foreground">
              Designed in{" "}
              <a
                href="https://www.figma.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground transition-colors hover:text-primary"
              >
                Figma
              </a>{" "}
              and coded in{" "}
              <a
                href="https://code.visualstudio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground transition-colors hover:text-primary"
              >
                VS Code
              </a>
              . Built with{" "}
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground transition-colors hover:text-primary"
              >
                Next.js
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="font-medium text-foreground transition-colors hover:text-primary"
              >
                mighty-ui
              </a>
              , deployed on{" "}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground transition-colors hover:text-primary"
              >
                Vercel
              </a>
              .
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
