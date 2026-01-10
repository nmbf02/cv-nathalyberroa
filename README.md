## 📄 CV Nathaly Berroa

Este es un **Currículum Vitae (CV) online** desarrollado con **Next.js 15**, **React 19**, **Tailwind CSS** y **Framer Motion**.  
Permite visualizar el CV en la web, cambiar entre **modo claro/oscuro** y **imprimir el CV** en formato PDF.

🌐 **Ver CV Online**: [https://cv-nathalyberroa.netlify.app/](https://cv-nathalyberroa.netlify.app/)

## 🚀 Características

✅ **Desarrollado con Next.js 15**: Framework de React para aplicaciones web modernas.  
✅ **React 19**: Utilizando la última versión de React.  
✅ **Diseño responsivo**: Adaptado para móviles, tablets y escritorio.  
✅ **Modo Claro/Oscuro**: Implementado con `next-themes`.  
✅ **Animaciones suaves**: Usando `framer-motion` para transiciones fluidas.  
✅ **Gráficos 3D**: Integración con Three.js para elementos visuales interactivos.  
✅ **Opción de imprimir CV**: Genera un PDF directamente desde el navegador.  
✅ **Estructura modular**: Componentes reutilizables para fácil personalización.  
✅ **EmailJS**: Integración para formularios de contacto.  

## 🛠 Tecnologías Usadas

- ⚡ **Next.js 15.1.7** - Framework React para producción
- ⚛️ **React 19.0.0** - Biblioteca de UI
- 🎨 **Tailwind CSS 3.4.1** - Framework CSS utility-first
- ✨ **Framer Motion 12.4.7** - Biblioteca de animaciones
- 🎭 **Heroicons & React Icons** - Iconos modernos
- 🌑 **next-themes 0.4.4** - Gestión de temas claro/oscuro
- 🎮 **Three.js 0.173.0** - Gráficos 3D en el navegador
- 📧 **EmailJS 4.4.1** - Servicio de envío de emails
- 📄 **jsPDF 3.0.0** - Generación de PDFs
- 🖼️ **html2canvas 1.4.1** - Captura de pantalla para PDF
- 🎪 **Swiper 11.2.4** - Carruseles y sliders
- 🔢 **React CountUp 6.5.3** - Animaciones de números

## 📂 Estructura del Proyecto

```bash
cv-nathalyberroa/
│── app/
│   ├── components/
│   │   ├── Certifications.jsx    # Sección de certificaciones
│   │   ├── Education.jsx         # Sección de educación
│   │   ├── Experience.jsx       # Sección de experiencia laboral
│   │   ├── Footer.jsx           # Pie de página con toggle de tema
│   │   ├── Hero.jsx             # Sección principal/header
│   │   ├── Languages.jsx        # Sección de idiomas
│   │   ├── Projects.jsx         # Sección de proyectos
│   │   ├── References.jsx       # Sección de referencias
│   │   ├── Skills.jsx           # Sección de habilidades
│   │   └── ThemeToggle.jsx      # Componente para cambiar tema
│   ├── favicon.ico
│   ├── globals.css              # Estilos globales
│   ├── layout.js                # Layout principal de la aplicación
│   ├── page.js                  # Página principal
│   └── providers.jsx            # Providers (ThemeProvider)
│── public/
│   ├── docs/                    # Documentos PDF
│   └── images/                  # Imágenes del proyecto
│── .gitignore                   # Archivos ignorados por Git
│── eslint.config.mjs           # Configuración de ESLint
│── jsconfig.json               # Configuración de JavaScript
│── next.config.mjs             # Configuración de Next.js
│── package.json                # Dependencias del proyecto
│── postcss.config.mjs          # Configuración de PostCSS
│── tailwind.config.mjs         # Configuración de Tailwind CSS
│── README.md                    # Este archivo
```

## ⚙️ Instalación y Uso

### 📋 Requisitos Previos

- **Node.js** 18.17 o superior
- **npm** 9.0 o superior (o yarn/pnpm)

### 🔹 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/nmbf02/cv-nathalyberroa.git
cd cv-nathalyberroa
```

### 🔹 2️⃣ Instalar dependencias

```bash
npm install
```

Esto instalará todas las dependencias necesarias listadas en `package.json`.

### 🔹 3️⃣ Ejecutar en desarrollo

```bash
npm run dev
```

📌 Abrir en el navegador: [http://localhost:3000](http://localhost:3000)

El servidor de desarrollo se recargará automáticamente cuando hagas cambios en el código.

### 🔹 4️⃣ Construir para producción

```bash
npm run build
```

Esto creará una versión optimizada de la aplicación en la carpeta `.next/`.

### 🔹 5️⃣ Ejecutar en producción

```bash
npm start
```

### 🔹 6️⃣ Linting

```bash
npm run lint
```

Ejecuta ESLint para verificar la calidad del código.

## 📌 Funcionalidades Principales

- 🖨 **Botón de Imprimir CV**: Permite generar un PDF directamente desde el navegador usando `jsPDF` y `html2canvas`.
- 🌙 **Modo Oscuro/Claro**: Toggle de tema implementado con `next-themes`, controlado desde `Footer.jsx`.
- 🎭 **Animaciones Modernas**: `Framer Motion` para transiciones y animaciones fluidas que mejoran la UX.
- 🎮 **Elementos 3D**: Integración con Three.js para gráficos y visualizaciones interactivas.
- 📧 **Formulario de Contacto**: Integración con EmailJS para envío de emails.
- 📱 **Totalmente Responsivo**: Diseño adaptativo que funciona perfectamente en todos los dispositivos.
- ⚡ **Optimizado para SEO**: Metadata y estructura optimizada para motores de búsqueda.

## 🎨 Personalización

Para personalizar el CV:

1. **Editar información personal**: Modifica los componentes en `app/components/` con tus datos.
2. **Cambiar colores**: Ajusta los colores en `tailwind.config.mjs` y `app/globals.css`.
3. **Agregar secciones**: Crea nuevos componentes siguiendo la estructura existente.
4. **Modificar imágenes**: Reemplaza las imágenes en `public/images/` con las tuyas.

## 🚀 Despliegue

Este proyecto puede desplegarse fácilmente en:

- **Vercel** (recomendado para Next.js)
- **Netlify**
- **GitHub Pages** (con configuración adicional)
- **Cualquier servicio de hosting** que soporte Node.js

### Desplegar en Vercel

```bash
npm install -g vercel
vercel
```

O conecta tu repositorio de GitHub directamente en [vercel.com](https://vercel.com).

## 📧 Contacto

- **Nathaly Berroa:** [nathalyberroaf@gmail.com](mailto:nathalyberroaf@gmail.com)

## 📄 Licencia

Este proyecto es de uso personal. Todos los derechos reservados.
