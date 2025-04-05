"use client";

import { motion } from "framer-motion";

const Education = () => {
    return (
        <section className="py-10 px-6 md:px-20 bg-white dark:bg-black">
            <div className="max-w-4xl mx-auto">

                {/* Educación */}
                <motion.div
                    className="mb-10"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-l-4 border-blue-600 pl-3">
                        Educación
                    </h2>

                    <div className="mt-4 space-y-4">
                        <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200">
                                Ingeniería en Sistemas Computacionales
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Universidad Tecnológica de Santiago (UTESA)
                            </p>
                            <span className="text-yellow-500 font-bold text-sm">En curso (2020 - 2026)</span>
                        </div>

                        <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200">
                                Certificación en Diseño de Páginas Web, CSS y JavaScript
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Centenaria Escuela de Informática S.A.
                            </p>
                            <span className="text-green-600 font-bold text-sm">Finalizado (Abr. 2021 - May. 2021)</span>
                        </div>

                        <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200">
                                Técnico Profesional en Mecatrónica
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Instituto Tecnológico de México
                            </p>
                            <span className="text-green-600 font-bold text-sm">Finalizado (Ago. 2018 - Jun. 2019)</span>
                        </div>

                        <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200">
                                Especialización en Metodologías Ágiles
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Netzun
                            </p>
                            <span className="text-yellow-500 font-bold text-sm">En curso (2025)</span>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Education;