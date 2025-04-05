"use client";

import { motion } from "framer-motion";

const references = [
    {
        name: "Julián Joel Hernández Rodríguez",
        position: "Full Stack Developer en QuePlan.cl",
        phone: "+1 (829) 332-1244",
    },
];

const References = () => {
    return (
        <section className="py-10 px-6 md:px-20 bg-white dark:bg-black">
            <div className="max-w-4xl mx-auto">

                {/* Título */}
                <motion.h2
                    className="text-2xl font-bold text-gray-900 dark:text-white border-l-4 border-blue-600 pl-3 mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Referencias
                </motion.h2>

                {/* Lista de Referencias */}
                <div className="mt-4 space-y-4">
                    {references.map((ref, index) => (
                        <div key={index} className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg">
                            <p className="font-medium text-gray-900 dark:text-gray-200">{ref.name}</p>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">{ref.position}</p>
                            <span className="text-blue-600 font-semibold">{ref.phone}</span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default References;