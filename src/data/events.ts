import { EventItem } from '../types';

export const upcomingEventsData: EventItem[] = [
  {
    id: 'upcoming-1',
    name: '[Add Upcoming Event: FIST National Symposium 2026]',
    category: 'Technical Events',
    date: '2026-11-15', // Editable ISO date format for countdown calculation
    time: '09:00 AM - 05:00 PM',
    location: '[Add Venue: CSE Seminar Hall & Central Computing Center]',
    description: '[Add Event Description: Flagship annual departmental symposium featuring code marathons, paper presentations, AI project displays, and tech debates.]',
    highlights: [
      '24-Hour Hackathon Track',
      'AI & Cloud Project Expo',
      'Keynotes by Leading Industry Tech Leads',
      'Cash Prizes & Internship Opportunities'
    ],
    isUpcoming: true,
    registrationStatus: 'Open',
    registrationLink: '#',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'upcoming-2',
    name: '[Add Upcoming Event: Hands-on Workshop on Generative AI & LLMs]',
    category: 'Workshops',
    date: '2026-10-28',
    time: '10:00 AM - 04:00 PM',
    location: '[Add Venue: Turing Advanced Computing Lab, CSE Dept]',
    description: '[Add Event Description: Intensive practical session on fine-tuning foundational models, retrieval-augmented generation (RAG), and deploying intelligent agents.]',
    highlights: [
      'Hands-on GPU Cloud Notebooks',
      'Building Custom RAG Pipelines',
      'Open-source Frameworks (LangChain & Ollama)',
      'Certificate of Completion from FIST'
    ],
    isUpcoming: true,
    registrationStatus: 'Open',
    registrationLink: '#',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=80'
  }
];

export const pastEventsData: EventItem[] = [
  {
    id: 'event-1',
    name: '[Add Event: CodeStorm 36-Hour Hackathon]',
    category: 'Hackathons',
    date: 'March 2025',
    location: '[Add Venue: Department Computing Labs]',
    description: '[Add Event Description: An exhilarating 36-hour non-stop prototyping sprint where 60+ teams tackled problem statements spanning healthcare, smart cities, and ed-tech.]',
    highlights: ['60+ Teams', '180+ Active Developers', '12 Industry Mentors', 'Rs. 50,000+ Prize Pool']
  },
  {
    id: 'event-2',
    name: '[Add Event: Immersive Computing & VR Bootcamp]',
    category: 'Workshops',
    date: 'January 2025',
    location: '[Add Venue: Virtual Reality Lab]',
    description: '[Add Event Description: Practical demonstration and dev workshop on Unity 3D, OpenXR, and spatial UI development using standalone headsets.]',
    highlights: ['Hands-on Meta Quest Development', 'Spatial Computing Basics', 'Physics Engines in VR']
  },
  {
    id: 'event-3',
    name: '[Add Event: Expert Guest Lecture on Cloud Architecture & Kubernetes]',
    category: 'Guest Lectures',
    date: 'December 2024',
    location: '[Add Venue: CSE Auditorium]',
    description: '[Add Event Description: Distinguished industry tech architect demystified microservices orchestration, service meshes, and resilient cloud architectures.]',
    highlights: ['Production Kubernetes Patterns', 'CI/CD Best Practices', 'Live Cluster Telemetry Demo']
  },
  {
    id: 'event-4',
    name: '[Add Event: Annual Algorithmic Speed Coding League]',
    category: 'Coding Competitions',
    date: 'October 2024',
    location: '[Add Venue: CSE Online Judge Platform]',
    description: '[Add Event Description: High-intensity competitive coding tournament testing rapid mathematical problem-solving, dynamic programming, and data structure speed.]',
    highlights: ['5 Difficult Algorithmic Rounds', 'Live Dynamic Leaderboard', '120+ Participants']
  },
  {
    id: 'event-5',
    name: '[Add Event: FIST Inaugural Conclave & Project Showcase]',
    category: 'Association Activities',
    date: 'August 2024',
    location: '[Add Venue: Main Campus Auditorium]',
    description: '[Add Event Description: Official commencement of the academic chapter, unveiling student project roadmaps, community mentorship clubs, and tech circles.]',
    highlights: ['Office Bearers Induction', 'Project Roadmap Release', 'Peer Mentorship Launch']
  }
];
