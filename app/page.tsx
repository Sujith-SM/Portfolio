import { AboutSection } from "@/components/sections/about";
import { ExperienceSection } from "@/components/sections/experience";
import { HeroSection } from "@/components/sections/hero";
import { InteractiveEffects } from "@/components/interactive-effects";
import { ProjectsSection } from "@/components/sections/projects";
import { AchievementsSection } from "@/components/sections/research-achievements";
import { ResumeContactSection } from "@/components/sections/resume-contact";
import { SkillsSection } from "@/components/sections/skills";
import { SiteHeader } from "@/components/site-header";
import { SectionDivider } from "@/components/section-divider";

export default function Home() {
  return (
    <main>
      <InteractiveEffects />
      <SiteHeader />
      <HeroSection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <SkillsSection />
      <SectionDivider />
      <ExperienceSection />
      <SectionDivider />
      <ProjectsSection />
      <SectionDivider />
      <AchievementsSection />
      <SectionDivider />
      <ResumeContactSection />
    </main>
  );
}
