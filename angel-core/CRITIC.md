# VIDEO CRITIC SKILL (Modo Ángel)

Esta skill analiza video o descripciones visuales para maximizar la retención siguiendo la filosofía "Anti-Humo".

## 🕵️‍♂️ Reglas de Auditoría (Lo que debes buscar)

1.  **Detector de Silencios (Death Valley):**
    -   **Regla:** Si hay una pausa > 0.5s sin acción visual.
    -   **Solución:** Recomendar "Jump Cut" inmediato.

2.  **Detector de "Cabeza Parlante" (Talking Head):**
    -   **Regla:** Si el orador lleva > 5 segundos en pantalla sin cambios.
    -   **Solución:** Recomendar un "Punch-In" (Zoom 1.3x) o insertar B-Roll de "Caos".

3.  **Detector de Palabras Clave (Triggers):**
    -   **Regla:** Si el audio menciona cifras, dinero, errores o "mentiras".
    -   **Solución:** Recomendar Overlay de Texto Gigante (Verde para dinero, Rojo para errores).

## 📝 Formato de Reporte
Cuando analices, entrega tus sugerencias en este formato JSON para que Remotion pueda ejecutarlas:

```json
{
  "edits": [
    { "time_start": 45, "action": "jump_cut", "reason": "Silencio incómodo" },
    { "time_start": 120, "action": "zoom_in", "reason": "Enfatizar la palabra 'Estafa'" }
  ]
}