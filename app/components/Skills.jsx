"use client";

/**
 * Skills — Sección de habilidades técnicas: tags de tecnologías (PHP, JS, Node, SQL, Git, etc.).
 * Grid responsivo; estilos adaptados para impresión (print:).
 */
import { motion } from "framer-motion";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { translations } from "@/app/translations/translations";

const Skills = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section className="py-10 print:py-3 px-6 md:px-20 print:px-4 bg-gray-50 dark:bg-black print:bg-white">
            <div className="max-w-4xl print:max-w-full mx-auto">

                {/* Technical Skills */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-2xl print:text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-400 dark:to-blue-500 print:text-black print:bg-none print:bg-clip-none bg-clip-text text-transparent mb-6 print:mb-3">
                        {t.sections.skills}
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 print:grid-cols-4 gap-3 print:gap-1.5 text-sm print:text-xs">
                        <span className="text-gray-700 dark:text-gray-300 print:text-black px-3 py-1.5 print:px-1.5 print:py-0.5 bg-blue-50 dark:bg-blue-900/20 print:bg-white print:border-gray-400 border border-blue-200 dark:border-blue-800 print:border rounded-lg print:rounded font-medium print:font-normal">
                            PHP / Laravel
                        </span>
                        <span className="text-gray-700 dark:text-gray-300 print:text-black px-3 py-1.5 print:px-1.5 print:py-0.5 bg-blue-50 dark:bg-blue-900/20 print:bg-white print:border-gray-400 border border-blue-200 dark:border-blue-800 print:border rounded-lg print:rounded font-medium print:font-normal">
                            JavaScript / TypeScript
                        </span>
                        <span className="text-gray-700 dark:text-gray-300 print:text-black px-3 py-1.5 print:px-1.5 print:py-0.5 bg-blue-50 dark:bg-blue-900/20 print:bg-white print:border-gray-400 border border-blue-200 dark:border-blue-800 print:border rounded-lg print:rounded font-medium print:font-normal">
                            Node.js
                        </span>
                        <span className="text-gray-700 dark:text-gray-300 print:text-black px-3 py-1.5 print:px-1.5 print:py-0.5 bg-blue-50 dark:bg-blue-900/20 print:bg-white print:border-gray-400 border border-blue-200 dark:border-blue-800 print:border rounded-lg print:rounded font-medium print:font-normal">
                            Python / C#
                        </span>
                        <span className="text-gray-700 dark:text-gray-300 print:text-black px-3 py-1.5 print:px-1.5 print:py-0.5 bg-blue-50 dark:bg-blue-900/20 print:bg-white print:border-gray-400 border border-blue-200 dark:border-blue-800 print:border rounded-lg print:rounded font-medium print:font-normal">
                            HTML5 / CSS3
                        </span>
                        <span className="text-gray-700 dark:text-gray-300 print:text-black px-3 py-1.5 print:px-1.5 print:py-0.5 bg-blue-50 dark:bg-blue-900/20 print:bg-white print:border-gray-400 border border-blue-200 dark:border-blue-800 print:border rounded-lg print:rounded font-medium print:font-normal">
                            SQL / MySQL / PostgreSQL
                        </span>
                        <span className="text-gray-700 dark:text-gray-300 print:text-black px-3 py-1.5 print:px-1.5 print:py-0.5 bg-blue-50 dark:bg-blue-900/20 print:bg-white print:border-gray-400 border border-blue-200 dark:border-blue-800 print:border rounded-lg print:rounded font-medium print:font-normal">
                            Git / GitHub / Docker
                        </span>
                        <span className="text-gray-700 dark:text-gray-300 print:text-black px-3 py-1.5 print:px-1.5 print:py-0.5 bg-blue-50 dark:bg-blue-900/20 print:bg-white print:border-gray-400 border border-blue-200 dark:border-blue-800 print:border rounded-lg print:rounded font-medium print:font-normal">
                            REST API / Postman
                        </span>
                        <span className="text-gray-700 dark:text-gray-300 print:text-black px-3 py-1.5 print:px-1.5 print:py-0.5 bg-blue-50 dark:bg-blue-900/20 print:bg-white print:border-gray-400 border border-blue-200 dark:border-blue-800 print:border rounded-lg print:rounded font-medium print:font-normal">
                            Digital Ocean
                        </span>
                        <span className="text-gray-700 dark:text-gray-300 print:text-black px-3 py-1.5 print:px-1.5 print:py-0.5 bg-blue-50 dark:bg-blue-900/20 print:bg-white print:border-gray-400 border border-blue-200 dark:border-blue-800 print:border rounded-lg print:rounded font-medium print:font-normal">
                            XAMPP / MySQL Workbench
                        </span>
                        <span className="text-gray-700 dark:text-gray-300 print:text-black px-3 py-1.5 print:px-1.5 print:py-0.5 bg-blue-50 dark:bg-blue-900/20 print:bg-white print:border-gray-400 border border-blue-200 dark:border-blue-800 print:border rounded-lg print:rounded font-medium print:font-normal">
                            PHPStorm / VS Code / Android Studio
                        </span>
                        <span className="text-gray-700 dark:text-gray-300 print:text-black px-3 py-1.5 print:px-1.5 print:py-0.5 bg-blue-50 dark:bg-blue-900/20 print:bg-white print:border-gray-400 border border-blue-200 dark:border-blue-800 print:border rounded-lg print:rounded font-medium print:font-normal">
                            Figma / UX/UI Design
                        </span>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Skills;