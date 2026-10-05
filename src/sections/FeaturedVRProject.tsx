import React, { useState } from 'react';
import { vrProjectData } from '../data/projects';
import { ArrowUpRight, Play, RotateCcw } from 'lucide-react';
import { Modal } from '../components/Modal';

export const FeaturedVRProject: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  // Interactive Binary Search Simulator State
  const initialArray = [12, 24, 37, 45, 58, 69, 73, 85, 91, 98];
  const [searchTarget, setSearchTarget] = useState<number>(58);
  const [low, setLow] = useState<number | null>(null);
  const [high, setHigh] = useState<number | null>(null);
  const [mid, setMid] = useState<number | null>(null);
  const [foundIndex, setFoundIndex] = useState<number | null>(null);
  const [searchStepMsg, setSearchStepMsg] = useState<string>("Click 'Run Step' to initiate 3D spatial partition.");

  const handleBinarySearchStep = () => {
    if (low === null || high === null) {
      const l = 0;
      const h = initialArray.length - 1;
      const m = Math.floor((l + h) / 2);
      setLow(l);
      setHigh(h);
      setMid(m);
      setFoundIndex(null);
      setSearchStepMsg(`Partition window [${l}..${h}]. Mid index [${m}] value is ${initialArray[m]}.`);
      return;
    }

    if (mid !== null) {
      if (initialArray[mid] === searchTarget) {
        setFoundIndex(mid);
        setSearchStepMsg(`Target ${searchTarget} FOUND at index [${mid}]! Converged in O(log n).`);
        return;
      }

      if (initialArray[mid] < searchTarget) {
        const nextLow = mid + 1;
        if (nextLow > high) {
          setSearchStepMsg(`Target ${searchTarget} not in array.`);
          return;
        }
        const nextMid = Math.floor((nextLow + high) / 2);
        setLow(nextLow);
        setMid(nextMid);
        setSearchStepMsg(`Value ${initialArray[mid]} < ${searchTarget}. Discard left. New window [${nextLow}..${high}]. Mid is [${nextMid}].`);
      } else {
        const nextHigh = mid - 1;
        if (low > nextHigh) {
          setSearchStepMsg(`Target ${searchTarget} not in array.`);
          return;
        }
        const nextMid = Math.floor((low + nextHigh) / 2);
        setHigh(nextHigh);
        setMid(nextMid);
        setSearchStepMsg(`Value ${initialArray[mid]} > ${searchTarget}. Discard right. New window [${low}..${nextHigh}]. Mid is [${nextMid}].`);
      }
    }
  };

  const handleResetSearch = () => {
    setLow(null);
    setHigh(null);
    setMid(null);
    setFoundIndex(null);
    setSearchStepMsg("Click 'Run Step' to initiate 3D spatial partition.");
  };

  return (
    <section id="vr-project" className="relative py-32 bg-[#050507] text-[#f5f5f7] border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Index Marker */}
        <div className="flex items-center space-x-3 mb-10">
          <span className="font-mono text-xs text-indigo-400 font-semibold tracking-widest">07</span>
          <div className="h-[1px] w-8 bg-white/20" />
          <span className="font-mono text-xs text-[#8b8b93] uppercase tracking-[0.2em]">FLAGSHIP RESEARCH</span>
        </div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider block">
              PEDAGOGICAL INNOVATION
            </span>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter text-white leading-tight">
              FIST VR DSA: Spatial Computing for Data Structures.
            </h2>

            <p className="text-base sm:text-lg text-[#8b8b93] leading-relaxed">
              Instead of visualizing binary trees, pointer indirection, and recursion on flat 2D whiteboards, 
              FIST students built an immersive spatial environment for Meta Quest & WebXR where learners manipulate 
              memory references in full 3D space.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => setModalOpen(true)}
                className="px-5 py-2.5 rounded-lg bg-white text-slate-950 font-medium text-xs font-mono tracking-wider hover:bg-slate-200 transition-colors flex items-center space-x-2"
              >
                <span>READ TECHNICAL DOSSIER</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Interactive Spatial Simulator Cockpit */}
          <div className="lg:col-span-5">
            <div className="p-6 rounded-xl bg-[#090a0f] border border-white/[0.08] space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                <span className="font-mono text-xs text-white uppercase tracking-wider font-semibold">
                  Memory Partition Simulator
                </span>
                <span className="font-mono text-[11px] text-indigo-400">
                  Target: {searchTarget}
                </span>
              </div>

              {/* Memory Address Block Grid */}
              <div className="grid grid-cols-5 gap-2">
                {initialArray.map((val, idx) => {
                  const isLow = idx === low;
                  const isHigh = idx === high;
                  const isMid = idx === mid;
                  const isFound = idx === foundIndex;

                  let stateClass = 'bg-white/[0.03] text-slate-400 border-white/[0.06]';
                  if (isFound) stateClass = 'bg-emerald-500 text-slate-950 font-bold border-emerald-400';
                  else if (isMid) stateClass = 'bg-indigo-600 text-white font-bold border-indigo-400';
                  else if (isLow || isHigh) stateClass = 'bg-white/10 text-white border-white/20';

                  return (
                    <div
                      key={idx}
                      className={`p-3 rounded-lg border text-center transition-all ${stateClass}`}
                    >
                      <span className="block text-sm font-mono">{val}</span>
                      <span className="text-[9px] font-mono opacity-60">[{idx}]</span>
                    </div>
                  );
                })}
              </div>

              {/* Status Message */}
              <div className="p-3 rounded-lg bg-black/40 border border-white/[0.04] text-xs font-mono text-[#8b8b93]">
                {searchStepMsg}
              </div>

              {/* Controls */}
              <div className="flex items-center space-x-3 pt-2">
                <button
                  onClick={handleBinarySearchStep}
                  className="flex-1 py-2 rounded-lg bg-white/[0.06] hover:bg-white/[0.1] text-white text-xs font-mono transition-colors flex items-center justify-center space-x-1.5"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>RUN STEP</span>
                </button>
                <button
                  onClick={handleResetSearch}
                  className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.06] text-slate-400 transition-colors"
                  aria-label="Reset"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Specification Drawer */}
        <Modal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          title="FIST VR DSA"
          subtitle="RESEARCH & ARCHITECTURAL OVERVIEW"
        >
          <div className="space-y-6">
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#8b8b93] font-semibold">
                Project Architecture
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                {vrProjectData.longDescription || vrProjectData.description}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#8b8b93] font-semibold">
                Spatial Capabilities
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {vrProjectData.features.map((f, i) => (
                  <li key={i} className="flex flex-col space-y-0.5">
                    <span className="text-white font-medium">{f.title}</span>
                    <span className="text-[#8b8b93]">{f.description}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4 p-4 rounded-lg bg-black/40 border border-white/5 font-mono text-xs">
              <div>
                <span className="text-[#8b8b93] block mb-1">Tech Stack:</span>
                <span className="text-slate-200">{vrProjectData.techStack.join(', ')}</span>
              </div>
              <div>
                <span className="text-[#8b8b93] block mb-1">Team:</span>
                <span className="text-slate-200">{vrProjectData.team.join(', ')}</span>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </section>
  );
};
