import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonialsData } from '../data/testimonials';
import { Quote, ChevronLeft, ChevronRight, MessageSquare, Sparkles } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const current = testimonialsData[currentIndex];

  return (
    <section className="relative py-24 bg-[#07080d] text-white overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-fist-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-fist-purple-950/80 border border-fist-purple-500/40 text-xs font-mono text-fist-cyan-300 mb-4">
            <MessageSquare className="w-3.5 h-3.5 text-fist-cyan-400" />
            <span>COMMUNITY PERSPECTIVES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white mb-4">
            Voices of <span className="text-gradient-cyan">FIST</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            Hear from students, successful alumni, and faculty mentors who have experienced the transformative impact of the fraternity.
          </p>
        </div>

        {/* Carousel Card */}
        <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#121524] to-[#0c0e18] border border-fist-purple-500/40 shadow-2xl">
          <Quote className="w-12 h-12 text-fist-purple-500/30 mb-6" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-6"
            >
              <p className="text-base sm:text-xl font-normal text-slate-200 leading-relaxed italic">
                {current.quote}
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-slate-800">
                <div className="flex items-center space-x-4">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="w-12 h-12 rounded-xl object-cover border border-fist-purple-500/50"
                  />
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white">{current.name}</h4>
                    <p className="text-xs font-mono text-fist-cyan-300">
                      {current.role} • {current.type}
                    </p>
                    <span className="text-[11px] font-mono text-slate-400">
                      {current.batchOrDept} {current.currentCompanyOrPursuit ? `• ${current.currentCompanyOrPursuit}` : ''}
                    </span>
                  </div>
                </div>

                {/* Navigation arrows */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={prev}
                    aria-label="Previous testimonial"
                    className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-fist-purple-400 text-slate-300 hover:text-white transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next testimonial"
                    className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-fist-cyan-400 text-slate-300 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonialsData.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === i ? 'w-8 bg-fist-cyan-400' : 'w-2 bg-slate-700'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
