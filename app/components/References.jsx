"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { translations } from "@/app/translations/translations";

const References = () => {
    const { language } = useLanguage();
    const t = translations[language];

    const references = [
        {
            name: "Claudia Báez",
            position: language === "en" ? "Advanced Database Instructor at Technological University of Santiago UTESA" : "Instructora de Bases de Datos Avanzadas en Universidad Tecnológica de Santiago UTESA",
            phone: "809 327 0427",
        },
        {
            name: "Julián Joel Hernández Rodríguez",
            position: "Full Stack Developer at QuePlan.cl",
            phone: "+1 (829) 332-1244",
        },
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
                    {t.sections.references}
                </motion.h2>

                {/* Reference List */}
                <div className="space-y-4 print:space-y-2">
                    {references.map((ref, index) => (
                        <div key={index} className="border-l-4 border-blue-500 print:border-gray-800 pl-4 pb-4 print:pb-2 border-b border-gray-200 dark:border-gray-800 print:border-gray-300 last:border-b-0">
                            <p className="font-semibold text-gray-900 dark:text-gray-100 print:text-black print:text-base">{ref.name}</p>
                            <p className="text-gray-600 dark:text-gray-400 print:text-black text-sm print:text-xs mt-1">{ref.position}</p>
                            <span className="inline-block mt-2 print:mt-1 px-3 py-1 print:px-2 print:py-0.5 bg-blue-50 dark:bg-blue-900/20 print:bg-gray-100 print:border print:border-gray-400 text-blue-700 dark:text-blue-400 print:text-black text-sm font-medium rounded-full">{ref.phone}</span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default References;