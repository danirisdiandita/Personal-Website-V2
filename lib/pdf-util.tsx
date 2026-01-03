import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font, pdf, Link } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import { CVData } from '@/constant/cv';

// Register a font (optional, but good for consistent look)
// We'll use standard fonts for now to avoid complexity of loading custom font files

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        padding: 40,
        fontFamily: 'Helvetica',
    },
    section: {
        marginTop: 10,
        marginBottom: 10,
    },
    header: {
        marginBottom: 20,
        textAlign: 'center',
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    title: {
        fontSize: 12,
        color: '#666666',
        marginBottom: 10,
        fontStyle: 'italic', // Helvetica-Oblique
    },
    summary: {
        fontSize: 10,
        marginBottom: 10,
        lineHeight: 1.5,
        textAlign: 'center',
    },
    heading: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2E74B5',
        borderBottomWidth: 1,
        borderBottomColor: '#2E74B5',
        marginBottom: 10,
        marginTop: 10,
        paddingBottom: 2,
        textTransform: 'uppercase',
    },
    experienceItem: {
        marginBottom: 10,
    },
    experienceHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 2,
    },
    jobTitle: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    company: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#000000',
    },
    period: {
        fontSize: 10,
        fontStyle: 'italic',
        color: '#666666',
    },
    bulletPoint: {
        flexDirection: 'row',
        marginBottom: 2,
    },
    bullet: {
        width: 10,
        fontSize: 10,
    },
    bulletText: {
        fontSize: 10,
        flex: 1,
        lineHeight: 1.4,
    },
    skillSection: {
        marginBottom: 4,
    },
    skillCategory: {
        fontSize: 10,
        fontWeight: 'bold',
    },
    skillItems: {
        fontSize: 10,
    },
    educationItem: {
        marginBottom: 5,
    },
    publicationItem: {
        marginBottom: 4,
        flexDirection: 'row',
    },
    link: {
        color: '#0563C1',
        fontSize: 10,
        textDecoration: 'none',
    },
});

export const downloadCVPdf = async () => {
    const MyDocument = (
        <Document>
            <Page size="A4" style={styles.page}>
                {/* Header */}
                <View style={styles.header}>
                    <Text style={styles.name}>{CVData.personalInfo.name}</Text>
                    <Text style={styles.title}>{CVData.personalInfo.title}</Text>
                    <Text style={styles.summary}>
                        {CVData.personalInfo.summary}
                    </Text>
                </View>

                {/* Professional Experience */}
                <Text style={styles.heading}>Professional Experience</Text>
                {CVData.experiences.map((exp, index) => (
                    <View key={index} style={styles.experienceItem}>
                        <View style={styles.experienceHeader}>
                            <Text style={styles.jobTitle}>
                                {exp.title} | <Text style={styles.company}>{exp.company}</Text>
                            </Text>
                            <Text style={styles.period}>{exp.period}</Text>
                        </View>
                        {exp.highlights.map((highlight, idx) => (
                            <View key={idx} style={styles.bulletPoint}>
                                <Text style={styles.bullet}>•</Text>
                                <Text style={styles.bulletText}>{highlight}</Text>
                            </View>
                        ))}
                    </View>
                ))}

                {/* Technical Skills */}
                <Text style={styles.heading} break>Technical Skills</Text>
                {CVData.skills.map((skill, index) => (
                    <View key={index} style={styles.skillSection}>
                        <Text style={styles.skillItems}>
                            <Text style={styles.skillCategory}>{skill.category}: </Text>
                            {skill.items}
                        </Text>
                    </View>
                ))}

                {/* Education */}
                <Text style={styles.heading}>Education</Text>
                {CVData.education.map((edu, index) => (
                    <View key={index} style={styles.educationItem}>
                        <Text style={{ fontSize: 10 }}>
                            <Text style={{ fontWeight: 'bold' }}>{edu.school}</Text> - {edu.degree} <Text style={{ fontStyle: 'italic' }}>({edu.grade})</Text>
                        </Text>
                    </View>
                ))}

                {/* Publications */}
                <Text style={styles.heading}>Publications & Open Source</Text>
                {CVData.publications.map((pub, index) => (
                    <View key={index} style={styles.publicationItem}>
                        <Text style={{ fontSize: 10 }}>• </Text>
                        <Link src={pub.url} style={styles.link}>{pub.label}</Link>
                    </View>
                ))}
            </Page>
        </Document>
    );

    const blob = await pdf(MyDocument).toBlob();
    saveAs(blob, "Dani_Risdiandita_CV.pdf");
};
