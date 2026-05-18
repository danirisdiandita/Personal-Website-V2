import { CVData } from '@/lib/cv-types'

export const CVDataBunny: CVData = {
    personalInfo: {
        name: "Norma Dani Risdiandita",
        title: "Staff Software Engineer",
        summary: "Staff-level Software Engineer with 6+ years of experience building and operating distributed systems at scale — from cloud infrastructure to developer-facing products. Led engineering teams from 3 to 15 members while maintaining 99.9% uptime on AWS and GCP. Experienced in containerized deployments (Kubernetes, Docker, Cloud Run), CI/CD pipelines, and observability across production systems serving 100K+ users. Open source contributor and technical writer with a strong focus on developer experience and shipping fast."
    },
    experiences: [
        {
            title: "Senior Software Engineer (Founding Engineer) — CTO",
            company: "Widya Wicara",
            period: "May 2022 – Present",
            icon: "🚀",
            highlights: [
                "Architected and operated distributed systems serving 100K+ users with 99.9% uptime on AWS and GCP — owning infrastructure, deployment, and observability end-to-end",
                "Led migration from Kubernetes to Cloud Run Jobs, reducing cold-start latency and cutting infrastructure costs while maintaining sub-second response times under production load",
                "Designed and built third-party integrations (Zoom, Google Meet, MS Teams) with message brokers, handling authentication, data pipelines, and reliability at scale",
                "Established CI/CD pipelines (GitHub Actions), monitoring, alerting, and observability standards — setting the bar for how the team builds and operates in production",
                "Scaled engineering from 3 to 15 members — set hiring standards, mentored engineers across levels, and led cross-team architecture decisions",
                "Debugged and resolved complex production issues under load, including real-time WebSocket pipelines and multi-region deployment failures"
            ]
        },
        {
            title: "VP of Technology — Fractional CTO",
            company: "Widya Robotics",
            period: "Jan 2025 – Present",
            icon: "🤖",
            highlights: [
                "Set technical direction for real-time Vehicle Counting & Classification system processing thousands of events/day on distributed infrastructure",
                "Led cross-team initiatives across AI, full-stack engineering, and dataset engineering — guiding architecture decisions and mentoring engineers across disciplines",
                "Drove Fertilizer Bag Counting AI system from concept to production deployment, owning infrastructure and deployment strategy"
            ]
        },
        {
            title: "Indie Developer / Founder",
            company: "Independent Projects",
            period: "2022 – Present",
            icon: "💡",
            highlights: [
                "Built and maintained a production medical SaaS product for 2+ years — single-handedly owning full-stack development, cloud infrastructure, and production operations",
                "Notespark.id: AI-powered study companion (LLM, RAG, Next.js, Golang, React Native) — 1,000+ users, built with strong focus on developer experience and fast iteration",
                "OpenBrain: Open-source self-organizing wiki powered by LLM and RAG — github.com/danirisdiandita/Open-Brain",
                "FastPDF.net: WASM-based all-in-one PDF tool running entirely client-side — deep systems-level engineering with no server dependency"
            ]
        },
        {
            title: "Senior Software Engineer / Founding Engineer / Co-Founder",
            company: "INFIDEA.ID",
            period: "Dec 2020 – 2024",
            icon: "🏢",
            highlights: [
                "Delivered AI/ML, optimization, and SaaS projects across industries as founding engineer",
                "Built a real-time auto-trading platform with WebSocket pub/sub and message broker architecture handling live market data streams",
                "NextSci: Optimization algorithms for routing, bin packing, and scheduling — applying constraint programming to real industrial logistics problems",
                "Delivered production ML features (Text-to-Speech, Object Detection, OCR, Crowd Counting) for enterprise Telco clients"
            ]
        },
        {
            title: "Data Scientist",
            company: "AZIMA",
            period: "Jan 2020 – Dec 2020",
            icon: "📊",
            highlights: [
                "Built recommendation systems and route optimization using collaborative filtering and constraint-based approaches",
                "Developed custom NLU engine for a retail chatbot without framework dependency"
            ]
        },
        {
            title: "Data Scientist",
            company: "DATANEST",
            period: "Jul 2019 – Dec 2020",
            icon: "📈",
            highlights: [
                "Solved NP-hard optimization problems (VRP, bin-packing, constraint programming) using computational methods",
                "Built demand forecasting and recommendation features for the Demand AI platform"
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
        { label: "PyAsRule — Association Rule Library", url: "https://pypi.org/project/pyasrule/" },
        { label: "OpenBrain — Self-Organizing Wiki (OSS)", url: "https://github.com/danirisdiandita/Open-Brain" }
    ],
    skills: [
        { category: "Distributed Systems", items: "AWS, GCP, Kubernetes, Docker, Cloud Run, multi-region deployments, 99.9% uptime at scale" },
        { category: "Infrastructure & Operations", items: "CI/CD (GitHub Actions, GitLab CI), observability, monitoring, alerting, production debugging" },
        { category: "Backend & APIs", items: "REST, FastAPI, Flask, Node.js, NestJS, WebSocket, microservices, message brokers, Redis" },
        { category: "Databases", items: "PostgreSQL, MongoDB, SQL, BigQuery, Redis" },
        { category: "Frontend", items: "React, Next.js, React Native, TypeScript, JavaScript, TailwindCSS" },
        { category: "Languages", items: "Python, Go, TypeScript/JavaScript, Node.js — eager to adopt C# for the right problem domain" },
        { category: "AI & ML", items: "LLM, RAG, agentic workflows, NLP, Computer Vision, Generative AI" },
        { category: "Leadership & Communication", items: "Team scaling (3→15), mentoring, architecture design, cross-team initiatives, technical writing, open source" }
    ],
    links: [
        { label: "GitHub", url: "https://github.com/danirisdiandita" },
        { label: "LinkedIn", url: "https://www.linkedin.com/in/risdiandita/" }
    ]
}
