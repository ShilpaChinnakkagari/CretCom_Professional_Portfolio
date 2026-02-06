
import { Project } from './types';

export const COMMANDS = [
  'help', 'about', 'skills', 'projects', 'education', 
  'contact', 'resume', 'download resume', 'theme', 'clear'
];

export const PROJECTS: Project[] = [
  {
    id: 'attendrix',
    name: 'Attendrix',
    description: 'Attendrix is a real-time, AI-enabled automated attendance and student management system that captures student presence through classroom entry/exit cameras and instantly displays attendance on classroom dashboards and Andriod apps, while also integrating academic automation, analytics, and personalized learning into a single role-based platform.',
    tech: ['React', 'OpenCV', 'Deep Learning', 'Python'],
    githubUrl: 'https://github.com/ShilpaChinnakkagari/Automated_Attendance',
    imageUrl: 'https://private-user-images.githubusercontent.com/196427027/468128865-357449ce-f1b8-40d4-ae30-3410d257a16b.jpg?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzAxNzczMzQsIm5iZiI6MTc3MDE3NzAzNCwicGF0aCI6Ii8xOTY0MjcwMjcvNDY4MTI4ODY1LTM1NzQ0OWNlLWYxYjgtNDBkNC1hZTMwLTM0MTBkMjU3YTE2Yi5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwMjA0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDIwNFQwMzUwMzRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hYjNmM2UxYTRlZDNjNmQ4YzY1MzNkMDhiNTFiNWQ3MGM4NzJjMjlmZDc5OGUzY2I3ODIzNTllZDA1NjZhZDc0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.jHNGSCgarYG7OR9r2jBtwZQf_dfE_S28a2Lk8aWt7zQ'
  },
  {
    id: 'cretcom',
    name: 'CretCom Study Portal',
    description: 'Developed a study app to store and access subject-wise learning materials by academic year, eliminating manual file searches and reducing network dependency through offline availability.',
    tech: ['Flutter', 'Firebase', 'Dart'],
    githubUrl: 'Uploaded soon',
    imageUrl: 'https://www.linkedin.com/posts/shilpa-chinnakkagari56085341_welcome-to-cret-com-study-portal-android-activity-7371233271994572801-e2kB?utm_source=share&utm_medium=member_desktop&rcm=ACoAADI7xNEBe5eIemLaxclVr3GzJM6f6dFhkIE'
  },
  {
    id: 'health-assistant',
    name: 'Health Assistant',
    description: 'An AI-powered multilingual health assistant providing 24/7 health guidance, progress tracking, and emergency support through an intelligent dashboard, developed during Infosys Virtual Internship 6.0.',
    tech: ['NLP', 'Python', 'React'],
    githubUrl: 'https://github.com/ShilpaChinnakkagari/INFOSYS_internshipProj_HEALTH_CHAT_BOT',
    imageUrl: 'https://private-user-images.githubusercontent.com/196427027/513817316-f02fc876-36b0-47b4-81e3-2b6bf9cf49ba.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzAxNzc2MDQsIm5iZiI6MTc3MDE3NzMwNCwicGF0aCI6Ii8xOTY0MjcwMjcvNTEzODE3MzE2LWYwMmZjODc2LTM2YjAtNDdiNC04MWUzLTJiNmJmOWNmNDliYS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwMjA0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDIwNFQwMzU1MDRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04NGYyNWNlZDVkZGQyMTA2MmI0Mzc2MDdhYTg5YzVjNzBlYWYzYTA2ZTg1MGM1MzQ2NjAzZjE1NmJlMzU1YzYwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.n7z118iII-f3vhDfAjgTXW5fXm8-a0LcfHjwa8pZyok'
  },
  {
    id: 'certigen',
    name: 'Automated Certificate Generation System (Excel-Based & Manual Input)',
    description: 'Replaced hard work with smart work by building an Automated Certificate Generator in just 1 hour using Python (Flask), Excel ! It generates personalized certificates instantly—individually or in bulk—and boosted my backend and file-handling skills.',
    tech: ['Flask', 'Python', 'Canva API'],
    githubUrl: 'https://github.com/shilpa-ai/certigen',
    imageUrl: 'https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'comm-train',
    name: 'GenAI Comm Trainer',
    description: 'Developing an AI-driven platform to help students practice and improve company-specific interview communication skills through structured, guided exercises.',
    tech: ['Gen AI', 'Google AI Studio', 'Gemini API'],
    githubUrl: 'https://github.com/shilpa-ai/comm-trainer',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'complaint-sys',
    name: 'Cretcom Shilpa Institute Complaint Hub',
    description: 'Direct communication bridge for institutional accountability and student grievance resolution.',
    tech: ['Google AI Studio ', 'Gen AI'],
    githubUrl: 'https://github.com/shilpa-ai/student-hub',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800'
  }
];
