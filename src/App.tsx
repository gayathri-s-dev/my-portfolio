import { useEffect, useState } from 'react';
import { MousePointer2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Preloader from './components/layout/Preloader';
import SiteHeader from './components/layout/SiteHeader';
import SiteFooter from './components/layout/SiteFooter';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import JourneySection from './components/sections/JourneySection';
import RecognitionSection from './components/sections/RecognitionSection';
import ResumeSection from './components/sections/ResumeSection';
import ContactSection from './components/sections/ContactSection';

gsap.registerPlugin(ScrollTrigger);

// The intro finishes first. Only then do the homepage hero animations begin.
const INTRO_DURATION_MS = 1800;

export default function App() {
  const [introComplete, setIntroComplete] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const timer = window.setTimeout(() => setIntroComplete(true), INTRO_DURATION_MS);
    const update = () => setScrollProgress(
      window.scrollY / Math.max(1, document.documentElement.scrollHeight - window.innerHeight),
    );

    window.addEventListener('scroll', update, { passive: true });
    update();

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
        gsap.to(el, {
          yPercent: -12,
          ease: 'none',
          scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: 1 },
        });
      });
    });

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('scroll', update);
      ctx.revert();
    };
  }, []);

  return (
    <>
      {!introComplete && <Preloader />}
      <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress})` }} />
      <SiteHeader />
      <main>
        <HeroSection introComplete={introComplete} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <JourneySection />
        <RecognitionSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <div className="cursor-hint"><MousePointer2 size={12} /> EXPLORE</div>
    </>
  );
}
