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
            <div className="lg:col-span-5 relative aspect-[4/5] rounded-xl overflow-hidden bg-black border border-white/10 shadow-2xl">
              <img
                src={hod.photo}
                alt={hod.name}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-sans tracking-wide bg-purple-950/90 border border-purple-500/40 text-purple-200 font-semibold shadow-lg backdrop-blur-md">
                  HEAD OF THE DEPARTMENT [I/C]
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-sans text-slate-200">
                <span className="font-semibold text-white">{hod.qualification}</span>
                {hod.awards && hod.awards[0] && (
                  <span className="text-purple-300 bg-purple-950/60 px-2.5 py-0.5 rounded border border-purple-500/30 text-[11px] font-medium">
                    {hod.awards[0]}
                  </span>
                )}
              </div>
            </div>

            {/* HOD Editorial Dossier */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-xs font-sans text-purple-400 font-semibold uppercase tracking-wider">
                  <span>DEPARTMENT OF COMPUTER SCIENCE & ENGINEERING</span>
                  <span>•</span>
                  <span>NSCET</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white group-hover:text-purple-200 transition-colors flex items-center justify-between">
                  <span>{hod.name}</span>
                  <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                </h2>
                <p className="text-base font-sans text-purple-300 font-medium">
                  {hod.designation} — NSCET
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {hod.bio}
              </p>

              <div className="space-y-2 pt-1">
                <span className="text-xs font-sans uppercase tracking-wider text-slate-400 font-semibold block">
                  Research Domains & Specializations
                </span>
                <div className="flex flex-wrap gap-2">
                  {hod.areaOfExpertise.map((area) => (
                    <span
                      key={area}
                      className="text-xs font-sans font-medium px-3 py-1.5 rounded-lg bg-purple-950/40 text-purple-200 border border-purple-500/30 shadow-sm"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {hod.experience && (
                <div className="space-y-1.5 pt-1">
                  <span className="text-xs font-sans uppercase tracking-wider text-slate-400 font-semibold block">
                    Leadership & Academic Appointments
                  </span>
                  <div className="text-xs font-sans text-slate-300 space-y-1">
                    {hod.experience.map((exp) => (
                      <div key={exp} className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                        <span>{exp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-sans text-slate-400">
                <span>Office: Department of CSE, NSCET</span>
                <span className="text-purple-400 font-medium hover:text-purple-300 transition-colors">
                  View Full Academic Profile & Research →
                </span>
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
              <p className="text-sm font-sans text-slate-400 mt-1">
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
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-sans text-slate-300">
                    <span>{fac.qualification}</span>
                    {fac.publicationsCount && <span>{fac.publicationsCount} Papers</span>}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h4 className="text-lg font-bold text-white group-hover:text-purple-200 transition-colors flex items-center justify-between">
                    <span>{fac.name}</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                  </h4>
                  <p className="text-xs font-sans text-purple-300 font-medium">
                    {fac.designation}
                  </p>
                  <p className="text-xs font-sans text-slate-300 line-clamp-2 leading-relaxed pt-1">
                    {fac.bio}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-sans text-slate-400">
                  <span>{fac.areaOfExpertise[0]}</span>
                  <span className="text-purple-400 font-medium">View Profile →</span>
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
          subtitle={`Faculty Academic Profile • ${selectedFaculty?.designation}`}
          maxWidth="max-w-4xl"
        >
          {selectedFaculty && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-purple-950/15 p-5 rounded-2xl border border-purple-500/20">
                <div className="md:col-span-4 relative aspect-[4/5] rounded-xl overflow-hidden border border-white/10 bg-black shadow-lg">
                  <img
                    src={selectedFaculty.photo}
                    alt={selectedFaculty.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <div className="md:col-span-8 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white font-display">
                      {selectedFaculty.name}
                    </h3>
                    <p className="text-sm font-sans text-purple-300 font-medium">
                      {selectedFaculty.designation}
                    </p>
                    <p className="text-xs text-slate-300 mt-1">
                      {selectedFaculty.qualification}
                    </p>
                  </div>

                  {selectedFaculty.email && (
                    <div className="text-xs font-sans text-slate-300 flex items-center space-x-2">
                      <span className="text-slate-400">Email:</span>
                      <a href={`mailto:${selectedFaculty.email}`} className="text-purple-300 hover:underline">
                        {selectedFaculty.email}
                      </a>
                    </div>
                  )}

                  {selectedFaculty.awards && selectedFaculty.awards.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {selectedFaculty.awards.map((award) => (
                        <span
                          key={award}
                          className="px-3 py-1 rounded-full bg-purple-900/40 text-purple-200 border border-purple-400/30 text-xs font-medium"
                        >
                          🏆 {award}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Professional Summary */}
              <div className="space-y-2">
                <h4 className="text-xs font-sans uppercase tracking-wider text-purple-400 font-semibold">
                  Professional Summary
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {selectedFaculty.bio}
                </p>
              </div>

              {/* Research Domains & Specializations */}
              <div className="space-y-2">
                <h4 className="text-xs font-sans uppercase tracking-wider text-purple-400 font-semibold">
                  Research Domains & Specializations
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedFaculty.areaOfExpertise.map((area) => (
                    <span
                      key={area}
                      className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-sans text-slate-200 font-medium"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Professional Experience */}
              {selectedFaculty.experience && selectedFaculty.experience.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-xs font-sans uppercase tracking-wider text-purple-400 font-semibold">
                    Professional Experience
                  </h4>
                  <ul className="space-y-1.5 text-sm text-slate-300">
                    {selectedFaculty.experience.map((exp) => (
                      <li key={exp} className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                        <span>{exp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Selected Publications */}
              {selectedFaculty.selectedPublications && selectedFaculty.selectedPublications.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-xs font-sans uppercase tracking-wider text-purple-400 font-semibold">
                    Selected Publications
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {selectedFaculty.selectedPublications.map((pub) => (
                      <li key={pub} className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] text-xs leading-relaxed text-slate-200">
                        📄 {pub}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Funded Projects & Consultancy */}
              {selectedFaculty.fundedProjects && selectedFaculty.fundedProjects.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-xs font-sans uppercase tracking-wider text-purple-400 font-semibold">
                    Funded Projects & Consultancy
                  </h4>
                  <ul className="space-y-1.5 text-sm text-slate-300">
                    {selectedFaculty.fundedProjects.map((proj) => (
                      <li key={proj} className="flex items-start space-x-2 text-xs">
                        <span className="text-emerald-400">✓</span>
                        <span>{proj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Patents & Innovations */}
              {selectedFaculty.patents && selectedFaculty.patents.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-xs font-sans uppercase tracking-wider text-purple-400 font-semibold">
                    Patents & Innovations
                  </h4>
                  <ul className="space-y-1.5 text-sm text-slate-300">
                    {selectedFaculty.patents.map((pat) => (
                      <li key={pat} className="p-3 rounded-lg bg-purple-950/20 border border-purple-500/20 text-xs text-purple-200">
                        💡 {pat}
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
