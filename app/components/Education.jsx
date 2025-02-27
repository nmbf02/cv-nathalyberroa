"use client";

import { motion } from "framer-motion";

const Education = () => {
    return (
        <section className="py-10 px-6 md:px-20">
            <div className="max-w-4xl mx-auto">

                {/* Educación */}
                <motion.div
                    className="mb-10"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-blue-600 pl-3">
                        Educación
                    </h2>

                    <div className="mt-4 space-y-4">
                        <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                            <h3 className="text-lg font-semibold">Ingeniería de Sistemas</h3>
                            <p className="text-gray-600">Universidad Adventista Dominicana</p>
                            <span className="text-blue-600 font-bold text-sm">TERMINO</span>
                        </div>

                        <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                            <h3 className="text-lg font-semibold">Diplomado en Inteligencia Artificial</h3>
                            <p className="text-gray-600">Instituto Tecnológico de las Américas</p>
                            <span className="text-green-600 font-bold text-sm">Finalizado</span>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Education;