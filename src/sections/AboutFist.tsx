import React from 'react';
import { motion } from 'framer-motion';
import { fistEvolutionSteps } from '../data/timeline';
import { Shield, BookOpen, Code, Trophy, Sparkles, Rocket, Users, Target, Lightbulb, Zap, Binary } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Shield,
  BookOpen,
  Code,
  Trophy,
  Sparkles,
  Rocket,
};

const fistValues = [
  {
    icon: Users,
    title: 'Peer Learning Culture',
    desc: 'Senior student coders mentor incoming juniors in weekly problem-solving circles, breaking down complex concepts into accessible insights.'
  },
  {
    icon: Target,
    title: 'Production Software',
    desc: 'Moving beyond theoretical assignments to architect live systems, interactive tools, and community software with modern industry stacks.'
  },
  {
    icon: Zap,
    title: 'Competitive Benchmark',
    desc: 'Prepping students for high-octane 24-hr hackathons, algorithmic leagues, coding marathons, and collegiate technology symposiums.'
  },
  {
    icon: Lightbulb,
    title: 'Pioneering Research',
    desc: 'Incubating cutting-edge projects like FIST VR DSA — transforming fundamental engineering pedagogy through immersive spatial computing.'
  }
];

export const AboutFist: React.FC = () => {
  return (
    <section id="about-fist" className="relative py-24 bg-[#090a0f] text-slate-100 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Editorial Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/10 text-xs font-mono text-indigo-400">
              <Binary className="w-3.5 h-3.5" />
              <span>THE FIST GUILD ARCHITECTURE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              An Engineering Guild <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-indigo-100 to-cyan-300">
                Run by Builders, for Builders.
              </span>
            </h2>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              <strong className="text-white font-medium">FIST (Fraternity of Immortal Software Technocrats)</strong> is the active student engineering association of the Department of Computer Science & Engineering. We bridge the critical gap between university curriculum and real-world software architecture.
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Inside FIST, students discover technical interests, find hackathon teams, deploy full-stack microservices, explore spatial computing, and gain the engineering leadership required to excel in Tier-1 software roles.
            </p>
          </div>

          {/* Right Emblem Plaque */}
          <div className="lg:col-span-4">
            <div className="p-6 rounded-2xl bg-[#0e111a] border border-white/[0.08] shadow-fine flex flex-col items-center text-center space-y-4">
              <img
                src="/fist-logo.jpg"
                alt="FIST Official Logo"
                className="w-24 h-24 object-contain rounded-xl border border-white/10 shadow-lg"
              />
              <div>
                <h3 className="text-lg font-bold font-display text-white">
                  F.I.S.T.
                </h3>
                <p className="text-[11px] font-mono text-indigo-400 uppercase tracking-wider mt-0.5">
                  Fraternity of Immortal Software Technocrats
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.06] w-full flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>CSE DIVISION</span>
                <span>•</span>
                <span>STUDENT GUILD</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Focus Areas (Refined precision cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {fistValues.map((val) => {
            const Icon = val.icon;
            return (
              <div
                key={val.title}
                className="p-5 rounded-xl bg-[#0e111a] border border-white/[0.06] hover:border-indigo-500/40 transition-colors space-y-3"
              >
                <div className="p-2 rounded-lg bg-white/5 border border-white/5 text-indigo-400 w-fit">
                  <Icon className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold font-display text-white">
                  {val.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  {val.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Engineering Progression Matrix */}
        <div className="pt-10 border-t border-white/[0.06]">
          <div className="mb-10 space-y-1">
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold">
              Development Lifecycle
            </span>
            <h3 className="text-2xl font-bold font-display text-white">
              The 5-Stage Evolution Pipeline
            </h3>
            <p className="text-xs font-mono text-slate-400">
              Learn → Build → Innovate → Compete → Lead
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {fistEvolutionSteps.map((step) => {
              const Icon = iconMap[step.icon] || Sparkles;
              return (
                <div
                  key={step.step}
                  className="p-6 rounded-xl bg-[#0e111a] border border-white/[0.06] hover:border-white/20 transition-all space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-slate-500">
                      PHASE 0{step.step}
                    </span>
                    <div className="p-1.5 rounded-lg bg-white/5 text-indigo-400">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 block">
                    {step.phase}
                  </span>

                  <h4 className="text-base font-bold font-display text-white">
                    {step.title}
                  </h4>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
