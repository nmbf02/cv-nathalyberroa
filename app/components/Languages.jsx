"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { translations } from "@/app/translations/translations";

const Languages = () => {
    const { language } = useLanguage();
    const t = translations[language];

    const languages = [
        { name: t.languages.spanish, level: t.languages.native },
        { name: t.languages.english, level: "B1" },
    ];

    return (
        <section className="py-10 print:py-3 px-6 md:px-20 print:px-4 bg-white dark:bg-black">
            <div className="max-w-4xl print:max-w-full mx-auto">

                {/* Title */}
                <motion.h2
                    className="text-2xl print:text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-400 dark:to-blue-500 print:text-black print:bg-none print:bg-clip-none bg-clip-text text-transparent mb-6 print:mb-3"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {t.sections.languages}
                </motion.h2>

                {/* Language List */}
                <div className="space-y-3 print:space-y-2">
                    {languages.map((lang, index) => (
                        <div key={index} className="flex justify-between items-center border-l-4 border-blue-500 print:border-gray-800 pl-4 pb-3 print:pb-2 border-b border-gray-200 dark:border-gray-800 print:border-gray-300 last:border-b-0">
                            <span className="font-semibold text-gray-900 dark:text-gray-100 print:text-black print:text-sm">{lang.name}</span>
                            <span className="px-3 py-1 print:px-2 print:py-0.5 bg-blue-50 dark:bg-blue-900/20 print:bg-gray-100 print:border print:border-gray-400 text-blue-700 dark:text-blue-400 print:text-black font-medium rounded-full text-sm print:text-xs">{lang.level}</span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Languages;