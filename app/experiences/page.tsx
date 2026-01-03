
import DownloadCV from '@/components/DownloadCV'
import Link from 'next/link'
import { CVData } from '@/constant/cv'

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
    return (
        <div className="flex min-h-screen items-start justify-center bg-[#B9F8FE] px-4 py-12 font-sans">
            <div className="flex w-full max-w-3xl flex-col gap-8">
                <header>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-black/60 hover:text-black font-semibold transition-colors w-fit"
                        >
                            <span>←</span>
                            <span>Back to Home</span>
                        </Link>
                        <DownloadCV />
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black">
                        Professional Experience
                    </h1>
                    <p className="mt-3 max-w-2xl text-sm sm:text-base text-black/80" dangerouslySetInnerHTML={{
                        // Using split to bold specific parts if needed, or just rendering the summary directly if we accept it's just a string.
                        // However, the original had <strong> tags. Let's try to preserve that if possible or just use the string.
                        // The user wanted "json like object", extracting formatting might be tricky.
                        // For now I will use the plain summary from CVData or try to reconstruct the formatting if I can.
                        // The original was: Engineering Leader with <strong>6+ years</strong> of experience in <strong>Software Engineering, Artificial Intelligence, and Full Stack Development</strong>.
                        // I will put the string in CVData but if I need HTML, I might need to change how I store it or render it.
                        // Let's render it as is for now, maybe finding the keywords to bold is overkill.
                        // Wait, I can just hardcode the styling part if the text matches, OR store the HTML in the constant.
                        // Storing HTML in constant is easier for now.
                        __html: CVData.personalInfo.summary.replace('6+ years', '<strong>6+ years</strong>').replace('Software Engineering, Artificial Intelligence, and Full Stack Development', '<strong>Software Engineering, Artificial Intelligence, and Full Stack Development</strong>')
                    }} />
                </header>

                <div className="flex flex-col gap-6">
                    {CVData.experiences.map((exp, index) => (
                        <ExperienceItem key={index} {...exp} />
                    ))}
                </div>

                {/* Technical Skills Summary */}
                <div className="bg-gradient-to-br from-[#FFE5B4] to-[#FFD700] border-[3px] border-black rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0_0_rgba(0,0,0,1)]">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-black mb-6">Technical Skills</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {CVData.skills.map((skill, index) => (
                            <div key={index}>
                                <h3 className="font-bold text-black mb-2">{skill.category}</h3>
                                <p className="text-sm text-black/80">{skill.items}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Education */}
                <div className="bg-white border-[3px] border-black rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0_0_rgba(0,0,0,1)]">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-black mb-6">Education</h2>
                    <div className="space-y-4">
                        {CVData.education.map((edu, index) => (
                            <div key={index}>
                                <h3 className="text-lg font-bold text-black">{edu.school}</h3>
                                <p className="text-sm text-black/70">{edu.degree}, {edu.grade}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Publications */}
                <div className="bg-white/40 border-[3px] border-black rounded-2xl p-6 shadow-[6px_6px_0_0_rgba(0,0,0,1)]">
                    <h3 className="text-lg font-bold uppercase tracking-[0.1em] text-black mb-4">
                        Publications & Open Source
                    </h3>
                    <ul className="space-y-2">
                        {CVData.publications.map((pub, index) => (
                            <li key={index} className="text-sm text-black/80">
                                • <Link
                                    href={pub.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline hover:text-black transition-colors"
                                >
                                    {pub.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}