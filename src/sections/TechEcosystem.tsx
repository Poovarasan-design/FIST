import React, { useState } from 'react';
import { technologiesData } from '../data/technologies';
import { TechnologyItem } from '../types';

const categories = [
  'All',
  'Languages',
  'Frontend & Web',
  'Backend & Cloud',
  'AI & Data Science',
  'Hardware & Immersive',
  'DevOps & Tools',
] as const;

export const TechEcosystem: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [hoveredTech, setHoveredTech] = useState<TechnologyItem | null>(technologiesData[0] || null);

  const filtered = activeCategory === 'All'
    ? technologiesData
    : technologiesData.filter(t => t.category === activeCategory);

  return (
    <section id="technologies" className="relative py-32 bg-[#06070a] text-[#f8fafc] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Index Marker */}
        <div className="flex items-center space-x-3 mb-10">
          <span className="font-mono text-xs text-purple-400 font-semibold tracking-widest">04</span>
          <div className="h-[1px] w-8 bg-white/20" />
          <span className="font-mono text-xs text-slate-400 uppercase tracking-[0.25em]">TECHNOLOGY ARSENAL</span>
        </div>

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tighter text-white max-w-xl">
            Technologies we engineer with.
          </h2>
          <p className="text-sm font-mono text-slate-400 max-w-sm">
            Interactive technology wall spanning systems programming, cloud microservices, and spatial engines.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap items-center gap-2 pb-8 border-b border-white/[0.06] mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono tracking-wider uppercase transition-colors cursor-pointer ${
                activeCategory === cat
                  ? 'bg-white text-slate-950 font-medium'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Low-Density Interactive Technology Wall (Replaces 20+ giant cards!) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Clean Interactive Text Wall */}
          <div className="lg:col-span-8 flex flex-wrap gap-x-6 gap-y-4">
            {filtered.map((item) => (
              <span
                key={item.name}
                onMouseEnter={() => setHoveredTech(item)}
                className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight cursor-pointer transition-all duration-200 select-none ${
                  hoveredTech?.name === item.name
                    ? 'text-white translate-x-1 underline decoration-purple-400 decoration-2 underline-offset-8'
                    : 'text-[#52525b] hover:text-[#a1a1aa]'
                }`}
              >
                {item.name}
                <span className="text-white/[0.1] font-normal ml-6 text-xl">/</span>
              </span>
            ))}
          </div>

          {/* Right: Floating Inspection Dossier (Appears on hover) */}
          <div className="lg:col-span-4 sticky top-28">
            <div className="p-6 rounded-2xl bg-[#0c0e15] border border-white/[0.08] min-h-[220px] flex flex-col justify-between">
              {hoveredTech ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                    <span className="font-mono text-xs text-purple-400 font-semibold tracking-wider uppercase">
                      {hoveredTech.category}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded bg-white/[0.04]">
                      {hoveredTech.proficiencyLevel || 'Core Mastery'}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold font-display text-white">
                    {hoveredTech.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {hoveredTech.description}
                  </p>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center text-center h-full py-10 space-y-2 text-slate-400">
                  <span className="font-mono text-xs uppercase tracking-wider">
                    HOVER A TECHNOLOGY TO INSPECT
                  </span>
                  <p className="text-xs text-slate-500">
                    Explore runtime engines, neural frameworks, and hardware pipelines.
                  </p>
                </div>
              )}

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Ecosystem: FIST-DEPT-CSE</span>
                <span className="text-purple-300">Active Stack</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
