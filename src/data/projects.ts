import { Project } from '../types';

export const vrProjectData = {
  id: 'fist-vr-dsa',
  name: 'FIST VR DSA',
  subtitle: 'Learning Data Structures Beyond the Screen.',
  category: 'VR / AR' as const,
  tagline: 'An immersive Virtual Reality environment transforming abstract Data Structures and Algorithms into tangible 3D spatial models.',
  description: 'FIST VR DSA reimagines computer science pedagogy by breaking free from 2D terminal traces and static textbook diagrams. Students step into a 3D virtual computer laboratory where memory addresses, pointer links, tree nodes, and array blocks exist in physical space.',
  longDescription: `Developed under the FIST Association innovation initiative, FIST VR DSA revolutionizes how undergraduate engineers understand complex algorithms. Instead of memorizing abstract pointer shifts, learners physically grab, re-link, and inspect memory nodes. 

Through interactive spatial simulation, learners can walk through array allocations, witness real-time binary search partition planes, watch recursive stack frames construct dynamically around them, and physically perform tree balancing and graph traversals.`,
  techStack: ['Unity 3D', 'C#', 'OpenXR', 'Meta Quest SDK', 'WebXR', 'Shader Graph'],
  features: [
    {
      title: 'Interactive 3D Array Blocks',
      description: 'Physically pull, index, and swap memory cells. Visualize contiguous memory allocation, bounds checking, and contiguous cache benefits.'
    },
    {
      title: 'Visual Operations & Traversal',
      description: 'Step-by-step interactive visualizer for Searching (Linear & Binary), Sorting (Bubble, Quick, Merge), and Graph traversals (BFS, DFS).'
    },
    {
      title: 'Real-Time Insertion & Pointer Manipulation',
      description: 'Grab pointers and rewire singly/doubly linked lists in 3D space with collision-checked memory references.'
    },
    {
      title: 'Spatial Recursion Stack Visualization',
      description: 'Stack frames rise as physical transparent platforms. Watch stack unwinding and memory deallocation in live spatial perspective.'
    }
  ],
  team: ['[Add VR Lead Student]', '[Add 3D Engine Developer]', '[Add Algorithm Specialist]', '[Add Faculty Mentor]'],
  year: '2025 - 2026',
  status: 'In Progress' as const,
  demoUrl: '#',
  githubUrl: '#',
};

export const projectsData: Project[] = [
  {
    id: 'fist-vr-dsa',
    name: 'FIST VR DSA',
    tagline: 'Learning Data Structures Beyond the Screen',
    category: 'VR / AR',
    description: 'An immersive virtual reality application transforming traditional abstract Data Structures and Algorithms into physical, interactive 3D spatial experiences.',
    longDescription: 'Transforms classical computer science education by letting students manipulate arrays, traverse binary trees, and watch recursive stack execution in high-fidelity 3D spatial computing environments.',
    techStack: ['Unity', 'C#', 'OpenXR', 'Meta Quest SDK'],
    image: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&w=1200&q=80',
    team: ['[Add VR Lead Student]', '[Add Core Developer]', '[Add Faculty Mentor]'],
    year: '2025 - 2026',
    status: 'In Progress',
    featured: true,
    highlights: ['Spatial 3D Memory Mapping', 'Interactive Array Manipulation', 'Dynamic Pointer Rewiring', 'Live Stack Frame Spawning']
  },
  {
    id: 'project-ai-copilot',
    name: '[Add Project Name: AI Campus Assistant]',
    tagline: 'Autonomous conversational agent for academic & campus queries',
    category: 'AI / ML',
    description: '[Add Project Description: Multi-modal RAG model trained on department syllabus, timetable, and academic regulations to guide students instantly.]',
    longDescription: '[Add Detailed Description: Developed using modern transformer architectures and vector databases, offering low-latency semantic responses to student inquiries.]',
    techStack: ['Python', 'FastAPI', 'PyTorch', 'Vector DB', 'React'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1200&q=80',
    team: ['[Add Student Name 1]', '[Add Student Name 2]'],
    year: '2025',
    status: 'Completed',
    highlights: ['Domain-specific RAG', 'Sub-second response time', 'Automated Syllabus Querying']
  },
  {
    id: 'project-smart-iot-lab',
    name: '[Add Project Name: Smart IoT Lab Monitor]',
    tagline: 'Real-time telemetry and edge power optimization system for department labs',
    category: 'IoT',
    description: '[Add Project Description: Embedded sensor matrix monitoring energy consumption, ambient conditions, and hardware health in CSE computer labs.]',
    longDescription: '[Add Detailed Description: Integrates ESP32 nodes with MQTT telemetry broker and cloud analytics dashboard, achieving up to 25% energy conservation.]',
    techStack: ['ESP32', 'C++', 'MQTT', 'Node.js', 'InfluxDB'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    team: ['[Add Student Name 1]', '[Add Student Name 2]'],
    year: '2024 - 2025',
    status: 'Completed',
    highlights: ['Edge node computing', 'Sub-second sensor streaming', 'Predictive maintenance']
  },
  {
    id: 'project-cloud-code-runner',
    name: '[Add Project Name: Distributed Online Judge]',
    tagline: 'Sandboxed code execution environment for department coding contests',
    category: 'Cloud',
    description: '[Add Project Description: High-concurrency containerized coding platform allowing safe grading and benchmarking across multiple languages.]',
    longDescription: '[Add Detailed Description: Built with Docker sandboxing and isolated cgroups to run student algorithmic submissions securely in milliseconds.]',
    techStack: ['Go', 'Docker', 'Redis', 'PostgreSQL', 'React'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    team: ['[Add Student Name 1]', '[Add Student Name 2]'],
    year: '2024',
    status: 'Completed',
    highlights: ['Microsecond process isolation', 'Auto memory-capping', 'Leaderboard streaming']
  },
  {
    id: 'project-vision-surveillance',
    name: '[Add Project Name: Computer Vision Attendance]',
    tagline: 'Edge AI facial recognition and analytics for student labs',
    category: 'AI / ML',
    description: '[Add Project Description: Real-time multi-face detection and anti-spoofing attendance system deployed in CSE smart seminar halls.]',
    longDescription: '[Add Detailed Description: Employs lightweight CNNs and ONNX runtime to conduct seamless attendance marking without queue bottlenecks.]',
    techStack: ['Python', 'OpenCV', 'PyTorch', 'ONNX', 'Flask'],
    image: 'https://images.unsplash.com/photo-1507146426996-ef0538888e65?auto=format&fit=crop&w=1200&q=80',
    team: ['[Add Student Name 1]', '[Add Student Name 2]'],
    year: '2024',
    status: 'Completed',
    highlights: ['Anti-spoofing liveness check', '99.2% benchmark accuracy', 'Exportable reporting']
  },
  {
    id: 'project-fist-community-hub',
    name: '[Add Project Name: FIST Community App]',
    tagline: 'Mobile collaborative portal for department events & resources',
    category: 'Mobile Applications',
    description: '[Add Project Description: Unified mobile platform connecting CSE undergraduates for peer tutoring, study circle formation, and hackathon team building.]',
    longDescription: '[Add Detailed Description: Provides real-time notifications for club workshops, repository sharing, and peer-to-peer coding challenges.]',
    techStack: ['Flutter', 'Dart', 'Firebase', 'REST API'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
    team: ['[Add Student Name 1]', '[Add Student Name 2]'],
    year: '2025',
    status: 'Beta Testing',
    highlights: ['Instant push notifications', 'Team matchmaker algorithm', 'Resource repository']
  }
];
