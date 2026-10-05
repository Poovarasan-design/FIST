import React, { useState } from 'react';
import { testimonialsData } from '../data/testimonials';
import { ArrowUpRight } from 'lucide-react';
import { Modal } from '../components/Modal';

export const AlumniSection: React.FC = () => {
  const [selectedAlumni, setSelectedAlumni] = useState<any | null>(null);

  // Filter existing alumni records from available testimonials data
  const alumniList = testimonialsData.filter((t) => t.type === 'Alumni');

  return (
    <section id="alumni" className="relative py-28 bg-[#06070a] text-[#f8fafc] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Index Marker */}
        <div className="flex items-center space-x-3 mb-10">
          <span className="font-mono text-xs text-purple-400 font-semibold tracking-widest">07</span>
          <div className="h-[1px] w-8 bg-white/20" />
          <span className="font-mono text-xs text-slate-400 uppercase tracking-[0.2em]">ALUMNI & GRADUATE NETWORK</span>
        </div>

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-xl">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter text-white">
              Department Alumni.
            </h2>
            <p className="text-sm font-mono text-slate-400">
              Students who engineered inside FIST and are now advancing technology across global organizations.
            </p>
          </div>

          <span className="font-mono text-xs text-purple-300 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/30">
            Global Tech Engineering Network
          </span>
        </div>

        {/* Clean Editorial Layout for Alumni (No repetitive card wall!) */}
        <div className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
          {alumniList.map((alumnus) => (
            <div
              key={alumnus.id}
              onClick={() => setSelectedAlumni(alumnus)}
              className="group cursor-pointer py-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-white/[0.015] px-4 rounded-xl transition-colors"
            >
              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-black shrink-0 border border-white/10">
                  <img
                    src={alumnus.avatar}
                    alt={alumnus.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-200 transition-colors flex items-center space-x-2">
                    <span>{alumnus.name}</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                  </h3>
                  <p className="text-xs font-mono text-cyan-300">
                    {alumnus.role} • {alumnus.currentCompanyOrPursuit || 'Industry Tech Leader'}
                  </p>
                </div>
              </div>

              <div className="md:max-w-md text-xs text-slate-400 leading-relaxed font-normal italic">
                {alumnus.quote}
              </div>

              <div className="font-mono text-xs text-slate-400 shrink-0">
                <span className="px-3 py-1 rounded bg-white/[0.04] border border-white/10 text-slate-300">
                  {alumnus.batchOrDept}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Drawer */}
        <Modal
          isOpen={!!selectedAlumni}
          onClose={() => setSelectedAlumni(null)}
          title={selectedAlumni?.name}
          subtitle={`ALUMNI PROFILE • ${selectedAlumni?.batchOrDept}`}
        >
          {selectedAlumni && (
            <div className="space-y-6">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-white/10 bg-black">
                <img
                  src={selectedAlumni.avatar}
                  alt={selectedAlumni.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/20 font-mono text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-400">Current Role:</span>
                  <span className="text-white font-medium">{selectedAlumni.role}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Organization:</span>
                  <span className="text-cyan-300">{selectedAlumni.currentCompanyOrPursuit || 'Top Tech Firm'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Graduation:</span>
                  <span className="text-slate-200">{selectedAlumni.batchOrDept}</span>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  Alumni Perspective on FIST
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed italic">
                  {selectedAlumni.quote}
                </p>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
};
