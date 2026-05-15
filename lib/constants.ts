// lib/constants.ts — All portfolio data

export const PERSONAL_INFO = {
  name: "AGNIVESH AB",
  firstName: "AGNIVESH",
  lastName: "AB",
  email: "agniveshab2701@gmail.com",
  github: "https://github.com/agniveshab",
  instagram: "https://instagram.com/agniveshab",
  college: "Dhanalakshmi Srinivasan Engineering College",
  degree: "B.Tech Computer Science Engineering",
  graduationYear: "2027",
  location: "India",
  tagline: "Building systems for the future.",
};

export const ROTATING_TITLES = [
  "AI Engineer",
  "Full Stack Developer",
  "Flutter Developer",
  "Backend Engineer",
  "Builder",
];

export const ABOUT_POINTS = [
  "Computer Science student at Dhanalakshmi Srinivasan Engineering College (2023–2027)",
  "Passionate about AI systems, backend engineering, and futuristic UI/UX design",
  "Loves building practical software products that solve real-world problems",
  "Focused on scalable systems architecture and clean engineering",
  "Deeply interested in privacy-first, offline-capable AI systems",
  "Self-learner and problem-solver who moves fast and ships often",
];

export const SKILLS = {
  Frontend: [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Flutter", icon: "💙" },
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "Tailwind CSS", icon: "🌊" },
    { name: "Vite", icon: "⚡" },
  ],
  Backend: [
    { name: "Node.js", icon: "🟢" },
    { name: "Express.js", icon: "🚂" },
    { name: "FastAPI", icon: "🚀" },
    { name: "Django", icon: "🎸" },
  ],
  Programming: [
    { name: "Python", icon: "🐍" },
    { name: "JavaScript", icon: "🟡" },
    { name: "Java", icon: "☕" },
    { name: "C", icon: "©" },
    { name: "C++", icon: "➕" },
    { name: "Assembly", icon: "🔩" },
  ],
  "AI / ML": [
    { name: "GPT4All", icon: "🤖" },
    { name: "OCR Systems", icon: "👁️" },
    { name: "Scikit-learn", icon: "📊" },
    { name: "EasyOCR", icon: "🔍" },
    { name: "AI Agents", icon: "🧠" },
    { name: "Local AI Inference", icon: "💻" },
  ],
  "Database & Cloud": [
    { name: "MongoDB", icon: "🍃" },
    { name: "Firebase", icon: "🔥" },
    { name: "Firestore", icon: "📂" },
    { name: "Supabase", icon: "⚡" },
  ],
  Tools: [
    { name: "Git", icon: "🌿" },
    { name: "GitHub", icon: "🐙" },
    { name: "Canva", icon: "🎨" },
    { name: "Adobe After Effects", icon: "🎬" },
    { name: "Tesseract.js", icon: "🔤" },
  ],
};

export type Project = {
  id: number;
  title: string;
  shortDesc: string;
  longDesc: string;
  tags: string[];
  color: string;
  icon: string;
  link?: string;
  status: "Live" | "In Progress" | "Completed" | "Experimental";
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Medical Imaging & Lab Report Explainer AI",
    shortDesc: "Secure offline AI for medical report analysis with privacy-first architecture.",
    longDesc:
      "A fully offline, privacy-first AI application that analyzes medical imaging data and lab reports. Built with FastAPI and GPT4All, it performs local AI inference — no data leaves the device. Designed for patients and healthcare workers who need intelligent insights without cloud dependency.",
    tags: ["FastAPI", "GPT4All", "Python", "Local AI", "Privacy-first", "OCR"],
    color: "#00d4ff",
    icon: "🏥",
    status: "Completed",
  },
  {
    id: 2,
    title: "CodeGent — AI Coding Assistant Agent",
    shortDesc: "AI coding assistant that debugs, generates, and explains code autonomously.",
    longDesc:
      "An intelligent AI coding agent that assists developers with debugging, code generation, and step-by-step explanations. Integrates with local AI models to provide an autonomous workflow without relying on cloud APIs. Boosts developer productivity with AI-assisted code review.",
    tags: ["AI Agent", "Python", "LLM", "Code Generation", "Debugging"],
    color: "#bf5af2",
    icon: "🤖",
    status: "In Progress",
  },
  {
    id: 3,
    title: "Studentz Bangalore",
    shortDesc: "Student community platform for issue reporting and tracking in Bangalore.",
    longDesc:
      "A full-stack community platform for students in Bangalore to report and track campus-related issues, share resources, and build a collaborative student network. Built with React, Node.js, and MongoDB with real-time updates and a clean, modern interface.",
    tags: ["React", "Node.js", "MongoDB", "Community", "Full Stack"],
    color: "#22d3ee",
    icon: "🎓",
    link: "https://studentzbangalor.vercel.app",
    status: "Live",
  },
  {
    id: 4,
    title: "Nexora — Smart Finance & Expense Tracker",
    shortDesc: "AI-powered personal finance tracker with OCR receipt parsing and predictions.",
    longDesc:
      "An intelligent personal finance application that uses OCR to parse receipts, AI to predict spending patterns, and Firebase for real-time sync. Features expense categorization, budget alerts, and beautiful data visualizations to help users take control of their finances.",
    tags: ["React", "Firebase", "OCR", "AI", "Finance", "Data Visualization"],
    color: "#34d399",
    icon: "💰",
    status: "Completed",
  },
  {
    id: 5,
    title: "AI Learning Platform for Kids",
    shortDesc: "Voice-tutored, gamified learning with OCR handwriting recognition.",
    longDesc:
      "An interactive AI-powered educational platform designed for children. Features voice tutoring with natural language responses, OCR-based handwriting recognition for assignment submission, parent analytics dashboards, and a gamified reward system to encourage consistent learning.",
    tags: ["React", "Voice AI", "OCR", "EasyOCR", "Gamification", "Firebase"],
    color: "#fbbf24",
    icon: "🧒",
    status: "In Progress",
  },
  {
    id: 6,
    title: "CineSnap — Social Platform",
    shortDesc: "Glassmorphic Flutter social app for movie enthusiasts.",
    longDesc:
      "A Flutter-based social platform for movie lovers featuring a stunning glassmorphic UI. Users can share reviews, create watchlists, and discover new films through community recommendations. Powered by Firebase for auth and Supabase for media storage.",
    tags: ["Flutter", "Firebase", "Supabase", "Glassmorphism", "Social App"],
    color: "#f97316",
    icon: "🎬",
    status: "Completed",
  },
  {
    id: 7,
    title: "Beginner Operating System",
    shortDesc: "Bootable OS built in Assembly + C exploring memory management.",
    longDesc:
      "A bare-metal operating system project built from scratch using Assembly and C. Implements a basic bootloader, memory management primitives, interrupt handling, and a minimal text-mode shell. A deep-dive exploration into systems programming and computer architecture.",
    tags: ["Assembly", "C", "OS Dev", "Bootloader", "Memory Management"],
    color: "#94a3b8",
    icon: "💾",
    status: "Experimental",
  },
  {
    id: 8,
    title: "Instagram Frontend Clone",
    shortDesc: "Pixel-perfect Flutter UI clone of Instagram's social interface.",
    longDesc:
      "A highly detailed Flutter replication of Instagram's frontend interface. Covers the feed, stories, explore, reels, and profile pages with smooth animations and responsive layouts. Built as a UI/UX study to sharpen Flutter widget composition skills.",
    tags: ["Flutter", "UI/UX", "Dart", "Responsive Design", "Clone"],
    color: "#ec4899",
    icon: "📱",
    status: "Completed",
  },
];

export const EXPERIENCE = [
  {
    role: "Flutter Development Intern",
    company: "SMEC Technologies",
    location: "Ernakulam, Kerala",
    period: "Jun 2025 – Jul 2025",
    type: "Internship",
    color: "#00d4ff",
    points: [
      "Learned Flutter fundamentals and Dart programming from the ground up",
      "Designed responsive UI components following Material Design principles",
      "Worked on color schemes, typography, and visual consistency across screens",
      "Improved understanding of frontend development workflow and best practices",
    ],
  },
];

export const EDUCATION = [
  {
    degree: "B.Tech Computer Science Engineering",
    institution: "Dhanalakshmi Srinivasan Engineering College",
    period: "2023 – 2027",
    grade: "Pursuing",
    color: "#00d4ff",
    icon: "🎓",
  },
  {
    degree: "Higher Secondary (12th)",
    institution: "State Board",
    period: "2021 – 2023",
    grade: "89%",
    color: "#bf5af2",
    icon: "📚",
  },
  {
    degree: "Secondary (10th)",
    institution: "State Board",
    period: "2020 – 2021",
    grade: "90%",
    color: "#22d3ee",
    icon: "🏫",
  },
];

export const AI_RESPONSES: Record<string, string> = {
  default:
    "Hi! I'm Agnivesh's AI assistant. Ask me about his skills, projects, experience, or anything else about him!",
  skills:
    "Agnivesh is proficient in React, Next.js, Flutter, FastAPI, Django, Python, Node.js, and more. He specializes in Full Stack development, AI/ML systems, and mobile development with Flutter. His core strength is bridging frontend excellence with powerful backend and AI capabilities.",
  projects:
    "Agnivesh has built 8 major projects including a Medical AI explainer with offline inference, CodeGent (an AI coding agent), Studentz Bangalore (a live community platform), Nexora (an AI finance tracker), a kids' AI learning platform, CineSnap (a Flutter social app), a bare-metal OS, and an Instagram UI clone.",
  experience:
    "Agnivesh completed a Flutter Development Internship at SMEC Technologies in Ernakulam during June–July 2025, where he designed responsive UIs and learned Flutter fundamentals in a professional environment.",
  education:
    "Agnivesh is currently pursuing a B.Tech in Computer Science Engineering (2023–2027) at Dhanalakshmi Srinivasan Engineering College. He scored 89% in Higher Secondary and 90% in Secondary school.",
  contact:
    "You can reach Agnivesh at agniveshab2701@gmail.com. He's also active on GitHub and Instagram. He's open to collaborations, internships, and exciting project opportunities!",
  ai: "Agnivesh is deeply passionate about AI systems — especially privacy-first, offline AI inference using GPT4All and local models. He's built medical AI, coding AI agents, OCR systems, and educational AI. His vision is building AI that runs anywhere, even without internet.",
  hello:
    "Hey there! 👋 I'm Agnivesh's AI assistant. I can tell you about his projects, skills, education, or experience. What would you like to know?",
  who: "Agnivesh AB is a Computer Science Engineering student, Full Stack Developer, AI/ML Engineer, and Flutter Developer. He's a self-driven builder who creates practical, real-world software — from offline medical AI to student community platforms. He's passionate about scalable systems and futuristic technology.",
};
