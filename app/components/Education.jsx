"use client";

import { motion } from "framer-motion";

const Education = () => {
    return (
        <section className="py-10 px-6 md:px-20 bg-white dark:bg-black">
            <div className="max-w-4xl mx-auto">

                {/* Education */}
                <motion.div
                    className="mb-10"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-l-4 border-blue-600 pl-3">
                        Education
                    </h2>

                    <div className="mt-4 space-y-4">
                        <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200">
                                Bachelor's Degree in Computer Systems Engineering
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Technological University of Santiago (UTESA)
                            </p>
                            <span className="text-yellow-500 font-bold text-sm">In progress (2020 - 2026)</span>
                        </div>

                        <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200">
                                Specialization in Data Analytics
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Netzum
                            </p>
                            <span className="text-yellow-500 font-bold text-sm">In progress (Apr. 2025)</span>
                        </div>

                        <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200">
                                Specialization in Agile Methodologies
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Netzun
                            </p>
                            <span className="text-green-600 font-bold text-sm">Completed (Jan. 2025 - Apr. 2025)</span>
                        </div>

                        <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200">
                                Web Page Design, CSS, and JavaScript Certification
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Centenaria Escuela de Informática S.A.
                            </p>
                            <span className="text-green-600 font-bold text-sm">Completed (Apr. 2021 - May. 2021)</span>
                        </div>

                        <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200">
                                Professional Technician in Mechatronics
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Technological Institute of Mexico
                            </p>
                            <span className="text-green-600 font-bold text-sm">Completed (Aug. 2018 - Jun. 2019)</span>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Education;
