"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const certifications = [
    {
        title: "SQL Server Developer",
        institution: "DesarrolloSQL, AnalistaDeDatos",
        image: "/images/sql-cert.png",
    },
    {
        title: "Scrum Foundation Professional Certificate - SFPC™",
        institution: "Agile, Teams Scrum",
        image: "/images/scrum-cert.png",
    },
    {
        title: "SQL (Intermediate) Certificate",
        institution: "SQL",
        image: "/images/sql-cert.png",
    },
    {
        title: "JavaScript Algorithms and Data Structures",
        institution: "JavaScript, Data Structure",
        image: "/images/javascript-cert.png",
    },
    {
        title: "Programming with JavaScript",
        institution: "Meta",
        image: "/images/meta-js-cert.png",
    },
];

const Certifications = () => {
    return (
        <section className="py-10 px-6 md:px-20 bg-gray-50 dark:bg-black">
            <div className="max-w-4xl mx-auto">

                {/* Título */}
                <motion.h2
                    className="text-2xl font-bold text-gray-900 dark:text-white border-l-4 border-blue-600 pl-3 mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Cursos y Certificaciones
                </motion.h2>

                {/* Lista de Certificaciones */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            className="bg-white dark:bg-gray-900 p-5 rounded-lg shadow-md flex items-center gap-4"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            {/* Imagen de Certificación */}
                            <div className="w-16 h-16">
                                <Image
                                    src={cert.image}
                                    alt={cert.title}
                                    width={64}
                                    height={64}
                                    className="rounded-lg object-cover"
                                />
                            </div>

                            {/* Información */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200">{cert.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">{cert.institution}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Certifications;