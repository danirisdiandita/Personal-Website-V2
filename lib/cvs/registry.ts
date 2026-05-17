import { CVEntry } from '@/lib/cvs/types'
import { CVDataRoot } from '@/constant/cv_root'
import { CVDataAccesstime } from '@/constant/cv_accesstime'
import { cv as defaultCV } from './2026-05-13/default/cv'
import { cv as roeblingCV } from './2026-05-13/roebling/cv'
import { cv as vrchatCV } from './2026-05-13/vrchat/cv'

export const CvRegistry: CVEntry[] = [
    {
        company: 'accesstime',
        label: 'Accesstime — Senior Full Stack Engineer',
        date: '2026-05-17',
        cv: CVDataAccesstime as CVEntry['cv'],
    },
    {
        company: 'root-functional-medicine',
        label: 'Root Functional Medicine — Senior Software Engineer',
        date: '2026-05-15',
        cv: CVDataRoot,
    },
    {
        company: 'default',
        label: 'Default CV (General)',
        date: '2026-05-13',
        cv: defaultCV,
    },
    {
        company: 'roebling',
        label: 'Roebling — Senior Software Engineer',
        date: '2026-05-13',
        cv: roeblingCV,
    },
    {
        company: 'vrchat',
        label: 'VRChat — Senior Software Engineer',
        date: '2026-05-13',
        cv: vrchatCV,
    },
]

export function GetDates(): string[] {
    const dates = [...new Set(CvRegistry.map((e) => e.date))]
    return dates.sort().reverse()
}

export function GetCompanies(date: string): { company: string; label: string }[] {
    return CvRegistry
        .filter((e) => e.date === date)
        .map((e) => ({ company: e.company, label: e.label }))
}

export function GetCV(date: string, company: string): CVEntry | undefined {
    return CvRegistry.find((e) => e.date === date && e.company === company)
}
