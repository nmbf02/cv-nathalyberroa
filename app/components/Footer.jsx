"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaPrint } from "react-icons/fa";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
import { FaFilePdf } from "react-icons/fa6";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { translations } from "@/app/translations/translations";

const Footer = () => {
    const { setTheme, resolvedTheme } = useTheme();
    const { language } = useLanguage();
    const t = translations[language];
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Function to print the page
    const printPage = () => {
        window.print();
    };

    return (
        <footer className="py-8 px-6 md:px-20 border-t border-gray-200 dark:border-gray-800 print:hidden">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

                {/* Left: Language Toggle */}
                <LanguageToggle />

                {/* Center: Actions */}
                <div className="flex items-center gap-4">
                    {/* PDF Button */}
                    <a
                        href="/docs/Resumen-NathalyBerroa.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                        title={language === "en" ? "View PDF Resume" : "Ver Currículum PDF"}
                    >
                        <FaFilePdf className="h-5 w-5" />
                    </a>

                    {/* Print Button */}
                    <motion.button
                        onClick={printPage}
                        className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                        title={t.footer.print}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaPrint className="h-5 w-5" />
                    </motion.button>

                    {/* Theme Toggle */}
                    {!mounted ? (
                        <div className="w-8 h-8"/>
                    ) : (
                        <div className="flex items-center gap-1 border border-gray-300 dark:border-gray-700 rounded-lg p-1">
                            <button
                                className={`p-1.5 rounded transition ${resolvedTheme === "light" ? "bg-gray-200 dark:bg-gray-700" : ""}`}
                                onClick={() => setTheme("light")}
                                title="Light mode"
                            >
                                <SunIcon className="h-4 w-4 text-gray-600 dark:text-gray-400"/>
                            </button>
                            <button
                                className={`p-1.5 rounded transition ${resolvedTheme === "dark" ? "bg-gray-200 dark:bg-gray-700" : ""}`}
                                onClick={() => setTheme("dark")}
                                title="Dark mode"
                            >
                                <MoonIcon className="h-4 w-4 text-gray-600 dark:text-gray-400"/>
                            </button>
                        </div>
                    )}
                </div>

                {/* Right: Copyright */}
                <p className="text-xs text-gray-500 dark:text-gray-500">
                    © {new Date().getFullYear()} {language === "en" ? "Engineer" : "Ingeniera"} Nathaly Berroa
                </p>
            </div>
        </footer>
    );
};

export default Footer;