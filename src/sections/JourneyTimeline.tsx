import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { journeyMilestones } from '../data/timeline';
import { Flag, Terminal, Award, Glasses, Globe, Calendar, CheckCircle2, ChevronRight, Layers } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Flag,
  Terminal,
  Award,
  Glasses,
  Globe,
};

export const JourneyTimeline: React.FC = () => {
  const [selectedMilestone, setSelectedMilestone] = useState<string>(journeyMilestones[journeyMilestones.length - 1].year);

  return (
    <section id="journey" className="relative py-24 bg-[#0a0c14] text-white overflow-hidden border-t border-slate-900">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-fist-purple-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-fist-purple-950/80 border border-fist-purple-500/30 text-xs font-mono text-fist-cyan-300 mb-4">
            <Layers className="w-3.5 h-3.5 text-fist-cyan-400" />
            <span>OUR CHRONOLOGY & MILESTONES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white mb-6">
            The Journey of <span className="text-gradient-purple">Excellence</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            From humble beginnings to a renowned student innovation hub. Track the key milestones that shaped the 
            fraternity into a powerhouse of builders and thinkers.
          </p>
        </div>

        {/* Desktop Interactive Horizontal Timeline Navigator */}
        <div className="hidden lg:block mb-12">
          <div className="relative flex items-center justify-between pb-8">
            {/* Horizontal Connecting Rail */}
            <div className="absolute top-6 left-12 right-12 h-1 bg-slate-800 rounded-full z-0">
              <div
                className="h-full bg-gradient-to-r from-fist-purple-600 via-fist-cyan-400 to-fist-orange transition-all duration-500"
                style={{
                  width: `${
                    (journeyMilestones.findIndex((m) => m.year === selectedMilestone) /
                      (journeyMilestones.length - 1)) *
                    100
                  }%`,
                }}
              />
            </div>

            {journeyMilestones.map((m) => {
              const isSelected = selectedMilestone === m.year;
              const Icon = iconMap[m.icon] || Flag;
              return (
                <button
                  key={m.year}
                  onClick={() => setSelectedMilestone(m.year)}
                  className="relative z-10 flex flex-col items-center group focus:outline-none"
                >
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      isSelected
                        ? 'bg-gradient-to-br from-fist-purple-600 to-fist-cyan-500 text-white shadow-lg shadow-fist-cyan-500/30 scale-110 border-2 border-white'
                        : 'bg-[#141724] border border-slate-700 text-slate-400 hover:text-white hover:border-fist-purple-400'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`mt-3 text-sm font-bold font-mono transition-colors ${
                      isSelected ? 'text-fist-cyan-300' : 'text-slate-400 group-hover:text-slate-200'
                    }`}
                  >
                    {m.year}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                    {m.phase}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Milestone Display Panel */}
          <AnimatePresence mode="wait">
            {journeyMilestones
              .filter((m) => m.year === selectedMilestone)
              .map((m) => {
                const Icon = iconMap[m.icon] || Flag;
                return (
                  <motion.div
                    key={m.year}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35 }}
                    className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#121522] to-[#0c0e18] border border-fist-purple-500/40 shadow-2xl relative"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                      <div className="lg:col-span-8">
                        <div className="flex items-center space-x-3 mb-4">
                          <span className="px-3 py-1 rounded-full bg-fist-purple-900/60 border border-fist-purple-400/40 text-xs font-mono font-bold text-fist-cyan-300">
                            YEAR {m.year}
                          </span>
                          <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
                            Phase: {m.phase}
                          </span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-4">
                          {m.title}
                        </h3>
                        <p className="text-slate-300 text-base leading-relaxed mb-6">
                          {m.description}
                        </p>
                      </div>

                      <div className="lg:col-span-4 bg-[#171b2d] p-6 rounded-2xl border border-slate-800">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-fist-cyan-400 mb-4 flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Key Phase Highlights</span>
                        </h4>
                        <ul className="space-y-3">
                          {m.highlights.map((item, i) => (
                            <li key={i} className="flex items-center space-x-2.5 text-sm text-slate-200">
                              <span className="w-1.5 h-1.5 rounded-full bg-fist-purple-400" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
          </AnimatePresence>
        </div>

        {/* Mobile / Tablet Vertical Timeline */}
        <div className="block lg:hidden relative pl-6 border-l-2 border-slate-800 space-y-10">
          {journeyMilestones.map((m, idx) => {
            const Icon = iconMap[m.icon] || Flag;
            return (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative"
              >
                {/* Timeline node */}
                <div className="absolute -left-[35px] top-1 w-8 h-8 rounded-full bg-gradient-to-br from-fist-purple-600 to-fist-cyan-500 border-2 border-[#0a0c14] flex items-center justify-center text-white text-xs">
                  <Icon className="w-3.5 h-3.5" />
                </div>

                <div className="p-6 rounded-2xl bg-[#121522] border border-slate-800/80 shadow-md">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-fist-cyan-400">
                      {m.year} • {m.phase}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold font-display text-white mb-2">
                    {m.title}
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">
                    {m.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {m.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
