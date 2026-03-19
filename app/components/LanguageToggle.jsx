"use client";

/**
 * LanguageToggle — Botón EN / ES para cambiar idioma. Usa useLanguage() y changeLanguage().
 * Muestra el idioma activo resaltado; al hacer clic alterna entre "en" y "es".
 */
import { useLanguage } from "@/app/contexts/LanguageContext";
import { motion } from "framer-motion";

export default function LanguageToggle() {
    const { language, changeLanguage } = useLanguage();

    const toggleLanguage = () => {
        changeLanguage(language === "en" ? "es" : "en");
    };

    return (
        <motion.button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            title={language === "en" ? "Cambiar a Español" : "Switch to English"}
            whileHover={{ opacity: 0.8 }}
            whileTap={{ scale: 0.95 }}
        >
            <span className={language === "en" ? "font-semibold text-gray-900 dark:text-white" : "opacity-50"}>EN</span>
            <span className="text-gray-400">/</span>
            <span className={language === "es" ? "font-semibold text-gray-900 dark:text-white" : "opacity-50"}>ES</span>
        </motion.button>
    );
}

