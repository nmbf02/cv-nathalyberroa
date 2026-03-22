/**
 * Traducciones (i18n) — Textos del CV en inglés (en) y español (es).
 * Estructura: hero, sections, education, experience, projects, certifications, languages, footer, etc.
 * Uso: const t = translations[language]; luego t.hero.title, t.sections.education, etc.
 */
export const translations = {
    en: {
        // Hero
        hero: {
            title: "Web & App Developer | Crafting clean and functional designs",
            description1: "I'm a Full Stack Developer with over 2 years of experience building dynamic, efficient, and scalable web solutions. I specialize in both frontend and backend development, prioritizing clean code, solid architecture, and user-centered digital experiences.",
            description2: "Currently, I'm studying Computer Systems Engineering at the Technological University of Santiago (UTESA). I work as Web Master at ISA and as Software Consultant at Advansys, in addition to being CEO and Founder of Kairos Studio, a creative initiative that fuses art and technology through themed sensory kits.",
            description3: "I'm committed to constant innovation, continuous learning, and creating digital products that truly add value.",
            phone: "(849) 651 - 0211",
            linkedin: "LinkedIn",
            email: "Email",
        },
        // Sections
        sections: {
            education: "Education",
            skills: "Technical Skills",
            experience: "Work Experience",
            projects: "Latest Projects",
            certifications: "Certifications",
            languages: "Languages",
            references: "References",
        },
        // Education
        education: {
            degree: "Computer Systems Engineering",
            university: "Technological University of Santiago (UTESA)",
            degreeStatus: "In progress (Jan. 2020)",
            agile: "Specialization in Agile Methodologies",
            agileOrg: "Netzun",
            agileStatus: "Completed (Jan. 2025 - Apr. 2025)",
            webDesign: "Web Page Design, CSS, and JavaScript Certification",
            webDesignOrg: "Centenaria Escuela de Informática S.A.",
            webDesignStatus: "Completed (Apr. 2021 - May. 2021)",
            mechatronics: "Professional Technician in Mechatronics",
            mechatronicsOrg: "Technological Institute of Mexico",
            mechatronicsStatus: "Completed (Aug. 2018 - Jun. 2019)",
        },
        // Experience
        experience: {
            webmaster: {
                title: "Webmaster",
                company: "Universidad ISA | Santiago de los Caballeros, Dominican Republic · Remote",
                duration: "September 2025 – Present",
                description: "Development, operation, and maintenance of the website. Full Stack development ensuring optimal functionality and user experience.",
                technologies: ["FULL STACK DEVELOPMENT", "WEB DEVELOPMENT", "WEBSITE MAINTENANCE", "USER EXPERIENCE"],
            },
            consultant: {
                title: "Software Consultant",
                company: "AdvanSys SRL | Santiago, Dominican Republic · On-site",
                duration: "August 2025 – Present",
                description: "Software consulting services, providing technical expertise and solutions for various client projects.",
                technologies: ["SOFTWARE CONSULTING", "TECHNICAL EXPERTISE", "SOLUTION DESIGN"],
            },
            ceo: {
                title: "Founder and Creative Director",
                company: "Kairós Studio | Santiago de los Caballeros, Dominican Republic · Remote",
                duration: "April 2025 – Present",
                description: "Kairós Studio is an artistic and sensory venture focused on the design, packaging, and commercialization of thematic boxes that combine art and well-being. We offer creative experiences through products that blend art, design, and sensory elements.",
                technologies: ["E-COMMERCE", "CREATIVE DESIGN", "PRODUCT MANAGEMENT", "MARKETING", "BRANDING"],
            },
            head: {
                title: "Head of Technical Support Department",
                company: "Hidalsoft | Santiago de los Caballeros, Dominican Republic · On-site",
                duration: "July 2022 – July 2025",
                description: "Specialist in Customer Support and Technical Management. Expert in Systems Administration and Report Generation. Provided technical support to clients by efficiently resolving system-related issues. Created and managed reports (FRX, RPT, RDLC), validated and configured backups, and optimized servers to ensure operational continuity. Led technical staff, fostering a collaborative and results-oriented environment.",
                technologies: ["SUPPORT", "FRX", "RPT", "RDLC", "SQL", "BACKUP", "SERVERS", "SYSTEMS ADMINISTRATION"],
            },
        },
        // Projects
        projects: {
            rehub: {
                title: "ReHubRD",
                company: "Pilot Project",
                duration: "2026",
                description: "Next.js platform for post-accident accompaniment in the Dominican Republic. Features user dashboard with flow: Profile → Plan → Tracking → Resources, authentication demo with next-auth, reusable UI components, and reminder module for scheduling in-session reminders.",
                technologies: ["NEXT.JS", "TYPESCRIPT", "NEXT-AUTH", "DASHBOARD", "FRONTEND"],
            },
            smartfarming: {
                title: "Smart Farming Education Platform",
                company: "Private Project",
                duration: "2025",
                description: "Responsive web platform built to teach young people in Kenya about modern and sustainable agricultural techniques. Empowering Kenya's youth with modern, sustainable farming techniques. Originally conceived by Felix Kioni & Derrick Gucema.",
                technologies: ["WEB PLATFORM", "RESPONSIVE DESIGN", "AGRICULTURE & TECHNOLOGY", "EDUCATION"],
            },
            isa: {
                title: "Sitio Web Universidad ISA",
                company: "Private Project",
                duration: "2025",
                description: "Modern institutional website for ISA University with academic programs, news, student life, and research sections. Built with responsive design and optimized user experience.",
                technologies: ["WEB DEVELOPMENT", "RESPONSIVE DESIGN", "USER EXPERIENCE", "INSTITUTIONAL WEBSITE"],
            },
            dominguez: {
                title: "Sitio Web Domínguez Auto Pintura",
                company: "Private Project",
                duration: "2023",
                description: "Development of a professional and responsive website for a painting and maintenance company, effectively showcasing services.",
                technologies: ["WEB DEVELOPMENT", "RESPONSIVE DESIGN", "PROFESSIONAL WEBSITE"],
            },
            equinox: {
                title: "Equinox Insight Hub",
                company: "Private Project",
                duration: "2024",
                description: "Equinox administration dashboard - Ticket management system, banking operations, and real-time analysis. Private project (frontend development only).",
                technologies: ["DASHBOARD", "FRONTEND DEVELOPMENT", "REAL-TIME ANALYSIS", "TICKET MANAGEMENT"],
            },
        },
        // Certifications
        certifications: {
            title: "Certifications",
            agility: "Agility and Agile Mindset",
            designThinking: "Design Thinking",
            git: "Professional Git and GitHub",
            sql: "Intermediate SQL",
            scrum: "Scrum: From Theory to Practice",
            webDesign: "Web Page Designer, CSS and JavaScript",
            masterJavaScript: "Master in JavaScript",
            pythonFastapi: "Python FastAPI",
            masterJavaScriptStatus: "Udemy · In progress (Mar. 2026)",
            pythonFastapiStatus: "LinkedIn",
            institution: {
                utesa: "Technological University of Santiago UTESA",
                datacamp: "DataCamp",
                centenaria: "Centenaria Escuela de Informática S.A.",
                udemy: "Udemy",
                linkedin: "LinkedIn",
            },
        },
        // Languages
        languages: {
            title: "Languages",
            spanish: "Spanish",
            english: "English",
            native: "Native",
        },
        // References
        references: {
            title: "References",
        },
        // Footer
        footer: {
            print: "Print CV",
            copyright: "All rights reserved.",
        },
    },
    es: {
        // Hero
        hero: {
            title: "Desarrolladora Web & App | Diseñando soluciones limpias y funcionales",
            description1: "Soy Desarrolladora Full Stack con más de 2 años de experiencia construyendo soluciones web dinámicas, eficientes y escalables. Me especializo en el desarrollo tanto frontend como backend, priorizando el código limpio, la arquitectura sólida y experiencias digitales centradas en el usuario.",
            description2: "Actualmente estudio Ingeniería en Sistemas Computacionales en la Universidad Tecnológica de Santiago (UTESA). Me desempeño como Web Master en ISA y como Consultora de Software en Advansys, además de ser CEO and Founder de Kairos Studio, una iniciativa creativa que fusiona arte y tecnología a través de kits sensoriales temáticos.",
            description3: "Estoy comprometida con la innovación constante, el aprendizaje continuo y la creación de productos digitales que realmente aporten valor.",
            phone: "(849) 651 - 0211",
            linkedin: "LinkedIn",
            email: "Correo",
        },
        // Sections
        sections: {
            education: "Educación",
            skills: "Habilidades Técnicas",
            experience: "Experiencia Laboral",
            projects: "Proyectos Recientes",
            certifications: "Certificaciones",
            languages: "Idiomas",
            references: "Referencias",
        },
        // Education
        education: {
            degree: "Ingeniería de Sistemas Computacionales",
            university: "Universidad Tecnológica de Santiago (UTESA)",
            degreeStatus: "En progreso (Ene. 2020)",
            agile: "Especialización en Metodologías Ágiles",
            agileOrg: "Netzun",
            agileStatus: "Completado (Ene. 2025 - Abr. 2025)",
            webDesign: "Certificación en Diseño de Páginas Web, CSS y JavaScript",
            webDesignOrg: "Centenaria Escuela de Informática S.A.",
            webDesignStatus: "Completado (Abr. 2021 - May. 2021)",
            mechatronics: "Técnico Profesional en Mecatrónica",
            mechatronicsOrg: "Instituto Tecnológico de México",
            mechatronicsStatus: "Completado (Ago. 2018 - Jun. 2019)",
        },
        // Experience
        experience: {
            webmaster: {
                title: "Webmaster",
                company: "Universidad ISA | Santiago de los Caballeros, República Dominicana · Remoto",
                duration: "Septiembre 2025 – Presente",
                description: "Desarrollo, funcionamiento y mantenimiento del sitio web. Desarrollo Full Stack asegurando funcionalidad óptima y experiencia de usuario.",
                technologies: ["DESARROLLO FULL STACK", "DESARROLLO WEB", "MANTENIMIENTO DE WEBSITE", "EXPERIENCIA DE USUARIO"],
            },
            consultant: {
                title: "Consultor de Software",
                company: "AdvanSys SRL | Santiago, República Dominicana · Presencial",
                duration: "Agosto 2025 – Presente",
                description: "Servicios de consultoría de software, brindando experiencia técnica y soluciones para diversos proyectos de clientes.",
                technologies: ["CONSULTORÍA DE SOFTWARE", "EXPERIENCIA TÉCNICA", "DISEÑO DE SOLUCIONES"],
            },
            ceo: {
                title: "Fundadora y Directora Creativa",
                company: "Kairós Studio | Santiago de los Caballeros, República Dominicana · Remoto",
                duration: "Abril 2025 – Presente",
                description: "Kairós Studio es un emprendimiento artístico y sensorial enfocado en el diseño, empaque y comercialización de cajas temáticas que combinan arte y bienestar. Ofrecemos experiencias creativas a través de productos que fusionan arte, diseño y elementos sensoriales.",
                technologies: ["E-COMMERCE", "DISEÑO CREATIVO", "GESTIÓN DE PRODUCTOS", "MARKETING", "BRANDING"],
            },
            head: {
                title: "Encargada del Departamento de Soporte Técnico",
                company: "Hidalsoft | Santiago de los Caballeros, República Dominicana · Presencial",
                duration: "Julio 2022 – Julio 2025",
                description: "Especialista en Soporte al Cliente y Gestión Técnica. Experta en Administración de Sistemas y Generación de Reportes. Brindé soporte técnico a clientes resolviendo eficientemente problemas relacionados con sistemas. Creé y gestioné reportes (FRX, RPT, RDLC), validé y configuré respaldos, y optimicé servidores para garantizar la continuidad operativa. Lideré personal técnico, fomentando un ambiente colaborativo y orientado a resultados.",
                technologies: ["SOPORTE", "FRX", "RPT", "RDLC", "SQL", "BACKUP", "SERVIDORES", "ADMINISTRACIÓN DE SISTEMAS"],
            },
        },
        // Projects
        projects: {
            rehub: {
                title: "ReHubRD",
                company: "Proyecto Piloto",
                duration: "2026",
                description: "Plataforma Next.js para acompañamiento post-accidente en República Dominicana. Incluye panel de usuario con flujo: Perfil → Plan → Seguimiento → Recursos, autenticación demo con next-auth, componentes UI reutilizables y módulo de recordatorios en sesión.",
                technologies: ["NEXT.JS", "TYPESCRIPT", "NEXT-AUTH", "DASHBOARD", "FRONTEND"],
            },
            smartfarming: {
                title: "Plataforma Smart Farming",
                company: "Proyecto Privado",
                duration: "2025",
                description: "Plataforma web responsive construida para enseñar a jóvenes en Kenia sobre técnicas modernas y sostenibles de agricultura. Empoderando a la juventud de Kenia con técnicas agrícolas modernas y sostenibles. Originalmente ideado por Felix Kioni & Derrick Gucema.",
                technologies: ["PLATAFORMA WEB", "DISEÑO RESPONSIVE", "AGRICULTURA & TECNOLOGÍA", "EDUCACIÓN"],
            },
            isa: {
                title: "Sitio Web Universidad ISA",
                company: "Proyecto Privado",
                duration: "2025",
                description: "Sitio web institucional moderno para la Universidad ISA con programas académicos, noticias, vida estudiantil y secciones de investigación. Construido con diseño responsive y experiencia de usuario optimizada.",
                technologies: ["DESARROLLO WEB", "DISEÑO RESPONSIVE", "EXPERIENCIA DE USUARIO", "SITIO WEB INSTITUCIONAL"],
            },
            dominguez: {
                title: "Sitio Web Domínguez Auto Pintura",
                company: "Proyecto Privado",
                duration: "2023",
                description: "Desarrollo de sitio web profesional y responsive para una empresa de pintura y mantenimiento, mostrando servicios de manera efectiva.",
                technologies: ["DESARROLLO WEB", "DISEÑO RESPONSIVE", "SITIO WEB PROFESIONAL"],
            },
            equinox: {
                title: "Equinox Insight Hub",
                company: "Proyecto Privado",
                duration: "2024",
                description: "Dashboard de administración Equinox - Sistema de gestión de tickets, operaciones bancarias y análisis en tiempo real. Proyecto privado (solo desarrollo frontend).",
                technologies: ["DASHBOARD", "DESARROLLO FRONTEND", "ANÁLISIS EN TIEMPO REAL", "GESTIÓN DE TICKETS"],
            },
        },
        // Certifications
        certifications: {
            title: "Certificaciones",
            agility: "Agilidad y Mentalidad Ágil",
            designThinking: "Design Thinking",
            git: "Git y GitHub Profesional",
            sql: "SQL Intermedio",
            scrum: "Scrum: De la Teoría a la Práctica",
            webDesign: "Diseñador de Páginas Web, CSS y JavaScript",
            masterJavaScript: "Master en JavaScript",
            pythonFastapi: "Python FastAPI",
            masterJavaScriptStatus: "Udemy · En progreso (Mar. 2026)",
            pythonFastapiStatus: "LinkedIn",
            institution: {
                utesa: "Universidad Tecnológica de Santiago UTESA",
                datacamp: "DataCamp",
                centenaria: "Centenaria Escuela de Informática S.A.",
                udemy: "Udemy",
                linkedin: "LinkedIn",
            },
        },
        // Languages
        languages: {
            title: "Idiomas",
            spanish: "Español",
            english: "Inglés",
            native: "Nativo",
        },
        // References
        references: {
            title: "Referencias",
        },
        // Footer
        footer: {
            print: "Imprimir CV",
            copyright: "Todos los derechos reservados.",
        },
    },
};

