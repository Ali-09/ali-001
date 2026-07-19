# Memoria del Proyecto (MEMORY.md)

Este documento registra las decisiones clave de diseño, lecciones aprendidas, problemas técnicos resueltos y el estado evolutivo del portafolio digital de **Jesus Ali**. Su propósito es servir de memoria de contexto persistente para futuros agentes de IA y desarrolladores.

---

## 🧠 Decisiones y Lecciones Clave

### 1. Migración Completa a TypeScript
- **Contexto**: El repositorio se inició originalmente en JavaScript puro (`.js` / `.jsx`).
- **Decisión**: Se realizó una migración estructurada a TypeScript instalando dependencias de tipado, inicializando `tsconfig.json` y renombrando componentes a `.tsx`.
- **Lección**: Esto mejoró la mantenibilidad de los componentes en la estructura de Atomic Design, previniendo errores de propiedades indefinidas en tiempo de ejecución.

### 2. Eliminación de Storybook
- **Contexto**: El proyecto contenía inicialmente historias de Storybook.
- **Decisión**: Se tomó la decisión de eliminar los archivos y dependencias de Storybook para reducir el tamaño del proyecto, simplificar las dependencias y optimizar la velocidad del pipeline de compilación.
- **Lección**: Mantener el proyecto minimalista reduce la sobrecarga cognitiva para los agentes y acelera los tiempos de construcción en Docker.

### 3. Carga y renderizado de SVGs
- **Contexto**: Se requería renderizar iconos vectoriales de tecnologías de manera ágil.
- **Decisión**: Se optó por configurar `@svgr/webpack` en `next.config.js` para permitir la importación directa de archivos `.svg` como componentes funcionales de React, en lugar de usar imágenes estándar o librerías pesadas de terceros.

### 4. Navegación en el Cliente con React Context
- **Contexto**: Se necesitaba un portafolio de una sola página (SPA) responsivo y con transiciones dinámicas entre secciones.
- **Decisión**: Se implementó una solución de estado global basada en React Context (`context/State.tsx`) con un `Reducer` para centralizar la sección activa y desencadenar animaciones de transición en los layouts (`MeTemplate`, `AboutTemplate`, `ContactTemplate`).

---

## 📋 Estado de Implementación y Roadmap

### Funcionalidades Completadas ✅
- [x] Estructura inicial del portafolio en Next.js (Page Router).
- [x] Migración de tipado estricto a TypeScript en todos los componentes.
- [x] Implementación de **Atomic Design** en componentes visuales.
- [x] Efecto animado de máquina de escribir en el título principal (`MainTitle`).
- [x] Pantalla de simulación de código autoscrolleable (`ScreenCode`).
- [x] Dockerización multi-etapa y script de actualización automatizada (`start.sh`).
- [x] Documentación técnica de referencia (`AGENTS.md`, `PRODUCT.md`, `ARCHITECTURE.md`, `STYLEGUIDE.md`).

### Siguientes Pasos y Mejoras Pendientes 🚀
- [ ] **Formulario de Contacto Funcional**: Reemplazar el simulador actual (`preventDefault()`) en `BodyContact` por una integración de envío real de emails (ej. EmailJS, Resend, o una API Route de Next.js en `pages/api/contact.ts`).
- [ ] **Descarga/Envío de CV**: Configurar y validar el archivo PDF de currículum para enviarlo al correo proporcionado en el formulario o permitir la descarga directa.
- [ ] **SEO & Meta tags**: Optimizar los meta tags dinámicos dentro de cada plantilla (`next/head`) para mejorar el posicionamiento en buscadores.
- [ ] **Optimización de Assets**: Asegurar que las imágenes o recursos en `public/` estén comprimidos y optimizados.
