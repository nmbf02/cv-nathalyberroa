"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { translations } from "@/app/translations/translations";

const Certifications = () => {
    const { language } = useLanguage();
    const t = translations[language];

    const certifications = [
        {
            title: t.certifications.agility,
            institution: t.certifications.institution.utesa,
            image: "/images/utesa.png",
        },
        {
            title: t.certifications.designThinking,
            institution: t.certifications.institution.utesa,
            image: "/images/utesa.png",
        },
        {
            title: t.certifications.git,
            institution: t.certifications.institution.utesa,
            image: "/images/utesa.png",
        },
        {
            title: t.certifications.sql,
            institution: t.certifications.institution.datacamp,
            image: "/images/sql-cert.png",
        },
        {
            title: t.certifications.scrum,
            institution: t.certifications.institution.utesa,
            image: "/images/utesa.png",
        },
        {
            title: t.certifications.webDesign,
            institution: t.certifications.institution.centenaria,
            image: "/images/webdesign-cert.png",
        },
    ];

    return (
        <section className="py-10 print:py-3 px-6 md:px-20 print:px-4 bg-gray-50 dark:bg-black print:bg-white">
            <div className="max-w-4xl print:max-w-full mx-auto">

                <motion.h2
                    className="text-2xl print:text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-400 dark:to-blue-500 print:text-black print:bg-none print:bg-clip-none bg-clip-text text-transparent mb-6 print:mb-3"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {t.sections.certifications}
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-4 print:gap-2">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            className="bg-blue-50 dark:bg-blue-900/20 print:bg-white print:border-gray-400 border border-blue-200 dark:border-blue-800 print:border p-4 print:p-2 rounded-lg flex items-center gap-4 print:gap-2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className="w-12 h-12 print:w-8 print:h-8 flex-shrink-0">
                                <Image
                                    src={cert.image}
                                    alt={cert.title}
                                    width={48}
                                    height={48}
                                    className="rounded object-cover"
                                />
                            </div>
                            <div>
                                <h3 className="text-base print:text-sm font-semibold text-gray-900 dark:text-gray-200 print:text-black">{cert.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 print:text-black text-sm print:text-xs mt-1">{cert.institution}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;