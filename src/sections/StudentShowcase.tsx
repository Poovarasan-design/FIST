import React, { useState } from 'react';
import { studentsData } from '../data/students';
import { Student } from '../types';
import { ArrowUpRight, Github, Linkedin } from 'lucide-react';
import { Modal } from '../components/Modal';

export const StudentShowcase: React.FC = () => {
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [hoveredStudent, setHoveredStudent] = useState<Student | null>(null);

  return (
    <section id="roster" className="relative py-32 bg-[#050507] text-[#f5f5f7] border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Index Marker */}
        <div className="flex items-center space-x-3 mb-10">
          <span className="font-mono text-xs text-indigo-400 font-semibold tracking-widest">05</span>
          <div className="h-[1px] w-8 bg-white/20" />
          <span className="font-mono text-xs text-[#8b8b93] uppercase tracking-[0.2em]">STUDENT ROSTER</span>
        </div>

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter text-white max-w-xl">
            People behind the association.
          </h2>
          <p className="text-sm font-mono text-[#8b8b93] max-w-sm">
            Student directors, algorithmic contenders, spatial VR builders, and open-source contributors.
          </p>
        </div>

        {/* Editorial Roster Layout (Replaces repetitive 3-column profile cards!) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Clean Numbered Roster List */}
          <div className="lg:col-span-8 divide-y divide-white/[0.06] border-y border-white/[0.06]">
            {studentsData.map((student, idx) => (
              <div
                key={student.id}
                onMouseEnter={() => setHoveredStudent(student)}
                onClick={() => setSelectedStudent(student)}
                className="group cursor-pointer py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-white/[0.015] px-3 rounded-lg transition-colors"
              >
                <div className="flex items-center space-x-6">
                  <span className="font-mono text-xs text-[#8b8b93]">
                    {idx < 9 ? `0${idx + 1}` : idx + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors flex items-center space-x-2">
                      <span>{student.name}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#8b8b93] group-hover:text-white opacity-0 group-hover:opacity-100 transition-all" />
                    </h3>
                    <span className="text-xs font-mono text-[#8b8b93] mt-0.5 block">
                      {student.role} • {student.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-4 font-mono text-xs text-[#8b8b93]">
                  <span className="hidden sm:inline-block max-w-[200px] truncate">
                    {student.achievement}
                  </span>
                  <span className="text-white text-[11px] px-2 py-0.5 rounded bg-white/[0.04]">
                    {student.year}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Floating Portrait Frame (Hover Reactive) */}
          <div className="lg:col-span-4 sticky top-28 hidden lg:block">
            <div className="p-6 rounded-xl bg-[#090a0f] border border-white/[0.08] min-h-[380px] flex flex-col justify-between">
              {hoveredStudent ? (
                <div className="space-y-5">
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-black border border-white/10">
                    <img
                      src={hoveredStudent.avatar}
                      alt={hoveredStudent.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-white font-display">
                      {hoveredStudent.name}
                    </h4>
                    <p className="text-xs font-mono text-indigo-400 mt-0.5">
                      {hoveredStudent.role}
                    </p>
                  </div>

                  <p className="text-xs text-[#8b8b93] line-clamp-2 leading-relaxed">
                    {hoveredStudent.achievement}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.06]">
                    {hoveredStudent.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center text-center h-full py-20 space-y-2 text-[#8b8b93]">
                  <span className="font-mono text-xs uppercase tracking-wider">
                    HOVER A SQUAD MEMBER
                  </span>
                  <p className="text-xs text-[#52525b]">
                    Explore engineering focus and collegiate honors.
                  </p>
                </div>
              )}

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-[#8b8b93]">
                <span>Roster: Active Engineers</span>
                <span>FIST CSE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Slide-over Inspection Sheet */}
        <Modal
          isOpen={!!selectedStudent}
          onClose={() => setSelectedStudent(null)}
          title={selectedStudent?.name}
          subtitle={`ENGINEERING ROSTER • ${selectedStudent?.role}`}
        >
          {selectedStudent && (
            <div className="space-y-6">
              <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10 bg-black">
                <img
                  src={selectedStudent.avatar}
                  alt={selectedStudent.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#8b8b93] font-semibold">
                  Key Honors & Contribution
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {selectedStudent.achievement}
                </p>
              </div>

              {selectedStudent.bio && (
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#8b8b93] font-semibold">
                    Background
                  </h4>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {selectedStudent.bio}
                  </p>
                </div>
              )}

              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#8b8b93] font-semibold">
                  Technical Competencies
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedStudent.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-200"
                    >
                      {s}
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
