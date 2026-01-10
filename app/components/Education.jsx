"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { translations } from "@/app/translations/translations";

const Education = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section className="py-10 px-6 md:px-20 bg-white dark:bg-black">
            <div className="max-w-4xl mx-auto">

                {/* Education */}
                <motion.div
                    className="mb-10"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-400 dark:to-blue-500 bg-clip-text text-transparent mb-6">
                        {t.sections.education}
                    </h2>

                    <div className="space-y-4">
                        <div className="border-l-4 border-blue-500 pl-4 pb-4 border-b border-gray-200 dark:border-gray-800">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                                {t.education.degree}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                {t.education.university}
                            </p>
                            <span className="inline-block mt-2 px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full">{t.education.degreeStatus}</span>
                        </div>

                        <div className="border-l-4 border-blue-500 pl-4 pb-4 border-b border-gray-200 dark:border-gray-800">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                                {t.education.dataAnalytics}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                {t.education.dataAnalyticsOrg}
                            </p>
                            <span className="inline-block mt-2 px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full">{t.education.dataAnalyticsStatus}</span>
                        </div>

                        <div className="border-l-4 border-blue-500 pl-4 pb-4 border-b border-gray-200 dark:border-gray-800">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                                {t.education.agile}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                {t.education.agileOrg}
                            </p>
                            <span className="inline-block mt-2 px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 text-sm font-medium rounded-full">{t.education.agileStatus}</span>
                        </div>

                        <div className="border-l-4 border-blue-500 pl-4 pb-4 border-b border-gray-200 dark:border-gray-800">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                                {t.education.webDesign}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                {t.education.webDesignOrg}
                            </p>
                            <span className="inline-block mt-2 px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 text-sm font-medium rounded-full">{t.education.webDesignStatus}</span>
                        </div>

                        <div className="border-l-4 border-blue-500 pl-4 pb-4 border-b border-gray-200 dark:border-gray-800">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                                {t.education.mechatronics}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
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
