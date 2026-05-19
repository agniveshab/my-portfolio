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
  tagline: "Building thoughtful software that solves real problems.",
};

export const ROTATING_TITLES = [
  "Full Stack Developer",
  "AI/ML Engineer",
  "Backend Developer",
  "Flutter Developer",
];

export const ABOUT_PARAGRAPHS = [
  "I'm a Computer Science student at Dhanalakshmi Srinivasan Engineering College, driven by curiosity and a deep passion for building software that matters.",
  "My focus lies at the intersection of AI systems and backend engineering — creating practical, production-grade tools that solve real-world problems with clean architecture.",
  "I care deeply about UI/UX craft and scalable system design. Whether it's a privacy-first AI assistant or a full-stack platform, I approach every project with the same standard of quality.",
  "I'm a self-learner who moves fast, ships often, and never stops exploring what's possible with code.",
];

export const SKILLS = {
  Frontend: [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Flutter", icon: "💙" },
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
  ],
  "Database & Cloud": [
    { name: "MongoDB", icon: "🍃" },
    { name: "Firebase", icon: "🔥" },
    { name: "Firestore", icon: "📂" },
    { name: "Supabase", icon: "⚡" },
  ],
};

export type Project = {
  id: number;
  title: string;
  shortDesc: string;
  longDesc: string;
  tags: string[];
  icon: string;
  link?: string;
  github?: string;
  status: "Live" | "In Progress" | "Completed" | "Experimental";
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Medical Imaging & Lab Report Explainer AI",
    shortDesc:
      "Secure offline AI for medical report analysis with privacy-first architecture.",
    longDesc:
      "A fully offline, privacy-first AI application that analyzes medical imaging data and lab reports. Built with FastAPI and GPT4All, it performs local AI inference — no data leaves the device. Designed for patients and healthcare workers who need intelligent insights without cloud dependency.",
    tags: ["FastAPI", "GPT4All", "Python", "Local AI", "Privacy-first", "OCR"],
    icon: "🏥",
    status: "Completed",
  },
  {
    id: 2,
    title: "CodeGent",
    shortDesc:
      "AI coding assistant that debugs, generates, and explains code autonomously.",
    longDesc:
      "An intelligent AI coding agent that assists developers with debugging, code generation, and step-by-step explanations. Integrates with local AI models to provide an autonomous workflow without relying on cloud APIs. Boosts developer productivity with AI-assisted code review.",
    tags: ["AI Agent", "Python", "LLM", "Code Generation", "Debugging"],
    icon: "🤖",
    status: "In Progress",
  },
  {
    id: 3,
    title: "Studentz Bangalore",
    shortDesc:
      "Student community platform for issue reporting and tracking.",
    longDesc:
      "A full-stack community platform for students in Bangalore to report and track campus-related issues, share resources, and build a collaborative student network. Built with React, Node.js, and MongoDB with real-time updates and a clean, modern interface.",
    tags: ["React", "Node.js", "MongoDB", "Full Stack"],
    icon: "🎓",
    link: "https://studentzbangalor.vercel.app",
    status: "Live",
  },
  {
    id: 4,
    title: "Nexora",
    shortDesc:
      "AI-powered personal finance tracker with OCR receipt parsing and predictions.",
    longDesc:
      "An intelligent personal finance application that uses OCR to parse receipts, AI to predict spending patterns, and Firebase for real-time sync. Features expense categorization, budget alerts, and beautiful data visualizations.",
    tags: ["React", "Firebase", "OCR", "AI", "Finance"],
    icon: "💰",
    status: "Completed",
  },
  {
    id: 5,
    title: "AI Learning Platform for Kids",
    shortDesc:
      "Voice-tutored, gamified learning with OCR handwriting recognition.",
    longDesc:
      "An interactive AI-powered educational platform designed for children. Features voice tutoring with natural language responses, OCR-based handwriting recognition for assignment submission, parent analytics dashboards, and a gamified reward system.",
    tags: ["React", "Voice AI", "OCR", "EasyOCR", "Firebase"],
    icon: "🧒",
    status: "In Progress",
  },
  {
    id: 6,
    title: "CineSnap",
    shortDesc: "Flutter social platform for movie enthusiasts.",
    longDesc:
      "A Flutter-based social platform for movie lovers. Users can share reviews, create watchlists, and discover new films through community recommendations. Powered by Firebase for auth and Supabase for media storage.",
    tags: ["Flutter", "Firebase", "Supabase", "Social App"],
    icon: "🎬",
    status: "Completed",
  },
  {
    id: 7,
    title: "Beginner Operating System",
    shortDesc:
      "Bootable OS built in Assembly + C exploring low-level systems.",
    longDesc:
      "A bare-metal operating system project built from scratch using Assembly and C. Implements a basic bootloader, memory management primitives, interrupt handling, and a minimal text-mode shell. A deep-dive into systems programming and computer architecture.",
    tags: ["Assembly", "C", "OS Dev", "Bootloader"],
    icon: "💾",
    status: "Experimental",
  },
  {
    id: 8,
    title: "Instagram Frontend Clone",
    shortDesc:
      "Pixel-perfect Flutter UI clone of Instagram's social interface.",
    longDesc:
      "A highly detailed Flutter replication of Instagram's frontend interface. Covers the feed, stories, explore, reels, and profile pages with smooth animations and responsive layouts. Built as a UI/UX study to sharpen Flutter widget composition skills.",
    tags: ["Flutter", "UI/UX", "Dart", "Responsive Design"],
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
    icon: "🎓",
  },
  {
    degree: "Higher Secondary (12th)",
    institution: "State Board",
    period: "2021 – 2023",
    grade: "89%",
    icon: "📚",
  },
  {
    degree: "Secondary (10th)",
    institution: "State Board",
    period: "2020 – 2021",
    grade: "90%",
    icon: "🏫",
  },
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
