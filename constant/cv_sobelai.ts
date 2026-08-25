import { CVData } from '@/lib/cv-types'

export const CVDataSobelAI: CVData = {
    personalInfo: {
        name: "Norma Dani Risdiandita",
        title: "Founding Engineer (Full-Stack / AI)",
        summary: "Founding Engineer with 6+ years shipping production software end-to-end — from schema to UI. Built and scaled two AI-powered SaaS products to 100K+ users as the first engineer, designing full-stack systems (React, TypeScript, PostgreSQL, serverless) and LLM pipelines (OpenAI/Claude, RAG, prompt engineering, guardrails) that run reliably in production. Strong product instincts: I talk to users, translate fuzzy feedback into shipped features, and bias toward ownership and speed. Based in Indonesia (SEA timezone), comfortable with async remote workflows."
    },
    experiences: [
        {
            title: "Senior Software Engineer (Founding Engineer) — CTO",
            company: "Widya Wicara",
            period: "May 2022 – Present",
            icon: "🚀",
            highlights: [
                "Founding engineer — architected and launched two AI products from zero to 100K+ users with 99.9% uptime, owning everything from PostgreSQL schema to React/TypeScript UI",
                "Designed and shipped LLM pipelines in production — multi-stage systems combining deterministic rules with LLM stages (OpenAI/Claude) for summarization, content generation, and structured extraction — handling cost/latency/reliability trade-offs at scale",
                "Built real-time AI workflows with prompt engineering, guardrails, and evaluation — shipping weekly against live customer feedback, iterating on prompt design based on real user behavior",
                "Developed third-party integrations (WhatsApp-like messaging via Zoom, Google Meet, MS Teams APIs) with webhook-driven async pipelines — solving cold-start latency with serverless Cloud Run Jobs",
                "Scaled engineering team from 3 to 15 members — established hiring standards, mentored engineers, and led architecture decisions while continuing to ship individual code daily"
            ]
        },
        {
            title: "Indie Developer / Founder",
            company: "Independent Projects",
            period: "2022 – Present",
            icon: "💡",
            highlights: [
                "Notespark.id: AI-powered study companion (LLM, RAG, agentic workflows, Next.js, Golang, React Native) — 1,000+ users, built with pnpm monorepo, React Query patterns, and serverless backend",
                "OpenBrain: Open-source self-organizing wiki powered by LLM and RAG — prompt-driven knowledge organization with structured extraction and eval — github.com/danirisdiandita/Open-Brain",
                "Built and maintained a medical SaaS product for 2+ years — single-handedly owning full-stack development (React, TypeScript, PostgreSQL), talking directly to clinicians (the users), and turning their workflow needs into shipped features",
                "FastPDF.net: WASM-based all-in-one PDF tool running client-side — deep engineering on web platform performance"
            ]
        },
        {
            title: "VP of Technology — Fractional CTO",
            company: "Widya Robotics",
            period: "Jan 2025 – Present",
            icon: "🤖",
            highlights: [
                "Set technical direction for real-time AI systems processing thousands of events/day — owning architecture decisions and deployment strategy from concept to production",
                "Led cross-functional teams across AI, full-stack engineering, and dataset engineering — mentoring engineers and establishing development standards"
            ]
        },
        {
            title: "Senior Software Engineer / Founding Engineer / Co-Founder",
            company: "INFIDEA.ID",
            period: "Dec 2020 – 2024",
            icon: "🏢",
            highlights: [
                "Co-founder — delivered AI/ML, optimization, and SaaS projects across industries as early engineer with end-to-end ownership",
                "Built a real-time auto-trading platform with WebSocket pub/sub architecture handling live data streams",
                "Delivered production ML features (Text-to-Speech, Object Detection, OCR, Crowd Counting) for enterprise clients"
            ]
        },
        {
            title: "Data Scientist",
            company: "AZIMA",
            period: "Jan 2020 – Dec 2020",
            icon: "📊",
            highlights: [
                "Built recommendation systems and route optimization using collaborative filtering",
                "Developed custom NLU engine for a retail chatbot — direct implementation without framework dependency"
            ]
        },
        {
            title: "Data Scientist",
            company: "DATANEST",
            period: "Jul 2019 – Dec 2020",
            icon: "📈",
            highlights: [
                "Solved NP-hard optimization problems (VRP, bin-packing, constraint programming)",
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
        { category: "Frontend", items: "React, TypeScript, Next.js, React Native, TailwindCSS, React Query, Vite" },
        { category: "Backend & Data", items: "Node.js, FastAPI, PostgreSQL, Supabase, serverless/edge functions, REST APIs, webhooks" },
        { category: "LLM & AI in Production", items: "OpenAI/Claude APIs, RAG, prompt engineering, structured extraction, guardrails, eval harness, cost/latency tuning" },
        { category: "Cloud & Infra", items: "GCP, AWS, Cloud Run, Kubernetes, Docker, CI/CD (GitHub Actions)" },
        { category: "Languages", items: "TypeScript/JavaScript, Python, Go, Node.js" },
        { category: "Founding & Leadership", items: "Early-stage engineering, team scaling (3→15), async remote workflows, product instincts, talking to users, shipping fast" }
    ],
    links: [
        { label: "GitHub", url: "https://github.com/danirisdiandita" },
        { label: "LinkedIn", url: "https://www.linkedin.com/in/risdiandita/" }
    ]
}
