import React, { useState } from 'react';
import { studentsData } from '../data/students';
import { Student } from '../types';
import { ArrowUpRight } from 'lucide-react';
import { Modal } from '../components/Modal';

export const StudentLeadership: React.FC = () => {
  const [selectedLeader, setSelectedLeader] = useState<Student | null>(null);

  // President and Vice President / Core student leadership
  const president = studentsData[0];
  const vicePresident = {
    id: 'student-vp',
    name: 'Hariharan R.',
    role: 'Student Vice President & Technical Operations Lead',
    year: 'Final Year CSE',
    category: 'Campus Leaders' as const,
    achievement: 'Co-directed departmental hackathons, curriculum workshops, and managed inter-collegiate technical symposiums.',
    skills: ['Operations Leadership', 'Distributed Systems', 'Python', 'DevOps', 'Community Mentorship'],
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    bio: 'Dedicated to fostering collaborative peer learning, organizing competitive algorithmic leagues, and establishing industry partnerships for student projects.'
  };

  const leaders = [president, vicePresident];

  return (
    <section id="leadership" className="relative py-28 bg-[#06070a] text-[#f8fafc] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Index Marker */}
        <div className="flex items-center space-x-3 mb-10">
          <span className="font-mono text-xs text-purple-400 font-semibold tracking-widest">05</span>
          <div className="h-[1px] w-8 bg-white/20" />
          <span className="font-mono text-xs text-slate-400 uppercase tracking-[0.2em]">STUDENT LEADERSHIP</span>
        </div>

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-xl">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter text-white">
              Executive Student Leadership.
            </h2>
            <p className="text-sm font-mono text-slate-400">
              Steering FIST Association initiatives, peer circles, and national collegiate competitions.
            </p>
          </div>

          <span className="font-mono text-xs text-slate-400 uppercase tracking-widest hidden md:inline-block">
            ACADEMIC YEAR 2025 – 2026
          </span>
        </div>

        {/* Editorial Split Layout for President & Vice President (No repetitive card grid!) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {leaders.map((leader, idx) => (
            <div
              key={leader.id}
              onClick={() => setSelectedLeader(leader)}
              className="group cursor-pointer p-8 rounded-2xl bg-[#0c0e15] border border-white/[0.08] hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-sans bg-purple-950/60 border border-purple-500/30 text-purple-200 font-medium">
                    {idx === 0 ? 'Association President' : 'Association Vice President'}
                  </span>
                  <span className="text-xs font-sans text-slate-400 font-medium">
                    {leader.year}
                  </span>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden bg-black shrink-0 border border-white/10">
                    <img
                      src={leader.avatar}
                      alt={leader.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="space-y-1.5 flex-1">
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-200 transition-colors flex items-center justify-between">
                      <span>{leader.name}</span>
                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                    </h3>
                    <p className="text-xs font-sans text-purple-300 font-medium">
                      {leader.role}
                    </p>
                    <p className="text-xs font-sans text-slate-300 line-clamp-3 leading-relaxed pt-1">
                      {leader.achievement}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-sans text-slate-400">
                <span className="truncate max-w-[280px] text-slate-300">
                  {leader.skills.slice(0, 3).join(' • ')}
                </span>
                <span className="text-purple-300 font-medium">View Profile →</span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Inspection Drawer */}
        <Modal
          isOpen={!!selectedLeader}
          onClose={() => setSelectedLeader(null)}
          title={selectedLeader?.name}
          subtitle={`Student Leadership Profile • ${selectedLeader?.role}`}
        >
          {selectedLeader && (
            <div className="space-y-6">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-white/10 bg-black">
                <img
                  src={selectedLeader.avatar}
                  alt={selectedLeader.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/20 font-mono text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-400">Designation:</span>
                  <span className="text-white font-medium">{selectedLeader.role}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Year / Batch:</span>
                  <span className="text-slate-200">{selectedLeader.year}</span>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  Executive Brief & Contributions
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {selectedLeader.achievement}
                </p>
              </div>

              {selectedLeader.bio && (
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    Mentorship Vision
                  </h4>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {selectedLeader.bio}
                  </p>
                </div>
              )}

              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  Competencies & Core Leadership
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedLeader.skills.map((s) => (
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
