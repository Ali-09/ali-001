# Diseño del Portafolio (DESIGN.md)

Este documento especifica las pautas de diseño visual, paleta de colores, tipografía e interacciones para el portafolio de **Jesus Ali**, inspirado en planos de ingeniería y especificaciones técnicas futuristas.

---

## 🎯 Objetivo y Enfoque Visual
Crear una experiencia visual inspirada en **planos de ingeniería y guías técnicas de alta precisión**. 
- **Estilo principal**: Plano técnico CAD, manual técnico espacial y esquemas industriales.
- **Lo que NO es**: No debe sentirse como una interfaz gamer, neon cyberpunk, vaporwave o con saturación de colores. Debe transmitir orden, precisión, elegancia y un toque minimalista premium.

### Inspiraciones Clave
*   Planos de ingeniería de Stark Industries / JARVIS (Iron Man).
*   Planos técnicos y manuales antiguos de la NASA.
*   Esquemas de diseño industrial clásico (Apple, Nothing).
*   Diseños e interfaces minimalistas modernas (Linear, Vercel).

---

## 🎨 Sistema de Colores (Tokens de Diseño)

Para implementar este diseño, se utilizarán las siguientes variables CSS y clases de Tailwind CSS:

```css
/* Propiedades personalizadas para globals.css */
:root {
  --background: #F8F8F5; /* Tono papel técnico, no blanco puro */
  --surface: #FFFFFF;    /* Superficies de tarjetas y paneles */
  --primary: #222222;    /* Texto principal y trazos fuertes */
  --secondary: #5E5E5E;  /* Texto de apoyo y anotaciones secundarias */
  --lines: #CFCFCF;      /* Retículas, separadores y guías CAD */
  --accent: #FFB648;     /* Color de acento (indicadores, hover, llamadas a la acción) */
}
```

### Tabla de Equivalencia de Colores
| Token | Valor Hex | Uso Principal |
| :--- | :--- | :--- |
| `background` | `#F8F8F5` | Fondo base de todo el sitio. Evita el blanco puro para dar sensación de papel/plano. |
| `surface` | `#FFFFFF` | Fondos de tarjetas, modales u overlays limpios. |
| `primary` | `#222222` | Color del texto principal y elementos de alta jerarquía. |
| `secondary` | `#5E5E5E` | Subtítulos, descripciones secundarias y etiquetas técnicas. |
| `lines` | `#CFCFCF` | Grids de fondo, bordes sutiles de 1px y líneas de cota. |
| `accent` | `#FFB648` | Hover, enlaces activos, botones destacados y micro-detalles de alerta. |

---

## 🔤 Tipografía

El portafolio utiliza dos familias tipográficas para establecer jerarquía:

1.  **Geist (Sans-Serif)** - *Fuente Principal*: Usada para títulos, navegación y cuerpo de texto general. Transmite limpieza y modernidad.
2.  **JetBrains Mono (Monospace)** - *Fuente Secundaria*: Usada exclusivamente para:
    *   Coordenadas (ej. `X: 245`, `Y: 980`).
    *   Metadata, etiquetas de sección y números de figura (ej. `FIG 01`, `REV 2.3`).
    *   Fechas y anotaciones técnicas marginales.

---

## 🛠️ Configuración de Tailwind CSS (`tailwind.config.js`)
Para soportar el sistema de diseño de manera nativa con clases utilitarias de Tailwind, la configuración del tema debe extenderse de la siguiente forma:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        surface: 'var(--surface)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        lines: 'var(--lines)',
        accent: 'var(--accent)',
      },
      fontFamily: {
        sans: ['Geist', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      spacing: {
        '4': '4px',
        '8': '8px',
        '12': '12px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '48': '48px',
        '64': '64px',
        '96': '96px',
        '128': '128px',
      }
    }
  }
}
```

---

## 📐 Sistema de Retículas y Fondos (Background System)
El fondo del portafolio nunca debe verse totalmente plano. Debe simular un software CAD o un papel técnico mediante capas de baja opacidad:

*   **Retícula Principal (Grid)**: Cuadrícula uniforme de fondo dibujada mediante SVGs lineales repetitivos.
*   **Líneas de Cota / Guías**: Líneas finas horizontales y verticales que definen los límites del layout.
*   **Opacidad Estricta**: Todos los elementos técnicos de fondo deben tener una opacidad de entre el **3% y el 8%** (`opacity-3` a `opacity-8`) para que no compitan en legibilidad con el contenido principal.

---

## 🔍 Microdetalles Técnicos
Para enriquecer el diseño visual sin sobrecargar el flujo de lectura, se deben esparcir pequeños fragmentos de información en la tipografía monoespaciada en esquinas, bordes o divisores.

### Ejemplos Visuales de Microdetalles
*   `● PX-01`
*   `X: 245 / Y: 980`
*   `REV 2.3`
*   `SECTION A`
*   `FIG 01`
*   `R=24mm`

### Ejemplo de Implementación en Código (React + Tailwind)
```tsx
const TechnicalLabel = () => (
  <div className="absolute top-4 right-4 flex items-center gap-2 font-mono text-[10px] text-secondary opacity-60">
    <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
    <span>SYS.REF: SEC-A / FIG.01</span>
  </div>
);
```

---

## 🎨 Componentes Visuales

### 1. Tarjetas (Cards)
*   **Aspecto**: Deben asemejarse a placas metálicas cortadas a precisión o secciones delimitadas en un plano técnico.
*   **Espaciado**: Padding generoso y homogéneo.
*   **Bordes**: `border border-lines` (1px, sutil). Sin sombras gruesas.
*   **Hover**: Transición suave donde el color del borde cambia de `var(--lines)` a `var(--accent)`.

### 2. Botones
*   **Estilo**: Tipo contorno (`outline`) con bordes finos. Sin sombras externas.
*   **Hover**: El color de fondo o el texto cambia al color `accent` de manera reactiva y limpia.

### 3. Navegación / Navbar
*   **Diseño**: Muy limpia, flotante o superior transparente con un desenfoque sutil (`backdrop-blur-sm`).
*   **Visibilidad**: Siempre fija o accesible.

---

## 🎬 Animaciones y Transiciones
Las animaciones deben emular el comportamiento mecánico de un plano de construcción o una interfaz técnica fluida (inspirada en interfaces como JARVIS u Nothing OS).

*   **Duración**: Rápida y precisa: entre **150ms y 300ms**.
*   **Estilos Permitidos**:
    *   `fade-in` / `fade-out` (Opacidad).
    *   `draw-line` (Efectos de trazo para líneas divisorias en SVG).
    *   `scale-up` / `translate` muy ligeros para hovers.
*   **Estilos Prohibidos**:
    *   Efectos elásticos (`bounce`, `elastic`).
    *   Giro persistente (`spin`) o rebotes bruscos que resten seriedad al enfoque técnico.

---

## 📐 Layout y Comportamiento Responsivo
*   **Ancho Máximo**: `max-w-[1400px]` en pantallas grandes con un padding lateral estándar de `px-48` (`48px`).
*   **Mobile First**: En dispositivos móviles, se debe priorizar el contenido. Se remueve la mayor parte de las ilustraciones vectoriales de planos de fondo complejos, conservando únicamente las líneas de cuadrícula base, bordes sencillos y detalles tipográficos esenciales para garantizar legibilidad y alto rendimiento.
