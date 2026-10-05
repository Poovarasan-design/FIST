export interface Project {
  id: string;
  name: string;
  tagline: string;
  category: 'AI / ML' | 'Web Development' | 'Mobile Applications' | 'IoT' | 'VR / AR' | 'Cloud' | 'Data Science' | 'Embedded Systems';
  description: string;
  longDescription?: string;
  techStack: string[];
  image: string;
  team: string[];
  year: string;
  status: 'Completed' | 'In Progress' | 'Beta Testing' | 'Published';
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  highlights?: string[];
}

export interface Achievement {
  id: string;
  title: string;
  competition: string;
  year: string;
  team: string[];
  prize: string;
  category: 'Hackathons' | 'Competitions' | 'Projects' | 'Awards' | 'Research';
  description: string;
  technologyUsed: string[];
  badgeColor?: string;
}

export interface EventItem {
  id: string;
  name: string;
  category: 'Hackathons' | 'Workshops' | 'Seminars' | 'Coding Competitions' | 'Guest Lectures' | 'Association Activities' | 'Technical Events';
  date: string;
  time?: string;
  location: string;
  description: string;
  highlights: string[];
  isUpcoming?: boolean;
  registrationStatus?: 'Open' | 'Closed' | 'Coming Soon' | 'Completed';
  registrationLink?: string;
  image?: string;
}

export interface Student {
  id: string;
  name: string;
  role: string;
  year: string;
  category: 'Hackathon Winners' | 'Project Builders' | 'Coders' | 'Designers' | 'Researchers' | 'Innovators' | 'Campus Leaders';
  achievement: string;
  skills: string[];
  avatar: string;
  bio?: string;
  github?: string;
  linkedin?: string;
}

export interface Faculty {
  id: string;
  name: string;
  designation: string;
  qualification: string;
  areaOfExpertise: string[];
  researchInterests: string[];
  photo: string;
  bio: string;
  email?: string;
  publicationsCount?: number;
}

export interface TechnologyItem {
  name: string;
  category: 'Languages' | 'Frontend & Web' | 'Backend & Cloud' | 'AI & Data Science' | 'Hardware & Immersive' | 'DevOps & Tools';
  description: string;
  iconName: string;
  proficiencyLevel?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Events' | 'Hackathons' | 'Workshops' | 'Projects' | 'Achievements' | 'Students' | 'Faculty' | 'Association';
  image: string;
  caption: string;
  date: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: 'Announcement' | 'Achievement' | 'Opportunity' | 'Event Wrap-up';
  shortDescription: string;
  content: string;
  author: string;
  badge?: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  phase: 'Foundation' | 'Learning' | 'Projects' | 'Competitions' | 'Innovation' | 'Impact';
  description: string;
  highlights: string[];
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  type: 'Student' | 'Alumni' | 'Faculty';
  quote: string;
  batchOrDept: string;
  currentCompanyOrPursuit?: string;
  avatar: string;
}
