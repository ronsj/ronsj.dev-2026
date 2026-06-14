import { AboutSection } from '@/components/about-section'
import { ExperienceSection } from '@/components/experience-section'
import { FooterSection } from '@/components/footer-section'
import { HeroSection } from '@/components/hero-section'
import { ProjectsSection } from '@/components/projects-section'
import { SiteHeader } from '@/components/site-header'
import { SkillsSection } from '@/components/skills-section'

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <FooterSection />
      </main>
    </>
  )
}
