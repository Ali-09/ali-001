# Changelog (Historial de Cambios)

Todos los cambios notables en este proyecto serán documentados en este archivo. El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/) y este proyecto se adhiere a [SemVer (Versionado Semántico)](https://semver.org/spec/v2.0.0.html).

---

## [0.1.0] - 2026-07-18

### Added
- Creación de documentación de guías para agentes de IA: **`AGENTS.md`** en la raíz del proyecto.
- Creación de documentación del producto y del sistema en la carpeta `docs/`:
  - **`docs/PRODUCT.md`**: Detalla el comportamiento, objetivos, vistas y la implementación de Atomic Design.
  - **`docs/ARCHITECTURE.md`**: Ilustra el flujo de datos global de la app, estructura de archivos y pipelines de compilación con Docker.
  - **`docs/STYLEGUIDE.md`**: Define guías de estilo para TypeScript, convenciones de nombres, orden de clases de Tailwind CSS y reglas de accesibilidad.
  - **`docs/MEMORY.md`**: Persiste el contexto histórico, lecciones aprendidas de decisiones técnicas y el roadmap de mejoras.
- Creación de este archivo **`CHANGELOG.md`** para el registro histórico de versiones del portafolio.

### Changed
- Organización de la documentación técnica agrupando archivos relevantes bajo la nueva carpeta `docs/`.

---

## [0.0.2] - Febrero 2025 (Refactorización)

### Added
- Configuración y soporte para TypeScript (`typescript`, `@types/react`, `@types/node`).
- Archivo de configuración inicial `tsconfig.json`.

### Changed
- Refactorización de todos los componentes de la interfaz de usuario de archivos `.jsx` a componentes tipados en `.tsx` bajo la metodología de Atomic Design.
- Actualización de los estilos CSS en `styles/globals.css` integrando clases utilitarias extendidas de Tailwind CSS.

### Removed
- Eliminación de dependencias y configuraciones inactivas de Storybook para optimizar el bundle size del portafolio.

---

## [0.0.1] - Inicial

### Added
- Inicialización del proyecto portafolio con Next.js (Page Router).
- Configuración de Tailwind CSS y PostCSS.
- Estructura de navegación SPA (Single Page Application) controlada por React Context.
- Componente interactivo animado de escritura `MainTitle`.
- Componente animado de consola de código simulado `ScreenCode`.
- Configuración de Dockerfile multi-etapa y script bash de despliegue continuo `start.sh`.
