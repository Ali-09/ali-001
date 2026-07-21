# Guía para Agentes de IA y Desarrolladores (AGENTS.md)

Este archivo proporciona contexto técnico, estándares de codificación y comandos de flujo de trabajo para agentes de IA (como Antigravity, Claude Code, Cursor) y desarrolladores que interactúen con este repositorio.

## 📚 Documentación Relacionada
Para comprender en profundidad más aspectos del proyecto, consulta los siguientes archivos de convención ubicados en la carpeta `docs/` y en la raíz:
- **[PRODUCT.md](file:///Users/jesusali/Desktop/ali-001/docs/PRODUCT.md)**: Información del producto, descripción de secciones y arquitectura de UI (Atomic Design).
- **[ARCHITECTURE.md](file:///Users/jesusali/Desktop/ali-001/docs/ARCHITECTURE.md)**: Vista general de arquitectura, flujos de datos y esquema de contenedores/despliegue.
- **[STYLEGUIDE.md](file:///Users/jesusali/Desktop/ali-001/docs/STYLEGUIDE.md)**: Guía de estilos, convenciones de TypeScript, ordenamiento de clases de Tailwind CSS e instrucciones específicas de IA.
- **[DESIGN.md](file:///Users/jesusali/Desktop/ali-001/docs/DESIGN.md)**: Manual del sistema de diseño (concepto de plano de ingeniería, tokens de color y tipografía).
- **[MEMORY.md](file:///Users/jesusali/Desktop/ali-001/docs/MEMORY.md)**: Memoria técnica con decisiones clave de diseño, lecciones aprendidas y roadmap de tareas pendientes.
- **[CHANGELOG.md](file:///Users/jesusali/Desktop/ali-001/CHANGELOG.md)**: Historial ordenado por versiones con los cambios detallados del portafolio.

---

## 🛠️ Comandos de Desarrollo del Proyecto

### Desarrollo Local
Para instalar dependencias e iniciar el servidor de desarrollo local:
```bash
# Instalar dependencias
yarn install # o npm install

# Servidor de desarrollo
yarn dev     # o npm run dev
```
La aplicación estará disponible en `http://localhost:3000`.

### Construcción y Producción
Para validar y compilar el portafolio para producción:
```bash
# Validar linter
yarn lint    # o npm run lint

# Compilar producción
yarn build   # o npm run build

# Iniciar servidor de producción compilado
yarn start   # o npm run start
```

### Docker y Despliegue Automatizado
El proyecto cuenta con dockerización para entornos de producción y un script bash para despliegue automatizado:

*   **Levantar localmente con Docker Compose**:
    ```bash
    docker-compose up --build -d
    ```
    El puerto interno `3000` se expone en el puerto externo **`9000`** en el host. El nombre del contenedor es `portafolio`.

*   **Script de Despliegue Continuo ([start.sh](file:///Users/jesusali/Desktop/ali-001/start.sh))**:
    Este script actualiza el repositorio, apaga los contenedores anteriores, reconstruye la imagen Docker y levanta el servicio:
    ```bash
    ./start.sh
    ```

---

## 📋 Estructura y Estándares de Código

### 1. Convención de Componentes (Atomic Design)
Al agregar o modificar componentes, se debe seguir la estructura de **Atomic Design**. Todos los componentes nuevos deben ser exportados en el índice general: [components/index.tsx](file:///Users/jesusali/Desktop/ali-001/components/index.tsx).

*   **Atoms**: Pequeños elementos puros sin dependencias lógicas complejas.
*   **Molecules**: Grupo de átomos. Pueden manejar estados locales sencillos.
*   **Organisms**: Secciones independientes de la página.
*   **Templates**: Layouts estructurales que contienen organismos.

### 2. Tipado Estricto de TypeScript
Todos los componentes deben estar tipados correctamente:
- Usar `React.FC` o `React.FC<Props>` para componentes funcionales.
- Declarar interfaces descriptivas para las propiedades (`Props` o `IProps`).
- Evitar el uso de `any`.

### 3. Hojas de Estilos y Tailwind CSS
- Los estilos globales y personalizados se encuentran en [styles/globals.css](file:///Users/jesusali/Desktop/ali-001/styles/globals.css).
- Utilizar las clases utilitarias de Tailwind CSS directamente en el atributo `className`.
- Para transiciones de animación personalizadas, referirse a la estructura definida en `styles/globals.css` (clases como `.me`, `.device`, `.about`, `.contact` etc.).

### 4. Manejo de SVGs
- Los SVGs se importan directamente como componentes de React gracias a `@svgr/webpack`.
- Ejemplo de importación e integración:
  ```tsx
  import ReactIcon from 'public/icons/react.svg';
  // o a través de los componentes átomos:
  import { ReactIcon } from 'components';
  ```

### 5. Enrutamiento y Navegación
- Se utiliza Next.js Page Router. Las páginas principales se encuentran directamente en `pages/` (`_app.tsx`, `index.tsx`, `about.tsx`, `contact.tsx`).
- No agregar la carpeta `app/` (App Router) a menos que se realice una migración completa planificada y aprobada.
- Las transiciones de secciones consumen el estado de sección global expuesto por `context/Context.tsx`.

---

## 🤖 Directrices para Agentes Autónomos de IA
Cuando implementes cambios o features en este repositorio:
1.  **Preserva las animaciones**: Asegúrate de no romper los efectos de transición o animaciones de pulso (`animate-pulse`) e inserciones de código dinámicas en `ScreenCode` y `MainTitle`.
2.  **No dupliques exportaciones**: Cada vez que crees un componente visual, agrégalo a [components/index.tsx](file:///Users/jesusali/Desktop/ali-001/components/index.tsx).
3.  **Chequeo de linting y tipado**: Antes de dar por terminada una tarea, asegúrate de correr `yarn build` o `yarn lint` para validar que no haya errores de compilación de TypeScript o del linter.
