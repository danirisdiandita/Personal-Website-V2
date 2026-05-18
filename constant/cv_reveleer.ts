import { CVData } from '@/lib/cv-types'

export const CVDataReveleer: CVData = {
    personalInfo: {
        name: "Norma Dani Risdiandita",
        title: "Full Stack AI Engineer",
        summary: "Full Stack AI Engineer with 6+ years of experience building and maintaining AI-powered platforms with 100K+ users — owning features end-to-end from schema to UI. Experienced in designing LLM-powered agentic workflows, RAG pipelines, and large-scale cloud infrastructure on AWS and GCP. Built and maintained a medical SaaS product used by a clinic for 2+ years."
    },
    experiences: [
        {
            title: "Senior Software Engineer (Founding Engineer) - CTO",
            company: "Widya Wicara",
            period: "May 2022 – Present",
            icon: "🚀",
            highlights: [
                "Architected and launched core products: Transkripsi.id (85,805 registered users) and Widya Notulensi (17,015 registered users), achieving 99.9% uptime on AWS and GCP infrastructure",
                "Built AI-powered clinical workflows into the product — LLM-based summarization, agentic orchestration, and RAG pipelines — with tight feedback loops from real users",
                "Designed and implemented third-party integrations (Zoom, Google Meet, MS Teams APIs), solving cold-start latency issues with Kubernetes and optimizing costs by migrating to Cloud Run Jobs",
                "Led the development of an AI-powered video editor, integrating generative avatars, prompt engineering, and a custom cloud rendering engine",
                "Established CI/CD pipelines (GitHub Actions), observability, and security best practices compliant with SOC 2, GDPR, and ISO 27001",
                "Managing the engineering team from 3 to 15 members, establishing hiring standards and mentoring junior to senior engineers"
            ]
        },
        {
            title: "Indie Developer / Founder",
            company: "Independent Projects",
            period: "2022 – Present",
            icon: "💡",
            highlights: [
                "Built and maintained a medical SaaS product used by a clinic for 2+ years — owning full-stack development (React, Node.js, MongoDB), data integrations, and direct collaboration with clinicians to translate workflows into software",
                "Notespark.id: AI-powered study companion (LLM, RAG, agentic workflows, Next.js, Golang, React Native) — 1,000+ users with AI features shipped to real users in production",
                "OpenBrain: Open-source self-organizing wiki powered by LLM and RAG — github.com/danirisdiandita/Open-Brain",
                "FastPDF.net: WASM-based all-in-one PDF & file conversion tools — fully client-side, demonstrating depth in web platform engineering"
            ]
        },
        {
            title: "VP of Technology - Fractional CTO",
            company: "Widya Robotics",
            period: "Jan 2025 – Present",
            icon: "🤖",
            highlights: [
                "Contributing to a system for Vehicle Counting & Classification system for harbor operations and guiding AI engineer, Dataset engineer, and Full Stack engineer for the implementation from software architecture, AI model, datasets, and deployment. Handling the detection of thousands of vehicles per day with real-time processing",
                "Guided and designed the system for Fertilizer Bag Counting AI project from concept to deployment and guiding AI engineer, Dataset engineer, and Full Stack engineer for the implementation from software architecture, AI model, datasets, and deployment. Handling the detection of thousands of fertilizer bags per day with real-time processing",
                "Mentored teams and collaborating across AI, full-stack development, datasets, and PM functions"
            ]
        },
        {
            title: "Senior Software Engineer / Founding Engineer / Co-Founder",
            company: "INFIDEA.ID",
            period: "Dec 2020 – 2024",
            icon: "🏢",
            highlights: [
                "Delivered AI/ML, optimization, and SaaS projects across industries",
                "Built a real-time auto-trading platform with WebSocket pub/sub architecture handling live market data streams",
                "NextSci: Optimization algorithms for routing, bin packing, and scheduling",
                "Delivered ML features including Text-to-Speech, Object Detection, OCR, and Crowd Counting as projects for Telco company"
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
        { category: "Backend & APIs", items: "Node.js, NestJS, REST, FastAPI, Flask, Django, scalable microservices" },
        { category: "Frontend", items: "React, Next.js, React Native, TypeScript, JavaScript, CSS, TailwindCSS" },
        { category: "Cloud & Infra", items: "AWS, GCP, Kubernetes, Docker, Cloud Run, AWS Lambda, large-scale systems" },
        { category: "Databases", items: "MongoDB, PostgreSQL, SQL, BigQuery" },
        { category: "AI & Generative AI", items: "LLM, RAG, agentic workflows, tool use, prompt engineering, NLP, Computer Vision, Generative AI" },
        { category: "DevOps & Observability", items: "CI/CD (GitHub Actions, GitLab CI), monitoring, troubleshooting at scale" },
        { category: "Languages", items: "Python, Go, JavaScript/TypeScript, Node.js, C/C++, R" },
        { category: "Leadership", items: "Team coaching, mentoring, hiring, cross-functional collaboration, architecture design" }
    ],
    links: [
        { label: "GitHub", url: "https://github.com/danirisdiandita" },
        { label: "LinkedIn", url: "https://www.linkedin.com/in/risdiandita/" }
    ]
}
