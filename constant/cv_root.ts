import { CVData } from '@/lib/cv-types'

export const CVDataRoot: CVData = {
    personalInfo: {
        name: "Norma Dani Risdiandita",
        title: "Senior Full-Stack Engineer",
        summary: "Senior Full-Stack Engineer with 6+ years of experience building AI-enabled platforms end-to-end — from schema to UI. Built and maintained a medical SaaS product used by a clinic for 2+ years. Experienced in designing LLM-powered agentic workflows, RAG pipelines, ETL data integrations, and real-time cloud infrastructure. Led engineering teams from 3 to 15 members while maintaining SOC 2, GDPR, and ISO 27001 compliance across production systems."
    },
    experiences: [
        {
            title: "Senior Software Engineer (Founding Engineer) — CTO",
            company: "Widya Wicara",
            period: "May 2022 – Present",
            icon: "🚀",
            highlights: [
                "Architected and launched AI products end-to-end: Transkripsi.id (85,805 users) and Widya Notulensi (17,015 users), owning features from database schema to React UI with 99.9% uptime",
                "Built AI-powered workflows into the product — real-time transcription, diarization, and LLM-based summarization — integrating agentic orchestration, tool use, and RAG with tight clinician feedback loops",
                "Designed and implemented external data integrations (Zoom, Google Meet, MS Teams APIs) solving cold-start issues with Kubernetes and cutting costs 40% by migrating to Cloud Run Jobs",
                "Led the development of an AI-powered video editor with generative avatars, prompt engineering, and a custom cloud rendering engine — shipped to real users with rapid iteration cycles",
                "Established engineering standards: code quality, testing, observability, CI/CD (GitHub Actions), and security best practices compliant with SOC 2, GDPR, and ISO 27001",
                "Scaled the engineering team from 3 to 15 members; set hiring standards, mentored junior-to-senior engineers, and collaborated daily with cross-functional stakeholders"
            ]
        },
        {
            title: "Indie Developer / Founder",
            company: "Independent Projects",
            period: "2022 – Present",
            icon: "💡",
            highlights: [
                "Built and maintained a medical SaaS product used by a clinic for 2+ years — owning full-stack development, data integrations, and direct collaboration with clinicians to translate workflows into software",
                "Notespark.id: AI-powered study companion (LLM, RAG, agentic workflows, Next.js, Golang, React Native) — 1,000+ users with AI features shipped to real users in production",
                "FastPDF.net: WASM-based all-in-one PDF & file conversion tools — fully client-side, demonstrating depth in web platform engineering",
                "OpenBrain: Open-source self-organizing wiki powered by LLM and RAG (alpha) — https://github.com/danirisdiandita/Open-Brain"
            ]
        },
        {
            title: "VP of Technology — Fractional CTO",
            company: "Widya Robotics",
            period: "Jan 2025 – Present",
            icon: "🤖",
            highlights: [
                "Designed and guided AI systems for Vehicle Counting & Classification (real-time processing of thousands of vehicles/day) and Fertilizer Bag Counting — from concept to production deployment",
                "Led cross-functional teams across AI, full-stack engineering, dataset engineering, and product management — establishing architecture standards and mentoring across disciplines"
            ]
        },
        {
            title: "Senior Software Engineer / Founding Engineer / Co-Founder",
            company: "INFIDEA.ID",
            period: "Dec 2020 – 2024",
            icon: "🏢",
            highlights: [
                "Delivered AI/ML, optimization, and SaaS projects across multiple industries as founding engineer",
                "Built MillionRobo: real-time auto-trading platform (WebSocket, pub/sub) and NextSci: optimization algorithms for routing, bin packing, and scheduling",
                "Delivered ML features — Text-to-Speech, Object Detection, OCR, Crowd Counting — for enterprise Telco clients"
            ]
        },
        {
            title: "Data Scientist",
            company: "AZIMA",
            period: "Jan 2020 – Dec 2020",
            icon: "📊",
            highlights: [
                "Built recommendation systems, route optimization algorithms, product mapping, and chatbots",
                "Developed custom NLU for retail chatbot"
            ]
        },
        {
            title: "Data Scientist",
            company: "DATANEST",
            period: "Jul 2019 – Dec 2020",
            icon: "📈",
            highlights: [
                "Solved optimization problems (VRP, bin-packing, constraint programming)",
                "Built predictive features for Demand AI platform (forecasting, recommendations)"
            ]
        },
        {
            title: "Data Scientist",
            company: "Sorabel (by Sale Stock)",
            period: "Mar 2019 – Jun 2019",
            icon: "🛍️",
            highlights: [
                "Developed Market Basket Analysis and Search Recommendation systems"
            ]
        }
    ],
    education: [
        {
            school: "Imperial College London",
            degree: "MSc Physics (Computational & Solar Cells)",
            grade: "GPA 3.7"
        },
        {
            school: "Universitas Gadjah Mada",
            degree: "BSc Physics (Theoretical & Computational)",
            grade: "GPA 3.66"
        }
    ],
    publications: [
        { label: "Recommendation System Article", url: "https://towardsdatascience.com/recommendation-system-part-1-use-of-collaborative-filtering-and-hybrid-collaborative-content-in-6137ba64ad58" },
        { label: "Market Basket Analysis", url: "https://medium.com/@sirlcern3/high-performance-and-reliable-market-basket-analysis-using-item-to-item-collaborative-filtering-81e24cbf40d2" },
        { label: "PyAsRule – Association Rule Library", url: "https://pypi.org/project/pyasrule/" },
        { label: "OpenBrain — Self-Organizing Wiki (OSS)", url: "https://github.com/danirisdiandita/Open-Brain" }
    ],
    skills: [
        { category: "AI/ML & LLMs", items: "RAG, agentic workflows, tool use, prompt engineering, LLM orchestration, NLP, Computer Vision, Generative AI" },
        { category: "Backend & APIs", items: "REST, FastAPI, Flask, Gin, NestJS, microservices, data integrations, webhooks" },
        { category: "Cloud & Infra", items: "AWS, GCP, Kubernetes, Docker, Cloud Run, CI/CD (GitHub Actions), IaC" },
        { category: "Data & Integrations", items: "ETL pipelines, PostgreSQL, SQL, BigQuery, third-party API integrations" },
        { category: "Frontend & Mobile", items: "React, Next.js, React Native, TypeScript/JavaScript, Svelte fundamentals" },
        { category: "Languages", items: "Python, Go, Node.js, TypeScript/JavaScript, C/C++, R" },
        { category: "Compliance & Security", items: "GDPR, SOC 2, ISO 27001, security best practices, regulated environments" },
        { category: "Leadership", items: "Team scaling (3→15), hiring, mentoring, cross-functional collaboration, architecture design" }
    ],
    links: [
        { label: "GitHub", url: "https://github.com/danirisdiandita" },
        { label: "LinkedIn", url: "https://www.linkedin.com/in/risdiandita/" }
    ]
}
