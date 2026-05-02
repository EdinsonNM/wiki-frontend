# API Integration

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
- Revisar variables en `docs/integrations/environment.md`.
- Agregar test de error/loading si el flujo es visible para usuario.
- Reportar contratos no verificados.
