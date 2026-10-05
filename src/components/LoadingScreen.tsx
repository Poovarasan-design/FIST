import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

/**
 * Ultra-Smooth Futuristic Loading Animation.
 * Displays FIST circular monogram with pulsating purple resonance rings,
 * dynamic telemetry progress counter (0% -> 100%), and smooth aperture dissolution.
 */
export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 1400; // 1.4 seconds for crisp, fast transition

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(interval);
        setTimeout(() => setIsExiting(true), 150);
        setTimeout(() => onComplete(), 550);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          key="intro-loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.03,
            filter: 'blur(10px)',
            transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#050609] text-[#f8fafc] select-none pointer-events-none"
        >
          {/* Subtle multi-stage central radial glow */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-purple-600/[0.12] blur-[140px] pointer-events-none" />
          <div className="absolute w-[240px] h-[240px] rounded-full bg-white/[0.04] blur-[80px] pointer-events-none" />

          {/* Central Architectural Monogram */}
          <div className="relative flex flex-col items-center">
            {/* Outer expanding resonance rings */}
            <div className="relative mb-6 flex items-center justify-center">
              <motion.div
                animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0.1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute w-20 h-20 rounded-full border border-purple-400/40 pointer-events-none"
              />
              <motion.div
                animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                className="absolute w-20 h-20 rounded-full border border-purple-500/20 pointer-events-none"
              />

              {/* FIST Logo */}
              <div className="relative w-16 h-16 rounded-full p-1 bg-gradient-to-br from-white/20 via-purple-600/30 to-black/60 border border-white/20 shadow-[0_0_30px_rgba(168,85,247,0.4)] flex items-center justify-center overflow-hidden">
                <img
                  src="/fist-logo.jpg"
                  alt="FIST"
                  className="w-full h-full rounded-full object-contain"
                />
              </div>
            </div>

            {/* FIST ASSOCIATION */}
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-display font-extrabold tracking-[0.25em] text-base sm:text-lg text-white uppercase text-center"
            >
              FIST ASSOCIATION
            </motion.h1>

            {/* Department Tag */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="font-mono text-xs tracking-wider text-purple-300/80 uppercase text-center mt-1"
            >
              DEPARTMENT OF COMPUTER SCIENCE & ENGINEERING
            </motion.p>

            {/* Progress Bar & Telemetry */}
            <div className="mt-8 w-56 flex flex-col items-center space-y-2">
              <div className="w-full h-[2px] bg-white/[0.08] rounded-full overflow-hidden relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-500 via-white to-purple-400 rounded-full shadow-[0_0_10px_#a855f7]"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="w-full flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span className="tracking-widest text-purple-300">INITIALIZING GUILD</span>
                <span className="font-bold text-white">{progress}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

