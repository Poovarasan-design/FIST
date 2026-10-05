import React from 'react';
import { motion } from 'framer-motion';
import { careerPathwayData, industryDestinations } from '../data/careerPath';
import { GraduationCap, Hammer, Lightbulb, Briefcase, Crown, ArrowRight, Compass, CheckCircle } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  GraduationCap,
  Hammer,
  Lightbulb,
  Briefcase,
  Crown,
};

export const CareerPathway: React.FC = () => {
  return (
    <section id="pathway" className="relative py-24 bg-[#0a0c14] text-white overflow-hidden border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-fist-purple-950/80 border border-fist-purple-500/40 text-xs font-mono text-fist-cyan-300 mb-4">
            <Compass className="w-3.5 h-3.5 text-fist-cyan-400" />
            <span>PROGRESSION MATRIX & INDUSTRY READINESS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white mb-6">
            From Campus to <span className="text-gradient-purple">Industry</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            A purposeful development path that shapes curious engineering matriculates into world-class software professionals 
            and community leaders.
          </p>
        </div>

        {/* 5-Stage Evolution Pathway */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mb-20">
          {careerPathwayData.map((item, idx) => {
            const Icon = iconMap[item.icon] || GraduationCap;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative p-6 rounded-2xl bg-[#0f121d] border border-slate-800 hover:border-fist-purple-500/60 hover:bg-[#131728] transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-fist-purple-400 group-hover:text-fist-cyan-300">
                      STEP {item.step}
                    </span>
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-fist-cyan-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold font-display text-white mb-1 group-hover:text-fist-purple-300 transition-colors">
                    {item.stage}
                  </h3>

                  <p className="text-xs font-mono text-fist-cyan-300 mb-3">
                    {item.roleDescription}
                  </p>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {item.keyAction}
                  </p>
                </div>

                <div>
                  <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 font-mono">
                    <span className="text-slate-500 block mb-1">Outcome:</span>
                    <span className="text-slate-200">{item.outcome}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Industry Destinations Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#121524] via-[#10121d] to-[#121524] border border-slate-800 shadow-xl">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-2">
              Where FIST Technocrats Make Their Mark
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-mono">
              Diverse career trajectories unlocked by hands-on engineering experience
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {industryDestinations.map((dest) => (
              <div
                key={dest.title}
                className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-center flex flex-col items-center justify-center hover:border-fist-cyan-500/40 transition-colors"
              >
                <div className="text-xs font-bold text-white mb-1">
                  {dest.title}
                </div>
                <div className="text-[10px] font-mono text-fist-cyan-400 uppercase">
                  {dest.count}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
