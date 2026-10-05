import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projects';
import { Project } from '../types';
import { ArrowUpRight, FolderGit2, ExternalLink, CheckCircle2 } from 'lucide-react';
import { Modal } from '../components/Modal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-32 bg-[#06070a] text-[#f8fafc] border-t border-white/[0.06] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-0 w-[550px] h-[550px] rounded-full bg-purple-900/[0.05] blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Index Marker */}
        <div className="flex items-center space-x-3 mb-12">
          <span className="font-mono text-xs text-purple-400 font-semibold tracking-widest">02</span>
          <div className="h-[1px] w-8 bg-white/20" />
          <span className="font-mono text-xs text-slate-400 uppercase tracking-[0.25em]">SYSTEMS & REPOSITORIES</span>
        </div>

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-6">
          <div className="space-y-4 max-w-xl">
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tighter text-white">
              What our students architect & ship.
            </h2>
            <p className="text-sm font-mono text-slate-400">
              ONE PROJECT = ONE VISUAL MOMENT. Deployed software, spatial VR environments, and production systems.
            </p>
          </div>

          <span className="font-mono text-xs text-purple-300 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30">
            65+ Systems in Active Deployment
          </span>
        </div>

        {/* Storytelling Project Stream: Each project is an expansive visual chapter */}
        <div className="space-y-28">
          {projectsData.slice(0, 4).map((proj, idx) => {
            const isEven = idx % 2 === 0;
            const indexNumber = `0${idx + 1}`;

            return (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelectedProject(proj)}
                className={`group cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                  idx < 3 ? 'pb-24 border-b border-white/[0.06]' : ''
                }`}
              >
                {/* Visual Preview Frame */}
                <div
                  className={`lg:col-span-7 relative aspect-[16/10] rounded-2xl overflow-hidden bg-black border border-white/[0.08] group-hover:border-purple-500/40 transition-all duration-500 ${
                    !isEven ? 'lg:order-2' : ''
                  }`}
                >
                  <img
                    src={proj.image}
                    alt={proj.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-mono tracking-widest text-slate-200 uppercase border border-white/10">
                      {proj.category}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-slate-300">
                    <span>STATUS: {proj.status}</span>
                    <span className="text-purple-300 font-medium">EXPLORE DOSSIER →</span>
                  </div>
                </div>

                {/* Editorial Information Block */}
                <div className={`lg:col-span-5 space-y-6 ${!isEven ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl sm:text-4xl font-mono font-black text-purple-400">
                      {indexNumber}
                    </span>
                    <div className="h-[1px] w-6 bg-white/20" />
                    <span className="font-mono text-xs uppercase tracking-widest text-slate-500">
                      PROJECT CHAPTER
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-white group-hover:text-purple-200 transition-colors flex items-center justify-between">
                    <span>{proj.name}</span>
                    <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
                  </h3>

                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
                    {proj.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="pt-2 flex flex-wrap gap-2">
                    {proj.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-3 py-1 rounded-md bg-white/[0.04] text-slate-300 border border-white/[0.08]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="truncate max-w-[240px]">Team: {proj.team.join(', ')}</span>
                    <span className="text-slate-300">{proj.year}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Modal Inspection Drawer */}
        <Modal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject?.name}
          subtitle={`ARCHITECTURAL SPECIFICATION • ${selectedProject?.category}`}
        >
          {selectedProject && (
            <div className="space-y-6">
              <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-black">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  Overview
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {selectedProject.longDescription || selectedProject.description}
                </p>
              </div>

              {selectedProject.highlights && (
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    Architectural Highlights
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((h, i) => (
                      <li key={i} className="flex items-start space-x-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-purple-950/20 border border-purple-500/20 font-mono text-xs">
                <div>
                  <span className="text-slate-400 block mb-1">Stack</span>
                  <span className="text-slate-200">{selectedProject.techStack.join(', ')}</span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-1">Team</span>
                  <span className="text-slate-200">{selectedProject.team.join(', ')}</span>
                </div>
              </div>

              <div className="flex items-center space-x-3 pt-4 border-t border-white/[0.06]">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2.5 rounded-lg bg-white text-slate-950 text-xs font-mono font-medium flex items-center space-x-2 hover:bg-slate-200 transition-colors"
                  >
                    <FolderGit2 className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </a>
                )}
                {selectedProject.demoUrl && (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-white text-xs font-mono border border-white/10 flex items-center space-x-2 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Deployment</span>
                  </a>
                )}
              </div>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
};
