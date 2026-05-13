'use client'

import DownloadCV from '@/components/DownloadCV'
import Link from 'next/link'
import { useState, useMemo, useEffect, useCallback } from 'react'
import { CVData } from '@/app/job-posting/cvs/types'
import { cvRegistry, getDates, getCompanies, getCV } from '@/app/job-posting/cvs/registry'

function linkify(text: string): string {
    const urlRegex = /(https?:\/\/[^\s<>"]+)/g
    return text.replace(urlRegex, '<a href="$1" target="_blank" rel="noopener noreferrer" class="underline hover:text-black transition-colors">$1</a>')
}

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
                            <span className="text-sm sm:text-base text-black/80 leading-relaxed" dangerouslySetInnerHTML={{ __html: linkify(highlight) }} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default function Experiences() {
    const dates = useMemo(() => getDates(), [])
    const [selectedDate, setSelectedDate] = useState<string>(dates[0] || '')
    const [selectedCompany, setSelectedCompany] = useState<string>('')

    const companies = useMemo(() => getCompanies(selectedDate), [selectedDate])

    // Submission checklist — persisted in localStorage
    const SUBMISSION_KEY = 'cv-submissions'
    const [submitted, setSubmitted] = useState<Set<string>>(new Set())

    useEffect(() => {
        try {
            const raw = localStorage.getItem(SUBMISSION_KEY)
            const merged = raw ? new Set<string>(JSON.parse(raw)) : new Set<string>()
            // Always merge registry entries that have submitted: true
            cvRegistry.forEach(entry => {
                if (entry.submitted) merged.add(`${entry.date}/${entry.company}`)
            })
            setSubmitted(merged)
            localStorage.setItem(SUBMISSION_KEY, JSON.stringify([...merged]))
        } catch { /* ignore */ }
    }, [])

    const persistSubmissions = useCallback((next: Set<string>) => {
        setSubmitted(next)
        localStorage.setItem(SUBMISSION_KEY, JSON.stringify([...next]))
    }, [])

    const submissionId = `${selectedDate}/${selectedCompany}`
    const isCurrentSubmitted = selectedCompany ? submitted.has(submissionId) : false

    const toggleSubmitted = useCallback(() => {
        const next = new Set(submitted)
        if (next.has(submissionId)) {
            next.delete(submissionId)
        } else {
            next.add(submissionId)
        }
        persistSubmissions(next)
    }, [submitted, submissionId, persistSubmissions])

    const allSubmissions = useMemo(() => {
        return companies.map(c => ({
            ...c,
            id: `${selectedDate}/${c.company}`,
            submitted: submitted.has(`${selectedDate}/${c.company}`)
        }))
    }, [companies, selectedDate, submitted])

    const submittedCount = allSubmissions.filter(s => s.submitted).length
    const totalCount = allSubmissions.length

    const selectedCV: CVData | undefined = useMemo(() => {
        if (!selectedDate || !selectedCompany) return undefined
        const entry = getCV(selectedDate, selectedCompany)
        return entry?.cv
    }, [selectedDate, selectedCompany])

    const cvData: CVData = selectedCV || cvRegistry[0]?.cv || {
        personalInfo: { name: '', title: '', summary: '' },
        experiences: [],
        education: [],
        publications: [],
        skills: []
    }

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
                        <DownloadCV cvData={selectedCV || cvData} />
                    </div>

                    {/* CV Selector Dropdowns */}
                    <div className="bg-white border-[3px] border-black rounded-2xl p-4 shadow-[4px_4px_0_0_rgba(0,0,0,1)] mb-6">
                        <div className="flex flex-col sm:flex-row gap-4 mb-4">
                            <div className="flex-1">
                                <label className="block text-xs font-bold text-black/60 uppercase tracking-wider mb-1">Date</label>
                                <select
                                    value={selectedDate}
                                    onChange={(e) => {
                                        setSelectedDate(e.target.value)
                                        const newCompanies = getCompanies(e.target.value)
                                        setSelectedCompany(newCompanies[0]?.company || '')
                                    }}
                                    className="w-full px-3 py-2 border-[3px] border-black rounded-lg text-sm font-semibold bg-white focus:outline-none focus:ring-2 focus:ring-[#FFE5B4] appearance-none cursor-pointer"
                                >
                                    {dates.map(date => (
                                        <option key={date} value={date}>{date}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex-1">
                                <label className="block text-xs font-bold text-black/60 uppercase tracking-wider mb-1">Company</label>
                                <select
                                    value={selectedCompany}
                                    onChange={(e) => setSelectedCompany(e.target.value)}
                                    className="w-full px-3 py-2 border-[3px] border-black rounded-lg text-sm font-semibold bg-white focus:outline-none focus:ring-2 focus:ring-[#FFE5B4] appearance-none cursor-pointer"
                                >
                                    {companies.map(c => (
                                        <option key={c.company} value={c.company}>
                                            {c.label} {submitted.has(`${selectedDate}/${c.company}`) ? ' ✓' : ''}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Submit toggle */}
                        {selectedCompany && (
                            <div className="flex items-center justify-between gap-3 mb-4">
                                <button
                                    onClick={toggleSubmitted}
                                    className={`flex items-center gap-2 px-4 py-2 border-[3px] border-black rounded-lg text-sm font-bold shadow-[3px_3px_0_0_rgba(0,0,0,1)] hover:shadow-[1px_1px_0_0_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[3px] active:translate-y-[3px] transition-all ${isCurrentSubmitted
                                        ? 'bg-[#4ECDC4] text-black'
                                        : 'bg-[#FFE5B4] text-black'
                                        }`}
                                >
                                    <span className="text-lg">{isCurrentSubmitted ? '✅' : '📋'}</span>
                                    <span>{isCurrentSubmitted ? 'Submitted' : 'Mark as Submitted'}</span>
                                </button>
                            </div>
                        )}

                        {/* Application Tracker */}
                        {totalCount > 0 && (
                            <div className="border-t-[3px] border-black pt-3">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-xs font-bold text-black/60 uppercase tracking-wider">
                                        Application Tracker
                                    </span>
                                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${submittedCount === totalCount
                                        ? 'bg-[#4ECDC4] text-black'
                                        : 'bg-[#FFE5B4] text-black'
                                        }`}>
                                        {submittedCount}/{totalCount}
                                    </span>
                                </div>
                                <ul className="space-y-1">
                                    {allSubmissions.map(s => (
                                        <li key={s.id} className="flex items-center gap-2 text-sm">
                                            <button
                                                onClick={() => {
                                                    const next = new Set(submitted)
                                                    if (next.has(s.id)) {
                                                        next.delete(s.id)
                                                    } else {
                                                        next.add(s.id)
                                                    }
                                                    persistSubmissions(next)
                                                }}
                                                className={`w-5 h-5 border-[2px] border-black rounded flex-shrink-0 flex items-center justify-center transition-colors ${s.submitted ? 'bg-[#4ECDC4]' : 'bg-white hover:bg-[#FFE5B4]'
                                                    }`}
                                            >
                                                {s.submitted && <span className="text-xs">✓</span>}
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setSelectedDate(selectedDate)
                                                    setSelectedCompany(s.company)
                                                }}
                                                className={`text-left hover:underline ${s.company === selectedCompany ? 'font-bold' : ''
                                                    } ${s.submitted ? 'line-through text-black/40' : 'text-black/80'}`}
                                            >
                                                {s.label}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black">
                        Professional Experience
                    </h1>
                    <p className="mt-3 max-w-2xl text-sm sm:text-base text-black/80" dangerouslySetInnerHTML={{
                        __html: linkify(cvData.personalInfo.summary)
                    }} />
                </header>

                <div className="flex flex-col gap-6">
                    {cvData.experiences.map((exp, index) => (
                        <ExperienceItem key={index} {...exp} />
                    ))}
                </div>

                {/* Technical Skills Summary */}
                <div className="bg-gradient-to-br from-[#FFE5B4] to-[#FFD700] border-[3px] border-black rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0_0_rgba(0,0,0,1)]">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-black mb-6">Technical Skills</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {cvData.skills.map((skill, index) => (
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
                        {cvData.education.map((edu, index) => (
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
                        {cvData.publications.map((pub, index) => (
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
