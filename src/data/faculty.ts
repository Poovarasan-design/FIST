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
    name: 'Dr. K. Velkumar',
    designation: 'Assistant Professor',
    qualification: 'B.Tech. (IT), M.E (CSE), Ph.D',
    areaOfExpertise: ['Recommendation Systems', 'Intelligent Computing', 'Machine Learning', 'Data Mining'],
    researchInterests: ['Recommendation Algorithms', 'Intelligent Decision Systems', 'User Behavior Analytics'],
    photo: '/velkumar.jpg',
    bio: 'Dr. Velkumar K is a distinguished faculty member with over 20 years of teaching and research experience in the Department of Computer Science and Engineering. His area of specialization is Recommendation Systems. With significant contributions in research, patents, and academic excellence, he is committed to advancing intelligent computing technologies and mentoring students through innovation-driven learning.',
    email: 'velkumar.cse@nscet.org',
    publicationsCount: 10,
    experience: [
      '20 Years of Academic & Research Experience in CSE'
    ],
    selectedPublications: [
      '10 Research Publications in International Journals & Conferences specializing in Recommendation Systems'
    ],
    patents: [
      '5 Published / Awarded Patents in Intelligent Systems and Computing Frameworks'
    ]
  },
  {
    id: 'fac-3',
    name: 'Mrs. Anusuya V',
    designation: 'Assistant Professor',
    qualification: 'B.E (CSE), M.E (CSE)',
    areaOfExpertise: ['Software Engineering', 'Database Management', 'Object-Oriented Programming', 'Web Technologies'],
    researchInterests: ['Modern Software Architectures', 'Educational Technology Pedagogy', 'Web Systems'],
    photo: '/anusiya-mam.jpg',
    bio: 'Mrs. Anusuya V is a dedicated faculty member in the Department of Computer Science & Engineering with 2 years of academic teaching experience. Committed to fostering core foundational computing concepts, student mentoring, and active project facilitation.',
    email: 'anusuya.cse@nscet.org',
    publicationsCount: 2,
    experience: [
      '2 Years of Academic Teaching Experience in CSE'
    ]
  }
];
