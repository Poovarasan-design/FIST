import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { newsData } from '../data/news';
import { NewsItem } from '../types';
import { Bell, Calendar, ArrowRight, Sparkles, ExternalLink } from 'lucide-react';
import { Modal } from '../components/Modal';

export const NewsUpdates: React.FC = () => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  return (
    <section id="news" className="relative py-24 bg-[#0a0c14] text-white overflow-hidden border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-fist-purple-950/80 border border-fist-purple-500/40 text-xs font-mono text-fist-cyan-300 mb-4">
            <Bell className="w-3.5 h-3.5 text-fist-cyan-400" />
            <span>COMMUNIQUÉS & ANNOUNCEMENTS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white mb-6">
            Latest from <span className="text-gradient-purple">FIST</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Official announcements, symposium invitations, grant achievements, and research paper calls from 
            the CSE Department.
          </p>
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {newsData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              onClick={() => setSelectedNews(item)}
              className="group p-6 rounded-2xl bg-[#0f121d] border border-slate-800/90 hover:border-fist-purple-500/50 hover:bg-[#131726] transition-all duration-300 cursor-pointer shadow-lg hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-fist-purple-950 text-fist-cyan-300 border border-fist-purple-500/30">
                    {item.badge || item.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400 flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{item.date}</span>
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold font-display text-white mb-2.5 group-hover:text-fist-cyan-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed mb-6">
                  {item.shortDescription}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono text-[11px]">{item.author}</span>
                <span className="text-fist-cyan-400 font-mono text-[11px] group-hover:underline flex items-center space-x-1">
                  <span>Read Full Notice</span>
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for Full News Article */}
        <Modal
          isOpen={!!selectedNews}
          onClose={() => setSelectedNews(null)}
          title={selectedNews?.title}
          subtitle={`Published: ${selectedNews?.date} • ${selectedNews?.author}`}
        >
          {selectedNews && (
            <div className="space-y-4">
              <div className="p-3 rounded-lg bg-fist-purple-950/60 border border-fist-purple-500/30 text-xs font-mono text-fist-cyan-300">
                Category: {selectedNews.category}
              </div>

              <div className="text-slate-200 text-sm leading-relaxed whitespace-pre-line">
                {selectedNews.content}
              </div>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
};
