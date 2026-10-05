import type { CVData as CVDataShape } from '@/lib/cv-types'

export const CVData: CVDataShape = {
  personalInfo: {
    name: 'Norma Dani Risdiandita',
    title: 'Senior Software Engineer - Full-Stack & AI/ML',
    summary: 'Senior Software Engineer and hands-on technology leader with 7+ years of experience building and shipping production AI and distributed systems. Deep experience across speech AI, RAG/NLP, computer vision, backend systems, Kubernetes, and cloud infrastructure (AWS/GCP), with systems serving 100K+ users. Combines hands-on engineering with system architecture, technical leadership, and client-facing delivery, owning complex products from design and model development through production deployment and optimization.',
    email: 'norma.risdiandita@gmail.com',
    phone: '+62 813-2861-7302',
    location: 'Yogyakarta, Indonesia',
  },
  experiences: [
    {
      title: 'Senior Software Engineer / Founding Engineer / CTO',
      company: 'Widya Wicara',
      period: 'May 2022 – Present',
      icon: '🚀',
      highlights: [
        'Architected, built, and launched Transkripsi.id and Widya Notulensi (https://notulensi.id), production AI and LLM-powered transcription products serving 100K+ users with 99.9% uptime and over 1,000 AI workloads per month.',
        'Built production speech-to-text, meeting transcription, and multi-participant speaker diarization, with encryption in transit and at rest and versioning for meeting-data integrity and tamper traceability.',
        'Shipped automated meeting-bot integrations for Zoom, Google Meet, and Microsoft Teams; moved workloads from Kubernetes to Google Cloud Run Jobs, reducing join latency from 1–2 minutes to under 30 seconds and idle infrastructure costs.',
        'Architected and shipped AI products across conversational AI, text-to-speech, generative video, content automation, and media processing using Wav2Vec, Whisper, FastSpeech2, Parallel WaveGAN, and ESPnet2.',
        'Built and led the engineering team through multiple growth stages, peaking at 15 engineers and later restructuring to a core team of 3; established hiring standards and a junior-to-senior mentoring track.',
        'Technology: Next.js, NestJS, Python, Flask, PyTorch, Docker, Google Cloud Run, Kubernetes.',
      ],
    },
    {
      title: 'Fractional CTO',
      company: 'Widya Robotics & Widya Security',
      period: 'Jan 2025 – Jun 2026',
      icon: '🤖',
      highlights: [
        'Led technical presales and end-to-end delivery for AI projects, from client discovery and solution architecture through implementation and production deployment.',
        'Led a RAG-based clinical assistant for skin-clinic doctors, answering questions from internal documents and checking stock across clinics.',
        'Architected and delivered a real-time vehicle counting, classification, and license plate recognition system for harbor operations, processing 5,000+ vehicle detections per day with YOLO, MobileNetV3, PyTorch/TensorRT, FastAPI, RabbitMQ, and Docker.',
        'Closed and led delivery of a real-time computer-vision system counting thousands of fertilizer bags per day in production.',
        'Led cybersecurity initiatives at Widya Security, including an LLM-powered VAPT reporting platform that accelerated penetration-testing report generation.',
      ],
    },
    {
      title: 'Senior Software Engineer / Co-Founder',
      company: 'Infidea.id',
      period: 'Dec 2020 – Apr 2022',
      icon: '🏢',
      highlights: [
        'Served as a client-facing technical lead and hands-on engineer, translating business requirements into production AI/ML systems and mentoring junior engineers.',
        'Owned the ML lifecycle from model training and experimentation through API integration, containerization, and production deployment with Docker and Kubernetes.',
        'Delivered Text-to-Speech, Object Detection, OCR, and Crowd Counting systems for a major telecommunications client.',
        'Built MillionRobo, a real-time algorithmic trading platform using WebSocket and pub/sub, and NextSci, an optimization engine for routing, bin-packing, and scheduling.',
      ],
    },
    {
      title: 'Data Scientist & ML Engineer',
      company: 'Azima, Datanest & Sorabel',
      period: 'Mar 2019 – Dec 2020',
      icon: '📊',
      highlights: [
        'At Azima, built conversational commerce and logistics over WhatsApp, including custom NLU, OCR-based order-to-product mapping, and VRP delivery optimization.',
        'At Datanest, built demand forecasting and time-series models to predict retail customer reorders and help sales teams prioritize outreach.',
        'At Sorabel, developed market-basket analysis and search/recommendation models for fashion e-commerce.',
      ],
    },
  ],
  projects: [
    { title: 'NoteSpark AI', period: '2025–Present', description: 'https://notespark.id — Built and launched an AI study companion using LLMs, RAG, Next.js, Go, and React Native, reaching 1,700+ registered users.' },
    { title: 'FastPDF.net', period: '2024', description: 'Built a WASM-based, fully client-side PDF and file-conversion toolkit; document processing stays in the browser.' },
    { title: 'Medical SaaS', period: '2020–Present', description: 'Built and maintained a production SaaS platform used continuously by a medical clinic for 2+ years.' },
  ],
  education: [
    { school: 'Imperial College London', degree: 'MSc Physics, Computational & Solar Cells', grade: 'GPA 3.7 · 2017–2018' },
    { school: 'Universitas Gadjah Mada', degree: 'BSc Physics, Theoretical & Computational', grade: 'GPA 3.66 · 2011–2015' },
  ],
  certifications: ['Certified Appsec Practitioner V2 (CAP) · May 2026', 'ISO/IEC 27001:2022 Lead Implementer · April 2025'],
  publications: [],
  skills: [
    { category: 'Languages', items: 'Python, Go, TypeScript/JavaScript, C/C++, R' },
    { category: 'AI/ML', items: 'Computer Vision, RAG, NLP, Generative AI, end-to-end ML systems' },
    { category: 'ML Frameworks', items: 'PyTorch, LangChain, TensorFlow' },
    { category: 'Backend & APIs', items: 'Go/Gin, Flask, FastAPI, Node.js, NestJS, microservices' },
    { category: 'Cloud & Infra', items: 'AWS, GCP, Kubernetes, Docker, Cloud Run, AWS Lambda' },
    { category: 'Frontend & Mobile', items: 'React, React Native, Next.js' },
    { category: 'Data', items: 'SQL, BigQuery, PostgreSQL, Redis' },
    { category: 'DevOps', items: 'CI/CD with GitHub Actions, GitLab CI' },
    { category: 'Leadership', items: 'Technical leadership, system architecture, technical presales, mentoring, hiring, cross-functional collaboration' },
  ],
  links: [
    { label: 'Email', url: 'mailto:norma.risdiandita@gmail.com' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/risdiandita' },
    { label: 'GitHub', url: 'https://github.com/danirisdiandita' },
    { label: 'Website', url: 'https://danirisdiandita.com' },
  ],
}
