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
        <section className="py-10 px-6 md:px-20 bg-white dark:bg-black">
            <div className="max-w-4xl mx-auto">

                {/* Title */}
                <motion.h2
                    className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-400 dark:to-blue-500 bg-clip-text text-transparent mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {t.sections.references}
                </motion.h2>

                {/* Reference List */}
                <div className="space-y-4">
                    {references.map((ref, index) => (
                        <div key={index} className="border-l-4 border-blue-500 pl-4 pb-4 border-b border-gray-200 dark:border-gray-800 last:border-b-0">
                            <p className="font-semibold text-gray-900 dark:text-gray-100">{ref.name}</p>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{ref.position}</p>
                            <span className="inline-block mt-2 px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 text-sm font-medium rounded-full">{ref.phone}</span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default References;