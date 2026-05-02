# Environment

## Variables

```text
VITE_API_BASE_URL=
```

No documentar secretos reales.

## Tabla De Variables

| Variable | Requerida | Entornos | Descripcion | Ejemplo Seguro |
| --- | --- | --- | --- | --- |
| `VITE_API_BASE_URL` | si | local/staging/prod | Base URL publica de API | `http://localhost:3000` |

## Reglas

- No commitear `.env.local` con secretos.
- Mantener `.env.example` sincronizado si existe.
- Las variables publicas de frontend no deben contener secretos.
- Si una variable cambia, actualizar README/setup y docs de operaciones.
