import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { pastEventsData, upcomingEventsData } from '../data/events';
import { EventItem } from '../types';
import { ArrowUpRight, Calendar, MapPin } from 'lucide-react';
import { Modal } from '../components/Modal';

export const Events: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  // Combine upcoming and past into a unified chronological editorial timeline
  const allEvents = [...upcomingEventsData, ...pastEventsData];

  return (
    <section id="events" className="relative py-32 bg-[#06070a] text-[#f8fafc] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Index Marker */}
        <div className="flex items-center space-x-3 mb-10">
          <span className="font-mono text-xs text-purple-400 font-semibold tracking-widest">03</span>
          <div className="h-[1px] w-8 bg-white/20" />
          <span className="font-mono text-xs text-slate-400 uppercase tracking-[0.25em]">ASSOCIATION CALENDAR</span>
        </div>

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tighter text-white max-w-xl">
            Sprints, Hackathons & Conclaves.
          </h2>
          <p className="text-sm font-mono text-slate-400 max-w-sm">
            Continuous technical tracks hosted to stress-test software design and competitive programming.
          </p>
        </div>

        {/* Clean Editorial Calendar Timeline (Replaces bulky cards!) */}
        <div className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
          {allEvents.map((ev, idx) => (
            <div
              key={ev.id || idx}
              onClick={() => setSelectedEvent(ev)}
              className="group cursor-pointer py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline hover:bg-white/[0.015] px-4 rounded-lg transition-colors"
            >
              {/* Col 1: Date Monogram */}
              <div className="md:col-span-3 font-mono">
                <span className="text-sm font-bold text-white block">
                  {ev.date}
                </span>
                <span className="text-xs text-slate-400 mt-0.5 block">
                  {ev.time || 'All Day'}
                </span>
              </div>

              {/* Col 2: Event Title & Category */}
              <div className="md:col-span-6 space-y-1.5">
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] font-mono tracking-wider uppercase text-purple-400 font-semibold">
                    {ev.category}
                  </span>
                  {ev.isUpcoming && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30 text-emerald-400">
                      UPCOMING
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold font-display text-white group-hover:text-purple-200 transition-colors flex items-center space-x-2">
                  <span>{ev.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100" />
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed">
                  {ev.description}
                </p>
              </div>

              {/* Col 3: Location & Inspect CTA */}
              <div className="md:col-span-3 flex md:flex-col md:items-end justify-between font-mono text-xs text-slate-400">
                <span className="flex items-center space-x-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span className="truncate max-w-[160px]">{ev.location}</span>
                </span>
                <span className="text-purple-300 group-hover:underline text-[11px] mt-2 hidden md:inline-block">
                  VIEW DOSSIER →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Detail Inspection Drawer */}
        <Modal
          isOpen={!!selectedEvent}
          onClose={() => setSelectedEvent(null)}
          title={selectedEvent?.name}
          subtitle={`ASSOCIATION LOG • ${selectedEvent?.category}`}
        >
          {selectedEvent && (
            <div className="space-y-6">
              <div className="p-4 rounded-lg bg-black/40 border border-white/5 font-mono text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-[#8b8b93]">Date & Time:</span>
                  <span className="text-white">{selectedEvent.date} {selectedEvent.time ? `• ${selectedEvent.time}` : ''}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8b8b93]">Location:</span>
                  <span className="text-white">{selectedEvent.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8b8b93]">Status:</span>
                  <span className="text-emerald-400">{selectedEvent.registrationStatus || 'Completed'}</span>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#8b8b93] font-semibold">
                  Event Brief
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {selectedEvent.description}
                </p>
              </div>

              {selectedEvent.highlights && (
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#8b8b93] font-semibold">
                    Track Highlights
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {selectedEvent.highlights.map((h, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <span className="text-indigo-400 font-mono mt-0.5">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
};
