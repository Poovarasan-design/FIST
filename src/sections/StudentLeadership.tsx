import React, { useState } from 'react';
import { Student } from '../types';
import { ArrowUpRight } from 'lucide-react';
import { Modal } from '../components/Modal';

export const StudentLeadership: React.FC = () => {
  const [selectedLeader, setSelectedLeader] = useState<Student | null>(null);

  // Executive Student Leadership / Bearers of FIST
  const leaders: Student[] = [
    {
      id: 'bearer-president',
      name: 'Priyadharshini M',
      role: 'President — FIST Association',
      year: 'IV CSE Department',
      category: 'Campus Leaders',
      achievement: 'President of FIST Association. Spearheading association initiatives, national-level symposia, departmental technical forums, and peer development circles.',
      skills: ['Strategic Leadership', 'Public Speaking', 'Event Orchestration', 'Team Governance', 'Technical Planning'],
      avatar: '/priyadharshini.jpg',
      bio: 'Committed to fostering an empowering environment for computer science scholars, bridging academic excellence with high-impact community programs.'
    },
    {
      id: 'bearer-vp',
      name: 'Kisho Varma K',
      role: 'Vice President — FIST Association',
      year: 'III CSE Department',
      category: 'Campus Leaders',
      achievement: 'Vice President of FIST Association. Directing competitive hackathons, operational logistics, and collaborative innovation projects across batches.',
      skills: ['Operations Management', 'Hackathon Direction', 'Team Collaboration', 'Problem Solving', 'Peer Mentorship'],
      avatar: '/kisho-varma.jpg',
      bio: 'Passionate about engineering leadership, driving active participation in student technical clubs and inter-college competitions.'
    },
    {
      id: 'bearer-sec-1',
      name: 'Reema Fathima R',
      role: 'Secretary — FIST Association',
      year: 'IV CSE Department',
      category: 'Campus Leaders',
      achievement: 'Secretary of FIST Association. Managing key departmental documentation, event schedules, executive communications, and association public relations.',
      skills: ['Executive Coordination', 'Documentation', 'Public Relations', 'Workflow Management', 'Student Outreach'],
      avatar: '/reema-fathima.jpg',
      bio: 'Dedicated to streamlined association administration, seamless event execution, and strengthening inter-departmental connections.'
    },
    {
      id: 'bearer-sec-2',
      name: 'Gokulapriyan I',
      role: 'Secretary — FIST Association',
      year: 'III CSE Department',
      category: 'Campus Leaders',
      achievement: 'Secretary of FIST Association. Organizing technical workshops, hands-on lab sessions, coding events, and tracking member engagement.',
      skills: ['Technical Operations', 'Workshop Coordination', 'Resource Planning', 'Community Building', 'Agile Planning'],
      avatar: '/gokula-priyan.jpg',
      bio: 'Enthusiastic about technical skill-building, empowering peers with modern software stacks, and driving smooth event operations.'
    }
  ];

  return (
    <section id="leadership" className="relative py-28 bg-[#06070a] text-[#f8fafc] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Index Marker */}
        <div className="flex items-center space-x-3 mb-10">
          <span className="font-mono text-xs text-purple-400 font-semibold tracking-widest">05</span>
          <div className="h-[1px] w-8 bg-white/20" />
          <span className="font-mono text-xs text-slate-400 uppercase tracking-[0.2em]">OFFICE BEARERS OF FIST</span>
        </div>

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-xl">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter text-white">
              Executive Student Leadership.
            </h2>
            <p className="text-sm font-mono text-slate-400">
              Meet the office bearers steering FIST Association initiatives, peer circles, and national technical symposiums.
            </p>
          </div>

          <span className="font-mono text-xs text-slate-400 uppercase tracking-widest hidden md:inline-block">
            ACADEMIC YEAR 2025 – 2026
          </span>
        </div>

        {/* Executive Office Bearers Grid (President, Vice President & Secretaries) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leaders.map((leader) => (
            <div
              key={leader.id}
              onClick={() => setSelectedLeader(leader)}
              className="group cursor-pointer p-7 sm:p-8 rounded-2xl bg-[#0c0e15] border border-white/[0.08] hover:border-purple-500/40 hover:bg-[#0f111a] transition-all duration-300 flex flex-col justify-between space-y-6 shadow-lg shadow-black/40"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-sans bg-purple-950/60 border border-purple-500/30 text-purple-200 font-medium">
                    {leader.role.split('—')[0].trim()}
                  </span>
                  <span className="text-xs font-sans text-slate-400 font-medium">
                    {leader.year}
                  </span>
                </div>

                <div className="flex items-start space-x-5 sm:space-x-6">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden bg-black shrink-0 border border-purple-500/20 group-hover:border-purple-400/50 transition-colors shadow-inner">
                    <img
                      src={leader.avatar}
                      alt={leader.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <div className="space-y-1.5 flex-1 min-w-0">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-200 transition-colors flex items-center justify-between">
                      <span className="truncate">{leader.name}</span>
                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors shrink-0 ml-2" />
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
                <span className="truncate max-w-[260px] text-slate-300">
                  {leader.skills.slice(0, 3).join(' • ')}
                </span>
                <span className="text-purple-300 font-medium shrink-0 group-hover:translate-x-0.5 transition-transform">
                  View Profile →
                </span>
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
              <div className="relative aspect-[16/11] max-h-[380px] rounded-xl overflow-hidden border border-white/10 bg-black">
                <img
                  src={selectedLeader.avatar}
                  alt={selectedLeader.name}
                  className="w-full h-full object-cover object-top"
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
