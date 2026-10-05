export interface StatItem {
  label: string;
  value: number;
  suffix: string;
  description: string;
  icon: string;
}

// Department overview statistics
export const departmentStats: StatItem[] = [
  {
    label: 'Undergraduate Students',
    value: 480, // [Placeholder: Verified departmental strength]
    suffix: '+',
    description: 'Enrolled across active batches in CSE',
    icon: 'Users'
  },
  {
    label: 'Deployed Projects',
    value: 65, // [Placeholder: Verified projects count]
    suffix: '+',
    description: 'Working software, apps & hardware systems',
    icon: 'FolderGit2'
  },
  {
    label: 'Awards & Honors',
    value: 38, // [Placeholder: Verified awards count]
    suffix: '+',
    description: 'Won at national & state tech symposiums',
    icon: 'Trophy'
  },
  {
    label: 'Workshops & Events',
    value: 45, // [Placeholder: Verified events count]
    suffix: '+',
    description: 'Hands-on technical bootcamps conducted',
    icon: 'Calendar'
  },
  {
    label: 'Hackathons Participated',
    value: 28, // [Placeholder: Verified hackathon count]
    suffix: '+',
    description: 'Inter-college & national hackathons',
    icon: 'Terminal'
  },
  {
    label: 'Research Publications',
    value: 24, // [Placeholder: Verified publications count]
    suffix: '+',
    description: 'Peer-reviewed IEEE & Scopus papers',
    icon: 'FileText'
  }
];

// Impact metrics
export const impactMetrics: StatItem[] = [
  {
    label: 'Active Learning Hours',
    value: 12500,
    suffix: '+',
    description: 'Dedicated to peer programming and lab sessions',
    icon: 'Clock'
  },
  {
    label: 'Projects Built',
    value: 65,
    suffix: '+',
    description: 'From web portals to spatial VR environments',
    icon: 'Code'
  },
  {
    label: 'Hackathons Participated',
    value: 28,
    suffix: '+',
    description: '24-hr and 36-hr competitive software sprints',
    icon: 'Zap'
  },
  {
    label: 'Awards & Podium Finishes',
    value: 38,
    suffix: '+',
    description: 'Recognitions across state and national stages',
    icon: 'Award'
  },
  {
    label: 'Technical Events Hosted',
    value: 45,
    suffix: '+',
    description: 'Workshops, hackathons, and guest lectures',
    icon: 'Layers'
  },
  {
    label: 'Students Engaged in FIST',
    value: 500,
    suffix: '+',
    description: 'Active participants across all CSE cohorts',
    icon: 'HeartHandshake'
  }
];
