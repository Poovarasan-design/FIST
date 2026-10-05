import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useTheme } from './hooks/useTheme';
import { useScrollSpy } from './hooks/useScrollSpy';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { BackToTop } from './components/BackToTop';
import { Footer } from './components/Footer';
import { InteractiveCursorGlow } from './components/InteractiveCursorGlow';

// Storytelling Flow
import { Hero } from './sections/Hero';
import { AboutDepartment } from './sections/AboutDepartment';
import { Projects } from './sections/Projects';
import { Events } from './sections/Events';
import { TechEcosystem } from './sections/TechEcosystem';
import { StudentLeadership } from './sections/StudentLeadership';
import { FacultySection } from './sections/FacultySection';
import { AlumniSection } from './sections/AlumniSection';
import { Achievements } from './sections/Achievements';

const sectionIds = [
  'hero',
  'identity',
  'projects',
  'events',
  'technologies',
  'leadership',
  'faculty',
  'alumni',
  'achievements',
];

/**
 * Reusable Cinematic Scroll Reveal Wrapper.
 * Animates sections smoothly into view with subtle opacity and vertical depth as user scrolls.
 */
const CinematicSection: React.FC<{
  children: React.ReactNode;
  id?: string;
  className?: string;
}> = ({ children, id, className = '' }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      className={`relative ${className}`}
    >
      {children}
    </motion.section>
  );
};

export const App: React.FC = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const activeSection = useScrollSpy(sectionIds, 90);

  // Smooth cinematic scroll progress line
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#06070a] text-[#f8fafc] selection:bg-purple-600/30 selection:text-white font-sans relative antialiased">
      {/* 0. Ambient Interactive Cursor Glow */}
      <InteractiveCursorGlow />

      {/* 1. Cinematic Association Intro */}
      {!loadingComplete && (
        <LoadingScreen onComplete={() => setLoadingComplete(true)} />
      )}

      {/* 2. Top Precision Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 via-indigo-400 to-cyan-400 origin-left z-50 pointer-events-none"
        style={{ scaleX }}
      />

      {/* 3. Back to Top Utility */}
      <BackToTop />

      {/* 4. Minimal FIST Association Navbar */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
      />

      {/* 5. Connected Cinematic Scroll Storyline */}
      <main className="relative z-10">
        {/* HERO with 3D Crystal Visual Centerpiece */}
        <Hero
          onExploreClick={() => scrollTo('identity')}
          onAchievementsClick={() => scrollTo('achievements')}
        />

        {/* 01. DEPARTMENT IDENTITY */}
        <CinematicSection id="identity">
          <AboutDepartment />
        </CinematicSection>

        {/* 02. STUDENT PROJECTS & SYSTEMS */}
        <CinematicSection id="projects">
          <Projects />
        </CinematicSection>

        {/* 03. ASSOCIATION EVENTS & TIMELINE */}
        <CinematicSection id="events">
          <Events />
        </CinematicSection>

        {/* 04. TECHNOLOGY WALL */}
        <CinematicSection id="technologies">
          <TechEcosystem />
        </CinematicSection>

        {/* 05. STUDENT LEADERSHIP (President & Vice President) */}
        <CinematicSection id="leadership">
          <StudentLeadership />
        </CinematicSection>

        {/* 06. HEAD OF DEPARTMENT & FACULTY */}
        <CinematicSection id="faculty">
          <FacultySection />
        </CinematicSection>

        {/* 07. ALUMNI NETWORK */}
        <CinematicSection id="alumni">
          <AlumniSection />
        </CinematicSection>

        {/* 08. STUDENT ACHIEVEMENTS (Holographic Crystal Cards) */}
        <CinematicSection id="achievements">
          <Achievements />
        </CinematicSection>
      </main>

      {/* 6. Clean Academic Footer (No oversized contact CTAs) */}
      <Footer />
    </div>
  );
};

export default App;
