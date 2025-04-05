"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        title: "Encargada del Departamento de Soporte Técnico",
        company: "Hidalsoft | Santiago de los Caballeros, RD",
        duration: "Julio 2022 – Actualidad",
        description:
            "Brindo soporte técnico a clientes, resolviendo dudas e inconvenientes del sistema de forma eficiente. Creo y gestiono reportes (FRX, RPT, RDLC), valido y configuro copias de seguridad, y optimizo servidores para garantizar la continuidad operativa. Lidero personal técnico fomentando un entorno colaborativo y enfocado a resultados.",
        technologies: ["SOPORTE", "FRX", "RPT", "RDLC", "SQL", "BACKUP", "SERVIDORES"],
    },
    {
        title: "Desarrolladora Web Freelance",
        company: "Proyectos Independientes",
        duration: "2021 – Actualidad",
        description:
            "Diseño y desarrollo de sitios web personalizados para clientes, enfocándome en la experiencia del usuario y el rendimiento. Desarrollo backend con PHP y Laravel, así como frontend responsive. Algunos proyectos incluyen: Domínguez Auto Pintura, Software Web Mirage y ERP-CRM KDev Software.",
        technologies: ["PHP", "LARAVEL", "JAVASCRIPT", "HTML", "CSS", "MYSQL", "UX/UI", "FIGMA"],
    },
];

const Experience = () => {
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
                    Experiencia Laboral
                </motion.h2>

                {/* Experiencias */}
                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="bg-white dark:bg-gray-900 p-5 rounded-lg shadow-md"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200">{exp.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
                            <span className="text-blue-600 font-bold text-sm">{exp.duration}</span>
                            <p className="text-gray-700 dark:text-gray-300 text-sm mt-2">{exp.description}</p>

                            {/* Etiquetas de Tecnologías */}
                            <div className="flex flex-wrap gap-2 mt-3">
                                {exp.technologies.map((tech, i) => (
                                    <span key={i} className="bg-blue-100 dark:bg-blue-900 dark:text-white px-3 py-1 text-sm rounded-lg">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Experience;