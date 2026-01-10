"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { translations } from "@/app/translations/translations";

const Experience = () => {
    const { language } = useLanguage();
    const t = translations[language];

    const experiences = [
        {
            title: t.experience.webmaster.title,
            company: t.experience.webmaster.company,
            duration: t.experience.webmaster.duration,
            description: t.experience.webmaster.description,
            technologies: t.experience.webmaster.technologies,
        },
        {
            title: t.experience.consultant.title,
            company: t.experience.consultant.company,
            duration: t.experience.consultant.duration,
            description: t.experience.consultant.description,
            technologies: t.experience.consultant.technologies,
        },
        {
            title: t.experience.ceo.title,
            company: t.experience.ceo.company,
            duration: t.experience.ceo.duration,
            description: t.experience.ceo.description,
            technologies: t.experience.ceo.technologies,
        },
        {
            title: t.experience.head.title,
            company: t.experience.head.company,
            duration: t.experience.head.duration,
            description: t.experience.head.description,
            technologies: t.experience.head.technologies,
        },
    ];

    return (
        <section className="py-10 print:py-3 px-6 md:px-20 print:px-4 bg-gray-50 dark:bg-black print:bg-white">
            <div className="max-w-4xl print:max-w-full mx-auto">

                {/* Title */}
                <motion.h2
                    className="text-2xl print:text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-400 dark:to-blue-500 print:text-black print:bg-none print:bg-clip-none bg-clip-text text-transparent mb-6 print:mb-3"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {t.sections.experience}
                </motion.h2>

                {/* Experience List */}
                <div className="space-y-6">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="border-l-4 border-blue-500 print:border-gray-800 pl-4 pb-6 print:pb-3 border-b border-gray-200 dark:border-gray-800 print:border-gray-300 last:border-b-0"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <h3 className="text-lg print:text-base font-semibold text-gray-900 dark:text-gray-100 print:text-black">{exp.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 print:text-black print:text-sm">{exp.company}</p>
                            <span className="inline-block mt-1 print:mt-0.5 px-3 py-1 print:px-2 print:py-0.5 bg-blue-50 dark:bg-blue-900/20 print:bg-gray-100 print:border print:border-gray-400 text-blue-700 dark:text-blue-400 print:text-black text-sm font-medium rounded-full">{exp.duration}</span>
                            <p className="text-gray-700 dark:text-gray-300 print:text-black text-sm print:text-xs mt-3 print:mt-2 leading-relaxed">{exp.description}</p>

                            {/* Technology Tags */}
                            <div className="flex flex-wrap gap-2 print:gap-1.5 mt-4 print:mt-2">
                                {exp.technologies.map((tech, i) => (
                                    <span key={i} className="bg-blue-50 dark:bg-blue-900/20 print:bg-white print:border-gray-400 text-gray-700 dark:text-gray-300 print:text-black border border-blue-200 dark:border-blue-800 print:border px-2.5 py-1 print:px-2 print:py-0.5 text-xs rounded-lg font-medium">
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