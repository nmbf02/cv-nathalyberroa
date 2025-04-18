"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        title: "CEO and Founder",
        company: "Kairós Studio",
        duration: "April 2025 – Present",
        description:
            "I founded and lead a creative enterprise focused on the design, packaging, and distribution of themed boxes with artistic products, aiming to foster creativity, wellness, and sensory experiences by blending art, design, and artisan coffee.",
        technologies: ["E-COMMERCE","CREATIVE DESIGN", "PRODUCT MANAGEMENT", "MARKETING", "BRANDING"],
    },
    {
        title: "Head of Technical Support Department",
        company: "Hidalsoft | Santiago de los Caballeros, DR",
        duration: "July 2022 – Present",
        description:
            "I provide technical support to clients by efficiently resolving system-related doubts and issues. I create and manage reports (FRX, RPT, RDLC), validate and configure backups, and optimize servers to ensure operational continuity. I lead technical staff, fostering a collaborative and results-oriented environment.",
        technologies: ["SUPPORT", "FRX", "RPT", "RDLC", "SQL", "BACKUP", "SERVERS"],
    },
    {
        title: "Freelance Web Developer",
        company: "Independent Projects",
        duration: "2021 – Present",
        description:
            "Design and development of custom websites for clients, focusing on user experience and performance. Backend development with PHP and Laravel, as well as responsive frontend. Some projects include: Domínguez Auto Pintura, Mirage Web Software, and ERP-CRM KDev Software.",
        technologies: ["PHP", "LARAVEL", "JAVASCRIPT", "HTML", "CSS", "MYSQL", "UX/UI", "FIGMA"],
    },
];

const Experience = () => {
    return (
        <section className="py-10 px-6 md:px-20 bg-gray-50 dark:bg-black">
            <div className="max-w-4xl mx-auto">

                {/* Title */}
                <motion.h2
                    className="text-2xl font-bold text-gray-900 dark:text-white border-l-4 border-blue-600 pl-3 mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Work Experience
                </motion.h2>

                {/* Experience List */}
                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="bg-white dark:bg-gray-900 p-5 rounded-lg shadow-md"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200">{exp.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
                            <span className="text-blue-600 font-bold text-sm">{exp.duration}</span>
                            <p className="text-gray-700 dark:text-gray-300 text-sm mt-2">{exp.description}</p>

                            {/* Technology Tags */}
                            <div className="flex flex-wrap gap-2 mt-3">
                                {exp.technologies.map((tech, i) => (
                                    <span key={i} className="bg-blue-100 dark:bg-blue-900 dark:text-white px-3 py-1 text-sm rounded-lg">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Experience;