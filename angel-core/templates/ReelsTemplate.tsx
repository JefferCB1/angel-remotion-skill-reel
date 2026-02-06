import React from 'react';
import { AbsoluteFill, Video, staticFile, useCurrentFrame, interpolate, spring, useVideoConfig } from 'remotion';
import { z } from 'zod';

// Esquema de datos basado en las necesidades de "Ángel"
export const reelsSchema = z.object({
  title: z.string(),
  videoSrc: z.string(),
  // Por defecto usamos Verde Neón (#00FF00) para "Dinero/Resultado" según la guía
  accentColor: z.string().default('#00FF00'), 
});

export const ReelsTemplate: React.FC<z.infer<typeof reelsSchema>> = ({ title, videoSrc, accentColor }) => {
  const frame = useCurrentFrame();
  // Esta línea faltaba y causaba errores en fps
  const { fps } = useVideoConfig(); 

  // Animación de entrada "Golpe" (Spring agresivo)
  const entrance = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 200 }, // Más rígido para ser más agresivo
  });

  // Barra de progreso (Funcionalidad obligatoria)
  const duration = 900; // 30 segundos
  const progress = interpolate(frame, [0, duration], [0, 100], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill style={{ backgroundColor: 'black' }}>
      {/* 1. VIDEO (Corte inteligente para vertical) */}
      <div style={{ 
        width: '100%', height: '100%', overflow: 'hidden', position: 'relative' 
      }}>
        <Video 
          src={staticFile(videoSrc)} 
          style={{ 
            height: '100%', 
            width: '177%', // Escala calculada para llenar 9:16 sin bordes
            marginLeft: '-38.5%', // Centrado matemático exacto
            objectFit: 'cover' 
          }} 
        />
      </div>

      {/* 2. TEXTO GANCHO (Estilo "Consultor Enfadado") */}
      <div style={{ 
        position: 'absolute', 
        top: 350, // Posición estratégica (tercio superior)
        width: '100%', 
        padding: '0 20px',
        textAlign: 'center',
        // El texto entra golpeando la pantalla (Scale 0 -> 1)
        transform: `scale(${entrance})` 
      }}>
        <h1 style={{ 
          fontFamily: 'Montserrat, sans-serif', // Fuente obligatoria según tu guía
          fontWeight: 900, // "Black" / Muy gruesa
          fontSize: 85, 
          lineHeight: 0.9,
          color: 'white',
          textTransform: 'uppercase', // SIEMPRE mayúsculas
          // Sombra dura para legibilidad máxima sobre cualquier fondo
          textShadow: '0px 0px 20px rgba(0,0,0,0.9)', 
          margin: 0
        }}>
          {title}
        </h1>
      </div>

      {/* 3. BARRA DE PROGRESO (Retención) */}
      <div style={{ 
        position: 'absolute', 
        bottom: 0, 
        left: 0, 
        height: 15, 
        backgroundColor: accentColor, // Verde o Rojo según el "semáforo emocional"
        width: `${progress}%` 
      }} />
    </AbsoluteFill>
  );
};