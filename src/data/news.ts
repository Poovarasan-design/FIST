import { NewsItem } from '../types';

export const newsData: NewsItem[] = [
  {
    id: 'news-1',
    title: '[Add News: Registrations Open for Annual CSE Symposium 2026]',
    date: 'October 2026',
    category: 'Announcement',
    badge: 'Registration Live',
    shortDescription: '[Add Summary: Early bird registrations for paper presentation, hackathon track, and web development challenges are now open for all affiliated colleges.]',
    content: `The Department of Computer Science & Engineering and FIST Association proudly announce the commencement of participant registrations for the National Level Technical Symposium.

Events span across multiple tracks:
- 24-Hour Code Marathon
- Research Paper Presentation (IEEE format)
- AI & Robotics Project Exhibition
- Technical Quiz & Debugging Arena

Students can register individually or in teams of up to 4 members. Accommodation and mentoring will be facilitated by student volunteer committees.`,
    author: 'FIST Editorial Board'
  },
  {
    id: 'news-2',
    title: '[Add News: FIST VR DSA Project Receives Innovation Incubation Award]',
    date: 'September 2026',
    category: 'Achievement',
    badge: 'Flagship Success',
    shortDescription: '[Add Summary: The student team behind FIST VR DSA was felicitated with research funding to scale the spatial learning simulator across core curriculum subjects.]',
    content: `The pioneering educational virtual reality simulator developed entirely by undergraduate CSE students has secured institutional funding and incubator space.

The project demonstrates substantial comprehension speedup in complex dynamic programming and graph structures through interactive spatial visualization. The next development phase includes multi-user networked virtual classrooms.`,
    author: 'CSE Innovation Cell'
  },
  {
    id: 'news-3',
    title: '[Add News: Call for Papers — Department Technical Journal 2026]',
    date: 'August 2026',
    category: 'Opportunity',
    badge: 'Research Call',
    shortDescription: '[Add Summary: Undergraduate students are invited to submit original research papers and project case studies in Cloud Computing, AI, and Cybersecurity.]',
    content: `In an initiative to nurture scholarly inquiry, the department invites manuscripts from B.E./B.Tech CSE students.

All accepted submissions will undergo rigorous single-blind peer review by faculty doctorates and will be compiled into the annual departmental proceedings volume with assigned DOIs.`,
    author: 'Research & Publications Committee'
  }
];
