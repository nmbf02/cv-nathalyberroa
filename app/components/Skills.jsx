"use client";

import { motion } from "framer-motion";

const Skills = () => {
    return (
        <section className="py-10 px-6 md:px-20 bg-gray-50 dark:bg-black">
            <div className="max-w-4xl mx-auto">

                {/* Technical Skills */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-l-4 border-blue-600 pl-3">
                        Technical Skills
                    </h2>

                    <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                        <span className="bg-blue-100 dark:bg-blue-900 dark:text-white px-3 py-1 rounded-lg">
                            PHP / Laravel
                        </span>
                        <span className="bg-blue-100 dark:bg-blue-900 dark:text-white px-3 py-1 rounded-lg">
                            JavaScript / Node.js
                        </span>
                        <span className="bg-blue-100 dark:bg-blue-900 dark:text-white px-3 py-1 rounded-lg">
                            Python / C#
                        </span>
                        <span className="bg-blue-100 dark:bg-blue-900 dark:text-white px-3 py-1 rounded-lg">
                            HTML5 / CSS3
                        </span>
                        <span className="bg-blue-100 dark:bg-blue-900 dark:text-white px-3 py-1 rounded-lg">
                            SQL / MySQL / PostgreSQL
                        </span>
                        <span className="bg-blue-100 dark:bg-blue-900 dark:text-white px-3 py-1 rounded-lg">
                            Git / GitHub / Docker
                        </span>
                        <span className="bg-blue-100 dark:bg-blue-900 dark:text-white px-3 py-1 rounded-lg">
                            REST API / Postman
                        </span>
                        <span className="bg-blue-100 dark:bg-blue-900 dark:text-white px-3 py-1 rounded-lg">
                            Digital Ocean
                        </span>
                        <span className="bg-blue-100 dark:bg-blue-900 dark:text-white px-3 py-1 rounded-lg">
                            XAMPP / MySQL Workbench
                        </span>
                        <span className="bg-blue-100 dark:bg-blue-900 dark:text-white px-3 py-1 rounded-lg">
                            PHPStorm / VS Code / Android Studio
                        </span>
                        <span className="bg-blue-100 dark:bg-blue-900 dark:text-white px-3 py-1 rounded-lg">
                            Figma / UX/UI Design
                        </span>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Skills;