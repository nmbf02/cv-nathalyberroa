## 📄 CV Nathaly Berroa

Este es un **Currículum Vitae (CV) online** desarrollado con **Next.js 14**, **Tailwind CSS** y **Framer Motion**.  
Permite visualizar el CV en la web, cambiar entre **modo claro/oscuro** y **imprimir el CV** en formato PDF.

🌐 **Ver CV Online**: [https://cv-nathalyberroa.netlify.app/](https://cv-nathalyberroa.netlify.app/)

## 🚀 Características

✅ **Desarrollado con Next.js**: Framework de React para aplicaciones web modernas.  
✅ **Diseño responsivo**: Adaptado para móviles, tablets y escritorio.  
✅ **Modo Claro/Oscuro**: Implementado con `next-themes`.  
✅ **Animaciones suaves**: Usando `framer-motion` para transiciones fluidas.  
✅ **Opción de imprimir CV**: Genera un PDF directamente desde el navegador.  
✅ **Estructura modular**: Componentes reutilizables para fácil personalización.  

## 🛠 Tecnologías Usadas

- ⚡ **Next.js 14**
- 🎨 **Tailwind CSS**
- ✨ **Framer Motion**
- 🎭 **Heroicons & React Icons**
- 🌑 **next-themes** (para modo oscuro)
- 🖨 **window.print()** (para imprimir el CV)

## 📂 Estructura del Proyecto

```bash
cv-nathalyberroa/
│── app/
│   ├── components/
│   │   ├── Certifications.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Languages.jsx
│   │   ├── Projects.jsx
│   │   ├── References.jsx
│   │   ├── Skills.jsx
│   │   ├── ThemeToggle.jsx
│   ├── layout.js
│   ├── page.js
│── public/
│── styles/
│── .gitignore
│── package.json
│── next.config.mjs
│── README.md
```

## ⚙️ Instalación y Uso

### 🔹 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/nmbf02/cv-nathalyberroa.git
cd cv-nathalyberroa
```

### 🔹 2️⃣ Instalar dependencias

```bash
npm install
```

### 🔹 3️⃣ Ejecutar en desarrollo

```bash
npm run dev
```

📌 Abrir en: [http://localhost:3000](http://localhost:3000)

### 🔹 4️⃣ Construir para producción

```bash
npm run build
npm start
```

## 📌 Funcionalidades

- 🖨 **Botón de Imprimir CV**: Permite generar un PDF desde el navegador.
- 🌙 **Modo Oscuro/Claro**: Controlado desde `Footer.jsx`.
- 🎭 **Animaciones Modernas**: `Framer Motion` para mejorar la UI/UX.

🚀 **Desarrollado por Nathaly Berroa.**
