import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  maxWidth?: string;
}

/**
 * Premium Centered Modal Dialog with Body Portal.
 * Eliminates stacking context bugs, covers full viewport above navbar (z-[9999]),
 * features smooth backdrop blur, keyboard accessibility (ESC), and locked body scroll.
 */
export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  maxWidth = 'max-w-3xl',
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Fullscreen Backdrop Scrim */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-0"
            aria-hidden="true"
          />

          {/* Centered Modal Panel */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ type: 'spring', damping: 28, stiffness: 350 }}
            role="dialog"
            aria-modal="true"
            className={`relative w-full ${maxWidth} max-h-[90vh] bg-[#0c0d16] text-[#f5f5f7] border border-purple-500/30 rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.85)] flex flex-col z-10 overflow-hidden`}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between px-6 py-5 border-b border-white/[0.08] bg-[#10121d]/95 backdrop-blur-md sticky top-0 z-20">
              <div className="space-y-1 pr-6">
                {subtitle && (
                  <div className="text-[11px] font-mono uppercase tracking-widest text-purple-300 font-semibold">
                    {subtitle}
                  </div>
                )}
                {title && (
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white font-display">
                    {title}
                  </h3>
                )}
              </div>

              <button
                onClick={onClose}
                aria-label="Close modal"
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 shrink-0 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body with internal scroll */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-sm text-slate-300 max-h-[calc(90vh-90px)]">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};

