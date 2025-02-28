"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Hero = () => {
    return (
        <section className="flex flex-col md:flex-row items-center md:items-start justify-center text-left py-10 px-6 md:px-20 bg-white dark:bg-black">
            {/* Foto */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-gray-300 dark:border-gray-600 shadow-lg"
            >
                <Image
                    src="/images/hero-image.png"  // Ruta actualizada
                    alt="Eleazar García"
                    width={150}
                    height={150}
                    className="object-cover"
                />
            </motion.div>

            {/* Información */}
            <motion.div
                className="md:ml-8 mt-6 md:mt-0 text-center md:text-left"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
            >
                {/* Nombre y título */}
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Eleazar García</h1>
                <p className="text-lg text-blue-600 font-semibold mt-2">
                    Desarrollador de Software
                </p>

                {/* Descripción */}
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-4 leading-relaxed max-w-lg">
                    Soy un desarrollador con más de 3 años de experiencia en el sector financiero, especializado en Backend y en la implementación de soluciones integradas. Poseo habilidades sólidas en lógica de programación orientada a objetos y una capacidad adaptativa a múltiples lenguajes de programación.
                </p>

                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 leading-relaxed max-w-lg">
                    Mi compromiso con la calidad del código y la experiencia del usuario me convierte en un candidato ideal para cualquier empresa que busque un desarrollador comprometido y versátil.
                </p>

                {/* Contacto */}
                <div className="flex justify-center md:justify-start items-center gap-4 mt-6">
                    <a
                        href="tel:+18493547557"
                        className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 transition text-sm"
                    >
                        <FaPhone className="mr-2" /> (849) 354 - 7557
                    </a>

                    <a
                        href="https://www.linkedin.com/in/garciaeleazar/"
                        target="_blank"
                        className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 transition text-sm"
                    >
                        <FaLinkedin className="mr-2" /> LinkedIn
                    </a>

                    <a
                        href="mailto:ing.eleazargarcia98@gmail.com"
                        className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 transition text-sm"
                    >
                        <FaEnvelope className="mr-2" /> Email
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;