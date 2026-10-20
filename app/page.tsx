import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { OpenSource } from "@/components/open-source";
import { Projects } from "@/components/projects";
import { SiteShell } from "@/components/site-shell";
import { Skills } from "@/components/skills";
import { paletteItems, projectViews, statsUpdatedLabel } from "@/lib/projects";

export default function HomePage() {
  const projects = projectViews();
  const items = paletteItems(projects);

  return (
    <SiteShell items={items}>
      <main id="content">
        <Hero />
        <About />
        <Experience />
        <Projects projects={projects} statsLabel={statsUpdatedLabel()} />
        <Skills />
        <OpenSource />
        <Contact />
      </main>
      <Footer />
    </SiteShell>
  );
}
