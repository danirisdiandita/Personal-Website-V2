import { CVData } from '../../types'

export const cv: CVData = {
    personalInfo: {
        name: "Norma Dani Risdiandita",
        title: "Senior Software Engineer",
        summary: "Senior Software Engineer with 6+ years of experience building secure, full-stack web applications with Node.js and React. Proven track record of designing production-grade systems compliant with GDPR, SOC2, and ISO 27001 standards. Experienced in integrating third-party platforms and building real-time, trust-critical infrastructure at scale."
    },
    experiences: [
        {
            title: "Senior Software Engineer (Founding Engineer) - CTO",
            company: "Widya Wicara",
            period: "May 2022 – Present",
            icon: "🚀",
            highlights: [
                "Architected and launched core products (Transkripsi.id — 59K+ users, Widya Notulensi — 15K+ users) with 99.9% uptime on robust Node.js and React stacks",
                "Built secure, scalable infrastructure fully compliant with GDPR, SOC2, and ISO 27001 — including access controls, audit logging, and data protection measures",
                "Designed and implemented third-party integrations for Zoom, Google Meet, and MS Teams — handling authentication, data pipelines, and reliability across platforms",
                "Solved cold-start latency issues with Kubernetes and optimized infrastructure costs by migrating workloads to Cloud Run Jobs",
                "Established hiring standards and mentored engineers while maintaining hands-on individual contributions to critical systems"
            ]
        },
        {
            title: "VP of Technology - Fractional CTO",
            company: "Widya Robotics",
            period: "Jan 2025 – Present",
            icon: "🤖",
            highlights: [
                "Contributing to a Vehicle Counting & Classification system for harbor operations — guiding AI, dataset, and full-stack engineers through architecture, modeling, and deployment",
                "Guided and designed a Fertilizer Bag Counting AI system from concept to production deployment",
                "Mentored teams and collaborated across AI, full-stack development, datasets, and PM functions"
            ]
        },
        {
            title: "Indie Developer / Founder",
            company: "Independent Projects",
            period: "2022 – Present",
            icon: "💡",
            highlights: [
                "Notespark.id: AI-powered study companion built with Next.js, Golang, and React Native — currently around 1000+ users",
                "FastPDF.net: WASM-based all-in-one PDF & file conversion tool — fully client-side processing",
                "Built & maintained a medical SaaS product used by a clinic for 2+ years — handling patient data with strict reliability and uptime requirements",
                "OpenBrain: Open-source self-organizing wiki powered by LLM and RAG (alpha) — https://github.com/danirisdiandita/Open-Brain"
            ]
        },
        {
            title: "Senior Software Engineer / Founding Engineer / Co-Founder",
            company: "INFIDEA.ID",
            period: "Dec 2020 – 2024",
            icon: "🏢",
            highlights: [
                "Delivered AI/ML, optimization, and SaaS projects across industries",
                "MillionRobo: Real-time auto-trading platform with WebSocket pub/sub architecture",
                "NextSci: Optimization algorithms for routing, bin packing, and scheduling",
                "Delivered ML features including Text-to-Speech, Object Detection, OCR, and Crowd Counting for a Telco company"
            ]
        },
        {
            title: "Data Scientist",
            company: "AZIMA",
            period: "Jan 2020 – Dec 2020",
            icon: "📊",
            highlights: [
                "Built recommendation systems, route optimization, product mapping, and chatbots",
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
                "Built predictive features for Demand AI (forecasting, recommendations)"
            ]
        },
        {
            title: "Data Scientist",
            company: "Sorabel (by Sale Stock)",
            period: "Mar 2019 – Jun 2019",
            icon: "🛍️",
            highlights: [
                "Worked on Market Basket Analysis and Search Recommendations"
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
        { category: "Backend & APIs", items: "Node.js, NestJS, REST, FastAPI, Flask, Gin, scalable microservices" },
        { category: "Frontend", items: "React, Next.js, React Native, TypeScript/JavaScript" },
        { category: "Cloud & Infra", items: "AWS, GCP, Kubernetes, Docker, Cloud Run, AWS Lambda" },
        { category: "Databases", items: "SQL, BigQuery" },
        { category: "Security & Compliance", items: "GDPR, SOC2, ISO 27001, access controls, audit logging, secure infrastructure design" },
        { category: "DevOps & Tooling", items: "CI/CD with GitHub Actions, GitLab CI, third-party API integration" },
        { category: "Languages", items: "JavaScript/TypeScript, Node.js, Python, Go, C/C++, R" },
        { category: "Leadership", items: "Team coaching, mentoring, hiring, cross-functional collaboration" }
    ],
    links: [
        { label: "GitHub", url: "https://github.com/danirisdiandita" },
        { label: "LinkedIn", url: "https://www.linkedin.com/in/risdiandita/" }
    ]
}
