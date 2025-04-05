"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const certifications = [
    {
        title: "Agilidad y Mindset Ágil",
        institution: "Universidad Tecnológica de Santiago UTESA",
        image: "/images/utesa.png",
    },
    {
        title: "Design Thinking",
        institution: "Universidad Tecnológica de Santiago UTESA",
        image: "/images/utesa.png",
    },
    {
        title: "Git y GitHub Profesional",
        institution: "Universidad Tecnológica de Santiago UTESA",
        image: "/images/utesa.png",
    },
    {
        title: "Intermediate SQL",
        institution: "DataCamp",
        image: "/images/sql-cert.png",
    },
    {
        title: "Scrum de la teoría a la práctica",
        institution: "Universidad Tecnológica de Santiago UTESA",
        image: "/images/utesa.png",
    },
    {
        title: "Diseñador de páginas web, CSS y JavaScript",
        institution: "Centenaria Escuela de Informática S.A.",
        image: "/images/webdesign-cert.png",
    },
];

const Certifications = () => {
    return (
        <section className="py-10 px-6 md:px-20 bg-gray-50 dark:bg-black">
            <div className="max-w-4xl mx-auto">

                <motion.h2
                    className="text-2xl font-bold text-gray-900 dark:text-white border-l-4 border-blue-600 pl-3 mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Certificaciones Destacadas
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            className="bg-white dark:bg-gray-900 p-5 rounded-lg shadow-md flex items-center gap-4"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className="w-16 h-16">
                                <Image
                                    src={cert.image}
                                    alt={cert.title}
                                    width={64}
                                    height={64}
                                    className="rounded-lg object-cover"
                                />
                            </div>
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