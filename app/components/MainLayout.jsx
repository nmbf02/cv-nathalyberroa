"use client";

import Education from "@/app/components/Education";
import Skills from "@/app/components/Skills";
import Experience from "@/app/components/Experience";
import Projects from "@/app/components/Projects";
import Certifications from "@/app/components/Certifications";
import Languages from "@/app/components/Languages";
import Volunteer from "@/app/components/Volunteer";
import References from "@/app/components/References";

const MainLayout = () => {
    return (
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Columna Izquierda */}
            <div className="space-y-8">
                <Education />
                <Skills />
                <Languages />
                <Volunteer />
                <References />
            </div>

            {/* Columna Derecha */}
            <div className="space-y-8">
                <Experience />
                <Projects />
                <Certifications />
            </div>
        </div>
    );
};

export default MainLayout;
