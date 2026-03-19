"use client";

/**
 * Providers — Envuelve la app con ThemeProvider (next-themes) y LanguageProvider.
 * Necesario para que el tema claro/oscuro y el idioma (EN/ES) estén disponibles en toda la app.
 */
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/app/contexts/LanguageContext";

export default function Providers({ children }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <LanguageProvider>
                {children}
            </LanguageProvider>
        </ThemeProvider>
    );
}