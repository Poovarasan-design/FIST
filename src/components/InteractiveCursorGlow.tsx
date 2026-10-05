import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * Interactive Ambient Cursor Glow.
 * Softly tracks cursor position across the entire viewport,
 * casting a subtle purple aura for a premium interactive feel.
 * Ignores pointer events and disables on touch screens.
 */
export const InteractiveCursorGlow: React.FC = () => {
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  const springConfig = { damping: 30, stiffness: 220, mass: 0.6 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable on pointer-capable devices (skip touch screens)
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        x: smoothX,
        y: smoothY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      className="fixed top-0 left-0 w-[450px] h-[450px] rounded-full pointer-events-none z-[1] opacity-40 blur-[120px] bg-radial from-purple-500/20 via-indigo-600/10 to-transparent mix-blend-screen hidden md:block"
    />
  );
};
