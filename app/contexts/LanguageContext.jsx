"use client";

/**
 * LanguageContext — Contexto React para idioma (EN/ES).
 * Persiste la preferencia en localStorage y detecta el idioma del navegador si no hay valor guardado.
 * Proporciona: language ("en" | "es") y changeLanguage(lang).
 */
import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState("en");

    useEffect(() => {
        // Cargar idioma guardado en localStorage
        const savedLanguage = localStorage.getItem("language");
        if (savedLanguage) {
            setLanguage(savedLanguage);
        } else {
            // Detectar idioma del navegador
            const browserLang = navigator.language || navigator.userLanguage;
            const detectedLang = browserLang.startsWith("es") ? "es" : "en";
            setLanguage(detectedLang);
        }
    }, []);

    const changeLanguage = (lang) => {
        setLanguage(lang);
        localStorage.setItem("language", lang);
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

/**
 * Hook useLanguage — Devuelve { language, changeLanguage } del LanguageProvider.
 * @throws {Error} Si se usa fuera de LanguageProvider
 */
export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}

