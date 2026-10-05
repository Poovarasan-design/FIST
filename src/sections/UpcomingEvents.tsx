import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { upcomingEventsData } from '../data/events';
import { Calendar, Clock, MapPin, Sparkles, ArrowRight, Ticket, CheckCircle2, QrCode } from 'lucide-react';

interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

function calculateTimeLeft(targetDateStr: string): CountdownState {
  const difference = +new Date(targetDateStr) - +new Date();
  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
  }
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    isExpired: false,
  };
}

export const UpcomingEvents: React.FC = () => {
  const hasUpcoming = upcomingEventsData && upcomingEventsData.length > 0;
  const primaryEvent = hasUpcoming ? upcomingEventsData[0] : null;
  const [countdown, setCountdown] = useState<CountdownState>(() =>
    primaryEvent ? calculateTimeLeft(primaryEvent.date) : { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true }
  );

  useEffect(() => {
    if (!primaryEvent) return;
    const timer = setInterval(() => {
      setCountdown(calculateTimeLeft(primaryEvent.date));
    }, 1000);
    return () => clearInterval(timer);
  }, [primaryEvent]);

  return (
    <section className="relative py-24 bg-[#080911] text-white overflow-hidden border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-fist-cyan-400 mb-4">
              <Ticket className="w-3.5 h-3.5 text-fist-cyan-400" />
              <span>OFFICIAL STUDENT REGISTRATION PORTAL</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white mb-4">
              Next Event <span className="text-gradient-cyan">Passes.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300">
              Register early for upcoming coding hackathons, AI masterclasses, and the annual departmental symposium.
            </p>
          </div>
        </div>

        {!hasUpcoming ? (
          <div className="p-12 rounded-3xl bg-[#0f121d] border border-slate-800 text-center max-w-xl mx-auto">
            <Sparkles className="w-8 h-8 text-fist-purple-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white mb-1">More exciting events are coming soon.</h3>
            <p className="text-xs sm:text-sm text-slate-400 font-mono">
              The student committee is finalizing the schedule for upcoming workshops.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Primary Event: Authentic Event Pass Ticket Stub Design */}
            {primaryEvent && (
              <div className="rounded-3xl bg-gradient-to-r from-[#0d101d] via-[#101424] to-[#0d101d] border border-fist-purple-500/40 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
                {/* Left Ticket Stub (Date Block & Tear-line) */}
                <div className="lg:col-span-3 bg-[#090b14] p-8 flex flex-col justify-between items-center text-center border-b lg:border-b-0 lg:border-r border-dashed border-slate-700/80 relative">
                  {/* Decorative ticket cutouts */}
                  <div className="hidden lg:block absolute -top-3.5 -right-3.5 w-7 h-7 rounded-full bg-[#080911] border border-slate-900" />
                  <div className="hidden lg:block absolute -bottom-3.5 -right-3.5 w-7 h-7 rounded-full bg-[#080911] border border-slate-900" />

                  <div className="w-full">
                    <span className="px-3 py-1 rounded-full bg-fist-purple-950 border border-fist-purple-500/30 text-[10px] font-mono text-fist-cyan-300 uppercase tracking-widest font-bold">
                      {primaryEvent.category}
                    </span>

                    <div className="mt-6 mb-2">
                      <div className="text-4xl sm:text-5xl font-black font-display text-white">
                        15
                      </div>
                      <div className="text-sm font-bold font-mono text-fist-cyan-400 uppercase tracking-widest">
                        NOVEMBER
                      </div>
                      <div className="text-xs font-mono text-slate-500">
                        2026
                      </div>
                    </div>
                  </div>

                  <div className="w-full pt-4 border-t border-slate-800 text-xs font-mono text-slate-400 space-y-1">
                    <div className="flex items-center justify-center space-x-1">
                      <Clock className="w-3.5 h-3.5 text-fist-purple-400" />
                      <span>{primaryEvent.time || '09:00 AM'}</span>
                    </div>
                    <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
                      Pass Status: {primaryEvent.registrationStatus}
                    </div>
                  </div>
                </div>

                {/* Middle Ticket Body (Event Details & Countdown) */}
                <div className="lg:col-span-6 p-7 sm:p-9 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-2">
                      {primaryEvent.name}
                    </h3>

                    <div className="flex items-center space-x-2 text-xs font-mono text-slate-400 mb-4">
                      <MapPin className="w-4 h-4 text-fist-orange" />
                      <span>{primaryEvent.location}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                      {primaryEvent.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {primaryEvent.highlights.map((h, i) => (
                        <div key={i} className="flex items-center space-x-2 text-xs text-slate-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-fist-cyan-400 flex-shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Countdown Timer */}
                  <div className="pt-4 border-t border-slate-800">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block mb-2">
                      Event Gates Open In:
                    </span>
                    <div className="grid grid-cols-4 gap-2 text-center max-w-sm">
                      {[
                        { label: 'Days', val: countdown.days },
                        { label: 'Hours', val: countdown.hours },
                        { label: 'Mins', val: countdown.minutes },
                        { label: 'Secs', val: countdown.seconds },
                      ].map((slot) => (
                        <div key={slot.label} className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                          <div className="text-lg sm:text-xl font-bold font-mono text-fist-cyan-300">
                            {String(slot.val).padStart(2, '0')}
                          </div>
                          <div className="text-[9px] font-mono uppercase text-slate-500">{slot.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Ticket Action & QR Preview */}
                <div className="lg:col-span-3 bg-[#0a0c16] p-7 sm:p-8 flex flex-col justify-between items-center text-center border-t lg:border-t-0 lg:border-l border-dashed border-slate-700/80">
                  <div className="w-full">
                    <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 inline-block mb-3">
                      <QrCode className="w-16 h-16 text-fist-cyan-400 mx-auto" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block">
                      Student Badge Pass
                    </span>
                    <span className="text-xs font-mono text-slate-300 font-bold">
                      FIST-SYMP-2026
                    </span>
                  </div>

                  <a
                    href="#contact"
                    className="w-full mt-6 py-3.5 px-4 rounded-xl font-bold font-mono text-xs text-white bg-gradient-to-r from-fist-purple-600 to-fist-cyan-600 hover:from-fist-purple-500 hover:to-fist-cyan-500 transition-all shadow-lg flex items-center justify-center space-x-2"
                  >
                    <span>Claim Student Pass</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
