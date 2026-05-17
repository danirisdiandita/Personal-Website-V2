import React from 'react';
import { Page, Text, View, Document, StyleSheet, pdf, Link } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import { CVData } from '@/lib/cv-types';
import { CVData as DefaultCVData } from '@/constant/cv';

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

export const downloadCVPdf = async (cvData?: CVData) => {
    const data = cvData || DefaultCVData as unknown as CVData;
    const MyDocument = (
        <Document>
            <Page size="A4" style={styles.page}>
                {/* Header */}
                <View style={styles.header}>
                    <Text style={styles.name}>{data.personalInfo.name}</Text>
                    <Text style={styles.title}>{data.personalInfo.title}</Text>
                    <Text style={styles.summary}>
                        {data.personalInfo.summary}
                    </Text>
                </View>

                {/* Professional Experience */}
                <Text style={styles.heading}>Professional Experience</Text>
                {data.experiences.map((exp, index) => (
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
                <Text style={styles.heading}>Technical Skills</Text>
                {data.skills.map((skill, index) => (
                    <View key={index} style={styles.skillSection}>
                        <Text style={styles.skillItems}>
                            <Text style={styles.skillCategory}>{skill.category}: </Text>
                            {skill.items}
                        </Text>
                    </View>
                ))}

                {/* Education */}
                <Text style={styles.heading}>Education</Text>
                {data.education.map((edu, index) => (
                    <View key={index} style={styles.educationItem}>
                        <Text style={{ fontSize: 10 }}>
                            <Text style={{ fontWeight: 'bold' }}>{edu.school}</Text> - {edu.degree} <Text style={{ fontStyle: 'italic' }}>({edu.grade})</Text>
                        </Text>
                    </View>
                ))}

                {/* Publications */}
                <Text style={styles.heading}>Publications & Open Source</Text>
                {data.publications.map((pub, index) => (
                    <View key={index} style={styles.publicationItem}>
                        <Text style={{ fontSize: 10 }}>• </Text>
                        <Link src={pub.url} style={styles.link}>{pub.label}</Link>
                        <Text style={{ fontSize: 10, color: '#666666' }}> ({pub.url})</Text>
                    </View>
                ))}

                {/* Links */}
                <Text style={styles.heading}>Links</Text>
                {data.links.map((link, index) => (
                    <View key={index} style={styles.publicationItem}>
                        <Text style={{ fontSize: 10 }}>• </Text>
                        <Link src={link.url} style={styles.link}>{link.label}</Link>
                        <Text style={{ fontSize: 10, color: '#666666' }}> ({link.url})</Text>
                    </View>
                ))}
            </Page>
        </Document>
    );

    const blob = await pdf(MyDocument).toBlob();
    saveAs(blob, `${data.personalInfo.name.replace(/\s+/g, '_')}_CV.pdf`);
};
