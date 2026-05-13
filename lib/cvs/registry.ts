
import { cv as defaultCV } from './2026-05-13/default/cv'
import { cv as roeblingCV } from './2026-05-13/roebling/cv'
import { cv as vrchatCV } from './2026-05-13/vrchat/cv'
import { CVEntry } from './types'

export const CvRegistry: CVEntry[] = [
    { company: 'default', label: 'Default CV', date: '2026-05-13', cv: defaultCV, submitted: false },
    { company: 'roebling', label: 'Roebling', date: '2026-05-13', cv: roeblingCV, submitted: true },
    { company: 'vrchat', label: 'VRChat', date: '2026-05-13', cv: vrchatCV, submitted: true },
]

export function GetDates(): string[] {
    return [...new Set(CvRegistry.map(e => e.date))].sort().reverse()
}

export function GetCompanies(date: string): { company: string; label: string }[] {
    return CvRegistry.filter(e => e.date === date).map(e => ({ company: e.company, label: e.label }))
}

export function GetCV(date: string, company: string): CVEntry | undefined {
    return CvRegistry.find(e => e.date === date && e.company === company)
}
