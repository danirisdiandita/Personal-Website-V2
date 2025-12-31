export type Project = {
  slug: string;
  title: string;
  description: string;
  domain?: string;
  status: 'Running' | 'Pivot' | 'Discontinued';
  techStack: string[];
  userCount?: string;
  year: string;
  colorClass: string;
  role?: string;
};

export const projects: Project[] = [
  {
    slug: "notespark-ai",
    title: "NoteSpark AI - AI Study Companion",
    description: "AI-Powered Study Assistant – Developed a learning platform that converts audio, video, and PDF files into structured, easy-to-read study notes. Enhanced user experience by enabling automatic generation of flashcards, mind maps, and quizzes, with support for printable formats. Implemented conversational AI features allowing users to query their notes and receive instant answers.",
    domain: "notespark.id",
    status: "Running",
    techStack: ["Next.js", "Golang", "RAG", "Prompt Engineering", "React Native"],
    userCount: "162 users",
    year: "2025",
    colorClass: "bg-[#A8B4F6]",
    role: "Solo Builder & Marketer"
  },
  {
    slug: "fast-pdf",
    title: "Fast PDF",
    description: "Lightning-Fast PDF Tools That Protect Your Privacy. Processed Entirely in Your Browser - WASM Powered.",
    domain: "fastpdf.net",
    status: "Running",
    techStack: ["Next.js", "TypeScript", "WASM", "C++", "Golang"],
    userCount: "52 users",
    year: "2025",
    colorClass: "bg-[#FFE59D]",
    role: "Solo Builder"
  },
  {
    slug: "transkripsi-id",
    title: "Transkripsi ID - Widya Notulensi Lite",
    description: "Convert audio to text transcription and summary.",
    domain: "transkripsi.id",
    status: "Running",
    techStack: ["Next.js", "NestJS", "Python", "PyTorch"],
    userCount: "59,712 users",
    year: "2025",
    colorClass: "bg-[#FFB4C8]",
    role: "Team Lead & Manager"
  },
  {
    slug: "widya-notulensi",
    title: "Widya Notulensi",
    description: "Meeting notes integrated to online meetings (Google Meet, Zoom, Microsoft Teams) + upload audio with speaker identification.",
    domain: "notulensi.id",
    status: "Running",
    techStack: ["Next.js", "NestJS", "Python", "PyTorch", "C++"],
    userCount: "11,686 users",
    year: "2025",
    colorClass: "bg-[#C9F0DD]",
    role: "CTO, System Architect"
  },
  {
    slug: "ai-video-editor",
    title: "AI Video Editor Widya Wicara",
    description: "AI Video Editor like Canva - like Heygen. Canva-like video editor with news anchor AI.",
    domain: "mediamaker.widyawicara.com",
    status: "Pivot",
    techStack: ["Next.js", "Canvas", "FabricJS", "Python", "FFMPEG"],
    userCount: "0 users",
    year: "2023",
    colorClass: "bg-[#FFD4A3]",
    role: "CTO, System Architect"
  },
  {
    slug: "auto-news-youtube",
    title: "Automatic News Generator Youtube",
    description: "Automatically create news video on YouTube with news anchor using text to speech Widya Wicara.",
    status: "Pivot",
    techStack: ["Python", "TTS", "Video Generation"],
    year: "2023",
    colorClass: "bg-[#E5D4FF]",
    role: "Solo Builder"
  },
  {
    slug: "chatbot-widya",
    title: "Chatbot Widya Wicara",
    description: "Chatbot service platform.",
    domain: "chatbot.widyawicara.com",
    status: "Pivot",
    techStack: ["NLP", "Chatbot Framework"],
    year: "2023",
    colorClass: "bg-[#FFB4C8]",
    role: "Contributor"
  },
  {
    slug: "stt-widya",
    title: "Speech to Text Widya Wicara",
    description: "Speech to text service.",
    domain: "stt.widyawicara.com",
    status: "Pivot",
    techStack: ["Python", "PyTorch", "ASR"],
    year: "2023",
    colorClass: "bg-[#C9F0DD]",
  },
  {
    slug: "audio-widget",
    title: "Widya Audio Widget",
    description: "Audio widget service.",
    domain: "audio-widget.widyawicara.com",
    status: "Pivot",
    techStack: ["JavaScript", "Audio API"],
    year: "2023",
    colorClass: "bg-[#FFE59D]",
  },
  {
    slug: "tts-widya",
    title: "Text to Speech Widya Wicara",
    description: "Text to speech service.",
    domain: "tts.widyawicara.com",
    status: "Pivot",
    techStack: ["Python", "TTS Engine"],
    year: "2023",
    colorClass: "bg-[#A8B4F6]",
  },
  {
    slug: "rekam-medis",
    title: "Rekam Medis",
    description: "Medical report system for small clinics.",
    status: "Running",
    techStack: ["Web App", "Database"],
    userCount: "1 clinic",
    year: "2025",
    colorClass: "bg-[#FFD4A3]",
    role: "Solo Builder"
  },
  {
    slug: "infidea-api-gateway",
    title: "Infidea API Gateway",
    description: "API Gateway service from Infidea.",
    status: "Pivot",
    techStack: ["API Gateway", "Microservices"],
    year: "2020",
    colorClass: "bg-[#E5D4FF]",
  },
  {
    slug: "next-router",
    title: "Next Router - Route Optimisation Platform",
    description: "Route optimisation for logistics.",
    domain: "nextsci.com",
    status: "Pivot",
    techStack: ["Route Optimization", "Logistics"],
    year: "2021",
    colorClass: "bg-[#FFB4C8]",
  },
  {
    slug: "millionrobo",
    title: "MillionRobo - Automatic Robotrading",
    description: "Automatic robotrading using Windows app and subscription based. Our robot will automatically trade your MetaTrader account.",
    domain: "millionrobo.com",
    status: "Pivot",
    techStack: ["Windows App", "MetaTrader", "Trading Bot"],
    userCount: "~20 users",
    year: "2021",
    colorClass: "bg-[#C9F0DD]",
  },
];
