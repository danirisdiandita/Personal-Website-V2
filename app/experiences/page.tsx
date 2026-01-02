import Link from 'next/link'

interface ExperienceItemProps {
    title: string
    company: string
    period: string
    highlights: string[]
    icon: string
}

function ExperienceItem({ title, company, period, highlights, icon }: ExperienceItemProps) {
    return (
        <div className="relative bg-white border-[3px] border-black rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:shadow-[8px_8px_0_0_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
            <div className="absolute -top-4 -left-4 h-12 w-12 bg-[#FFE5B4] border-[3px] border-black rounded-full flex items-center justify-center shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                <span className="text-2xl">{icon}</span>
            </div>

            <div className="pt-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-black">{title}</h3>
                        <p className="text-base sm:text-lg font-semibold text-black/70">{company}</p>
                    </div>
                    <div className="inline-block bg-black px-3 py-1 rounded-lg shadow-[2px_2px_0_0_rgba(0,0,0,0.3)] self-start">
                        <p className="text-xs font-semibold text-[#FFE5B4] whitespace-nowrap">{period}</p>
                    </div>
                </div>

                <ul className="space-y-2">
                    {highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <span className="text-lg mt-0.5 flex-shrink-0">▸</span>
                            <span className="text-sm sm:text-base text-black/80 leading-relaxed">{highlight}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default function Experiences() {
    const experiences = [
        {
            title: 'CTO',
            company: 'Widya Wicara',
            period: 'May 2022 – Present',
            icon: '🚀',
            highlights: [
                'Architected and launched products with large user bases: Transkripsi.id (59K+ users) and Widya Notulensi (15K+ users)',
                'Built technologies for real-time transcription, summarization, secure data handling, and diarization at scale with GDPR compliant, SOC2, and ISO 27001 infrastructure',
                'Led development of an AI-powered video editor with generative avatars and cloud rendering engine',
                'Hands on working on AI Automations: SEO friendly articles generators with AI, TikTok Content Creation Automation (Photos / Carousels)',
                'Mentoring, Collaborating, and setting the hiring standards for Junior to Senior technical employees'
            ]
        },
        {
            title: 'VP of Technology',
            company: 'Widya Robotics',
            period: 'Jan 2025 – Present',
            icon: '🤖',
            highlights: [
                'Led Vehicle Counting & Classification system for harbor operations',
                'Guided Fertilizer Bag Counting AI project from concept to deployment',
                'Mentored teams and collaborating across AI, full-stack development, datasets, and PM functions'
            ]
        },
        {
            title: 'Indie Developer / Founder',
            company: 'Independent Projects',
            period: '2022 – Present',
            icon: '💡',
            highlights: [
                'Notespark.id: AI-powered study companion (LLM, RAG, Next.js, Golang, React Native)',
                'FastPDF.net: WASM-based all-in-one PDF & file conversion tools',
                'Built & maintained a medical SaaS product used by a clinic for 2+ years'
            ]
        },
        {
            title: 'Co-Founder & CTO',
            company: 'INFIDEA.ID',
            period: 'Dec 2020 – 2024',
            icon: '🏢',
            highlights: [
                'Delivered AI/ML, optimization, and SaaS projects across industries',
                'MillionRobo: Auto-trading platform (websocket, pubsub)',
                'NextSci: Optimization algorithms for routing, bin packing, and scheduling',
                'Delivered ML features including Text-to-Speech, Object Detection, OCR, and Crowd Counting'
            ]
        },
        {
            title: 'Data Scientist',
            company: 'AZIMA',
            period: 'Jan 2020 – Dec 2020',
            icon: '📊',
            highlights: [
                'Built recommendation systems, route optimization, product mapping, and chatbots',
                'Developed custom NLU for retail chatbot'
            ]
        },
        {
            title: 'Data Scientist',
            company: 'DATANEST',
            period: 'Jul 2019 – Dec 2020',
            icon: '📈',
            highlights: [
                'Solved optimization problems (VRP, bin-packing, constraint programming)',
                'Built predictive features for Demand AI (forecasting, recommendations)'
            ]
        },
        {
            title: 'Data Scientist',
            company: 'Sorabel (by Sale Stock)',
            period: 'Mar 2019 – Jun 2019',
            icon: '🛍️',
            highlights: [
                'Worked on Market Basket Analysis and Search Recommendations'
            ]
        }
    ]

    return (
        <div className="flex min-h-screen items-start justify-center bg-[#B9F8FE] px-4 py-12 font-sans">
            <div className="flex w-full max-w-3xl flex-col gap-8">
                <header>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-black/60 hover:text-black mb-6 font-semibold transition-colors"
                    >
                        <span>←</span>
                        <span>Back to Home</span>
                    </Link>
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black">
                        Professional Experience
                    </h1>
                    <p className="mt-3 max-w-2xl text-sm sm:text-base text-black/80">
                        Engineering Leader with <strong>6+ years</strong> of experience in <strong>Software Engineering, Artificial Intelligence, and Full Stack Development</strong>. Proven ability to design and deliver scalable products, lead cross-functional teams, and deploy AI-driven solutions into production.
                    </p>
                </header>

                <div className="flex flex-col gap-6">
                    {experiences.map((exp, index) => (
                        <ExperienceItem key={index} {...exp} />
                    ))}
                </div>

                {/* Technical Skills Summary */}
                <div className="bg-gradient-to-br from-[#FFE5B4] to-[#FFD700] border-[3px] border-black rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0_0_rgba(0,0,0,1)]">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-black mb-6">Technical Skills</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <h3 className="font-bold text-black mb-2">Backend & APIs</h3>
                            <p className="text-sm text-black/80">REST, Gin, Flask, FastAPI, NestJS, scalable microservices</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-black mb-2">Cloud & Infra</h3>
                            <p className="text-sm text-black/80">AWS, GCP, Kubernetes, Docker, Cloud Run, Lambda</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-black mb-2">Databases</h3>
                            <p className="text-sm text-black/80">SQL, BigQuery</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-black mb-2">DevOps</h3>
                            <p className="text-sm text-black/80">CI/CD with GitHub Actions, GitLab CI</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-black mb-2">AI/ML</h3>
                            <p className="text-sm text-black/80">RAG, NLP, Computer Vision (CV), Generative AI, full ML lifecycle deployment</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-black mb-2">Frontend & Mobile</h3>
                            <p className="text-sm text-black/80">React, React Native, Next.js</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-black mb-2">Languages</h3>
                            <p className="text-sm text-black/80">Python, Go, JavaScript/TypeScript, Node.js, C/C++, R, MATLAB, Fortran</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-black mb-2">Leadership</h3>
                            <p className="text-sm text-black/80">Team coaching, mentoring, hiring, cross-functional collaboration</p>
                        </div>
                    </div>
                </div>

                {/* Education */}
                <div className="bg-white border-[3px] border-black rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0_0_rgba(0,0,0,1)]">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-black mb-6">Education</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-lg font-bold text-black">Imperial College London</h3>
                            <p className="text-sm text-black/70">MSc Physics (Computational & Solar Cells), GPA 3.7</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-black">Universitas Gadjah Mada</h3>
                            <p className="text-sm text-black/70">BSc Physics (Theoretical & Computational), GPA 3.66</p>
                        </div>
                    </div>
                </div>

                {/* Publications */}
                <div className="bg-white/40 border-[3px] border-black rounded-2xl p-6 shadow-[6px_6px_0_0_rgba(0,0,0,1)]">
                    <h3 className="text-lg font-bold uppercase tracking-[0.1em] text-black mb-4">
                        Publications & Open Source
                    </h3>
                    <ul className="space-y-2">
                        <li className="text-sm text-black/80">
                            • <Link
                                href="https://towardsdatascience.com/recommendation-system-part-1-use-of-collaborative-filtering-and-hybrid-collaborative-content-in-6137ba64ad58"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline hover:text-black transition-colors"
                            >
                                Recommendation System Article
                            </Link>
                        </li>
                        <li className="text-sm text-black/80">
                            • <Link
                                href="https://medium.com/@sirlcern3/high-performance-and-reliable-market-basket-analysis-using-item-to-item-collaborative-filtering-81e24cbf40d2"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline hover:text-black transition-colors"
                            >
                                Market Basket Analysis
                            </Link>
                        </li>
                        <li className="text-sm text-black/80">
                            • <Link
                                href="https://pypi.org/project/pyasrule/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline hover:text-black transition-colors"
                            >
                                PyAsRule – Association Rule Library
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}