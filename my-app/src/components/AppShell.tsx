'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import CubesGridBackground from '@/components/ui/CubesGridBackground';
import FloatingDock from '@/components/ui/FloatingDock';
import HomeSection from '@/components/sections/HomeSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';
import { ArrowUpRight, Compass, LayoutGrid } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

const SECTIONS = ['home', 'about', 'skills', 'projects', 'experience', 'services', 'contact'] as const;
type SectionId = typeof SECTIONS[number];

const SECTION_TITLES: Record<SectionId, string> = {
  home: 'Home • Overview',
  about: 'About • Narrative & Origin',
  skills: 'Skills • Tech Ecosystem',
  projects: 'Projects • Platforms & Systems',
  experience: 'Experience • Chronology',
  services: 'Services • Full-Stack Solutions',
  contact: 'Contact • Direct Line',
};

export default function AppShell() {
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [direction, setDirection] = useState<number>(1);
  const [isScrollMode, setIsScrollMode] = useState<boolean>(false);

  // Sync with browser URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as SectionId;
      if (SECTIONS.includes(hash)) {
        setActiveSection(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = useCallback((newSection: string) => {
    const target = newSection as SectionId;
    if (!SECTIONS.includes(target)) return;

    const currentIndex = SECTIONS.indexOf(activeSection);
    const nextIndex = SECTIONS.indexOf(target);
    setDirection(nextIndex >= currentIndex ? 1 : -1);
    setActiveSection(target);
    window.history.pushState(null, '', `#${target}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

  // Framer Motion animated page transitions
  const transitionVariants = {
    initial: (dir: number) => ({
      opacity: 0,
      y: dir > 0 ? 24 : -24,
      scale: 0.99,
    }),
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
    exit: (dir: number) => ({
      opacity: 0,
      y: dir > 0 ? -24 : 24,
      scale: 0.99,
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  return (
    <div className="relative min-h-screen bg-[#f8fafc] dark:bg-[#050816] text-[#0f172a] dark:text-[#F1F5F9] selection:bg-cyan-500/30 selection:text-slate-900 dark:selection:text-white flex flex-col justify-between overflow-x-hidden transition-colors duration-300">
      {/* 1. PERSISTENT ANIMATED CUBES GRID BACKGROUND */}
      <CubesGridBackground />

      {/* 2. PERSISTENT TOP APPLICATION HEADER */}
      <header className="sticky top-0 left-0 right-0 z-40 bg-[#f8fafc]/85 dark:bg-[#050816]/85 backdrop-blur-md border-b border-slate-200/80 dark:border-cyan-500/15 py-3 px-4 sm:px-6 transition-colors duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo & Active Section Indicator */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={() => navigateTo('home')}
              className="flex items-center gap-2.5 group cursor-pointer"
              aria-label="Adharsh S Home"
            >
              <div className="w-8 h-8 rounded-xl bg-cyan-100/70 dark:bg-cyan-950/80 border border-cyan-300/60 dark:border-cyan-500/30 flex items-center justify-center font-display font-black text-xs text-cyan-800 dark:text-cyan-300 group-hover:border-cyan-500 dark:group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all">
                AS
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-bold font-display text-slate-800 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                  {PERSONAL_INFO.name}
                </span>
                <span className="text-[10px] font-mono text-cyan-700 dark:text-cyan-400/80 font-medium">
                  {SECTION_TITLES[activeSection]}
                </span>
              </div>
            </button>
          </div>

          {/* Quick Actions (Theme Toggle, View Mode Switcher & Let's Talk CTA) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle Button (Light & Dark Mode) */}
            <ThemeToggle />

            {/* View Mode Toggle: Cinematic App Mode vs Full Scroll Mode */}
            <button
              type="button"
              onClick={() => setIsScrollMode(!isScrollMode)}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 text-[11px] font-mono text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 hover:border-cyan-400 dark:hover:border-cyan-500/40 transition-all cursor-pointer shadow-xs"
              title="Toggle between cinematic interactive app mode and full scroll mode"
            >
              {isScrollMode ? (
                <>
                  <LayoutGrid className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                  <span>Cinematic View</span>
                </>
              ) : (
                <>
                  <Compass className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                  <span>Full Scroll View</span>
                </>
              )}
            </button>

            {/* Let's Talk CTA */}
            <button
              onClick={() => navigateTo('contact')}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)] active:scale-95 cursor-pointer"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* 3. PERSISTENT MAIN CONTAINER WITH ANIMATED SECTION SWITCHING */}
      <main className="relative z-10 flex-1 w-full pb-28 pt-2">
        {isScrollMode ? (
          /* Continuous Scroll Mode across all sections */
          <div className="space-y-16">
            <section id="home"><HomeSection onNavigate={navigateTo} /></section>
            <section id="about"><AboutSection onNavigate={navigateTo} /></section>
            <section id="skills"><SkillsSection /></section>
            <section id="projects"><ProjectsSection /></section>
            <section id="experience"><ExperienceSection /></section>
            <section id="services"><ServicesSection onNavigate={navigateTo} /></section>
            <section id="contact"><ContactSection /></section>
          </div>
        ) : (
          /* Cinematic Single-Page Application Shell */
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeSection}
              custom={direction}
              variants={transitionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full"
            >
              {activeSection === 'home' && <HomeSection onNavigate={navigateTo} />}
              {activeSection === 'about' && <AboutSection onNavigate={navigateTo} />}
              {activeSection === 'skills' && <SkillsSection />}
              {activeSection === 'projects' && <ProjectsSection />}
              {activeSection === 'experience' && <ExperienceSection />}
              {activeSection === 'services' && <ServicesSection onNavigate={navigateTo} />}
              {activeSection === 'contact' && <ContactSection />}
            </motion.div>
          </AnimatePresence>
        )}
      </main>

      {/* 4. PERSISTENT FLOATING NAVIGATION DOCK */}
      <FloatingDock
        activeSection={activeSection}
        onSelectSection={navigateTo}
      />

      {/* 5. FOOTER */}
      <Footer />
    </div>
  );
}
