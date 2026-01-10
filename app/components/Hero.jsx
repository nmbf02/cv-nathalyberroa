"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { translations } from "@/app/translations/translations";

const Hero = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section className="flex flex-col items-center justify-center text-center min-h-screen py-12 px-6 md:px-20 bg-white dark:bg-black">
            {/* Info */}
            <motion.div
                className="max-w-3xl w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
            >
                {/* Name and title */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-400 dark:to-blue-500 bg-clip-text text-transparent">
                    Nathaly Berroa
                </h1>
                <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 font-semibold mt-2">
                    {t.hero.title}
                </p>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-4 leading-relaxed max-w-lg mx-auto">
                    {t.hero.description1}
                </p>

                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 leading-relaxed max-w-lg mx-auto">
                    {t.hero.description2}
                </p>

                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 leading-relaxed max-w-lg mx-auto">
                    {t.hero.description3}
                </p>

                {/* Contact */}
                <div className="flex justify-center items-center gap-4 mt-6 flex-wrap">
                    <a
                        href="tel:+18496510211"
                        className="flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors text-sm font-medium"
                    >
                        <FaPhone className="mr-2" /> {t.hero.phone}
                    </a>

                    <a
                        href="https://www.linkedin.com/in/nathalyberroa/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors text-sm font-medium"
                    >
                        <FaLinkedin className="mr-2" /> {t.hero.linkedin}
                    </a>

                    <a
                        href="mailto:nathalyberroaf@gmail.com"
                        className="flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors text-sm font-medium"
                    >
                        <FaEnvelope className="mr-2" /> {t.hero.email}
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;