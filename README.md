# 📄 CV Nathaly Berroa

CV online en formato web desarrollado con **Next.js 15**, **React 19**, **Tailwind CSS** y **Framer Motion**. Incluye modo claro/oscuro, idioma EN/ES e impresión a PDF.

🌐 **Ver en línea:** [https://cv-nathalyberroa.netlify.app/](https://cv-nathalyberroa.netlify.app/)

---

## 🚀 Características

- **Next.js 15 (App Router)** — Layout único que renderiza todas las secciones del CV.
- **React 19** — Componentes funcionales con hooks.
- **Diseño responsivo** — Móvil, tablet y escritorio; estilos `print:` para PDF.
- **Modo claro/oscuro** — `next-themes` con persistencia; toggle en el footer.
- **Idioma EN/ES** — Contexto `LanguageContext` + traducciones en `app/translations/translations.js`; persistencia en `localStorage`.
- **Animaciones** — Framer Motion en secciones y listas.
- **Imágenes optimizadas** — `next/image`; logos de certificaciones en `public/images/`.
- **Imprimir / PDF** — Botón imprimir en footer; enlace a CV en PDF estático en `/docs/`.
- **Documentación en código** — Comentarios JSDoc en layout, páginas, contextos, componentes y configs.

---

## 🛠 Tecnologías

| Tecnología      | Uso                          |
|----------------|------------------------------|
| Next.js 15     | Framework, App Router, SSR   |
| React 19       | UI y hooks                   |
| Tailwind CSS   | Estilos y tema               |
| Framer Motion  | Animaciones                  |
| next-themes    | Tema claro/oscuro            |
| Heroicons / React Icons | Iconos              |
| EmailJS        | Formularios (si se usan)     |
| jsPDF / html2canvas | Export PDF (si se usa)  |

---

## 📂 Estructura del proyecto

```
cv-nathalyberroa/
├── app/
│   ├── layout.js              # Layout raíz: fuentes Geist, metadata, orden de secciones
│   ├── page.js                # Página principal (vacía; contenido en layout)
│   ├── globals.css            # Tailwind + variables tema + estilos de impresión
│   ├── providers.jsx           # ThemeProvider + LanguageProvider
│   ├── contexts/
│   │   └── LanguageContext.jsx # Estado idioma (en/es) y useLanguage()
│   ├── translations/
│   │   └── translations.js     # Textos EN/ES: hero, sections, education, experience, etc.
│   └── components/
│   ├── Hero.jsx               # Nombre, título, descripción, contacto
│   ├── Education.jsx          # Formación y especializaciones
│   ├── Skills.jsx             # Habilidades técnicas (tags)
│   ├── Experience.jsx         # Experiencia laboral
│   ├── Projects.jsx           # Proyectos recientes
│   ├── Certifications.jsx     # Certificaciones con logos
│   ├── Languages.jsx          # Idiomas y niveles
│   ├── References.jsx         # Referencias personales
│   ├── Footer.jsx             # Idioma, PDF, imprimir, tema
│   ├── ThemeToggle.jsx        # Selector tema (sistema/claro/oscuro)
│   └── LanguageToggle.jsx     # Botón EN/ES
├── public/
│   ├── images/                # udemy.png, python.png, utesa.png, github.png, etc.
│   └── docs/                  # Resumen-NathalyBerroa.pdf
├── next.config.mjs            # Config Next; remotePatterns para imágenes
├── tailwind.config.mjs        # darkMode: class, content, colores
├── postcss.config.mjs         # Plugin tailwindcss
├── jsconfig.json              # Alias "@/*" -> raíz del proyecto
├── eslint.config.mjs         # ESLint next/core-web-vitals
└── package.json
```

---

## 📖 Documentación del código

Cada archivo relevante incluye un comentario de bloque al inicio que describe su propósito:

- **app/layout.js** — Estructura del documento y orden de secciones.
- **app/providers.jsx** — Proveedores de tema e idioma.
- **app/contexts/LanguageContext.jsx** — API del contexto (`useLanguage`, persistencia).
- **app/translations/translations.js** — Estructura de las cadenas i18n.
- **app/globals.css** — Variables de tema y reglas de impresión.
- **app/components/*.jsx** — Qué muestra cada sección y de dónde saca los datos.
- **next.config.mjs**, **tailwind.config.mjs**, **postcss.config.mjs**, **eslint.config.mjs** — Qué configura cada uno.

Para cambiar textos o datos del CV, edita `app/translations/translations.js` y, si aplica, los componentes que usen datos fijos (p. ej. referencias en `References.jsx`).

---

## ⚙️ Instalación y uso

### Requisitos

- **Node.js** 18.17+
- **npm** 9+ (o yarn/pnpm)

### Clonar e instalar

```bash
git clone https://github.com/nmbf02/cv-nathalyberroa.git
cd cv-nathalyberroa
npm install
```

### Comandos

| Comando        | Descripción                    |
|----------------|--------------------------------|
| `npm run dev`  | Servidor de desarrollo (puerto 3000) |
| `npm run build`| Build de producción            |
| `npm start`    | Servidor de producción          |
| `npm run lint` | Ejecutar ESLint                |

Abrir en desarrollo: [http://localhost:3000](http://localhost:3000).

---

## 🎨 Personalización

1. **Textos del CV** — Editar `app/translations/translations.js` (claves `en` y `es`).
2. **Referencias** — Editar el array `references` en `app/components/References.jsx`.
3. **Habilidades** — Editar los `<span>` en `app/components/Skills.jsx` (o mover a translations).
4. **Certificaciones** — Ajustar el array `certifications` y las imágenes en `app/components/Certifications.jsx`; imágenes en `public/images/` (p. ej. `github.png`).
5. **Colores y tema** — Variables en `app/globals.css`; clases en `tailwind.config.mjs` y en los componentes.
6. **Metadata SEO** — Objeto `metadata` en `app/layout.js`.

---

## 🚀 Despliegue

El proyecto se puede desplegar en **Vercel**, **Netlify** o cualquier host con Node.js.

- **Vercel:** `npx vercel` o conectar el repo en [vercel.com](https://vercel.com).
- **Netlify:** Conectar el repo y usar comando de build `npm run build` y directorio de publicación `.next` (o salida estática si se configura).

---

## 📧 Contacto

**Nathaly Berroa** — [nathalyberroaf@gmail.com](mailto:nathalyberroaf@gmail.com)

---

## 📄 Licencia

Uso personal. Todos los derechos reservados.
