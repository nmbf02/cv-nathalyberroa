"use client";

import { motion } from "framer-motion";

const references = [
    {
        name: "Msc. Jose M. Aquino",
        position: "Director Ejecutivo BigDataDo",
        phone: "829 677-3606",
    },
];

const References = () => {
    return (
        <section className="py-10 px-6 md:px-20 bg-white">
            <div className="max-w-4xl mx-auto">

                {/* Título */}
                <motion.h2
                    className="text-2xl font-bold text-gray-900 border-l-4 border-blue-600 pl-3 mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Referencias
                </motion.h2>

                {/* Lista de Referencias */}
                <div className="mt-4 space-y-4">
                    {references.map((ref, index) => (
                        <div key={index} className="bg-gray-100 p-4 rounded-lg">
                            <p className="font-medium">{ref.name}</p>
                            <p className="text-gray-600 text-sm">{ref.position}</p>
                            <span className="text-blue-600 font-semibold">{ref.phone}</span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default References;