import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, ExternalHyperlink, TabStopType, BorderStyle } from "docx";
import { saveAs } from "file-saver";
import { CVData } from "@/lib/cv-types";
import { CVData as DefaultCVData } from "@/constant/cv";

export const downloadCVDocx = async (cvData?: CVData) => {
    const data = cvData || DefaultCVData as unknown as CVData;
    // Document Styles
    const doc = new Document({
        styles: {
            paragraphStyles: [
                {
                    id: "Normal",
                    name: "Normal",
                    run: {
                        font: "Calibri",
                        size: 22,
                    },
                    paragraph: {
                        spacing: {
                            after: 120
                        }
                    }
                },
                {
                    id: "Heading1",
                    name: "Heading 1",
                    run: {
                        font: "Calibri",
                        size: 32,
                        bold: true,
                        color: "000000"
                    },
                    paragraph: {
                        spacing: {
                            before: 240,
                            after: 120
                        }
                    }
                },
                {
                    id: "Heading2",
                    name: "Heading 2",
                    run: {
                        font: "Calibri",
                        size: 26,
                        bold: true,
                        allCaps: true,
                        color: "2E74B5"
                    },
                    paragraph: {
                        spacing: {
                            before: 240,
                            after: 120
                        },
                        border: {
                            bottom: {
                                color: "2E74B5",
                                space: 1,
                                style: BorderStyle.SINGLE,
                                size: 6
                            }
                        }
                    }
                }
            ]
        },
        sections: [{
            properties: {},
            children: [
                // Header
                new Paragraph({
                    text: data.personalInfo.name,
                    heading: HeadingLevel.HEADING_1,
                    alignment: AlignmentType.CENTER
                }),
                new Paragraph({
                    run: {
                        color: "666666",
                        italics: true
                    },
                    text: data.personalInfo.title,
                    alignment: AlignmentType.CENTER
                }),
                new Paragraph({
                    text: data.personalInfo.summary,
                    alignment: AlignmentType.CENTER,
                    spacing: {
                        after: 300
                    }
                }),

                // Professional Experience
                new Paragraph({
                    text: "Professional Experience",
                    heading: HeadingLevel.HEADING_2
                }),
                ...data.experiences.flatMap(exp => [
                    new Paragraph({
                        children: [
                            new TextRun({ text: exp.title, bold: true, size: 24 }),
                            new TextRun({ text: ` | ${exp.company}`, bold: true }),
                            new TextRun({
                                text: `\t${exp.period}`,
                                italics: true,
                            })
                        ],
                        tabStops: [
                            {
                                type: TabStopType.RIGHT,
                                position: 9000 // Approximate right align relative to page width
                            }
                        ]
                    }),
                    ...exp.highlights.map(highlight =>
                        new Paragraph({
                            text: highlight,
                            bullet: {
                                level: 0
                            }
                        })
                    ),
                    new Paragraph({ text: "" }) // Spacer
                ]),

                // Technical Skills
                new Paragraph({
                    text: "Technical Skills",
                    heading: HeadingLevel.HEADING_2
                }),
                ...data.skills.map(skill =>
                    new Paragraph({
                        children: [
                            new TextRun({ text: `${skill.category}: `, bold: true }),
                            new TextRun(skill.items)
                        ]
                    })
                ),
                new Paragraph({ text: "" }),

                // Education
                new Paragraph({
                    text: "Education",
                    heading: HeadingLevel.HEADING_2
                }),
                ...data.education.map(edu =>
                    new Paragraph({
                        children: [
                            new TextRun({ text: edu.school, bold: true }),
                            new TextRun({ text: ` - ${edu.degree}` }),
                            new TextRun({ text: ` (${edu.grade})`, italics: true })
                        ]
                    })
                ),
                new Paragraph({ text: "" }),

                // Publications
                new Paragraph({
                    text: "Publications & Open Source",
                    heading: HeadingLevel.HEADING_2
                }),
                ...data.publications.map(pub =>
                    new Paragraph({
                        children: [
                            new TextRun({ text: "• " }),
                            new ExternalHyperlink({
                                children: [
                                    new TextRun({
                                        text: pub.label,
                                        style: "Hyperlink",
                                        color: "0563C1",
                                        underline: {
                                            type: "single",
                                            color: "0563C1"
                                        }
                                    }),
                                ],
                                link: pub.url,
                            }),
                        ]
                    })
                ),
                new Paragraph({ text: "" }),

                // Links
                new Paragraph({
                    text: "Links",
                    heading: HeadingLevel.HEADING_2
                }),
                ...data.links.map(link =>
                    new Paragraph({
                        children: [
                            new TextRun({ text: "• " }),
                            new ExternalHyperlink({
                                children: [
                                    new TextRun({
                                        text: link.label,
                                        style: "Hyperlink",
                                        color: "0563C1",
                                        underline: {
                                            type: "single",
                                            color: "0563C1"
                                        }
                                    }),
                                ],
                                link: link.url,
                            }),
                        ]
                    })
                )
            ]
        }]
    });

    // Generate and download
    const blob = await Packer.toBlob(doc);
    saveAs(blob, `${data.personalInfo.name.replace(/\s+/g, '_')}_CV.docx`);
};