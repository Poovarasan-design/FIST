import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { Shield, Cpu, Activity, Sparkles, Terminal } from 'lucide-react';

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
        isSmall ? 'max-w-[400px] h-[330px] sm:h-[350px]' : 'max-w-[500px] h-[440px] sm:h-[480px]'
      } flex items-center justify-center cursor-pointer select-none ${className}`}
    >
      {/* 1. Deep Multi-stage Radial White & Purple Atmosphere */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className={`${
            isSmall ? 'w-[260px] h-[260px]' : 'w-[340px] h-[340px]'
          } rounded-full bg-purple-600/20 blur-[90px] animate-pulse-slow`}
        />
        <div
          className={`${
            isSmall ? 'w-[150px] h-[150px]' : 'w-[200px] h-[200px]'
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
          isSmall ? 'w-[280px] sm:w-[310px] h-[280px] sm:h-[310px]' : 'w-[340px] sm:w-[380px] h-[340px] sm:h-[380px]'
        } flex items-center justify-center`}
      >
        {/* Outer Rotating Cybernetic Orbital Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 rounded-full border border-purple-500/25 border-dashed pointer-events-none"
        />

        {/* Outer Fine Tick Ring */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 380 380">
          <circle
            cx="190"
            cy="190"
            r="175"
            fill="none"
            stroke="rgba(255, 255, 255, 0.12)"
            strokeWidth="1"
            strokeDasharray="4 8"
          />
          <circle
            cx="190"
            cy="190"
            r="155"
            fill="none"
            stroke="rgba(168, 85, 247, 0.3)"
            strokeWidth="1.5"
            strokeDasharray="16 32"
          />
        </svg>

        {/* Counter-Rotating Inner Energy Trajectory with Orbiting Satellites */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[290px] h-[290px] rounded-full border border-white/15 pointer-events-none"
        >
          {/* Orbiting Satellite 1: Pure White Star */}
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_12px_#ffffff] flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-purple-950" />
          </div>

          {/* Orbiting Satellite 2: Vibrant Purple Node */}
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-purple-400 shadow-[0_0_14px_#a855f7]" />
        </motion.div>

        {/* Tilted Ellipse Orbital Halo */}
        <div
          className="absolute w-[320px] h-[130px] rounded-[100%] border border-purple-400/30 pointer-events-none"
          style={{ transform: 'rotate(-25deg)' }}
        />

        {/* 3. The Core Floating FIST Emblem Glass Chassis */}
        <motion.div
          animate={{
            scale: isHovered ? 1.04 : 1,
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

        {/* 4. Surrounding Interactive Telemetry & Guild Chips */}
        {/* Chip 1: Top Left - EST. 2014 */}
        <motion.div
          style={{ translateZ: 50 }}
          onMouseEnter={() => setActiveChip('est')}
          onMouseLeave={() => setActiveChip(null)}
          className={`absolute -top-3 -left-3 sm:-left-6 px-3 py-1.5 rounded-lg backdrop-blur-md border text-[11px] font-mono tracking-wider transition-all duration-300 flex items-center space-x-2 shadow-lg ${
            activeChip === 'est'
              ? 'bg-purple-900/60 border-purple-400 text-white scale-105 shadow-purple-500/30'
              : 'bg-[#090b14]/80 border-white/15 text-slate-300'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          <span>EST. 2014</span>
        </motion.div>

        {/* Chip 2: Top Right - DEPT OF CSE */}
        <motion.div
          style={{ translateZ: 50 }}
          onMouseEnter={() => setActiveChip('dept')}
          onMouseLeave={() => setActiveChip(null)}
          className={`absolute -top-3 -right-3 sm:-right-6 px-3 py-1.5 rounded-lg backdrop-blur-md border text-[11px] font-mono tracking-wider transition-all duration-300 flex items-center space-x-1.5 shadow-lg ${
            activeChip === 'dept'
              ? 'bg-purple-900/60 border-purple-400 text-white scale-105 shadow-purple-500/30'
              : 'bg-[#090b14]/80 border-white/15 text-slate-300'
          }`}
        >
          <Cpu className="w-3.5 h-3.5 text-purple-300" />
          <span>DEPT OF CSE</span>
        </motion.div>

        {/* Chip 3: Bottom Left - KNOWLEDGE • CODE • HONOR */}
        <motion.div
          style={{ translateZ: 50 }}
          onMouseEnter={() => setActiveChip('motto')}
          onMouseLeave={() => setActiveChip(null)}
          className={`absolute -bottom-3 -left-4 sm:-left-8 px-3.5 py-1.5 rounded-lg backdrop-blur-md border text-[10px] font-mono tracking-widest uppercase transition-all duration-300 flex items-center space-x-1.5 shadow-lg ${
            activeChip === 'motto'
              ? 'bg-purple-900/60 border-purple-400 text-white scale-105 shadow-purple-500/30'
              : 'bg-[#090b14]/80 border-white/15 text-slate-300'
          }`}
        >
          <Shield className="w-3 h-3 text-white" />
          <span>CODE • HONOR • EXCELLENCE</span>
        </motion.div>

        {/* Chip 4: Bottom Right - SYSTEM ACTIVE */}
        <motion.div
          style={{ translateZ: 50 }}
          onMouseEnter={() => setActiveChip('sys')}
          onMouseLeave={() => setActiveChip(null)}
          className={`absolute -bottom-3 -right-4 sm:-right-8 px-3 py-1.5 rounded-lg backdrop-blur-md border text-[10px] font-mono tracking-wider transition-all duration-300 flex items-center space-x-2 shadow-lg ${
            activeChip === 'sys'
              ? 'bg-purple-900/60 border-purple-400 text-white scale-105 shadow-purple-500/30'
              : 'bg-[#090b14]/80 border-white/15 text-slate-300'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-emerald-400 font-bold">GUILD ACTIVE</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

