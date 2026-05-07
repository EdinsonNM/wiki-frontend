# Environment

## Variables

```text
VITE_API_BASE_URL=
```

Para APIs propias suele bastar una base URL generica. Si usas un proveedor concreto (por ejemplo Supabase, Firebase u otro), los nombres pueden ser los que imponga ese SDK (`VITE_SUPABASE_URL`, etc.), siempre **sin secretos** en prefijos expuestos al bundle del navegador.

No documentar secretos reales.

## Tabla De Variables

| Variable | Requerida | Entornos | Descripcion | Ejemplo Seguro |
| --- | --- | --- | --- | --- |
| `VITE_API_BASE_URL` | segun proyecto | local/staging/prod | Base URL publica de API REST propia u origin conocido | `http://localhost:3000` |

## Reglas

- Mantener coherencia con `docs/integrations/api.md`: cada fila de fuente que requiera configuracion publica deberia tener aqui su variable (o quedar explicitamente como no aplica).
- No commitear `.env.local` con secretos.
- Mantener `.env.example` sincronizado si existe.
- Las variables publicas de frontend no deben contener secretos.
- Si una variable cambia, actualizar README/setup y docs de operaciones.
