import React, { useState } from 'react';
import { facultyData } from '../data/faculty';
import { Faculty } from '../types';
import { ArrowUpRight } from 'lucide-react';
import { Modal } from '../components/Modal';
import { HodCrystalFrame } from '../components/HodCrystalFrame';
import { FacultyCrystalFrame } from '../components/FacultyCrystalFrame';

export const FacultySection: React.FC = () => {
  const [selectedFaculty, setSelectedFaculty] = useState<Faculty | null>(null);

  // Dedicated Head of the Department (HOD)
  const hod = facultyData[0];
  // Faculty Members
  const otherFaculty = facultyData.slice(1);

  return (
    <section id="faculty" className="relative py-32 bg-[#06070a] text-[#f8fafc] border-t border-white/[0.06] overflow-hidden">
      {/* Background ambient lighting accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-purple-700/10 rounded-full blur-[140px] pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[300px] bg-violet-800/10 rounded-full blur-[120px] pointer-events-none -z-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Index Marker */}
        <div className="flex items-center space-x-3 mb-10">
          <span className="font-mono text-xs text-purple-400 font-semibold tracking-widest">06</span>
          <div className="h-[1px] w-8 bg-white/20" />
          <span className="font-mono text-xs text-slate-400 uppercase tracking-[0.2em]">DEPARTMENT LEADERSHIP & FACULTY</span>
        </div>

        {/* 1. HEAD OF THE DEPARTMENT (Dedicated Prominent Academic Leadership Section) */}
        {hod && (
          <div
            onClick={() => setSelectedFaculty(hod)}
            className="group cursor-pointer mb-24 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0e0720]/90 via-[#0a0518]/95 to-[#06030e] border border-purple-500/25 hover:border-purple-400/50 shadow-[0_20px_60px_rgba(11,5,28,0.7)] hover:shadow-[0_25px_70px_rgba(147,51,234,0.2)] transition-all duration-500 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
          >
            {/* HOD Futuristic Crystal Profile Frame */}
            <div className="lg:col-span-5 flex justify-center py-2 sm:py-4">
              <HodCrystalFrame
                imageSrc={hod.photo}
                imageAlt={hod.name}
                qualification={hod.qualification}
                badgeText="HEAD OF THE DEPARTMENT [I/C]"
                className="w-full max-w-[360px] sm:max-w-[400px]"
              />
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
                  <div className="w-10 h-10 rounded-full bg-purple-950/60 border border-purple-500/30 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-all shadow-md">
                    <ArrowUpRight className="w-5 h-5 text-purple-300 group-hover:text-white transition-colors" />
                  </div>
                </h2>
                <p className="text-base font-sans text-purple-300 font-medium">
                  {hod.designation} — NSCET
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {hod.bio}
              </p>

              <div className="space-y-2 pt-1">
                <span className="text-xs font-sans uppercase tracking-wider text-purple-300/80 font-semibold block">
                  Research Domains & Specializations
                </span>
                <div className="flex flex-wrap gap-2">
                  {hod.areaOfExpertise.map((area) => (
                    <span
                      key={area}
                      className="text-xs font-sans font-medium px-3.5 py-1.5 rounded-lg bg-purple-950/60 text-purple-200 border border-purple-400/30 shadow-sm"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {hod.experience && (
                <div className="space-y-1.5 pt-1">
                  <span className="text-xs font-sans uppercase tracking-wider text-purple-300/80 font-semibold block">
                    Leadership & Academic Appointments
                  </span>
                  <div className="text-xs font-sans text-slate-300 space-y-1.5">
                    {hod.experience.map((exp) => (
                      <div key={exp} className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                        <span>{exp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-4 border-t border-purple-500/20 flex items-center justify-between text-xs font-sans text-slate-400">
                <span className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                  <span>Office: Department of CSE, NSCET</span>
                </span>
                <span className="text-purple-300 font-medium group-hover:text-purple-200 group-hover:underline transition-all">
                  View Full Academic Profile & Research →
                </span>
              </div>
            </div>
          </div>
        )}

        {/* 2. FACULTY MEMBERS (Refined Crystal Academic Cards) */}
        <div className="space-y-8">
          <div className="flex items-center justify-between pb-4 border-b border-purple-500/20">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-white font-display">
                Department Faculty Members
              </h3>
              <p className="text-sm font-sans text-slate-400 mt-1">
                Advisors, lab in-charges, and research mentors supporting FIST Association innovation tracks.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherFaculty.map((fac) => (
              <div
                key={fac.id}
                onClick={() => setSelectedFaculty(fac)}
                className="group cursor-pointer p-6 rounded-2xl bg-gradient-to-br from-[#0d071d]/90 via-[#090414]/95 to-[#06020c] border border-purple-500/20 hover:border-purple-400/50 shadow-lg hover:shadow-[0_12px_36px_rgba(147,51,234,0.18)] transition-all duration-300 space-y-5 flex flex-col justify-between"
              >
                {/* Faculty Futuristic Crystal Profile Frame */}
                <div className="w-full flex justify-center pt-1">
                  <FacultyCrystalFrame
                    imageSrc={fac.photo}
                    imageAlt={fac.name}
                    qualification={fac.qualification}
                    experience={fac.experience && fac.experience[0] ? fac.experience[0] : ''}
                    className="w-full max-w-[320px]"
                  />
                </div>

                <div className="space-y-2 flex-1 pt-1">
                  <h4 className="text-xl font-bold text-white group-hover:text-purple-200 transition-colors flex items-center justify-between">
                    <span>{fac.name}</span>
                    <ArrowUpRight className="w-4 h-4 text-purple-400 group-hover:text-white transition-colors" />
                  </h4>
                  <p className="text-xs font-sans text-purple-300 font-medium">
                    {fac.designation} — NSCET
                  </p>
                  <p className="text-xs font-sans text-slate-300 line-clamp-3 leading-relaxed pt-1">
                    {fac.bio}
                  </p>
                </div>

                <div className="pt-3 border-t border-purple-500/15 flex items-center justify-between text-xs font-sans text-slate-400">
                  <span className="truncate max-w-[180px] text-purple-200/90 font-medium">
                    {fac.areaOfExpertise[0]}
                  </span>
                  <span className="text-purple-300 font-medium group-hover:text-purple-200 group-hover:underline">
                    View Dossier →
                  </span>
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
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-purple-950/20 p-6 rounded-2xl border border-purple-500/25">
                {/* Modal Profile Frame */}
                <div className="md:col-span-5 flex justify-center py-2">
                  {selectedFaculty.id === 'hod-mathalai-raj' ? (
                    <HodCrystalFrame
                      imageSrc={selectedFaculty.photo}
                      imageAlt={selectedFaculty.name}
                      qualification={selectedFaculty.qualification}
                      badgeText="HEAD OF DEPARTMENT [I/C]"
                      className="w-full max-w-[280px]"
                    />
                  ) : (
                    <FacultyCrystalFrame
                      imageSrc={selectedFaculty.photo}
                      imageAlt={selectedFaculty.name}
                      qualification={selectedFaculty.qualification}
                      experience={selectedFaculty.experience && selectedFaculty.experience[0] ? selectedFaculty.experience[0] : ''}
                      className="w-full max-w-[260px]"
                    />
                  )}
                </div>

                <div className="md:col-span-7 space-y-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                      {selectedFaculty.name}
                    </h3>
                    <p className="text-sm font-sans text-purple-300 font-medium mt-1">
                      {selectedFaculty.designation} — Department of CSE
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
                          className="px-3 py-1 rounded-full bg-purple-900/50 text-purple-200 border border-purple-400/40 text-xs font-medium"
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
                      className="px-3.5 py-1.5 rounded-lg bg-purple-950/40 border border-purple-500/25 text-xs font-sans text-purple-200 font-medium"
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
                        <span className="text-emerald-400 font-bold">✓</span>
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
                      <li key={pat} className="p-3 rounded-lg bg-purple-950/30 border border-purple-500/30 text-xs text-purple-200">
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
