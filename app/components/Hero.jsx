"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Hero = () => {
    return (
        <section className="flex flex-col md:flex-row items-center md:items-start justify-center text-left py-10 px-6 md:px-20 bg-white dark:bg-black">
            {/* Photo */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-gray-300 dark:border-gray-600 shadow-lg"
            >
                <Image
                    src="/images/nathaly-profile.jpg"
                    alt="Nathaly Berroa"
                    width={150}
                    height={150}
                    className="object-cover w-full h-full"
                />
            </motion.div>

            {/* Info */}
            <motion.div
                className="md:ml-8 mt-6 md:mt-0 text-center md:text-left"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
            >
                {/* Name and title */}
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Nathaly Berroa</h1>
                <p className="text-lg text-blue-600 font-semibold mt-2">
                    Full Stack Developer | UX/UI | PHP | Laravel | Node.js | SQL
                </p>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-4 leading-relaxed max-w-lg">
                    I'm a Full Stack Developer with over 2 years of experience creating dynamic, efficient, and scalable web solutions. I specialize in both backend and frontend development using technologies like PHP, Laravel, Node.js, and JavaScript.
                </p>

                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 leading-relaxed max-w-lg">
                    Currently, I’m pursuing a degree in Computer Systems Engineering at UTESA and working as Head of IT at Hidalsoft. I'm also the Founder of Kairos Studio, a creative initiative that combines art and technology through themed sensory art kits.
                </p>

                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 leading-relaxed max-w-lg">
                    I focus on delivering user-centered digital experiences with clean code, solid architecture, and a passion for innovation and continuous learning.
                </p>

                {/* Contact */}
                <div className="flex justify-center md:justify-start items-center gap-4 mt-6">
                    <a
                        href="tel:+18496510211"
                        className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 transition text-sm"
                    >
                        <FaPhone className="mr-2" /> (849) 651 - 0211
                    </a>

                    <a
                        href="https://www.linkedin.com/in/nathalyberroa/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 transition text-sm"
                    >
                        <FaLinkedin className="mr-2" /> LinkedIn
                    </a>

                    <a
                        href="mailto:nathalyberroaf@gmail.com"
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