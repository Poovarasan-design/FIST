import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { achievementsData } from '../data/achievements';
import { Achievement } from '../types';
import { Trophy, ArrowUpRight, Sparkles } from 'lucide-react';
import { Modal } from '../components/Modal';

/**
 * 3D Crystal Card with dynamic mouse-tilt and holographic light reflection.
 */
const CrystalAchievementCard: React.FC<{
  item: Achievement;
  onClick: () => void;
}> = ({ item, onClick }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, glareX: 50, glareY: 50 });

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -9; // Max 9 deg tilt
    const rotY = ((x - centerX) / centerX) * 9;
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTilt({ x: rotX, y: rotY, glareX, glareY });
  };

  const onMouseLeave = () => {
    setTilt({ x: 0, y: 0, glareX: 50, glareY: 50 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
      className="crystal-card relative p-7 rounded-2xl cursor-pointer flex flex-col justify-between overflow-hidden group select-none min-h-[260px]"
    >
      {/* Holographic light reflection sheen */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(192, 132, 252, 0.22) 0%, rgba(56, 189, 248, 0.08) 45%, transparent 70%)`,
        }}
      />

      {/* Top Header */}
      <div className="relative z-10 space-y-3">
        <div className="flex items-center justify-between">
          <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest bg-purple-950/60 border border-purple-500/30 text-purple-300 font-semibold flex items-center space-x-1.5 shadow-sm">
            <Trophy className="w-3 h-3 text-purple-300" />
            <span>{item.prize}</span>
          </span>
          <span className="font-mono text-xs text-slate-400 font-medium">
            {item.year}
          </span>
        </div>

        <h3 className="text-xl font-bold font-display text-white group-hover:text-purple-200 transition-colors flex items-center justify-between pt-1">
          <span>{item.title}</span>
          <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors shrink-0 ml-2" />
        </h3>

        <p className="text-xs font-mono text-cyan-300">
          {item.competition}
        </p>

        <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed font-normal pt-1">
          {item.description}
        </p>
      </div>

      {/* Bottom Contributor Roster */}
      <div className="relative z-10 pt-5 mt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-slate-400">
        <span className="truncate max-w-[200px] text-slate-300">
          {item.team.join(', ')}
        </span>
        <span className="text-[11px] text-purple-400 font-semibold uppercase tracking-wider">
          {item.category}
        </span>
      </div>
    </div>
  );
};

export const Achievements: React.FC = () => {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  return (
    <section id="achievements" className="relative py-32 bg-[#06070a] text-[#f8fafc] border-t border-white/[0.06]">
      {/* Subtle purple atmosphere glow */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] rounded-full bg-purple-900/[0.08] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Index Marker */}
        <div className="flex items-center space-x-3 mb-10">
          <span className="font-mono text-xs text-purple-400 font-semibold tracking-widest">08</span>
          <div className="h-[1px] w-8 bg-white/20" />
          <span className="font-mono text-xs text-slate-400 uppercase tracking-[0.2em]">HONORS & PODIUM RECOGNITIONS</span>
        </div>

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-xl">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter text-white">
              Student Achievements & Victories.
            </h2>
            <p className="text-sm font-mono text-slate-400 leading-relaxed">
              Benchmarked at 36-hr national hackathons, collegiate championships, and algorithmic research tracks.
            </p>
          </div>

          <div className="text-xs font-mono text-purple-300 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 flex items-center space-x-2">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>28 Podiums Across State & National Leagues</span>
          </div>
        </div>

        {/* Translucent Crystal / Holographic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {achievementsData.map((item) => (
            <CrystalAchievementCard
              key={item.id}
              item={item}
              onClick={() => setSelectedAchievement(item)}
            />
          ))}
        </div>

        {/* Slide-over Inspection Sheet */}
        <Modal
          isOpen={!!selectedAchievement}
          onClose={() => setSelectedAchievement(null)}
          title={selectedAchievement?.title}
          subtitle={`HONOR RECORD • ${selectedAchievement?.category}`}
        >
          {selectedAchievement && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/20 font-mono text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-400">Competition:</span>
                  <span className="text-white font-medium">{selectedAchievement.competition}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Award Standing:</span>
                  <span className="text-purple-300 font-semibold">{selectedAchievement.prize}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Year:</span>
                  <span className="text-slate-300">{selectedAchievement.year}</span>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  Executive Summary
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {selectedAchievement.description}
                </p>
              </div>

              <div className="space-y-2.5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  Winning Engineers
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedAchievement.team.map((member) => (
                    <span
                      key={member}
                      className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-200"
                    >
                      {member}
                    </span>
                  ))}
                </div>
              </div>

              {selectedAchievement.technologyUsed && selectedAchievement.technologyUsed.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    Technologies Deployed
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedAchievement.technologyUsed.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-black/40 border border-white/10 text-[11px] font-mono text-cyan-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
};
