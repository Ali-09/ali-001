# Style Guide

## Objetivo

Mantener un código limpio, consistente y fácil de mantener en todo el proyecto.

Este proyecto utiliza:

- Next.js (Page Router)
- TypeScript
- Tailwind CSS
- Componentes modulares bajo la estructura de **Atomic Design**.

---

# Principios

- Priorizar simplicidad sobre complejidad.
- Escribir componentes reutilizables y modulares.
- Evitar duplicación de lógica.
- Mantener la accesibilidad (a11y) en todos los elementos.
- Optimizar rendimiento antes de agregar nuevas librerías.

---

# TypeScript

## Reglas

- Nunca usar `any`.
- Preferir `type` para objetos simples.
- Usar `interface` únicamente cuando sea necesaria la extensión.
- Tipar todas las props de los componentes (usar `React.FC` o `React.FC<Props>`).
- No usar `as` salvo que sea estrictamente necesario.

### Correcto

```ts
type ButtonProps = {
  children: React.ReactNode;
  variant: "primary" | "secondary";
};

const Button: React.FC<ButtonProps> = ({ children, variant }) => { ... }
```

### Incorrecto

```ts
const props: any;
```

---

# Componentes

## Organización

Los componentes se organizan bajo la convención de **Atomic Design** en `components/`. Cada componente debe tener una única responsabilidad:

```
components/
    atoms/          # Elementos puros sin dependencias lógicas complejas
    molecules/      # Combinaciones de átomos con lógica/estado simple
    organisms/      # Secciones completas de la interfaz
    templates/      # Layouts estructurales con integración de SEO
```

Todos los componentes creados deben exportarse en el índice general: [components/index.tsx](file:///Users/jesusali/Desktop/ali-001/components/index.tsx).

---

## Nombre

PascalCase para nombres de archivo y de componente:

```
Hero.tsx
Navbar.tsx
ProjectCard.tsx
```

Nunca utilizar minúsculas en el nombre de archivo del componente:

```
hero.tsx
navbar.tsx
```

---

# Hooks

Todos los hooks personalizados empiezan con `use`:

```
useTheme()
useScroll()
```

---

# Funciones

camelCase para nombres de funciones:

```ts
handleClick()

fetchProjects()

formatDate()
```

---

# Estructura de Carpetas del Proyecto

```
components/     # Componentes organizados en Atoms, Molecules, Organisms y Templates
context/        # Estado global de la aplicación (React Context)
pages/          # Rutas y vistas principales de Next.js (Page Router)
public/         # Recursos estáticos e iconos SVG
styles/         # Estilos globales y configuraciones CSS
```

---

# Tailwind

## Orden de clases

1. Layout
2. Flex/Grid
3. Spacing
4. Size
5. Border
6. Background
7. Typography
8. Effects
9. Animations

### Ejemplo

```tsx
className="
  flex
  items-center
  justify-between
  gap-4
  p-6
  rounded-xl
  bg-zinc-900
  text-white
  shadow-lg
  transition
  hover:scale-105
"
```

---

## Evitar Estilos en Línea

Nunca escribir estilos inline para maquetar espaciados o colores:

```tsx
// Incorrecto
style={{ marginTop: 20 }}
```

Utilizar clases utilitarias de Tailwind en su lugar.

---

## Colores

Usar únicamente los definidos en el tema de Tailwind (`tailwind.config.js`) o en el archivo de estilos globales (`styles/globals.css`). Evitar colores arbitrarios o no estandarizados.

---

# Responsive

Mobile First.

Siempre usar las variantes responsivas de Tailwind:

```
sm:
md:
lg:
xl:
2xl:
```

Nunca escribir layouts separados o duplicar componentes completos para móvil y escritorio.

---

# Componentes UI

Los componentes que actúen como contenedores deben aceptar:

```ts
className
children
```

---

# Animaciones

Usar:
- Transiciones CSS nativas integradas con clases de Tailwind.
- Clases de animación personalizadas en [styles/globals.css](file:///Users/jesusali/Desktop/ali-001/styles/globals.css) (como `.animate-pulse` o `.animate-fade`).
- Transiciones de componentes usando `react-transition-group`.

Duración máxima recomendada para micro-interacciones:
```
300ms
```

Evitar animaciones innecesarias o sobrecargadas.

---

# Iconos

Los SVGs se importan directamente como componentes de React gracias a la configuración de `@svgr/webpack` en `next.config.js`.

### Ejemplo de importación:

```tsx
import ReactIcon from 'public/icons/react.svg';
```

Tamaños estándar:
- `18`
- `20`
- `24`

---

# Imágenes

Utilizar el componente optimizado `next/image` cuando sea posible para imágenes estáticas pesadas, o SVGs optimizados inline para gráficos de interfaz.

---

# Links

- **Internos**: Controlados a través de la actualización del estado de navegación global en el contexto (`setSection`).
- **Externos**: Utilizar etiquetas `<a>` tradicionales con las siguientes propiedades de seguridad:
  ```tsx
  target="_blank"
  rel="noopener noreferrer"
  ```

---

# Accesibilidad (A11y)

- Todos los botones interactivos sin texto descriptivo deben llevar `aria-label`.
- Todas las imágenes decorativas o informativas deben incluir la propiedad `alt`.
- Los campos de formulario deben estar asociados a una etiqueta `label` o tener un identificador descriptivo.

---

# Rendimiento

- Evitar el uso de estados locales redundantes.
- Minimizar el uso de `useEffect` para cómputos que pueden resolverse durante el renderizado.
- Mantener las dependencias de los hooks de React actualizadas y limpias.

---

# Orden de Imports

1. React (hooks y tipos de React)
2. Next (componentes de Next.js como `Head`)
3. Librerías externas
4. Componentes locales (ej. `import { Button } from 'components'`)
5. Contexto/Estado global (ej. `context/`)
6. Estilos o configuraciones locales

---

# Comentarios

Evitar comentarios redundantes que expliquen qué hace la sintaxis nativa del lenguaje. Escribir comentarios cortos explicando el "por qué" de decisiones no obvias.

### Correcto

```ts
// Reiniciar el índice de la animación de escritura al desmontar el componente
return () => {
  index.current = 0;
  setSentence("");
};
```

### Incorrecto

```ts
// Establece el estado
setSentence("");
```

---

# Convenciones de IA

Cuando un agente de IA genere o modifique código en este repositorio debe:

- Reutilizar componentes existentes antes de crear nuevos.
- No duplicar lógica existente.
- Mantener la consistencia del diseño actual (colores oscuros, animaciones de terminal).
- Respetar la estructura de carpetas y el patrón de Atomic Design.
- Evitar instalar nuevas dependencias sin aprobación.
- Mantener los componentes pequeños (idealmente menos de 200 líneas).
- Extraer subcomponentes reutilizables cuando un componente crezca demasiado.
