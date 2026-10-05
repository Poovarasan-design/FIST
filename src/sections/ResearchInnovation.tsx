import React from 'react';
import { motion } from 'framer-motion';
import { researchAreasData } from '../data/research';
import { BrainCircuit, Eye, Glasses, Cpu, Cloud, BarChart3, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  BrainCircuit,
  Eye,
  Glasses,
  Cpu,
  Cloud,
  BarChart3,
};

export const ResearchInnovation: React.FC = () => {
  return (
    <section id="research" className="relative py-24 bg-[#0a0c14] text-white overflow-hidden border-t border-slate-900">
      {/* Ambient background glow */}
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-fist-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-fist-purple-950/80 border border-fist-purple-500/40 text-xs font-mono text-fist-cyan-300 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-fist-cyan-400" />
            <span>FRONTIER INQUIRY & SCIENTIFIC RIGOR</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white mb-6">
            Research. Experiment. <span className="text-gradient-purple">Innovate.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            FIST incubates undergraduate research that challenges convention. We experiment with spatial computing, 
            train custom deep neural networks, and investigate edge systems.
          </p>
        </div>

        {/* Research Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {researchAreasData.map((area, idx) => {
            const Icon = iconMap[area.icon] || BrainCircuit;
            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative p-7 rounded-2xl bg-[#0f121d] border border-slate-800/90 hover:border-fist-purple-500/50 hover:bg-[#131726] transition-all duration-300 shadow-xl hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-fist-cyan-400 group-hover:text-fist-purple-300 group-hover:border-fist-cyan-400/40 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-fist-purple-950 text-fist-cyan-300 border border-fist-purple-500/30">
                      {area.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-display text-white mb-1.5 group-hover:text-fist-cyan-300 transition-colors">
                    {area.title}
                  </h3>

                  <p className="text-xs font-mono text-fist-purple-300 mb-4">
                    {area.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {area.description}
                  </p>
                </div>

                <div>
                  <div className="pt-4 border-t border-slate-800">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-2">
                      Key Research Topics:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {area.focusTopics.map((topic) => (
                        <span
                          key={topic}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
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
