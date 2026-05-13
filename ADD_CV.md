# How to Add a New CV

## Step 1: Create the CV data file

Create a new file at `app/applications/cvs/YYYY-MM-DD/COMPANY_NAME/cv.ts`:

```
app/applications/cvs/
└── 2026-05-13/
    ├── default/
    │   └── cv.ts
    ├── roebling/
    │   └── cv.ts
    └── your-company/          <-- new folder
        └── cv.ts              <-- new file
```

The file must export a `cv` object matching the `CVData` type:

```ts
import { CVData } from '../../types'

export const cv: CVData = {
    personalInfo: {
        name: "Norma Dani Risdiandita",
        title: "Senior Software Engineer",
        summary: "Your tailored summary here..."
    },
    experiences: [
        {
            title: "Role Title",
            company: "Company Name",
            period: "Jan 2020 – Present",
            icon: "🚀",
            highlights: [
                "Highlight 1",
                "Highlight 2"
            ]
        }
    ],
    education: [
        {
            school: "University Name",
            degree: "Degree Name",
            grade: "GPA 3.7"
        }
    ],
    publications: [
        { label: "Article Title", url: "https://..." }
    ],
    skills: [
        { category: "Category", items: "Skill 1, Skill 2" }
    ]
}
```

## Step 2: Register the CV

Open `app/applications/cvs/registry.ts` and add two things:

**a) Import the new CV at the top:**

```ts
import { cv as yourCompanyCV } from './2026-05-13/your-company/cv'
```

**b) Add it to the `cvRegistry` array:**

```ts
export const cvRegistry: CVEntry[] = [
    { company: 'default', label: 'Default CV', date: '2026-05-13', cv: defaultCV, submitted: false },
    { company: 'roebling', label: 'Roebling', date: '2026-05-13', cv: roeblingCV, submitted: false },
    { company: 'your-company', label: 'Your Company', date: '2026-05-13', cv: yourCompanyCV, submitted: false },
]
```

- `company` — unique key matching the folder name (used internally)
- `label` — display name shown in the Company dropdown
- `date` — must match the parent folder name (`2026-05-13`)
- `submitted` — optional boolean (default `false`). Set to `true` to pre-check this company as "submitted" in the Application Tracker. This value seeds the initial checklist state; toggling in the UI overrides it via localStorage.

## Step 3: Verify

Run the build to make sure everything compiles:

```bash
npm run build
```

The new CV will appear in the **Date** and **Company** dropdowns on `/applications`.
