import React, { useState } from 'react';
import { facultyData } from '../data/faculty';
import { Faculty } from '../types';
import { ArrowUpRight } from 'lucide-react';
import { Modal } from '../components/Modal';

export const FacultySection: React.FC = () => {
  const [selectedFaculty, setSelectedFaculty] = useState<Faculty | null>(null);

  // Dedicated Head of the Department (HOD)
  const hod = facultyData[0];
  // Faculty Members
  const otherFaculty = facultyData.slice(1);

  return (
    <section id="faculty" className="relative py-32 bg-[#06070a] text-[#f8fafc] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Index Marker */}
        <div className="flex items-center space-x-3 mb-10">
          <span className="font-mono text-xs text-purple-400 font-semibold tracking-widest">06</span>
          <div className="h-[1px] w-8 bg-white/20" />
          <span className="font-mono text-xs text-slate-400 uppercase tracking-[0.2em]">DEPARTMENT LEADERSHIP & FACULTY</span>
        </div>

        {/* 1. HEAD OF THE DEPARTMENT (Dedicated Prominent Academic Section) */}
        {hod && (
          <div
            onClick={() => setSelectedFaculty(hod)}
            className="group cursor-pointer mb-24 p-8 sm:p-10 rounded-2xl bg-[#0c0e15] border border-white/[0.08] hover:border-purple-500/40 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
          >
            {/* HOD Portrait Frame */}
            <div className="lg:col-span-5 relative aspect-[4/5] rounded-xl overflow-hidden bg-black border border-white/10">
              <img
                src={hod.photo}
                alt={hod.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase bg-purple-950/80 border border-purple-500/40 text-purple-300 font-semibold">
                  HEAD OF THE DEPARTMENT
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-slate-300">
                <span>{hod.qualification}</span>
                {hod.publicationsCount && (
                  <span className="text-purple-300">{hod.publicationsCount} Indexed Publications</span>
                )}
              </div>
            </div>

            {/* HOD Editorial Dossier */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-1.5">
                <span className="text-xs font-mono text-purple-400 uppercase tracking-widest font-semibold block">
                  DEPARTMENT OF COMPUTER SCIENCE & ENGINEERING
                </span>
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white group-hover:text-purple-200 transition-colors flex items-center justify-between">
                  <span>{hod.name}</span>
                  <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                </h2>
                <p className="text-sm font-mono text-cyan-300">
                  {hod.designation}
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {hod.bio}
              </p>

              <div className="space-y-2 pt-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                  Areas of Academic Expertise
                </span>
                <div className="flex flex-wrap gap-2">
                  {hod.areaOfExpertise.map((area) => (
                    <span
                      key={area}
                      className="text-xs font-mono px-3 py-1 rounded bg-white/[0.04] text-slate-200 border border-white/[0.08]"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Office: Department of CSE</span>
                <span className="text-purple-400 font-medium">VIEW FULL ACADEMIC PROFILE →</span>
              </div>
            </div>
          </div>
        )}

        {/* 2. FACULTY MEMBERS (Clean Academic Directory) */}
        <div className="space-y-8">
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-white font-display">
                Department Faculty Members
              </h3>
              <p className="text-xs font-mono text-slate-400 mt-1">
                Advisors, lab in-charges, and research mentors supporting FIST Association innovation tracks.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherFaculty.map((fac) => (
              <div
                key={fac.id}
                onClick={() => setSelectedFaculty(fac)}
                className="group cursor-pointer p-6 rounded-xl bg-[#0c0e15] border border-white/[0.08] hover:border-purple-500/40 transition-all duration-300 space-y-5"
              >
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-black border border-white/10">
                  <img
                    src={fac.photo}
                    alt={fac.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-slate-300">
                    <span>{fac.qualification}</span>
                    {fac.publicationsCount && <span>{fac.publicationsCount} Papers</span>}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h4 className="text-lg font-bold text-white group-hover:text-purple-200 transition-colors flex items-center justify-between">
                    <span>{fac.name}</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                  </h4>
                  <p className="text-xs font-mono text-purple-300">
                    {fac.designation}
                  </p>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed pt-1">
                    {fac.bio}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>{fac.areaOfExpertise[0]}</span>
                  <span className="text-purple-400">INSPECT →</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Inspection Drawer */}
        <Modal
          isOpen={!!selectedFaculty}
          onClose={() => setSelectedFaculty(null)}
          title={selectedFaculty?.name}
          subtitle={`FACULTY SCHOLARSHIP • ${selectedFaculty?.designation}`}
        >
          {selectedFaculty && (
            <div className="space-y-6">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-white/10 bg-black">
                <img
                  src={selectedFaculty.photo}
                  alt={selectedFaculty.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/20 font-mono text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-400">Designation:</span>
                  <span className="text-white">{selectedFaculty.designation}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Qualification:</span>
                  <span className="text-white">{selectedFaculty.qualification}</span>
                </div>
                {selectedFaculty.email && (
                  <div className="flex justify-between">
                    <span className="text-slate-400">Official Email:</span>
                    <span className="text-cyan-300">{selectedFaculty.email}</span>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  Biography & Scholarly Direction
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {selectedFaculty.bio}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  Areas of Expertise
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedFaculty.areaOfExpertise.map((area) => (
                    <span
                      key={area}
                      className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-200"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
};
