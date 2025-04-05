"use client";

import { motion } from "framer-motion";

const projects = [
    {
        title: "RoomLogic - Hotel Management App",
        company: "Academic Project - UTESA",
        duration: "January 2025",
        description:
            "Android application developed using MVVM architecture, connected to a REST API written in Rust. It generates PDF reports and allows offline management.",
        technologies: ["Java", "Android", "MVVM", "Rust", "REST API", "PDF"],
    },
    {
        title: "Mirage Web Software",
        company: "Freelance Project",
        duration: "May 2024 - December 2024",
        description:
            "System for managing vehicle sales, rentals, and auctions, with inventory and user management. Developed using Laravel and MySQL.",
        technologies: ["Laravel", "JavaScript", "MySQL", "UX/UI", "Figma"],
    },
    {
        title: "Website - Domínguez Auto Pintura",
        company: "Freelance Project",
        duration: "April 2023",
        description:
            "Design and development of the corporate website for Domínguez Auto Pintura, a company specialized in vehicle repainting and aesthetics. The site includes service information, visual portfolio, contact form, and responsive SEO-optimized design.",
        technologies: ["PHP", "HTML", "CSS", "JavaScript", "Bootstrap", "SEO", "UX/UI"],
    },
];

const Projects = () => {
    return (
        <section className="py-10 px-6 md:px-20 bg-white dark:bg-black">
            <div className="max-w-4xl mx-auto">

                {/* Title */}
                <motion.h2
                    className="text-2xl font-bold text-gray-900 dark:text-white border-l-4 border-blue-600 pl-3 mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Latest Projects
                </motion.h2>

                {/* Projects */}
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

                            {/* Technology Tags */}
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