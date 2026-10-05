export interface PathwayStage {
  step: string;
  stage: string;
  roleDescription: string;
  keyAction: string;
  skillsGained: string[];
  outcome: string;
  icon: string;
}

export const careerPathwayData: PathwayStage[] = [
  {
    step: '01',
    stage: 'Student',
    roleDescription: 'Curious Learner & Problem Solver',
    keyAction: 'Mastering foundational algorithms, core CS principles, computational logic, and language syntax through guided peer study circles.',
    skillsGained: ['Data Structures & C++', 'Computer Networks', 'OS Concepts', 'Relational Databases'],
    outcome: 'Solid theoretical foundation and algorithmic confidence.',
    icon: 'GraduationCap'
  },
  {
    step: '02',
    stage: 'Builder',
    roleDescription: 'Hands-on Software Craftsman',
    keyAction: 'Transforming classroom theory into practical code — constructing full-stack web applications, mobile tools, and micro-APIs in FIST hackathons.',
    skillsGained: ['React & TypeScript', 'Node.js / FastAPI', 'Git Version Control', 'Docker Basics'],
    outcome: 'Portfolio of production-quality GitHub repositories.',
    icon: 'Hammer'
  },
  {
    step: '03',
    stage: 'Innovator',
    roleDescription: 'R&D Explorer & Prototyper',
    keyAction: 'Venturing into pioneering frontiers like FIST VR DSA, deep learning models, smart IoT arrays, and submitting competitive research publications.',
    skillsGained: ['Spatial VR / Unity', 'PyTorch / AI RAG', 'Embedded Hardware', 'Research Writing'],
    outcome: 'Hackathon trophies, grant awards, and published papers.',
    icon: 'Lightbulb'
  },
  {
    step: '04',
    stage: 'Professional',
    roleDescription: 'Industry Ready Engineer',
    keyAction: 'Excelling in high-bar technical interviews, coding rounds, and system design evaluations across tier-1 technology firms and global startups.',
    skillsGained: ['Distributed Systems', 'Cloud DevOps (AWS/GCP)', 'Production Scalability', 'System Design'],
    outcome: 'Campus placements in software engineering, AI/ML, cloud, & startups.',
    icon: 'Briefcase'
  },
  {
    step: '05',
    stage: 'Leader',
    roleDescription: 'Community Mentor & Visionary',
    keyAction: 'Giving back to the departmental fraternity — mentoring junior cohorts, spearheading tech communities, founding ventures, or pursuing advanced research.',
    skillsGained: ['Engineering Leadership', 'Mentorship & Keynotes', 'Startup Incubation', 'Higher Academia'],
    outcome: 'Lifelong alumni network shaping the future of technology.',
    icon: 'Crown'
  }
];

export const industryDestinations = [
  { title: 'Software Engineering', count: 'Core Track', icon: 'Code' },
  { title: 'AI & Machine Learning', count: 'Specialized Track', icon: 'Brain' },
  { title: 'Cloud & DevOps Architecture', count: 'High Demand', icon: 'Cloud' },
  { title: 'Data Science & Analytics', count: 'Insight Driven', icon: 'BarChart' },
  { title: 'Tech Startups & Ventures', count: 'Entrepreneurial', icon: 'Rocket' },
  { title: 'Research & Higher Studies', count: 'Scholarly', icon: 'BookOpen' }
];
