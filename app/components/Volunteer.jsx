"use client";

import { motion } from "framer-motion";

const volunteer = {
    organization: "Sociedad Dominicana de Big Data",
    handle: "@BigDataDO",
};

const Volunteer = () => {
    return (
        <section className="py-10 px-6 md:px-20 bg-gray-50">
            <div className="max-w-4xl mx-auto">

                {/* Título */}
                <motion.h2
                    className="text-2xl font-bold text-gray-900 border-l-4 border-blue-600 pl-3 mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Voluntariado
                </motion.h2>

                {/* Información de Voluntariado */}
                <div className="mt-4 bg-gray-100 p-4 rounded-lg">
                    <p className="font-medium">{volunteer.organization}</p>
                    <span className="text-blue-600 font-semibold">{volunteer.handle}</span>
                </div>

            </div>
        </section>
    );
};

export default Volunteer;