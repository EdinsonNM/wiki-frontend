# API Integration

## Tipo De Backend

Documentar que API consume el frontend; **no hay proveedor obligatorio**.

| Categoria | Ejemplos | Notas |
| --- | --- | --- |
| API HTTP propia | REST, OpenAPI | Base URL + cliente en `infra`; TanStack Query sobre use case cuando aplique CA. |
| GraphQL / tRPC | Esquema remoto o router propio | Contrato en schema/codegen; mismo boundary que REST. |
| BaaS / SaaS | Supabase, Firebase, Appwrite, etc. | Opcional; aislar en adapters en `infra`, no en componentes. |
| Auth / pagos / otros | OAuth, Stripe, etc. | Variables publicas solo si el proveedor las expone de forma segura para cliente. |

Si el stack cambia de un tipo a otro, actualizar esta tabla y `environment.md`.

## Punto De Referencia Y Fuentes Registradas

Este archivo debe poder leerse **solo** y responder: de donde salen los datos del producto.

- **Proyecto existente:** mantener la tabla siguiente al dia con el codigo (cada vez que se anada o cambie un origen).
- **Informacion faltante:** no inventar; registrar como pendiente y **preguntar** que fuentes se usaran antes de consolidar diseno de clients.
- **Arquitectura:** da igual si hay una o varias fuentes; el modelo de capas (`domains` / `infra` / `presentation`) sigue igual; cada fila aqui deberia poder mapearse a un adapter en `infra/`.

### Tabla De Fuentes (una fila por origen)

| Origen (nombre) | Tipo (REST, GraphQL, BaaS, CMS, etc.) | Features o dominios que lo usan | Contrato (OpenAPI, schema, doc) | Adapter / modulo en `infra` | Estado |
| --- | --- | --- | --- | --- | --- |
| _Ejemplo API core_ | REST | pedidos, catalogo | OpenAPI en repo X | `infra/orders/services` | verificado |
| _Pendiente_ | ? | ? | ? | ? | por definir |

## Base URLs

Registrar solo URLs o variables no secretas.

| Entorno | Variable | Ejemplo |
| --- | --- | --- |
| Local | `VITE_API_BASE_URL` / equivalente | `http://localhost:3000` |
| Staging | No registrado | Definir si aplica |
| Produccion | No registrado | Definir si aplica |

## Contratos

Indicar donde vive la fuente de verdad del contrato.

| Contrato | Fuente | Estado |
| --- | --- | --- |
| OpenAPI/Swagger | No registrado | no verificado |
| GraphQL schema | No registrado | no verificado |
| Types generados | No registrado | no verificado |

## Reglas De Integracion

- Mantener clients/adapters fuera de componentes visuales.
- Centralizar manejo de errores repetible.
- No exponer secretos en frontend.
- Documentar mocks si la API real no esta disponible.
- Si cambia un contrato, actualizar tests y docs afectadas.

## Clientes

| Cliente/Servicio | Ubicacion | Responsabilidad |
| --- | --- | --- |
| API client | `src/core/http` o `src/infra` | Requests base, headers y errores |
| Auth/session | `src/infra/auth` o equivalente | Token/session handling |
| Feature service | `src/infra/{feature}/services` | Operaciones especificas de dominio |

## Mocks

| Mock | Ubicacion | Uso |
| --- | --- | --- |
| MSW/fixtures/manual | `src/infra/{feature}/mocks` o `tests/fixtures` | Desarrollo/tests |

## Checklist Para Agentes

- Leer este archivo antes de tocar integraciones.
- Si la tabla de fuentes esta vacia o en `pendiente`, **preguntar** al usuario o completarla en la misma tarea.
- Revisar variables en `docs/integrations/environment.md`.
- Agregar test de error/loading si el flujo es visible para usuario.
- Reportar contratos no verificados.
