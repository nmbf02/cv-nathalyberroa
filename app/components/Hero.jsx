"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { translations } from "@/app/translations/translations";

const Hero = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section className="flex flex-col items-center justify-center text-center min-h-screen print:min-h-0 py-12 px-6 md:px-20 print:py-4 print:px-4 bg-white dark:bg-black">
            {/* Info */}
            <motion.div
                className="max-w-4xl w-full px-4 print:max-w-full print:px-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
            >
                {/* Name and title */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl print:text-3xl print:mb-2 font-bold bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-400 dark:to-blue-500 print:text-black print:bg-none print:bg-clip-none bg-clip-text text-transparent mb-4">
                    Nathaly Berroa
                </h1>
                <p className="text-xl md:text-2xl lg:text-3xl print:text-lg print:mt-2 print:mb-3 text-gray-700 dark:text-gray-300 print:text-black font-semibold mt-6 mb-8">
                    {t.hero.title}
                </p>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 print:text-black print:text-sm print:mt-2 text-base md:text-lg mt-6 leading-relaxed max-w-3xl print:max-w-full mx-auto">
                    {t.hero.description1}
                </p>

                <p className="text-gray-600 dark:text-gray-400 print:text-black print:text-sm print:mt-2 text-base md:text-lg mt-4 leading-relaxed max-w-3xl print:max-w-full mx-auto">
                    {t.hero.description2}
                </p>

                <p className="text-gray-600 dark:text-gray-400 print:text-black print:text-sm print:mt-2 text-base md:text-lg mt-4 leading-relaxed max-w-3xl print:max-w-full mx-auto">
                    {t.hero.description3}
                </p>

                {/* Contact - Print Only */}
                <div className="hidden print:flex justify-center items-center gap-4 mt-4 flex-wrap text-xs">
                    <span className="text-black">Tel: (849) 651 - 0211</span>
                    <span className="text-black">|</span>
                    <span className="text-black">LinkedIn: linkedin.com/in/nathalyberroa</span>
                    <span className="text-black">|</span>
                    <span className="text-black">Email: nathalyberroaf@gmail.com</span>
                </div>

                {/* Contact */}
                <div className="flex justify-center items-center gap-4 mt-10 print:hidden flex-wrap">
                    <a
                        href="tel:+18496510211"
                        className="flex items-center px-4 py-2 print:px-2 print:py-1 bg-blue-50 dark:bg-blue-900/20 print:bg-white print:border print:border-gray-400 text-blue-700 dark:text-blue-400 print:text-black rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors text-sm print:text-xs font-medium"
                    >
                        <FaPhone className="mr-2 print:mr-1 print:h-3 print:w-3" /> {t.hero.phone}
                    </a>

                    <a
                        href="https://www.linkedin.com/in/nathalyberroa/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 print:px-2 print:py-1 bg-blue-50 dark:bg-blue-900/20 print:bg-white print:border print:border-gray-400 text-blue-700 dark:text-blue-400 print:text-black rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors text-sm print:text-xs font-medium"
                    >
                        <FaLinkedin className="mr-2 print:mr-1 print:h-3 print:w-3" /> {t.hero.linkedin}
                    </a>

                    <a
                        href="mailto:nathalyberroaf@gmail.com"
                        className="flex items-center px-4 py-2 print:px-2 print:py-1 bg-blue-50 dark:bg-blue-900/20 print:bg-white print:border print:border-gray-400 text-blue-700 dark:text-blue-400 print:text-black rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors text-sm print:text-xs font-medium"
                    >
                        <FaEnvelope className="mr-2 print:mr-1 print:h-3 print:w-3" /> {t.hero.email}
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;