"use client";

/**
 * Education — Sección de formación: título universitario, especializaciones y certificaciones formativas.
 * Cada ítem tiene título, institución y estado (en progreso / completado). Textos desde translations.
 */
import { motion } from "framer-motion";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { translations } from "@/app/translations/translations";

const Education = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section className="py-10 print:py-3 px-6 md:px-20 print:px-4 bg-white dark:bg-black">
            <div className="max-w-4xl print:max-w-full mx-auto">

                {/* Education */}
                <motion.div
                    className="mb-10 print:mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-2xl print:text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-400 dark:to-blue-500 print:text-black print:bg-none print:bg-clip-none bg-clip-text text-transparent mb-6 print:mb-3">
                        {t.sections.education}
                    </h2>

                    <div className="space-y-4">
                        <div className="border-l-4 border-blue-500 pl-4 pb-4 border-b border-gray-200 dark:border-gray-800">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                                {t.education.degree}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 print:text-black print:text-sm">
                                {t.education.university}
                            </p>
                            <span className="inline-block mt-2 print:mt-1 px-3 py-1 print:px-2 print:py-0.5 bg-gray-100 dark:bg-gray-800 print:bg-gray-100 print:border print:border-gray-400 text-gray-700 dark:text-gray-300 print:text-black text-sm font-medium rounded-full">{t.education.degreeStatus}</span>
                        </div>

                        <div className="border-l-4 border-blue-500 print:border-gray-800 pl-4 pb-4 print:pb-2 border-b border-gray-200 dark:border-gray-800 print:border-gray-300">
                            <h3 className="text-lg print:text-base font-semibold text-gray-900 dark:text-gray-100 print:text-black">
                                {t.education.agile}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 print:text-black print:text-sm">
                                {t.education.agileOrg}
                            </p>
                            <span className="inline-block mt-2 print:mt-1 px-3 py-1 print:px-2 print:py-0.5 bg-blue-50 dark:bg-blue-900/20 print:bg-gray-100 print:border print:border-gray-400 text-blue-700 dark:text-blue-400 print:text-black text-sm font-medium rounded-full">{t.education.agileStatus}</span>
                        </div>

                        <div className="border-l-4 border-blue-500 print:border-gray-800 pl-4 pb-4 print:pb-2 border-b border-gray-200 dark:border-gray-800 print:border-gray-300">
                            <h3 className="text-lg print:text-base font-semibold text-gray-900 dark:text-gray-100 print:text-black">
                                {t.education.webDesign}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 print:text-black print:text-sm">
                                {t.education.webDesignOrg}
                            </p>
                            <span className="inline-block mt-2 px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 text-sm font-medium rounded-full">{t.education.webDesignStatus}</span>
                        </div>

                        <div className="border-l-4 border-blue-500 print:border-gray-800 pl-4 pb-4 print:pb-2 border-b border-gray-200 dark:border-gray-800 print:border-gray-300">
                            <h3 className="text-lg print:text-base font-semibold text-gray-900 dark:text-gray-100 print:text-black">
                                {t.education.mechatronics}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 print:text-black print:text-sm">
                                {t.education.mechatronicsOrg}
                            </p>
                            <span className="inline-block mt-2 px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 text-sm font-medium rounded-full">{t.education.mechatronicsStatus}</span>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Education;
