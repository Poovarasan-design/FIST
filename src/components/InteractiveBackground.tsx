import React, { useEffect, useRef } from 'react';

/**
 * Linear / Vercel Ambient Spotlight Interaction:
 * A subtle, natural 500px light beam that smoothly tracks the cursor on the dark canvas.
 * Zero lag, zero gimmicky particles, pure refined atmosphere.
 */
export const InteractiveBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      containerRef.current.style.setProperty('--mouse-x', `${clientX}px`);
      containerRef.current.style.setProperty('--mouse-y', `${clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={
        {
          '--mouse-x': '-500px',
          '--mouse-y': '-500px',
        } as React.CSSProperties
      }
    >
      {/* Precision hairline grid */}
      <div className="absolute inset-0 linear-grid opacity-80" />

      {/* Subtle cursor spotlight */}
      <div
        className="absolute inset-0 transition-opacity duration-300 opacity-60"
        style={{
          background: `radial-gradient(650px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.035), transparent 80%)`,
        }}
      />
    </div>
  );
};
