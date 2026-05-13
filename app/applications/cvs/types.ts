export interface CVData {
    personalInfo: {
        name: string
        title: string
        summary: string
    }
    experiences: {
        title: string
        company: string
        period: string
        icon: string
        highlights: string[]
    }[]
    education: {
        school: string
        degree: string
        grade: string
    }[]
    publications: {
        label: string
        url: string
    }[]
    skills: {
        category: string
        items: string
    }[]
}

export interface CVEntry {
    company: string
    label: string
    date: string
    cv: CVData
    submitted?: boolean
}
