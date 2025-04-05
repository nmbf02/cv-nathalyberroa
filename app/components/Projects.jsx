"use client";

import { motion } from "framer-motion";

const projects = [
    {
        title: "RoomLogic - App de Gestión Hotelera",
        company: "Proyecto Académico - UTESA",
        duration: "Enero 2025",
        description:
            "Aplicación Android desarrollada con arquitectura MVVM, conectada a API REST escrita en Rust. Genera reportes en PDF y permite gestión offline.",
        technologies: ["Java", "Android", "MVVM", "Rust", "API REST", "PDF"],
    },
    {
        title: "Software Web Mirage",
        company: "Proyecto Freelance",
        duration: "Mayo 2024 - Diciembre 2024",
        description:
            "Sistema para gestionar venta, renta y subasta de vehículos, con gestión de inventarios y usuarios. Desarrollado con Laravel y MySQL.",
        technologies: ["Laravel", "JavaScript", "MySQL", "UX/UI", "Figma"],
    },
    {
        title: "Sitio Web - Domínguez Auto Pintura",
        company: "Proyecto Freelance",
        duration: "Abril 2023",
        description:
            "Diseño y desarrollo del sitio web corporativo para Domínguez Auto Pintura, una empresa dedicada al repintado y estética de vehículos. El sitio incluye información de servicios, portafolio visual, formulario de contacto y diseño responsivo optimizado para SEO.",
        technologies: ["PHP", "HTML", "CSS", "JavaScript", "Bootstrap", "SEO", "UX/UI"],
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
