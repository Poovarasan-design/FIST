import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { Shield, GraduationCap, Cpu, Activity, Sparkles, Terminal } from 'lucide-react';

interface FistUniqueLogoHeroProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const FistUniqueLogoHero: React.FC<FistUniqueLogoHeroProps> = ({
  className = '',
  size = 'md',
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [activeChip, setActiveChip] = useState<string | null>(null);

  // Mouse position values for 3D magnetic tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for natural tactile motion
  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Transform coordinates into degrees of rotation
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [16, -16]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-16, 16]);

  // Dynamic specular glare translation
  const glareX = useTransform(smoothX, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(smoothY, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 1200);
  };

  const isSmall = size === 'sm';

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{ perspective: 1200 }}
      className={`relative w-full ${
        isSmall ? 'max-w-[450px] h-[360px] sm:h-[380px]' : 'max-w-[540px] h-[460px] sm:h-[500px]'
      } flex items-center justify-center cursor-pointer select-none ${className}`}
    >
      {/* 1. Deep Multi-stage Radial White & Purple Atmosphere */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className={`${
            isSmall ? 'w-[280px] h-[280px]' : 'w-[360px] h-[360px]'
          } rounded-full bg-purple-600/20 blur-[90px] animate-pulse-slow`}
        />
        <div
          className={`${
            isSmall ? 'w-[160px] h-[160px]' : 'w-[220px] h-[220px]'
          } rounded-full bg-white/10 blur-[70px]`}
        />
      </div>

      {/* 2. Interactive 3D Rotational Stage */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className={`relative ${
          isSmall ? 'w-[320px] sm:w-[360px] h-[310px] sm:h-[340px]' : 'w-[370px] sm:w-[410px] h-[360px] sm:h-[400px]'
        } flex items-center justify-center`}
      >
        {/* Refined Smooth Ethereal Orbital Halo */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 rounded-full border border-purple-500/20 pointer-events-none shadow-[0_0_30px_rgba(168,85,247,0.1)]"
        />

        {/* Delicate Outer Hairline Orbit */}
        <div className="absolute inset-[-14px] rounded-full border border-white/[0.08] pointer-events-none" />

        {/* Counter-Rotating Inner Energy Trajectory with Orbiting Satellites */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[290px] h-[290px] rounded-full border border-purple-400/20 pointer-events-none"
        >
          {/* Orbiting Satellite 1: Pure White Pearl */}
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_10px_#ffffff]" />

          {/* Orbiting Satellite 2: Soft Purple Jewel */}
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-purple-400 shadow-[0_0_12px_#a855f7]" />
        </motion.div>

        {/* Tilted Ellipse Orbital Accent */}
        <div
          className="absolute w-[320px] h-[130px] rounded-[100%] border border-purple-400/25 pointer-events-none"
          style={{ transform: 'rotate(-22deg)' }}
        />

        {/* 3. The Core Floating FIST Emblem Glass Chassis */}
        <motion.div
          animate={{
            scale: isHovered ? 1.03 : 1,
            y: [0, -6, 0],
          }}
          transition={{
            scale: { duration: 0.3 },
            y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' },
          }}
          style={{ transformStyle: 'preserve-3d', translateZ: 40 }}
          className={`relative ${
            isSmall ? 'w-44 h-44 sm:w-48 sm:h-48' : 'w-52 h-52 sm:w-60 sm:h-60'
          } rounded-full p-2.5 bg-gradient-to-br from-white/20 via-purple-950/40 to-black/80 backdrop-blur-xl border border-white/30 shadow-[0_0_60px_-10px_rgba(168,85,247,0.5)] flex items-center justify-center overflow-hidden group`}
        >
          {/* Specular Interactive Cursor Glare Follower */}
          <motion.div
            className="absolute inset-0 pointer-events-none rounded-full"
            style={{
              background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.28) 0%, transparent 60%)`,
            }}
          />

          {/* Metallic Inner Bezel */}
          <div className="relative w-full h-full rounded-full p-2 bg-[#090b12] border border-purple-500/40 flex items-center justify-center overflow-hidden">
            {/* Holographic Shimmer Sweep Animation */}
            <motion.div
              animate={{
                x: ['-140%', '140%'],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: 'easeInOut',
                repeatDelay: 1.5,
              }}
              className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none z-20"
            />

            {/* Official FIST Logo Image */}
            <img
              src="/fist-logo.jpg"
              alt="FIST Official Crest"
              className="w-full h-full object-contain rounded-full relative z-10 transition-transform duration-500 group-hover:scale-105"
            />

            {/* Ambient Purple Internal Glow */}
            <div className="absolute inset-0 bg-radial from-transparent to-purple-950/60 pointer-events-none z-15" />
          </div>

          {/* Shockwave Rings on Click */}
          <AnimatePresence>
            {clicked && (
              <>
                <motion.div
                  initial={{ scale: 0.8, opacity: 1 }}
                  animate={{ scale: 2.2, opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.9, ease: 'easeOut' }}
                  className="absolute inset-0 rounded-full border-2 border-white pointer-events-none z-30"
                />
                <motion.div
                  initial={{ scale: 0.8, opacity: 1 }}
                  animate={{ scale: 2.6, opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.1, ease: 'easeOut', delay: 0.1 }}
                  className="absolute inset-0 rounded-full border border-purple-400 pointer-events-none z-30"
                />
              </>
            )}
          </AnimatePresence>
        </motion.div>

        {/* 4. Three High-Precision Institutional Badges (Perfect Corner Balance & Frosted Luxury Styling) */}
        {/* Badge 1: Top Right Corner - Dept. of Computer Science */}
        <motion.div
          style={{ translateZ: 50 }}
          onMouseEnter={() => setActiveChip('dept')}
          onMouseLeave={() => setActiveChip(null)}
          className={`absolute -top-3 -right-4 sm:-right-8 px-4 py-2 rounded-full backdrop-blur-xl border transition-all duration-300 flex items-center space-x-2.5 shadow-[0_8px_30px_-4px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.18)] ${
            activeChip === 'dept'
              ? 'bg-gradient-to-r from-purple-950/95 via-[#1b1035] to-purple-950/95 border-purple-400 text-white scale-105 shadow-[0_0_25px_rgba(168,85,247,0.4),inset_0_1px_2px_rgba(255,255,255,0.3)]'
              : 'bg-[#090b14]/90 border-purple-500/30 text-slate-100 hover:border-purple-400/80 hover:text-white'
          }`}
        >
          <GraduationCap className="w-4 h-4 text-purple-300 shrink-0 drop-shadow-[0_0_8px_rgba(192,132,252,0.6)]" />
          <span className="font-sans text-[11px] sm:text-xs font-semibold tracking-wide whitespace-nowrap">
            Dept. of Computer Science
          </span>
        </motion.div>

        {/* Badge 2: Bottom Left Corner - Code • Honor • Excellence */}
        <motion.div
          style={{ translateZ: 50 }}
          onMouseEnter={() => setActiveChip('motto')}
          onMouseLeave={() => setActiveChip(null)}
          className={`absolute -bottom-3 -left-6 sm:-left-10 px-4 py-2 rounded-full backdrop-blur-xl border transition-all duration-300 flex items-center space-x-2.5 shadow-[0_8px_30px_-4px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.18)] ${
            activeChip === 'motto'
              ? 'bg-gradient-to-r from-purple-950/95 via-[#1b1035] to-purple-950/95 border-purple-400 text-white scale-105 shadow-[0_0_25px_rgba(168,85,247,0.4),inset_0_1px_2px_rgba(255,255,255,0.3)]'
              : 'bg-[#090b14]/90 border-purple-500/30 text-slate-100 hover:border-purple-400/80 hover:text-white'
          }`}
        >
          <Shield className="w-3.5 h-3.5 text-purple-300 shrink-0 drop-shadow-[0_0_8px_rgba(192,132,252,0.6)]" />
          <span className="font-sans text-[11px] sm:text-xs font-semibold tracking-wide whitespace-nowrap">
            Code • Honor • Excellence
          </span>
        </motion.div>

        {/* Badge 3: Bottom Right Corner - Active Student Guild */}
        <motion.div
          style={{ translateZ: 50 }}
          onMouseEnter={() => setActiveChip('sys')}
          onMouseLeave={() => setActiveChip(null)}
          className={`absolute -bottom-3 -right-6 sm:-right-10 px-4 py-2 rounded-full backdrop-blur-xl border transition-all duration-300 flex items-center space-x-2.5 shadow-[0_8px_30px_-4px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.18)] ${
            activeChip === 'sys'
              ? 'bg-gradient-to-r from-purple-950/95 via-[#1b1035] to-purple-950/95 border-purple-400 text-white scale-105 shadow-[0_0_25px_rgba(168,85,247,0.4),inset_0_1px_2px_rgba(255,255,255,0.3)]'
              : 'bg-[#090b14]/90 border-purple-500/30 text-slate-100 hover:border-purple-400/80 hover:text-white'
          }`}
        >
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 shadow-[0_0_10px_#34d399]" />
          </span>
          <span className="font-sans text-[11px] sm:text-xs font-semibold text-slate-100 tracking-wide whitespace-nowrap">
            Active Student Guild
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
};

