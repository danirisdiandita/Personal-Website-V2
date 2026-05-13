import { CVData } from '../../types'

export const cv: CVData = {
    personalInfo: {
        name: "Norma Dani Risdiandita",
        title: "Senior Software Engineer",
        summary: "Senior Software Engineer with an MSc in Physics from Imperial College London and 6+ years shipping production software end-to-end. Founding engineer who built and scaled LLM-powered products to 85K+ users while growing the team from 3 to 15. Comfortable reasoning from first principles — whether designing Pydantic schemas and FastAPI services, debugging real-time systems under load, or orchestrating LLM agents across thousands of scenarios. AI-native workflow; ships daily."
    },
    experiences: [
        {
            title: "Senior Software Engineer (Founding Engineer) — CTO",
            company: "Widya Wicara",
            period: "May 2022 – Present",
            icon: "🚀",
            highlights: [
                "Built and scaled two LLM-powered SaaS products — real-time transcription and meeting intelligence — to 85K+ and 17K+ registered users respectively, maintaining 99.9% uptime on a lean team",
                "Owned the full stack end-to-end: Pydantic/FastAPI services, PostgreSQL data models, React/Next.js frontends, and real-time WebSocket pipelines for live AI transcription and diarization",
                "Orchestrated custom LLM workflows (Anthropic, Google model APIs) for summarization, generative content, and AI video editing — no LangChain dependency — shipping features to production weekly against live customer feedback",
                "Optimized cold-start latency for Zoom/Meet/Teams transcription bots: migrated from Kubernetes to Cloud Run Jobs, reducing infrastructure cost while maintaining sub-second response times",
                "Scaled engineering from 3 to 15 — set hiring bar, mentored engineers — while continuing to ship individual code and own critical services daily",
                "Built AI automation pipelines for SEO content and social media generation, evaluating cost/quality/latency tradeoffs across thousands of generation scenarios"
            ]
        },
        {
            title: "VP of Technology — Fractional CTO",
            company: "Widya Robotics",
            period: "Jan 2025 – Present",
            icon: "🤖",
            highlights: [
                "Architected a real-time Vehicle Counting & Classification system processing thousands of vehicles per day for harbor operations — owned the full pipeline from AI model design to deployment",
                "Designed and shipped a Fertilizer Bag Counting AI system from concept to production, handling real-time detection of thousands of bags per day",
                "Led cross-functional teams (AI, full-stack, datasets, PM) delivering industrial-grade computer vision systems end-to-end"
            ]
        },
        {
            title: "Indie Developer / Founder",
            company: "Independent Projects",
            period: "2022 – Present",
            icon: "💡",
            highlights: [
                "Notespark.id: AI-powered study companion with custom RAG pipelines and direct LLM orchestration (Next.js, Golang, React Native) — 1000+ users and growing",
                "FastPDF.net: WASM-based all-in-one PDF tool running entirely client-side — deep systems-level engineering with no server dependency",
                "Built and maintained a production medical SaaS product for 2+ years, single-handedly owning the full stack"
            ]
        },
        {
            title: "Senior Software Engineer / Founding Engineer / Co-Founder",
            company: "INFIDEA.ID",
            period: "Dec 2020 – 2024",
            icon: "🏢",
            highlights: [
                "Delivered numerical optimization solutions (routing, bin packing, scheduling) for logistics clients — applying constraint programming and first-principles modeling to real industrial problems",
                "Built MillionRobo: real-time auto-trading platform with WebSocket pub/sub architecture, handling live market data streams at scale",
                "Shipped production ML features (Text-to-Speech, Object Detection, OCR, Crowd Counting) for a major telecom — owning features from schema design through deployment"
            ]
        },
        {
            title: "Data Scientist",
            company: "AZIMA",
            period: "Jan 2020 – Dec 2020",
            icon: "📊",
            highlights: [
                "Built recommendation systems and route optimization using collaborative filtering and constraint-based approaches",
                "Developed a custom NLU engine for a retail chatbot — direct implementation without framework dependency"
            ]
        },
        {
            title: "Data Scientist",
            company: "DATANEST",
            period: "Jul 2019 – Dec 2020",
            icon: "📈",
            highlights: [
                "Solved NP-hard optimization problems (VRP, bin-packing) using constraint programming — applying computational physics background to numerical methods",
                "Built demand forecasting and recommendation features for the Demand AI platform"
            ]
        },
        {
            title: "Data Scientist",
            company: "Sorabel (by Sale Stock)",
            period: "Mar 2019 – Jun 2019",
            icon: "🛍️",
            highlights: [
                "Implemented high-performance market basket analysis using item-to-item collaborative filtering at e-commerce scale"
            ]
        }
    ],
    education: [
        {
            school: "Imperial College London",
            degree: "MSc Physics — Computational & Solar Cells",
            grade: "GPA 3.7"
        },
        {
            school: "Universitas Gadjah Mada",
            degree: "BSc Physics — Theoretical & Computational",
            grade: "GPA 3.66"
        }
    ],
    publications: [
        { label: "Recommendation System Article", url: "https://towardsdatascience.com/recommendation-system-part-1-use-of-collaborative-filtering-and-hybrid-collaborative-content-in-6137ba64ad58" },
        { label: "Market Basket Analysis", url: "https://medium.com/@sirlcern3/high-performance-and-reliable-market-basket-analysis-using-item-to-item-collaborative-filtering-81e24cbf40d2" },
        { label: "PyAsRule — Association Rule Library", url: "https://pypi.org/project/pyasrule/" }
    ],
    skills: [
        { category: "Backend & APIs", items: "FastAPI, Pydantic, PostgreSQL, Flask, NestJS, scalable microservices, WebSocket" },
        { category: "Frontend", items: "React, Next.js, TailwindCSS, Redux, TypeScript, Vercel" },
        { category: "Cloud & Infra", items: "AWS, GCP, Kubernetes, Docker, Cloud Run, Supabase" },
        { category: "LLM & AI", items: "Direct Anthropic & Google model APIs, custom LLM orchestration, RAG, NLP, Computer Vision, Generative AI" },
        { category: "Engineering Fundamentals", items: "Performance profiling, debugging live systems, numerical optimization, constraint programming, first-principles reasoning" },
        { category: "DevOps & Tooling", items: "CI/CD (GitHub Actions, GitLab CI), Claude Code / Cursor AI-native development, observability" },
        { category: "Languages", items: "Python, Go, TypeScript/JavaScript, Node.js, C/C++, R" },
        { category: "Domain", items: "Physics (MSc), computational modeling, simulation, numerical methods, systems thinking" }
    ]
}
