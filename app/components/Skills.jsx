"use client";

import { motion } from "framer-motion";

const Skills = () => {
    return (
        <section className="py-10 px-6 md:px-20 bg-gray-50 dark:bg-black">
            <div className="max-w-4xl mx-auto">

                {/* Habilidades Técnicas */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-l-4 border-blue-600 pl-3">
                        Habilidades Técnicas
                    </h2>

                    <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                        <span className="bg-blue-100 dark:bg-blue-900 dark:text-white px-3 py-1 rounded-lg">
                            Java / Spring
                        </span>
                        <span className="bg-blue-100 dark:bg-blue-900 dark:text-white px-3 py-1 rounded-lg">
                            HTML / CSS / JavaScript
                        </span>
                        <span className="bg-blue-100 dark:bg-blue-900 dark:text-white px-3 py-1 rounded-lg">
                            PL-SQL / T-SQL / MySQL
                        </span>
                        <span className="bg-blue-100 dark:bg-blue-900 dark:text-white px-3 py-1 rounded-lg">
                            GIT / GITFLOW
                        </span>
                        <span className="bg-blue-100 dark:bg-blue-900 dark:text-white px-3 py-1 rounded-lg">
                            Linux / Shell Scripting
                        </span>
                        <span className="bg-blue-100 dark:bg-blue-900 dark:text-white px-3 py-1 rounded-lg">
                            Maven / Wildfly / Jira
                        </span>
                        <span className="bg-blue-100 dark:bg-blue-900 dark:text-white px-3 py-1 rounded-lg">
                            Jasper Report
                        </span>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Skills;
