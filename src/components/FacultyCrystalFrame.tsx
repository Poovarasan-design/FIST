import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface FacultyCrystalFrameProps {
  imageSrc: string;
  imageAlt: string;
  qualification?: string;
  experience?: string;
  objectPosition?: string;
  imageFilter?: string;
  className?: string;
}

export const FacultyCrystalFrame: React.FC<FacultyCrystalFrameProps> = ({
  imageSrc,
  imageAlt,
  qualification = '',
  experience = '',
  objectPosition = '50% 14%',
  imageFilter = 'contrast(1.05) brightness(1.05) saturate(1.02)',
  className = '',
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Smooth 3D Tilt Spring Physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), {
    stiffness: 240,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), {
    stiffness: 240,
    damping: 22,
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

  // Clean concise qualification for bottom crystal plaque
  const displayQualification = qualification
    ? qualification.split(',').pop()?.trim() || qualification
    : 'FACULTY';

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
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
        {/* Ambient Back Glow - Soft Lavender & Amethyst (behind entire card) */}
        <div
          className="absolute -inset-2 rounded-2xl bg-gradient-to-b from-purple-600/20 via-violet-900/15 to-purple-500/15 blur-xl -z-10 transition-opacity duration-500 pointer-events-none"
          style={{ opacity: isHovered ? 0.7 : 0.35 }}
        />

        {/* ========================================================================= */}
        {/* INNER PORTRAIT WELL: 100% VISIBLE, CLEAR, CRISP ACADEMIC PHOTO            */}
        {/* ========================================================================= */}
        <div className="absolute inset-[18px] sm:inset-[20px] rounded-lg overflow-hidden bg-white shadow-xl z-0">
          {/* Primary Photograph */}
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

          {/* Minimal Soft Grounding Shadow at bottom only */}
          <div className="absolute bottom-0 inset-x-0 h-9 bg-gradient-to-t from-[#090414]/70 to-transparent pointer-events-none z-[1]" />

          {/* Recessed Rim Line for Portrait Mount Depth */}
          <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10 pointer-events-none z-[2]" />
        </div>

        {/* ========================================================================= */}
        {/* SVG ORNAMENTAL CRYSTAL FRAME OVERLAY (HOLLOW APERTURE - ZERO FACE BLOCK)  */}
        {/* ========================================================================= */}
        <svg
          viewBox="0 0 360 450"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -inset-[12px] sm:-inset-[14px] w-[calc(100%+24px)] sm:w-[calc(100%+28px)] h-[calc(100%+24px)] sm:h-[calc(100%+28px)] pointer-events-none z-10 overflow-visible drop-shadow-[0_8px_24px_rgba(11,5,28,0.75)]"
        >
          <defs>
            {/* Faculty Base Chassis Gradient */}
            <linearGradient id="facDeepBase" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1a0e2e" />
              <stop offset="50%" stopColor="#0d061a" />
              <stop offset="100%" stopColor="#220e3a" />
            </linearGradient>

            {/* Faculty Crystal Gradient */}
            <linearGradient id="facCrystalPrimary" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#b77bf2" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#6b21a8" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#9333ea" stopOpacity="0.85" />
            </linearGradient>

            {/* Specular White Rim Highlight */}
            <linearGradient id="facSpecularWhite" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="30%" stopColor="#e9d5ff" stopOpacity="0.7" />
              <stop offset="70%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.85" />
            </linearGradient>

            {/* Accent Crystal Facet Gradient */}
            <linearGradient id="facFacetGlow" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7e22ce" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#d8b4fe" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#581c87" stopOpacity="0.85" />
            </linearGradient>

            {/* Soft Glow */}
            <filter id="facGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* 1. OUTER CHASSIS / 45-DEGREE CHAMFERED POLYGON (HOLLOW CENTER - EVENODD CUTOUT) */}
          {/* Fills ONLY the crystal frame border; portrait aperture is 100% hollow & transparent */}
          <path
            d="
              M 40,16 L 320,16 L 346,42 L 346,408 L 320,434 L 40,434 L 14,408 L 14,42 Z
              M 44,30 L 28,46 L 28,404 L 44,420 L 316,420 L 332,404 L 332,46 L 316,30 Z
            "
            fillRule="evenodd"
            fill="url(#facDeepBase)"
            stroke="url(#facCrystalPrimary)"
            strokeWidth="1.6"
            opacity="0.95"
          />

          {/* Outer Specular Ridge */}
          <polygon
            points="
              40,16 320,16 
              346,42 346,408 
              320,434 40,434 
              14,408 14,42
            "
            fill="none"
            stroke="url(#facSpecularWhite)"
            strokeWidth="1"
            strokeOpacity="0.7"
          />

          {/* Inner Picture Aperture Trim */}
          <polygon
            points="
              44,30 316,30 
              332,46 332,404 
              316,420 44,420 
              28,404 28,46
            "
            fill="none"
            stroke="url(#facSpecularWhite)"
            strokeWidth="1.3"
            strokeOpacity="0.8"
          />

          {/* 2. LATERAL CRYSTAL ACCENT GEMS (Mid-Height) */}
          <g filter="url(#facGlow)">
            <polygon
              points="14,205 2,225 14,245 20,225"
              fill="url(#facFacetGlow)"
              stroke="url(#facSpecularWhite)"
              strokeWidth="1"
            />
            <line x1="2" y1="225" x2="20" y2="225" stroke="#ffffff" strokeWidth="0.8" />
          </g>

          <g filter="url(#facGlow)">
            <polygon
              points="346,205 358,225 346,245 340,225"
              fill="url(#facFacetGlow)"
              stroke="url(#facSpecularWhite)"
              strokeWidth="1"
            />
            <line x1="340" y1="225" x2="358" y2="225" stroke="#ffffff" strokeWidth="0.8" />
          </g>

          {/* 3. FOUR CORNER CUT PRISMS */}
          <polygon
            points="14,42 40,16 46,22 20,48"
            fill="url(#facFacetGlow)"
            stroke="#ffffff"
            strokeWidth="0.8"
            strokeOpacity="0.8"
          />
          <polygon
            points="346,42 320,16 314,22 340,48"
            fill="url(#facFacetGlow)"
            stroke="#ffffff"
            strokeWidth="0.8"
            strokeOpacity="0.8"
          />
          <polygon
            points="14,408 40,434 46,428 20,402"
            fill="url(#facFacetGlow)"
            stroke="#ffffff"
            strokeWidth="0.8"
            strokeOpacity="0.8"
          />
          <polygon
            points="346,408 320,434 314,428 340,402"
            fill="url(#facFacetGlow)"
            stroke="#ffffff"
            strokeWidth="0.8"
            strokeOpacity="0.8"
          />

          {/* 4. REFINED TOP SECTION: CRYSTAL CHEVRON & AMETHYST DIAMOND */}
          <g filter="url(#facGlow)">
            <polygon
              points="80,16 135,6 180,12 165,18 95,20"
              fill="url(#facFacetGlow)"
              stroke="url(#facSpecularWhite)"
              strokeWidth="1"
            />
            <polygon
              points="280,16 225,6 180,12 195,18 265,20"
              fill="url(#facFacetGlow)"
              stroke="url(#facSpecularWhite)"
              strokeWidth="1"
            />

            <polygon
              points="180,2 202,16 180,30 158,16"
              fill="url(#facFacetGlow)"
              stroke="url(#facSpecularWhite)"
              strokeWidth="1.2"
            />
            <polygon
              points="180,2 202,16 180,18"
              fill="#ffffff"
              fillOpacity="0.45"
            />
            <circle cx="180" cy="16" r="2.5" fill="#ffffff" />
          </g>

          {/* 5. REFINED BOTTOM PLINTH & BASE PLATE */}
          <g filter="url(#facGlow)">
            <polygon
              points="110,422 250,422 258,442 102,442"
              fill="url(#facDeepBase)"
              stroke="url(#facSpecularWhite)"
              strokeWidth="1.2"
            />
            <polygon
              points="114,425 246,425 252,439 108,439"
              fill="#1e1035"
              fillOpacity="0.8"
              stroke="#a855f7"
              strokeWidth="0.8"
            />
            <polygon
              points="180,416 186,422 174,422"
              fill="#ffffff"
            />
          </g>

          {/* Corner Diagonal Refraction Lines */}
          <line x1="44" y1="30" x2="28" y2="46" stroke="#ffffff" strokeWidth="1.2" strokeOpacity="0.8" />
          <line x1="316" y1="30" x2="332" y2="46" stroke="#ffffff" strokeWidth="1.2" strokeOpacity="0.8" />
          <line x1="44" y1="420" x2="28" y2="404" stroke="#ffffff" strokeWidth="1.2" strokeOpacity="0.8" />
          <line x1="316" y1="420" x2="332" y2="404" stroke="#ffffff" strokeWidth="1.2" strokeOpacity="0.8" />
        </svg>

        {/* ========================================================================= */}
        {/* SPECULAR SHIMMER ON FRAME EDGES ONLY                                      */}
        {/* ========================================================================= */}
        <motion.div
          className="absolute -inset-[12px] sm:-inset-[14px] pointer-events-none z-15 overflow-hidden rounded-2xl"
          style={{
            maskImage: 'radial-gradient(ellipse at center, transparent 55%, black 72%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, transparent 55%, black 72%)',
          }}
          animate={
            isHovered
              ? { opacity: [0, 0.65, 0], x: ['-80%', '120%'] }
              : { opacity: 0, x: '-80%' }
          }
          transition={{ duration: 1.0, ease: 'easeInOut' }}
        >
          <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/35 to-transparent skew-x-12" />
        </motion.div>

        {/* ========================================================================= */}
        {/* BOTTOM CENTRAL PLAQUE: PROFESSIONAL ACADEMIC TYPOGRAPHY                   */}
        {/* ========================================================================= */}
        <div className="absolute bottom-[3px] sm:bottom-[6px] inset-x-0 flex justify-center z-20 pointer-events-none">
          <div className="px-3 py-0.5 flex items-center justify-center">
            <span className="font-sans text-[11px] sm:text-xs font-bold text-white tracking-wide drop-shadow-[0_2px_8px_rgba(255,255,255,0.7)]">
              {displayQualification}
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
