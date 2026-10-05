import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface HodCrystalFrameProps {
  imageSrc: string;
  imageAlt: string;
  qualification?: string;
  badgeText?: string;
  className?: string;
}

export const HodCrystalFrame: React.FC<HodCrystalFrameProps> = ({
  imageSrc,
  imageAlt,
  qualification = 'M.E (CSE), Ph.D',
  badgeText = 'HEAD OF THE DEPARTMENT [I/C]',
  className = '',
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // 3D Tilt Spring Physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    stiffness: 260,
    damping: 24,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 260,
    damping: 24,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1200,
        transformStyle: 'preserve-3d',
      }}
      className={`relative select-none ${className}`}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative w-full aspect-[4/5] transition-shadow duration-500"
      >
        {/* Ambient Back Glow - Trapped Purple Radiance */}
        <div
          className="absolute -inset-4 rounded-3xl bg-gradient-to-b from-purple-600/30 via-violet-900/20 to-purple-500/25 blur-2xl -z-10 transition-opacity duration-500 pointer-events-none"
          style={{ opacity: isHovered ? 0.9 : 0.55 }}
        />

        {/* Inner Portrait Well */}
        <div className="absolute inset-[24px] sm:inset-[28px] rounded-xl overflow-hidden bg-[#070512] shadow-2xl z-0">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover object-top filter brightness-105 contrast-[1.03] transition-transform duration-700 ease-out"
            style={{
              transform: isHovered ? 'scale(1.04)' : 'scale(1)',
            }}
          />

          {/* Portrait Vignette & Depth Shadow */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0518]/90 via-[#0a0518]/20 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0518]/40 via-transparent to-transparent pointer-events-none" />

          {/* Dynamic Light Sweep Glint on Image */}
          <motion.div
            className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/10 to-transparent"
            animate={
              isHovered
                ? { x: ['-100%', '200%'], opacity: [0, 0.8, 0] }
                : { x: '-100%', opacity: 0 }
            }
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          />
        </div>

        {/* ========================================================================= */}
        {/* SVG ORNAMENTAL CRYSTAL FRAME OVERLAY (Architectural Reference Adaptation) */}
        {/* ========================================================================= */}
        <svg
          viewBox="0 0 400 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -inset-[18px] sm:-inset-[22px] w-[calc(100%+36px)] sm:w-[calc(100%+44px)] h-[calc(100%+36px)] sm:h-[calc(100%+44px)] pointer-events-none z-10 overflow-visible drop-shadow-[0_12px_32px_rgba(11,5,28,0.85)]"
        >
          <defs>
            {/* Deep Violet Base Gradient */}
            <linearGradient id="hodDeepBase" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e1035" />
              <stop offset="50%" stopColor="#0f071f" />
              <stop offset="100%" stopColor="#251241" />
            </linearGradient>

            {/* Crystal Glass Primary Gradient */}
            <linearGradient id="hodCrystalPrimary" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c084fc" stopOpacity="0.8" />
              <stop offset="35%" stopColor="#7e22ce" stopOpacity="0.45" />
              <stop offset="70%" stopColor="#3b0764" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.9" />
            </linearGradient>

            {/* Crystal Glass Facet Accent (Translucent Royal Amethyst) */}
            <linearGradient id="hodFacetGlow" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#9333ea" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#e9d5ff" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#6b21a8" stopOpacity="0.9" />
            </linearGradient>

            {/* Specular White Illumination */}
            <linearGradient id="hodSpecularWhite" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="25%" stopColor="#e9d5ff" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="75%" stopColor="#c084fc" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.95" />
            </linearGradient>

            {/* Vertical Rail Specular Line */}
            <linearGradient id="hodRailWhite" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="20%" stopColor="#a855f7" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="80%" stopColor="#9333ea" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.85" />
            </linearGradient>

            {/* Central Jewel Diamond Gradient */}
            <linearGradient id="hodEmblemJewel" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f3e8ff" />
              <stop offset="35%" stopColor="#c084fc" />
              <stop offset="70%" stopColor="#6b21a8" />
              <stop offset="100%" stopColor="#2e1065" />
            </linearGradient>

            {/* Soft Glow Filter */}
            <filter id="hodNeonGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* 1. OUTER CHASSIS / BEVELED BASE FRAME */}
          {/* Main outer border polygon with 45-degree chamfered corners */}
          <polygon
            points="
              50,22 350,22 
              382,54 382,446 
              350,478 50,478 
              18,446 18,54
            "
            fill="url(#hodDeepBase)"
            stroke="url(#hodCrystalPrimary)"
            strokeWidth="2"
            opacity="0.9"
          />

          {/* Outer Specular Edge Highlight */}
          <polygon
            points="
              50,22 350,22 
              382,54 382,446 
              350,478 50,478 
              18,446 18,54
            "
            fill="none"
            stroke="url(#hodSpecularWhite)"
            strokeWidth="1.2"
            strokeOpacity="0.75"
          />

          {/* Inner Picture Frame Aperture Rim */}
          <polygon
            points="
              56,42 344,42 
              364,62 364,438 
              344,458 56,458 
              36,438 36,62
            "
            fill="none"
            stroke="url(#hodSpecularWhite)"
            strokeWidth="1.5"
            strokeOpacity="0.8"
          />

          {/* 2. LATERAL PILLARS & STEPPED CRYSTAL FACETS (LEFT & RIGHT RAILS) */}
          {/* Left Vertical Stepped Facet */}
          <polygon
            points="18,120 34,136 34,200 22,212 18,212"
            fill="url(#hodFacetGlow)"
            stroke="#ffffff"
            strokeWidth="0.8"
            strokeOpacity="0.7"
          />
          <polygon
            points="18,288 22,288 34,300 34,364 18,380"
            fill="url(#hodFacetGlow)"
            stroke="#ffffff"
            strokeWidth="0.8"
            strokeOpacity="0.7"
          />

          {/* Right Vertical Stepped Facet */}
          <polygon
            points="382,120 366,136 366,200 378,212 382,212"
            fill="url(#hodFacetGlow)"
            stroke="#ffffff"
            strokeWidth="0.8"
            strokeOpacity="0.7"
          />
          <polygon
            points="382,288 378,288 366,300 366,364 382,380"
            fill="url(#hodFacetGlow)"
            stroke="#ffffff"
            strokeWidth="0.8"
            strokeOpacity="0.7"
          />

          {/* 3. PROTRUDING LATERAL CRYSTAL WING GEMS (Mid-Height Accents inspired by reference) */}
          {/* Left Protruding Gem */}
          <g filter="url(#hodNeonGlow)">
            {/* Outer Wing Tip */}
            <polygon
              points="18,214 0,250 18,286 28,250"
              fill="url(#hodFacetGlow)"
              stroke="url(#hodSpecularWhite)"
              strokeWidth="1.5"
            />
            {/* Inner Cut Facets */}
            <polygon
              points="18,214 0,250 18,250"
              fill="#c084fc"
              fillOpacity="0.6"
            />
            <polygon
              points="0,250 18,286 18,250"
              fill="#581c87"
              fillOpacity="0.8"
            />
            <line x1="0" y1="250" x2="28" y2="250" stroke="#ffffff" strokeWidth="1.2" />
          </g>

          {/* Right Protruding Gem */}
          <g filter="url(#hodNeonGlow)">
            {/* Outer Wing Tip */}
            <polygon
              points="382,214 400,250 382,286 372,250"
              fill="url(#hodFacetGlow)"
              stroke="url(#hodSpecularWhite)"
              strokeWidth="1.5"
            />
            {/* Inner Cut Facets */}
            <polygon
              points="382,214 400,250 382,250"
              fill="#c084fc"
              fillOpacity="0.6"
            />
            <polygon
              points="400,250 382,286 382,250"
              fill="#581c87"
              fillOpacity="0.8"
            />
            <line x1="372" y1="250" x2="400" y2="250" stroke="#ffffff" strokeWidth="1.2" />
          </g>

          {/* 4. CORNER BRACKETS & CUT-CRYSTAL PRISMS (4 Corners) */}
          {/* Top-Left Corner Cut Diamond */}
          <polygon
            points="18,54 50,22 58,30 30,58"
            fill="url(#hodFacetGlow)"
            stroke="#ffffff"
            strokeWidth="1"
            strokeOpacity="0.9"
          />
          {/* Top-Right Corner Cut Diamond */}
          <polygon
            points="382,54 350,22 342,30 370,58"
            fill="url(#hodFacetGlow)"
            stroke="#ffffff"
            strokeWidth="1"
            strokeOpacity="0.9"
          />
          {/* Bottom-Left Corner Cut Diamond */}
          <polygon
            points="18,446 50,478 58,470 30,442"
            fill="url(#hodFacetGlow)"
            stroke="#ffffff"
            strokeWidth="1"
            strokeOpacity="0.9"
          />
          {/* Bottom-Right Corner Cut Diamond */}
          <polygon
            points="382,446 350,478 342,470 370,442"
            fill="url(#hodFacetGlow)"
            stroke="#ffffff"
            strokeWidth="1"
            strokeOpacity="0.9"
          />

          {/* 5. TOP SECTION: GRAND ORNAMENTAL CREST (Academic Leadership Structure) */}
          {/* Outer Layer Wings extending laterally */}
          <g filter="url(#hodNeonGlow)">
            {/* Left Upper Wing */}
            <polygon
              points="60,22 130,8 180,18 160,28 80,30"
              fill="url(#hodFacetGlow)"
              stroke="url(#hodSpecularWhite)"
              strokeWidth="1.4"
            />
            {/* Right Upper Wing */}
            <polygon
              points="340,22 270,8 220,18 240,28 320,30"
              fill="url(#hodFacetGlow)"
              stroke="url(#hodSpecularWhite)"
              strokeWidth="1.4"
            />
          </g>

          {/* Stepped Wing Accent Bevels */}
          <polygon
            points="84,18 140,8 174,16 160,22 100,22"
            fill="#ffffff"
            fillOpacity="0.3"
          />
          <polygon
            points="316,18 260,8 226,16 240,22 300,22"
            fill="#ffffff"
            fillOpacity="0.3"
          />

          {/* Central Top Emblem: Majestic Faceted Diamond Jewel & Academic Insignia */}
          <g filter="url(#hodNeonGlow)">
            {/* Crest Base Shield */}
            <polygon
              points="200,-4 238,18 230,46 200,62 170,46 162,18"
              fill="url(#hodEmblemJewel)"
              stroke="url(#hodSpecularWhite)"
              strokeWidth="2"
            />

            {/* Faceted Internal Diamond Cuts */}
            {/* Top Pyramid */}
            <polygon
              points="200,-4 238,18 200,28"
              fill="#e9d5ff"
              fillOpacity="0.65"
              stroke="#ffffff"
              strokeWidth="0.8"
            />
            <polygon
              points="200,-4 162,18 200,28"
              fill="#a855f7"
              fillOpacity="0.75"
              stroke="#ffffff"
              strokeWidth="0.8"
            />
            {/* Bottom Inverted Pyramid */}
            <polygon
              points="200,28 238,18 230,46 200,62"
              fill="#4c1d95"
              fillOpacity="0.8"
              stroke="#ffffff"
              strokeWidth="0.8"
            />
            <polygon
              points="200,28 162,18 170,46 200,62"
              fill="#7c3aed"
              fillOpacity="0.8"
              stroke="#ffffff"
              strokeWidth="0.8"
            />

            {/* Center Core Jewel Spark */}
            <circle cx="200" cy="28" r="4" fill="#ffffff" />
            <polygon
              points="200,21 202,28 209,28 203,32 205,38 200,34 195,38 197,32 191,28 198,28"
              fill="#ffffff"
            />
          </g>

          {/* 6. BOTTOM ORNAMENTAL SECTION: PEDESTAL PLINTH & NAMEPLATE EMBLEM */}
          {/* Symmetrical Base Wings */}
          <polygon
            points="90,470 140,488 260,488 310,470 290,462 110,462"
            fill="url(#hodDeepBase)"
            stroke="url(#hodFacetGlow)"
            strokeWidth="1.5"
          />

          {/* Elevated Central Crystal Plaque (Reference S28 Plaque adaptation) */}
          <g filter="url(#hodNeonGlow)">
            {/* Plaque Trapezoid Frame */}
            <polygon
              points="124,464 276,464 286,494 114,494"
              fill="url(#hodEmblemJewel)"
              stroke="url(#hodSpecularWhite)"
              strokeWidth="1.8"
            />

            {/* Plaque Inner Specular Trim */}
            <polygon
              points="128,468 272,468 280,490 120,490"
              fill="#1e1035"
              fillOpacity="0.85"
              stroke="#c084fc"
              strokeWidth="1"
              strokeOpacity="0.6"
            />

            {/* Plinth Apex Finial Accent */}
            <polygon
              points="200,455 210,464 190,464"
              fill="#ffffff"
              stroke="#c084fc"
              strokeWidth="1"
            />
          </g>

          {/* Refraction Accent Lines */}
          <line x1="56" y1="42" x2="36" y2="62" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.85" />
          <line x1="344" y1="42" x2="364" y2="62" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.85" />
          <line x1="56" y1="458" x2="36" y2="438" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.85" />
          <line x1="344" y1="458" x2="364" y2="438" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.85" />
        </svg>

        {/* ========================================================================= */}
        {/* REFINED FLOATING CRYSTAL BADGES (Overlaid inside frame bounds) */}
        {/* ========================================================================= */}
        {/* Top Prestige Banner Tag */}
        <div className="absolute top-[28px] sm:top-[34px] inset-x-0 flex justify-center z-20 pointer-events-none">
          <div className="px-3.5 py-1 rounded-md bg-[#0e0720]/90 border border-purple-400/50 shadow-[0_4px_16px_rgba(147,51,234,0.35)] backdrop-blur-md flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-300 animate-pulse" />
            <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.16em] text-purple-100 uppercase">
              {badgeText}
            </span>
          </div>
        </div>

        {/* Bottom Central Plaque Text (Integrated directly into the bottom pedestal) */}
        <div className="absolute bottom-[2px] sm:bottom-[6px] inset-x-0 flex justify-center z-20 pointer-events-none">
          <div className="px-4 py-1 flex items-center justify-center space-x-1.5">
            <span className="font-mono text-[10px] sm:text-[11px] font-black tracking-[0.2em] text-white uppercase drop-shadow-[0_2px_8px_rgba(255,255,255,0.7)]">
              {qualification}
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
