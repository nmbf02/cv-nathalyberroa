/**
 * Next.js — Configuración del proyecto.
 * images.remotePatterns: permite cargar imágenes desde github.githubassets.com (ej. logo GitHub).
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "github.githubassets.com",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
