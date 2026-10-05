import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, FolderGit2, Users } from 'lucide-react';

interface CallToActionProps {
  onExploreProjects: () => void;
  onJoinClick: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onExploreProjects, onJoinClick }) => {
  return (
    <section className="relative py-28 bg-[#0a0c14] text-white overflow-hidden border-t border-slate-900">
      {/* Dynamic ambient radial gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gradient-to-r from-fist-purple-600/20 via-fist-cyan-500/15 to-fist-orange/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Subtle logo emblem badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-fist-purple-500/40 text-xs font-mono text-fist-cyan-300 mb-8 shadow-xl"
        >
          <img src="/fist-logo.jpg" alt="FIST Logo" className="w-5 h-5 rounded-full object-contain" />
          <span>FIST ASSOCIATION • COMPUTER SCIENCE & ENGINEERING</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white mb-6 leading-tight"
        >
          Your Next Idea <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-fist-purple-400 via-fist-cyan-300 to-white">
            Could Start Here.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 font-normal"
        >
          Learn. Build. Collaborate. Innovate with <strong className="text-white">FIST</strong>. 
          Step into a department where you don't just study code — you build systems that matter.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={onExploreProjects}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-8 py-4 rounded-xl font-bold text-sm tracking-wide text-white bg-gradient-to-r from-fist-purple-600 via-fist-purple-500 to-fist-cyan-500 hover:from-fist-purple-500 hover:to-fist-cyan-400 shadow-xl shadow-fist-purple-950/60 transition-all duration-300 hover:scale-[1.03] border border-fist-purple-400/40"
          >
            <FolderGit2 className="w-4 h-4 text-fist-cyan-300" />
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onJoinClick}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-8 py-4 rounded-xl font-bold text-sm tracking-wide text-slate-200 bg-slate-900/80 hover:bg-slate-800 hover:text-white border border-slate-700 hover:border-fist-cyan-400 shadow-lg transition-all duration-300 hover:scale-[1.02]"
          >
            <Users className="w-4 h-4 text-fist-purple-400" />
            <span>Join the Journey</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
