import { Project } from './types';

export const COMMANDS = [
  'help', 'about', 'skills', 'projects', 'education', 
  'contact', 'resume', 'download resume', 'theme', 'clear'
];

export const PROJECTS: Project[] = [
  {
    id: 'attendrix',
    name: 'Attendrix',
    description: 'Attendrix is a real-time, AI-enabled automated attendance and student management system that captures student presence through classroom entry/exit cameras and instantly displays attendance on classroom dashboards and Android apps, while also integrating academic automation, analytics, and personalized learning into a single role-based platform.',
    tech: ['React', 'OpenCV', 'Deep Learning', 'Python'],
    githubUrl: 'https://github.com/ShilpaChinnakkagari/Automated_Attendance',
    imageUrl: '/images/attendrix.png'
  },
  {
    id: 'cretcom',
    name: 'CretCom Study Portal',
    description: 'Developed a study app to store and access subject-wise learning materials by academic year, eliminating manual file searches and reducing network dependency through offline availability.',
    tech: ['Flutter', 'Firebase', 'Dart'],
    githubUrl: 'Uploaded soon',
    imageUrl: '/images/cretcom.png'
  },
  {
    id: 'health-assistant',
    name: 'Health Assistant',
    description: 'An AI-powered multilingual health assistant providing 24/7 health guidance, progress tracking, and emergency support through an intelligent dashboard, developed during Infosys Virtual Internship 6.0.',
    tech: ['NLP', 'Python', 'React'],
    githubUrl: 'https://github.com/ShilpaChinnakkagari/INFOSYS_internshipProj_HEALTH_CHAT_BOT',
    imageUrl: '/images/health-assistant.png'
  },
  {
    id: 'certigen',
    name: 'Automated Certificate Generation System',
    description: 'Replaced hard work with smart work by building an Automated Certificate Generator in just 1 hour using Python (Flask), Excel! It generates personalized certificates instantly—individually or in bulk—and boosted my backend and file-handling skills.',
    tech: ['Flask', 'Python', 'Canva API'],
    githubUrl: 'https://github.com/shilpa-ai/certigen',
    imageUrl: 'https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&q=80&w=800&h=500'
  },
  {
    id: 'comm-train',
    name: 'GenAI Comm Trainer',
    description: 'Developing an AI-driven platform to help students practice and improve company-specific interview communication skills through structured, guided exercises.',
    tech: ['Gen AI', 'Google AI Studio', 'Gemini API'],
    githubUrl: 'https://github.com/shilpa-ai/comm-trainer',
    imageUrl: '/images/accenture-comm.png'
  },
  {
    id: 'complaint-sys',
    name: 'Cretcom Shilpa Institute Complaint Hub',
    description: 'Direct communication bridge for institutional accountability and student grievance resolution.',
    tech: ['Google AI Studio', 'Gen AI'],
    githubUrl: 'https://github.com/shilpa-ai/student-hub',
    imageUrl: '/images/complaint-sys.jpeg'
  }
];