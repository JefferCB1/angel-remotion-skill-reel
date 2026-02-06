# ANGEL DESIGN SYSTEM (V2.0 - MODERN)

Este módulo capacita al Agente para usar efectos visuales avanzados de alta retención, eliminando el estilo "estático" o aburrido.

## 1. Requisitos Técnicos
Para usar estos diseños, el proyecto debe tener instaladas estas librerías:
- `npm install remotion-animated @remotion/transitions`

## 2. Catálogo de Efectos Permitidos

### A. Títulos Cinéticos (Kinetic Typography)
**Objetivo:** Los textos no aparecen, *golpean* la pantalla.
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

***

### ¿Qué hacer después de guardar?
No olvides subir los cambios a la nube para que el comando `npx` actualice la skill en tus proyectos:

1.  Abre la terminal en la carpeta `angel-remotion-skill-reel`.
2.  Ejecuta:
    ```bash
    git add .
    git commit -m "Design System completo V2"
    git push
    ```

¡Listo! Tu skill ahora tiene el manual completo de efectos especiales. 🎬