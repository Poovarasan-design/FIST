import React from 'react';
import { motion } from 'framer-motion';
import { departmentStats } from '../data/stats';

export const AboutDepartment: React.FC = () => {
  // Key editorial statistics moments
  const highlightStats = [
    { value: '480+', label: 'STUDENTS', sub: 'Enrolled across active batches in CSE' },
    { value: '65+', label: 'PROJECTS', sub: 'Production systems, apps & hardware modules' },
    { value: '38+', label: 'ACHIEVEMENTS', sub: 'Won at state & national technical symposiums' },
    { value: '45+', label: 'EVENTS', sub: 'Hands-on hackathons and engineering conclaves' },
  ];

  return (
    <section id="identity" className="relative py-32 bg-[#06070a] text-[#f8fafc] border-t border-white/[0.06] overflow-hidden">
      {/* Subtle purple radiance */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-purple-900/[0.06] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Index Marker */}
        <div className="flex items-center space-x-3 mb-12">
          <span className="font-mono text-xs text-purple-400 font-semibold tracking-widest">01</span>
          <div className="h-[1px] w-8 bg-white/20" />
          <span className="font-mono text-xs text-slate-400 uppercase tracking-[0.25em]">DEPARTMENT IDENTITY</span>
        </div>

        {/* Large Editorial Identity Statement */}
        <div className="max-w-4xl space-y-8 mb-28">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-white leading-[1.05]">
            An engineering laboratory designed for the next generation of builders.
          </h2>

          <p className="text-base sm:text-xl text-slate-400 font-normal leading-relaxed max-w-2xl">
            We operate beyond standard classroom theory. Undergraduates train neural inference pipelines, 
            develop distributed microservices, test spatial VR simulations, and ship production software from day one.
          </p>
        </div>

        {/* Editorial Statistics Moments (Not a repetitive card grid, but high-impact typographic moments) */}
        <div className="mb-28 py-14 border-y border-white/[0.07]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {highlightStats.map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-3"
              >
                <div className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-white font-mono">
                  {item.value}
                </div>
                <div className="font-mono text-xs text-purple-300 font-semibold tracking-[0.2em] uppercase">
                  {item.label}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-normal max-w-[220px]">
                  {item.sub}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Four Minimal Identity Pillars with Generous Whitespace */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pt-4">
          <div className="space-y-3">
            <span className="font-mono text-xs text-slate-500 uppercase tracking-widest block">01 / CAPABILITY</span>
            <h3 className="text-2xl font-bold text-white font-display">BUILDERS</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Moving past hello-world assignments to engineer live systems, compilers, and production cloud architectures.
            </p>
          </div>

          <div className="space-y-3">
            <span className="font-mono text-xs text-slate-500 uppercase tracking-widest block">02 / MASTERY</span>
            <h3 className="text-2xl font-bold text-white font-display">LEARNERS</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Continuous peer-mentored problem-solving circles breaking down complex algorithms into practical intuition.
            </p>
          </div>

          <div className="space-y-3">
            <span className="font-mono text-xs text-slate-500 uppercase tracking-widest block">03 / INQUIRY</span>
            <h3 className="text-2xl font-bold text-white font-display">RESEARCHERS</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Undergraduate publications, spatial computing investigations, and sandboxed distributed cluster testing.
            </p>
          </div>

          <div className="space-y-3">
            <span className="font-mono text-xs text-slate-500 uppercase tracking-widest block">04 / INVENT</span>
            <h3 className="text-2xl font-bold text-white font-display">CREATORS</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Inventing novel pedagogical tools like FIST VR DSA to transform computer science education globally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
