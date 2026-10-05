import React from 'react';
import { motion } from 'framer-motion';
import { impactMetrics } from '../data/stats';
import { CountUp } from '../components/CountUp';
import { Activity, Clock, Code, Zap, Award, Layers, HeartHandshake } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Clock,
  Code,
  Zap,
  Award,
  Layers,
  HeartHandshake,
};

export const ImpactStats: React.FC = () => {
  return (
    <section className="relative py-24 bg-[#07080d] text-white overflow-hidden border-t border-slate-900">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-fist-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-fist-purple-950/80 border border-fist-purple-500/40 text-xs font-mono text-fist-cyan-300 mb-4">
            <Activity className="w-3.5 h-3.5 text-fist-orange" />
            <span>MEASURABLE OUTCOMES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white mb-6">
            The Numbers Behind Our <span className="text-gradient-cyan">Impact</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Real software built, competitive awards secured, and thousands of hours dedicated to technical mastery.
          </p>
        </div>

        {/* Metric Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 sm:gap-6">
          {impactMetrics.map((item, idx) => {
            const Icon = iconMap[item.icon] || Activity;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-[#0f121d] border border-slate-800/80 hover:border-fist-purple-500/50 hover:bg-[#141727] transition-all duration-300 text-center flex flex-col items-center justify-between shadow-lg"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-fist-cyan-400 mb-3">
                  <Icon className="w-5 h-5" />
                </div>

                <div className="text-3xl sm:text-4xl font-extrabold font-display text-transparent bg-clip-text bg-gradient-to-r from-fist-purple-400 via-fist-cyan-300 to-white mb-1">
                  <CountUp end={item.value} duration={2400} suffix={item.suffix} />
                </div>

                <div className="text-xs sm:text-sm font-bold text-white mb-1">
                  {item.label}
                </div>

                <div className="text-[10px] font-mono text-slate-400">
                  {item.description}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
