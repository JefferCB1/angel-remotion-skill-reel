# ANGEL DESIGN SYSTEM (V2.0 - MODERN)

Este módulo capacita al Agente para usar efectos visuales avanzados de alta retención, eliminando el estilo "estático" o aburrido.

## 1. Requisitos Técnicos
Para usar estos diseños, el proyecto debe tener instaladas estas librerías:
- `npm install remotion-animated @remotion/transitions`

## 2. Catálogo de Efectos Permitidos

### A. Títulos Cinéticos (Kinetic Typography)
**Objetivo:** Los textos no aparecen suavemente, *golpean* la pantalla.
**Herramienta:** `remotion-animated`

#### Código de Ejemplo (Entrada "Punch"):
```tsx
import { Scale, Move } from 'remotion-animated';

// El texto escala de 0 a 1 con rebote, y sube ligeramente
<Scale in={0} out={10} initial={0} animate={true}>
  <Move initialY={50} animate={true}>
    <h1 style={{
      fontFamily: 'Montserrat', 
      fontWeight: 900, 
      color: '#FFFFFF',
      textTransform: 'uppercase'
    }}>
      ¡MENTIRA!
    </h1>
  </Move>
</Scale>
B. Transiciones Agresivas
Objetivo: Cambiar de contexto (Cara -> Pantalla) sin cortes secos feos, usando movimiento rápido. Herramienta: @remotion/transitions

Código de Ejemplo (Slide Rápido):
TypeScript
import { TransitionSeries, linear } from '@remotion/transitions';
import { slide } from '@remotion/transitions/slide';

<TransitionSeries>
  {/* ESCENA 1: Cara Hablando */}
  <TransitionSeries.Sequence durationInFrames={120}>
    <TalkingHeadComponent />
  </TransitionSeries.Sequence>
  
  {/* TRANSICIÓN: Deslizamiento rápido (Wipe) desde la derecha */}
  <TransitionSeries.Transition
    presentation={slide({ direction: 'from-right' })}
    timing={linear({ durationInFrames: 15 })} // 0.5 segundos (Muy rápido)
  />

  {/* ESCENA 2: Demostración Técnica */}
  <TransitionSeries.Sequence durationInFrames={300}>
    <DemoScreenComponent />
  </TransitionSeries.Sequence>
</TransitionSeries>
C. Efecto "Highlight" (Resaltador)
Objetivo: Enfatizar una línea en un documento o captura de pantalla. Estilo: Barra verde semitransparente que se expande.

Código de Ejemplo:
TypeScript
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';

const frame = useCurrentFrame();
// Animación de 0% a 100% de ancho en 10 frames
const width = interpolate(frame, [0, 10], [0, 100], { extrapolateRight: 'clamp' });

<div style={{
  position: 'absolute',
  top: 200, // Ajustar según donde esté el texto
  left: 50,
  height: 40,
  width: `${width}%`,
  backgroundColor: '#00FF00', // Verde Dinero
  opacity: 0.5,
  mixBlendMode: 'multiply' // Para que se lea el texto de abajo
}} />
D. Efecto "Camera Shake" (Temblor)
Objetivo: Usar cuando el orador esté "enfadado" o diga una verdad incómoda. Herramienta: remotion-animated (<Move>) o cálculo manual.

TypeScript
import { Move } from 'remotion-animated';

// El video tiembla ligeramente en X e Y
<Move x={5} y={5} duration={5} repeat={Infinity}>
  <Video src={...} />
</Move>
3. Reglas de Diseño (Philosophy)
Cero Fade-In: Nunca uses desvanecidos suaves para entrar textos. Usa Scale (Zoom) o Move (Deslizamiento).

Velocidad: Las transiciones no deben durar más de 15 frames (0.5s).

Jerarquía: Si hay un Título y un Subtítulo, el Título entra primero, el Subtítulo 5 frames después.

4. Físicas de Movimiento (Motion Presets)
Para evitar movimientos lineales aburridos, usa estas configuraciones de spring obligatorias cuando uses remotion nativo:

A. "The Angel Snap" (Golpe Seco)
Para textos principales y títulos que entran agresivos. Rápido, con poco rebote.

TypeScript
const snapConfig = {
  damping: 14,
  mass: 0.5,
  stiffness: 180
};
// Uso: const scale = spring({ config: snapConfig, ... })
B. "The Bouncy Reveal" (Rebote Suave)
Para elementos secundarios (iconos, stickers, botón de suscripción).

TypeScript
const bouncyConfig = {
  damping: 10,
  mass: 0.8,
  stiffness: 100
};
// Uso: const scale = spring({ config: bouncyConfig, ... })