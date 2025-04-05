/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // ⬅️ importante para usar next export
    images: {
        unoptimized: true, // ⬅️ esto soluciona el problema de _next/image en producción
    },
};

export default nextConfig;
