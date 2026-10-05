import { Faculty } from '../types';

export const facultyData: Faculty[] = [
  {
    id: 'fac-1',
    name: 'Dr. J. Mathalai Raj',
    designation: 'Assistant Professor & Head [I/C]',
    qualification: 'M.E (CSE), Ph.D',
    areaOfExpertise: ['Artificial Intelligence', 'Cloud Computing', 'Distributed Systems', 'Hybrid Cloud Architecture'],
    researchInterests: ['AI-Driven Load Balancing', 'Distributed Anomaly Detection', 'Cloud Resource Optimization', 'Smart Campus Systems'],
    photo: '/cse-hod.jpg',
    bio: 'Dr. J. Mathalai Raj is an esteemed researcher and academician specializing in Artificial Intelligence and Cloud Computing architectures. With a visionary approach to engineering education, he leads the CSE department towards excellence by bridging the gap between cutting-edge industry practices and academic rigor.',
    email: 'hod.cse@nscet.org',
    publicationsCount: 18,
    experience: [
      'Head of Department [I/C], CSE, NSCET (2021 - Present)',
      'Associate Professor, CSE, NSCET (2015 - 2021)'
    ],
    selectedPublications: [
      'Optimizing Cloud Infrastructure using AI-driven Load Balancing — Journal of Cloud Computing, 2024',
      'Deep Learning Approaches for Anomaly Detection in Distributed Networks — IEEE Transactions, 2023'
    ],
    fundedProjects: [
      'AI-Powered Smart Campus Administration System',
      'Cloud-based Scalable Architecture for Rural Healthcare'
    ],
    patents: [
      'Automated Resource Provisioning Framework for Hybrid Clouds (Published - 2023)'
    ],
    awards: [
      'Best Head of Department - 2024',
      'Excellence in AI Research Award - 2023'
    ]
  },
  {
    id: 'fac-2',
    name: 'Dr. M. Radhika',
    designation: 'Associate Professor & FIST Faculty Advisor',
    qualification: 'Ph.D. in Software Engineering',
    areaOfExpertise: ['Virtual Reality & Graphics', 'Software Engineering', 'Human-Computer Interaction'],
    researchInterests: ['Immersive Pedagogy', 'Augmented Reality in Education', 'Software Quality Assurance'],
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80',
    bio: 'Chief Faculty Advisor for FIST Association, mentoring student innovation initiatives such as FIST VR DSA and spearheading collegiate hackathons.',
    email: 'fist.advisor@college.edu',
    publicationsCount: 28
  },
  {
    id: 'fac-3',
    name: 'Dr. A. Vignesh',
    designation: 'Associate Professor',
    qualification: 'Ph.D. in Artificial Intelligence & Robotics',
    areaOfExpertise: ['Deep Learning', 'Computer Vision', 'Natural Language Processing'],
    researchInterests: ['Generative Neural Models', 'Autonomous Vision Systems', 'Explainable AI'],
    photo: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=500&q=80',
    bio: 'Directs advanced deep learning laboratories, conducting sponsored industry research projects and mentoring competitive data science squads.',
    email: 'faculty.ai@college.edu',
    publicationsCount: 35
  },
  {
    id: 'fac-4',
    name: 'Prof. P. Karthik',
    designation: 'Assistant Professor',
    qualification: 'M.Tech / Ph.D. (Pursuing) in Computer Systems',
    areaOfExpertise: ['Cloud Computing', 'Cybersecurity', 'DevOps & Microservices'],
    researchInterests: ['Container Security', 'Zero-Trust Networks', 'Serverless Scalability'],
    photo: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=500&q=80',
    bio: 'Certified cloud practitioner conducting hands-on student bootcamps on Kubernetes, Linux systems administration, and production DevOps tooling.',
    email: 'faculty.cloud@college.edu',
    publicationsCount: 16
  }
];
