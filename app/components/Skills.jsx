"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { translations } from "@/app/translations/translations";

const Skills = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section className="py-10 px-6 md:px-20 bg-gray-50 dark:bg-black">
            <div className="max-w-4xl mx-auto">

                {/* Technical Skills */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-400 dark:to-blue-500 bg-clip-text text-transparent mb-6">
                        {t.sections.skills}
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                        <span className="text-gray-700 dark:text-gray-300 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg font-medium">
                            PHP / Laravel
                        </span>
                        <span className="text-gray-700 dark:text-gray-300 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg font-medium">
                            JavaScript / TypeScript
                        </span>
                        <span className="text-gray-700 dark:text-gray-300 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg font-medium">
                            Node.js
                        </span>
                        <span className="text-gray-700 dark:text-gray-300 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg font-medium">
                            Python / C#
                        </span>
                        <span className="text-gray-700 dark:text-gray-300 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg font-medium">
                            HTML5 / CSS3
                        </span>
                        <span className="text-gray-700 dark:text-gray-300 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg font-medium">
                            SQL / MySQL / PostgreSQL
                        </span>
                        <span className="text-gray-700 dark:text-gray-300 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg font-medium">
                            Git / GitHub / Docker
                        </span>
                        <span className="text-gray-700 dark:text-gray-300 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg font-medium">
                            REST API / Postman
                        </span>
                        <span className="text-gray-700 dark:text-gray-300 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg font-medium">
                            Digital Ocean
                        </span>
                        <span className="text-gray-700 dark:text-gray-300 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg font-medium">
                            XAMPP / MySQL Workbench
                        </span>
                        <span className="text-gray-700 dark:text-gray-300 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg font-medium">
                            PHPStorm / VS Code / Android Studio
                        </span>
                        <span className="text-gray-700 dark:text-gray-300 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg font-medium">
                            Figma / UX/UI Design
                        </span>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Skills;