import { Achievement } from '../types';

export const achievementsData: Achievement[] = [
  {
    id: 'ach-1',
    title: '[Add Achievement: 1st Prize in National Hackathon]',
    competition: '[Add Competition: National Level Smart India Hackathon / Inter-College Conclave]',
    year: '2025',
    team: ['[Add Student Name 1]', '[Add Student Name 2]', '[Add Student Name 3]'],
    prize: '1st Prize & Gold Trophy',
    category: 'Hackathons',
    description: '[Add Description: Developed an innovative real-time AI solution addressing critical healthcare logistics, recognized among 300+ national participating teams.]',
    technologyUsed: ['Python', 'TensorFlow', 'FastAPI', 'React'],
    badgeColor: 'from-amber-400 to-orange-500'
  },
  {
    id: 'ach-2',
    title: '[Add Achievement: Best Technical Paper Award]',
    competition: '[Add Competition: IEEE International Conference on Computing & Communication]',
    year: '2025',
    team: ['[Add Student Author]', '[Add Faculty Co-Author]'],
    prize: 'Best Paper Award',
    category: 'Research',
    description: '[Add Description: Published novel research on distributed fault-tolerant consensus algorithms for edge IoT architectures, receiving high acclaim from peer reviewers.]',
    technologyUsed: ['Go', 'Distributed Systems', 'IoT Edge', 'Simulation'],
    badgeColor: 'from-purple-500 to-indigo-600'
  },
  {
    id: 'ach-3',
    title: '[Add Achievement: Winners of State Coding Championship]',
    competition: '[Add Competition: State Level ACM-Style Collegiate Coding League]',
    year: '2024',
    team: ['[Add Competitive Programmer 1]', '[Add Competitive Programmer 2]'],
    prize: 'Winners / State Champion',
    category: 'Competitions',
    description: '[Add Description: Solved 8 complex algorithmic graph and dynamic programming challenges in record time, outperforming 85 collegiate engineering contingents.]',
    technologyUsed: ['C++', 'Algorithms', 'Data Structures', 'Graph Theory'],
    badgeColor: 'from-cyan-400 to-blue-600'
  },
  {
    id: 'ach-4',
    title: '[Add Achievement: Innovation Grant for FIST VR DSA]',
    competition: '[Add Competition: National Student Innovation & Incubator Grant]',
    year: '2025',
    team: ['[Add VR Innovation Team Lead]', '[Add Faculty Mentor]'],
    prize: 'Funded Research Grant & Incubation',
    category: 'Awards',
    description: '[Add Description: Selected for research incubation and product development grant for pioneering spatial immersive computing in foundational computer science pedagogy.]',
    technologyUsed: ['Unity', 'C#', 'OpenXR', 'Spatial UI'],
    badgeColor: 'from-emerald-400 to-teal-600'
  },
  {
    id: 'ach-5',
    title: '[Add Achievement: Finalists in Global AI Challenge]',
    competition: '[Add Competition: Global Open-Source Generative AI Hackathon]',
    year: '2024',
    team: ['[Add Student Lead]', '[Add Student Developer]'],
    prize: 'Top 10 Global Finalist',
    category: 'Hackathons',
    description: '[Add Description: Built an open-source privacy-first multimodal transcription and semantic summarizer for low-bandwidth educational centers.]',
    technologyUsed: ['PyTorch', 'Transformers', 'Whisper', 'WebAssembly'],
    badgeColor: 'from-rose-400 to-pink-600'
  },
  {
    id: 'ach-6',
    title: '[Add Achievement: Best Open-Source Project Excellence]',
    competition: '[Add Competition: FOSS India Collegiate Tech Showcase]',
    year: '2024',
    team: ['[Add Open Source Lead]', '[Add Core Contributor]'],
    prize: 'Special Jury Mention',
    category: 'Projects',
    description: '[Add Description: Created a developer utility library for sandboxed compilation that garnered over 500+ GitHub stars from the developer community.]',
    technologyUsed: ['Rust', 'Docker', 'Linux cgroups'],
    badgeColor: 'from-blue-400 to-violet-600'
  }
];
