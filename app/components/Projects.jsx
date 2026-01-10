"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { translations } from "@/app/translations/translations";

const Projects = () => {
    const { language } = useLanguage();
    const t = translations[language];

    // Projects ordered chronologically (most recent first)
    const projects = [
        {
            title: t.projects.smartfarming.title,
            company: t.projects.smartfarming.company,
            duration: t.projects.smartfarming.duration,
            description: t.projects.smartfarming.description,
            technologies: t.projects.smartfarming.technologies,
        },
        {
            title: t.projects.isa.title,
            company: t.projects.isa.company,
            duration: t.projects.isa.duration,
            description: t.projects.isa.description,
            technologies: t.projects.isa.technologies,
        },
        {
            title: t.projects.equinox.title,
            company: t.projects.equinox.company,
            duration: t.projects.equinox.duration,
            description: t.projects.equinox.description,
            technologies: t.projects.equinox.technologies,
        },
        {
            title: t.projects.dominguez.title,
            company: t.projects.dominguez.company,
            duration: t.projects.dominguez.duration,
            description: t.projects.dominguez.description,
            technologies: t.projects.dominguez.technologies,
        },
    ];

    return (
        <section className="py-10 px-6 md:px-20 bg-white dark:bg-black">
            <div className="max-w-4xl mx-auto">

                {/* Title */}
                <motion.h2
                    className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-400 dark:to-blue-500 bg-clip-text text-transparent mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {t.sections.projects}
                </motion.h2>

                {/* Projects */}
                <div className="space-y-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="border-l-4 border-blue-500 pl-4 pb-6 border-b border-gray-200 dark:border-gray-800 last:border-b-0"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{project.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400">{project.company}</p>
                            <span className="inline-block mt-1 px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 text-sm font-medium rounded-full">{project.duration}</span>
                            <p className="text-gray-700 dark:text-gray-300 text-sm mt-3 leading-relaxed">{project.description}</p>

                            {/* Technology Tags */}
                            <div className="flex flex-wrap gap-2 mt-4">
                                {project.technologies.map((tech, i) => (
                                    <span key={i} className="bg-blue-50 dark:bg-blue-900/20 text-gray-700 dark:text-gray-300 border border-blue-200 dark:border-blue-800 px-2.5 py-1 text-xs rounded-lg font-medium">
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

export default Projects;