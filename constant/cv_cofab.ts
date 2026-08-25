import { CVData } from '@/lib/cv-types'

export const CVDataCoFab: CVData = {
    personalInfo: {
        name: "Norma Dani Risdiandita",
        title: "Founding Engineer",
        summary: "Founding Engineer with 6+ years shipping production software end-to-end on the React, TypeScript, Node.js, PostgreSQL, AWS stack. Built and scaled two products to 100K+ users as the first engineer — owning system architecture, database schema, CI/CD pipelines, and production reliability. Daily user of AI-assisted coding (Claude Code, Cursor) for shipping faster. Based in Indonesia (SEA timezone), with hands-on experience building for industrial and enterprise customers."
    },
    experiences: [
        {
            title: "Senior Software Engineer (Founding Engineer) — CTO",
            company: "Widya Wicara",
            period: "May 2022 – Present",
            icon: "🚀",
            highlights: [
                "Founding engineer — architected and launched two products from scratch to 100K+ users with 99.9% uptime, owning everything: system architecture, PostgreSQL schema, React/TypeScript UI, and AWS/GCP infrastructure",
                "Built full-stack web applications with React, TypeScript, Node.js (NestJS), and PostgreSQL — designing backend APIs, business logic, and database schemas from the ground up",
                "Established CI/CD pipelines (GitHub Actions), observability, and security best practices compliant with SOC 2, GDPR, and ISO 27001 — handling enterprise customer data requirements",
                "Resolved critical production bugs under load — debugging real-time WebSocket pipelines, cold-start latency issues, and multi-region deployment failures while maintaining customer trust",
                "Managed AWS infrastructure and deployment pipelines, migrating workloads from Kubernetes to Cloud Run Jobs to optimize costs and improve reliability",
                "Scaled engineering team from 3 to 15 members — set hiring standards, mentored engineers, and led architecture decisions while continuing to ship individual code daily"
            ]
        },
        {
            title: "VP of Technology — Fractional CTO",
            company: "Widya Robotics",
            period: "Jan 2025 – Present",
            icon: "🤖",
            highlights: [
                "Designed and deployed industrial AI systems for manufacturing-adjacent operations — Vehicle Counting & Classification for harbor logistics and Fertilizer Bag Counting for agricultural production",
                "Owned system architecture and production reliability for real-time detection systems processing thousands of events per day",
                "Led cross-functional engineering teams — establishing architecture standards and mentoring across AI, full-stack, and infrastructure disciplines"
            ]
        },
        {
            title: "Indie Developer / Founder",
            company: "Independent Projects",
            period: "2022 – Present",
            icon: "💡",
            highlights: [
                "Built and maintained a production medical SaaS product for 2+ years — single-handedly owning full-stack development (React, TypeScript, PostgreSQL, AWS), infrastructure, and direct customer support",
                "Notespark.id: AI-powered study companion (LLM, RAG, Next.js, Golang, React Native) — 1,000+ users, built with AI-assisted coding (Claude Code, Cursor) for rapid iteration",
                "OpenBrain: Open-source self-organizing wiki powered by LLM and RAG — github.com/danirisdiandita/Open-Brain",
                "FastPDF.net: WASM-based all-in-one PDF tool — fully client-side, demonstrating depth in web platform engineering"
            ]
        },
        {
            title: "Senior Software Engineer / Founding Engineer / Co-Founder",
            company: "INFIDEA.ID",
            period: "Dec 2020 – 2024",
            icon: "🏢",
            highlights: [
                "Co-founder — delivered AI/ML, optimization, and SaaS projects across industries with end-to-end ownership",
                "Built a real-time auto-trading platform with WebSocket pub/sub architecture, owning system design and production reliability",
                "Delivered production ML features (Text-to-Speech, Object Detection, OCR, Crowd Counting) for enterprise Telco clients — managing tight customer schedules and demands"
            ]
        },
        {
            title: "Data Scientist",
            company: "AZIMA",
            period: "Jan 2020 – Dec 2020",
            icon: "📊",
            highlights: [
                "Built recommendation systems and route optimization for enterprise clients",
                "Developed custom NLU engine for a retail chatbot"
            ]
        },
        {
            title: "Data Scientist",
            company: "DATANEST",
            period: "Jul 2019 – Dec 2020",
            icon: "📈",
            highlights: [
                "Solved NP-hard optimization problems (VRP, bin-packing, constraint programming)",
                "Built demand forecasting features for the Demand AI platform"
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
        { category: "Frontend", items: "React, TypeScript, Next.js, React Native, TailwindCSS" },
        { category: "Backend & APIs", items: "Node.js, NestJS, FastAPI, REST APIs, business logic, schema design" },
        { category: "Database", items: "PostgreSQL, SQL, BigQuery, data integrity, schema ownership" },
        { category: "AWS & Infrastructure", items: "AWS, Cloud Run, Lambda, Kubernetes, Docker, CI/CD (GitHub Actions), security best practices (SOC 2, GDPR, ISO 27001)" },
        { category: "AI-Assisted Development", items: "Claude Code, Cursor, Copilot — daily use for shipping faster, debugging, and code review" },
        { category: "Languages", items: "TypeScript/JavaScript, Node.js, Python, Go, C/C++, R" },
        { category: "Founding & Leadership", items: "Early-stage engineering, team scaling (3→15), independent execution, owning outcomes, rapid shipping" }
    ],
    links: [
        { label: "GitHub", url: "https://github.com/danirisdiandita" },
        { label: "LinkedIn", url: "https://www.linkedin.com/in/risdiandita/" }
    ]
}
