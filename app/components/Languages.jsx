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
        <section className="py-10 px-6 md:px-20 bg-white dark:bg-black">
            <div className="max-w-4xl mx-auto">

                {/* Title */}
                <motion.h2
                    className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-400 dark:to-blue-500 bg-clip-text text-transparent mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {t.sections.languages}
                </motion.h2>

                {/* Language List */}
                <div className="space-y-3">
                    {languages.map((lang, index) => (
                        <div key={index} className="flex justify-between items-center border-l-4 border-blue-500 pl-4 pb-3 border-b border-gray-200 dark:border-gray-800 last:border-b-0">
                            <span className="font-semibold text-gray-900 dark:text-gray-100">{lang.name}</span>
                            <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 font-medium rounded-full text-sm">{lang.level}</span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Languages;