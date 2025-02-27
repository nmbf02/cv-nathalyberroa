"use client";

import { motion } from "framer-motion";

const languages = [
    { name: "Español", level: "Nativo" },
    { name: "Inglés", level: "B1" },
];

const Languages = () => {
    return (
        <section className="py-10 px-6 md:px-20 bg-white">
            <div className="max-w-4xl mx-auto">

                {/* Título */}
                <motion.h2
                    className="text-2xl font-bold text-gray-900 border-l-4 border-blue-600 pl-3 mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Idiomas
                </motion.h2>

                {/* Lista de idiomas */}
                <div className="mt-4 space-y-2">
                    {languages.map((lang, index) => (
                        <div key={index} className="flex justify-between bg-gray-100 p-3 rounded-lg">
                            <span className="font-medium">{lang.name}</span>
                            <span className="text-blue-600 font-semibold">{lang.level}</span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Languages;