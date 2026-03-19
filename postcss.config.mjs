/**
 * PostCSS — Solo plugin tailwindcss; necesario para que Tailwind procese las clases en el CSS.
 */
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
};

export default config;
