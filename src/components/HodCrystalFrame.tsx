import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface HodCrystalFrameProps {
  imageSrc: string;
  imageAlt: string;
  qualification?: string;
  badgeText?: string;
  objectPosition?: string;
  imageFilter?: string;
  className?: string;
}

export const HodCrystalFrame: React.FC<HodCrystalFrameProps> = ({
  imageSrc,
  imageAlt,
  qualification = 'M.E (CSE), Ph.D',
  badgeText = 'HEAD OF THE DEPARTMENT [I/C]',
  objectPosition = '50% 10%',
  imageFilter = 'contrast(1.05) brightness(1.05) saturate(1.02)',
  className = '',
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // 3D Tilt Spring Physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), {
    stiffness: 260,
    damping: 24,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), {
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
        {/* Ambient Back Glow - Trapped Purple Radiance (behind the entire card) */}
        <div
          className="absolute -inset-4 rounded-3xl bg-gradient-to-b from-purple-600/25 via-violet-900/15 to-purple-500/20 blur-2xl -z-10 transition-opacity duration-500 pointer-events-none"
          style={{ opacity: isHovered ? 0.8 : 0.45 }}
        />

        {/* ========================================================================= */}
        {/* INNER PORTRAIT WELL: 100% VISIBLE, CRISP, PROFESSIONAL ACADEMIC PHOTO     */}
        {/* ========================================================================= */}
        <div className="absolute inset-[24px] sm:inset-[28px] rounded-xl overflow-hidden bg-white shadow-2xl z-0">
          {/* Primary Photograph - 100% Unobstructed, Crisp, Professional */}
          <img
            src={imageSrc}
            alt={imageAlt}
            className="relative z-0 w-full h-full object-cover transition-all duration-500 ease-out"
            style={{
              objectPosition: objectPosition,
              filter: isHovered
                ? `${imageFilter} brightness(1.06)`
                : imageFilter,
              transform: isHovered ? 'scale(1.02)' : 'scale(1)',
            }}
          />

          {/* Very Subtle Grounding Shadow at bottom 8% only */}
          <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-[#090414]/70 to-transparent pointer-events-none z-[1]" />

          {/* Crisp recessed rim line for realistic portrait mount depth */}
          <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10 pointer-events-none z-[2]" />
        </div>

        {/* ========================================================================= */}
        {/* SVG ORNAMENTAL CRYSTAL FRAME OVERLAY (HOLLOW APERTURE - ZERO FACE BLOCK)  */}
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
              <stop offset="0%" stopColor="#c084fc" stopOpacity="0.85" />
              <stop offset="35%" stopColor="#7e22ce" stopOpacity="0.5" />
              <stop offset="70%" stopColor="#3b0764" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.95" />
            </linearGradient>

            {/* Crystal Glass Facet Accent */}
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

          {/* 1. OUTER CHASSIS / BEVELED BASE FRAME (HOLLOW CENTER - EVENODD CUTOUT) */}
          {/* Fills ONLY the surrounding crystal border; central portrait aperture is 100% transparent */}
          <path
            d="
              M 50,22 L 350,22 L 382,54 L 382,446 L 350,478 L 50,478 L 18,446 L 18,54 Z
              M 56,42 L 36,62 L 36,438 L 56,458 L 344,458 L 364,438 L 364,62 L 344,42 Z
            "
            fillRule="evenodd"
            fill="url(#hodDeepBase)"
            stroke="url(#hodCrystalPrimary)"
            strokeWidth="2"
            opacity="0.95"
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
            strokeOpacity="0.8"
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
            strokeWidth="1.6"
            strokeOpacity="0.85"
          />

          {/* 2. LATERAL PILLARS & STEPPED CRYSTAL FACETS (LEFT & RIGHT RAILS) */}
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

          {/* 3. PROTRUDING LATERAL CRYSTAL WING GEMS */}
          <g filter="url(#hodNeonGlow)">
            <polygon
              points="18,214 0,250 18,286 28,250"
              fill="url(#hodFacetGlow)"
              stroke="url(#hodSpecularWhite)"
              strokeWidth="1.5"
            />
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

          <g filter="url(#hodNeonGlow)">
            <polygon
              points="382,214 400,250 382,286 372,250"
              fill="url(#hodFacetGlow)"
              stroke="url(#hodSpecularWhite)"
              strokeWidth="1.5"
            />
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

          {/* 4. CORNER BRACKETS & CUT-CRYSTAL PRISMS */}
          <polygon
            points="18,54 50,22 58,30 30,58"
            fill="url(#hodFacetGlow)"
            stroke="#ffffff"
            strokeWidth="1"
            strokeOpacity="0.9"
          />
          <polygon
            points="382,54 350,22 342,30 370,58"
            fill="url(#hodFacetGlow)"
            stroke="#ffffff"
            strokeWidth="1"
            strokeOpacity="0.9"
          />
          <polygon
            points="18,446 50,478 58,470 30,442"
            fill="url(#hodFacetGlow)"
            stroke="#ffffff"
            strokeWidth="1"
            strokeOpacity="0.9"
          />
          <polygon
            points="382,446 350,478 342,470 370,442"
            fill="url(#hodFacetGlow)"
            stroke="#ffffff"
            strokeWidth="1"
            strokeOpacity="0.9"
          />

          {/* 5. TOP SECTION: GRAND ORNAMENTAL CREST */}
          <g filter="url(#hodNeonGlow)">
            <polygon
              points="60,22 130,8 180,18 160,28 80,30"
              fill="url(#hodFacetGlow)"
              stroke="url(#hodSpecularWhite)"
              strokeWidth="1.4"
            />
            <polygon
              points="340,22 270,8 220,18 240,28 320,30"
              fill="url(#hodFacetGlow)"
              stroke="url(#hodSpecularWhite)"
              strokeWidth="1.4"
            />
          </g>

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

          {/* Central Top Emblem */}
          <g filter="url(#hodNeonGlow)">
            <polygon
              points="200,-4 238,18 230,46 200,62 170,46 162,18"
              fill="url(#hodEmblemJewel)"
              stroke="url(#hodSpecularWhite)"
              strokeWidth="2"
            />

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

            <circle cx="200" cy="28" r="4" fill="#ffffff" />
            <polygon
              points="200,21 202,28 209,28 203,32 205,38 200,34 195,38 197,32 191,28 198,28"
              fill="#ffffff"
            />
          </g>

          {/* 6. BOTTOM ORNAMENTAL SECTION: PEDESTAL PLINTH */}
          <polygon
            points="90,470 140,488 260,488 310,470 290,462 110,462"
            fill="url(#hodDeepBase)"
            stroke="url(#hodFacetGlow)"
            strokeWidth="1.5"
          />

          {/* Elevated Central Crystal Plaque */}
          <g filter="url(#hodNeonGlow)">
            <polygon
              points="124,464 276,464 286,494 114,494"
              fill="url(#hodEmblemJewel)"
              stroke="url(#hodSpecularWhite)"
              strokeWidth="1.8"
            />

            <polygon
              points="128,468 272,468 280,490 120,490"
              fill="#1e1035"
              fillOpacity="0.85"
              stroke="#c084fc"
              strokeWidth="1"
              strokeOpacity="0.6"
            />

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
        {/* SPECULAR SHIMMER ON FRAME EDGES ONLY                                      */}
        {/* ========================================================================= */}
        <motion.div
          className="absolute -inset-[18px] sm:-inset-[22px] pointer-events-none z-15 overflow-hidden rounded-3xl"
          style={{
            maskImage: 'radial-gradient(ellipse at center, transparent 55%, black 72%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, transparent 55%, black 72%)',
          }}
          animate={
            isHovered
              ? { opacity: [0, 0.7, 0], x: ['-80%', '120%'] }
              : { opacity: 0, x: '-80%' }
          }
          transition={{ duration: 1.1, ease: 'easeInOut' }}
        >
          <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />
        </motion.div>

        {/* ========================================================================= */}
        {/* REFINED FLOATING CRYSTAL BADGES - CLEAN ACADEMIC PROFESSIONAL TYPOGRAPHY   */}
        {/* ========================================================================= */}
        {/* Top Prestige Banner Tag - Mounted high on the apex crest, above portrait */}
        <div className="absolute top-[4px] sm:top-[6px] inset-x-0 flex justify-center z-20 pointer-events-none">
          <div className="px-3.5 py-1 rounded-full bg-[#0e0720]/95 border border-purple-400/50 shadow-[0_2px_12px_rgba(147,51,234,0.35)] backdrop-blur-md flex items-center space-x-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-300 animate-pulse" />
            <span className="font-sans text-[11px] font-semibold tracking-wider text-purple-100 uppercase">
              {badgeText}
            </span>
          </div>
        </div>

        {/* Bottom Central Plaque: Professional Academic Qualification */}
        <div className="absolute bottom-[4px] sm:bottom-[8px] inset-x-0 flex justify-center z-20 pointer-events-none">
          <div className="px-4 py-1 flex items-center justify-center">
            <span className="font-sans text-xs sm:text-[13px] font-bold text-white tracking-wide drop-shadow-[0_2px_8px_rgba(255,255,255,0.7)]">
              {qualification}
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
