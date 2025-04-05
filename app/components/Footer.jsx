"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaPrint, FaSun, FaMoon } from "react-icons/fa";
import { ComputerDesktopIcon, MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";

const Footer = () => {
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Función para imprimir la página
    const printPage = () => {
        window.print();
    };

    return (
        <footer className="py-6 px-6 md:px-20 bg-gray-100 dark:bg-gray-900 text-center print:hidden">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

                {/* Botón de Imprimir CV */}
                <motion.button
                    onClick={printPage}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
                    whileHover={{ scale: 1.1 }}
                >
                    <FaPrint /> Imprimir CV
                </motion.button>

                {/* THEME TOGGLE */}
                <div className="flex items-center space-x-2 bg-gray-800 p-2 rounded-full shadow-md">
                    {!mounted ? (
                        <div className="w-10 h-10" />
                    ) : (
                        <>
                            <button
                                className={`p-2 rounded-full transition ${resolvedTheme === "system" ? "bg-gray-700" : ""}`}
                                onClick={() => setTheme("system")}
                            >
                                <ComputerDesktopIcon className="h-5 w-5 text-gray-400" />
                            </button>

                            <button
                                className={`p-2 rounded-full transition ${resolvedTheme === "light" ? "bg-gray-700" : ""}`}
                                onClick={() => setTheme("light")}
                            >
                                <SunIcon className="h-5 w-5 text-yellow-400" />
                            </button>

                            <button
                                className={`p-2 rounded-full transition ${resolvedTheme === "dark" ? "bg-gray-700" : ""}`}
                                onClick={() => setTheme("dark")}
                            >
                                <MoonIcon className="h-5 w-5 text-gray-200" />
                            </button>
                        </>
                    )}
                </div>

                {/* Derechos de autor */}
                <p className="text-sm text-gray-600 dark:text-gray-300">
                    © {new Date().getFullYear()} Nathaly Berroa. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
};

export default Footer;