import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FistUniqueLogoHero } from '../components/FistUniqueLogoHero';
import { ArrowRight, Trophy } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onAchievementsClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onAchievementsClick }) => {
  const containerRef = useRef<HTMLElement | null>(null);

  // Cinematic scroll-linked exit motion
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // FIST typography subtly recedes into depth as user initiates scroll
  const titleScale = useTransform(scrollYProgress, [0, 0.7], [1, 0.94]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0.25]);
  const contentY = useTransform(scrollYProgress, [0, 0.7], [0, -30]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-[96vh] flex flex-col justify-center items-center pt-28 pb-20 overflow-hidden bg-[#06070a] text-[#f8fafc] text-center"
    >
      {/* Refined White & Purple Ambient Atmosphere */}
      <div className="absolute inset-0 subtle-grid opacity-60 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-purple-600/[0.12] blur-[180px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-white/[0.04] blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
        {/* Department Identity Tag in White & Purple */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center space-x-3 mb-4"
        >
          <div className="h-[1.5px] w-7 bg-purple-400 shadow-[0_0_8px_#c084fc]" />
          <span className="font-mono text-xs text-purple-300 tracking-[0.25em] uppercase font-semibold">
            DEPARTMENT OF COMPUTER SCIENCE & ENGINEERING
          </span>
          <div className="h-[1.5px] w-7 bg-purple-400 shadow-[0_0_8px_#c084fc]" />
        </motion.div>

        {/* Centered Unique Interactive FIST Emblem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-2 mb-6 sm:mb-8 flex items-center justify-center"
        >
          <FistUniqueLogoHero size="sm" />
        </motion.div>

        {/* Main Brand Title & Narrative */}
        <motion.div
          style={{ scale: titleScale, opacity: titleOpacity, y: contentY }}
          className="space-y-6 max-w-3xl mx-auto flex flex-col items-center"
        >
          {/* Massive FIST Brand Title */}
          <div className="space-y-1">
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-purple-200/80 block font-semibold">
              THE STUDENT ENGINEERING GUILD
            </span>
            <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-none select-none drop-shadow-[0_10px_45px_rgba(168,85,247,0.35)]">
              FIST
            </h1>
          </div>

          <p className="text-xl sm:text-3xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-purple-300 max-w-2xl mx-auto">
            Where software engineering meets real-world impact.
          </p>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Fraternity of Immortal Software Technocrats is the official student association of the 
            Department of Computer Science & Engineering. We architect production software, conduct national hackathons, 
            and explore pioneering frontiers.
          </p>

          {/* Clean White & Purple Action Controls */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onExploreClick}
              className="px-7 py-3.5 rounded-lg bg-white text-slate-950 font-bold text-xs font-mono tracking-wider hover:bg-purple-50 transition-all flex items-center space-x-2 cursor-pointer shadow-[0_0_25px_rgba(255,255,255,0.25)] hover:shadow-[0_0_35px_rgba(168,85,247,0.45)] hover:scale-102 active:scale-98"
            >
              <span>EXPLORE DEPARTMENT</span>
              <ArrowRight className="w-3.5 h-3.5 text-purple-700" />
            </button>

            <button
              onClick={onAchievementsClick}
              className="px-7 py-3.5 rounded-lg bg-purple-950/50 text-purple-200 hover:text-white border border-purple-500/40 hover:border-purple-400 hover:bg-purple-900/80 text-xs font-mono tracking-wider transition-all flex items-center space-x-2 cursor-pointer shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:scale-102 active:scale-98"
            >
              <Trophy className="w-3.5 h-3.5 text-purple-400" />
              <span>STUDENT ACHIEVEMENTS</span>
            </button>
          </div>

          {/* Editorial Metadata Stream in White & Purple */}
          <div className="pt-8 border-t border-white/[0.08] flex flex-wrap items-center justify-center gap-8 sm:gap-14 font-mono text-xs text-slate-400 w-full">
            <div className="hover:text-purple-300 transition-colors text-center">
              <span className="block text-white font-bold text-lg sm:text-2xl">480+</span>
              <span className="text-[11px] text-purple-200/70">Undergraduates</span>
            </div>
            <div className="h-8 w-[1px] bg-white/[0.12]" />
            <div className="hover:text-purple-300 transition-colors text-center">
              <span className="block text-white font-bold text-lg sm:text-2xl">65+</span>
              <span className="text-[11px] text-purple-200/70">Active Systems</span>
            </div>
            <div className="h-8 w-[1px] bg-white/[0.12]" />
            <div className="hover:text-purple-300 transition-colors text-center">
              <span className="block text-purple-300 font-bold text-lg sm:text-2xl">38+</span>
              <span className="text-[11px] text-purple-200/70">National Honors</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

