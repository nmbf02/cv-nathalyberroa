/**
 * Root Layout — Layout principal de la aplicación (App Router).
 * Define la estructura HTML, fuentes (Geist), metadata SEO y el orden de las secciones del CV.
 * Envuelve el contenido en Providers (tema + idioma) y renderiza Hero, Education, Skills, etc.
 */
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Hero from "@/app/components/Hero";
import Education from "@/app/components/Education";
import Skills from "@/app/components/Skills";
import Experience from "@/app/components/Experience";
import Projects from "@/app/components/Projects";
import Certifications from "@/app/components/Certifications";
import Languages from "@/app/components/Languages";
import References from "@/app/components/References";
import Footer from "@/app/components/Footer";
import Providers from "./providers";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Nathaly Berroa | CV",
    description: "Full Stack Developer crafting dynamic, scalable, and user-friendly web solutions using Next.js, Tailwind CSS, and modern technologies.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
            <div id="content" className="bg-white dark:bg-black min-h-screen print:min-h-0">
                <Hero />
                <Education />
                <Skills />
                <Experience />
                <Projects />
                <Certifications />
                <Languages />
                <References />
            </div>
            <Footer />
            <main className="container mx-auto px-4">{children}</main>
        </Providers>
        </body>
        </html>
    );
}