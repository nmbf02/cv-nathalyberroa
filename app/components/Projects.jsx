"use client";

import { motion } from "framer-motion";

const projects = [
    {
        title: "Integración de Core Bancario",
        company: "EIB Internacional Bank",
        duration: "Julio 2023 - Octubre 2023",
        description:
            "Implementación de toda la lógica del core bancario a Bankingly. Desarrollo en Java y Spring. Integración con servicios REST y SOAP. Trabajo con nube IBM y optimización de procesos.",
        technologies: ["REST", "SOAP", "SQL", "AGILE", "GIT"],
    },
];

const Projects = () => {
    return (
        <section className="py-10 px-6 md:px-20 bg-white dark:bg-black">
            <div className="max-w-4xl mx-auto">

                {/* Título */}
                <motion.h2
                    className="text-2xl font-bold text-gray-900 dark:text-white border-l-4 border-blue-600 pl-3 mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Últimos Proyectos
                </motion.h2>

                {/* Proyectos */}
                <div className="space-y-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="bg-white dark:bg-gray-900 p-5 rounded-lg shadow-md"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200">{project.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400">{project.company}</p>
                            <span className="text-blue-600 font-bold text-sm">{project.duration}</span>
                            <p className="text-gray-700 dark:text-gray-300 text-sm mt-2">{project.description}</p>

                            {/* Etiquetas de Tecnologías */}
                            <div className="flex flex-wrap gap-2 mt-3">
                                {project.technologies.map((tech, i) => (
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

export default Projects;
