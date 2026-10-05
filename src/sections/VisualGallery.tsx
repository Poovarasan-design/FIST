import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryData } from '../data/gallery';
import { GalleryItem } from '../types';
import { Image as ImageIcon, X, ChevronLeft, ChevronRight, Sparkles, ZoomIn } from 'lucide-react';

const categories = [
  'All',
  'Events',
  'Hackathons',
  'Workshops',
  'Projects',
  'Achievements',
  'Students',
  'Faculty',
  'Association'
] as const;

export const VisualGallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeTab === 'All'
    ? galleryData
    : galleryData.filter(g => g.category === activeTab);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filtered.length);
  };

  const prevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    if (lightboxIndex !== null) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filtered.length]);

  return (
    <section id="gallery" className="relative py-24 bg-[#07080d] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-fist-purple-950/80 border border-fist-purple-500/40 text-xs font-mono text-fist-cyan-300 mb-4">
            <ImageIcon className="w-3.5 h-3.5 text-fist-cyan-400" />
            <span>VISUAL CHRONICLE & MOMENTS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white mb-6">
            Life at <span className="text-gradient-cyan">FIST</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            A visual retrospective capturing late-night hackathon brainstorming, VR demonstration labs, 
            symposium keynote sessions, and camaraderie.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeTab === cat
                  ? 'bg-gradient-to-r from-fist-purple-600 to-fist-cyan-600 text-white shadow-md border border-fist-purple-400/40 font-semibold'
                  : 'bg-[#121522] text-slate-400 hover:text-white hover:bg-[#181c2e] border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filtered.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => openLightbox(index)}
                className="group relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 hover:border-fist-purple-500/50 cursor-pointer shadow-lg aspect-[4/3]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-fist-cyan-400 mb-1">
                    {item.category} • {item.date}
                  </span>
                  <h3 className="text-sm font-bold font-display text-white line-clamp-1 group-hover:text-fist-purple-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-slate-300 line-clamp-2 mt-1">
                    {item.caption}
                  </p>
                </div>

                <div className="absolute top-3 right-3 p-2 rounded-xl bg-black/60 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <ZoomIn className="w-4 h-4 text-fist-cyan-400" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Fullscreen Lightbox Modal via Portal */}
        {typeof document !== 'undefined' &&
          createPortal(
            <AnimatePresence>
              {lightboxIndex !== null && filtered[lightboxIndex] && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4 sm:p-8 backdrop-blur-xl"
                  onClick={closeLightbox}
                >
                  {/* Close Button */}
                  <button
                    onClick={closeLightbox}
                    className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white z-50 transition-colors focus:outline-none focus:ring-2 focus:ring-fist-cyan-400"
                    aria-label="Close lightbox"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  {/* Prev Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white z-50 transition-colors focus:outline-none focus:ring-2 focus:ring-fist-cyan-400"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  {/* Next Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white z-50 transition-colors focus:outline-none focus:ring-2 focus:ring-fist-cyan-400"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  {/* Center Content */}
                  <div
                    className="max-w-5xl w-full flex flex-col items-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <motion.img
                      key={filtered[lightboxIndex].id}
                      initial={{ scale: 0.92, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      src={filtered[lightboxIndex].image}
                      alt={filtered[lightboxIndex].title}
                      className="max-h-[75vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl border border-fist-purple-500/30"
                    />

                    <div className="mt-4 text-center max-w-2xl px-4">
                      <div className="text-xs font-mono text-fist-cyan-400 uppercase tracking-widest mb-1">
                        {filtered[lightboxIndex].category} • {filtered[lightboxIndex].date}
                      </div>
                      <h3 className="text-lg font-bold font-display text-white">
                        {filtered[lightboxIndex].title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 mt-1">
                        {filtered[lightboxIndex].caption}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>,
            document.body
          )}
      </div>
    </section>
  );
};
