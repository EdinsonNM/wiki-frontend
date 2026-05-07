# Integracion Frontend

## Objetivo

Definir como el frontend se conecta con sistemas externos sin asumir un dominio especifico.

## Tipos De Integracion

- REST API.
- GraphQL.
- RPC/tRPC.
- Backend-for-frontend.
- CMS/headless CMS.
- Auth provider.
- Pagos.
- Feature flags.
- Analytics.
- Storage local o remoto.
- WebSockets/SSE.

## Backend Propio Vs Proveedor (BaaS U Otro)

La wiki **no asume** un backend concreto (ni Supabase ni ningun otro producto).

- **API propia o de equipo**: HTTP/REST, GraphQL, gRPC-Web, tRPC, etc. Suele bastar `VITE_*_BASE_URL` + cliente generado o `fetch` encapsulado en `infra/`.
- **Backend-as-a-Service u otro SaaS** (Supabase, Firebase, Appwrite, Clerk solo como auth, etc.): el SDK del proveedor vive en **`infra/{feature}/`** (services/adapters); la presentation llama hooks/use cases, **no** importa el SDK en JSX salvo prototipo muy acotado documentado.

En ambos casos el contrato visible para dominio/UI es el mismo: **repositorios abstractos + adapters** que traducen respuestas externas a modelos/DTOs validados.

## Docs Como Referencia Obligatoria

`docs/integrations/api.md` y `docs/integrations/environment.md` son el **punto de referencia** del proyecto sobre que consume el frontend.

- **Proyecto existente:** tras discovery o cuando cambie una integracion, **actualizar esos docs** para que reflejen el codigo y los contratos reales. Si hay brecha, documentarla en `docs/architecture/overview.md` o en el flujo de `wiki/delivery/architecture-alignment.md` hasta alinear.
- **Proyecto nuevo o contexto incompleto:** si los docs no dicen que fuentes hay, **preguntar explicitamente** al responsable (REST propio, GraphQL, BaaS, CMS, auth aparte, pagos, tiempo real, etc.) antes de fijar clients o nombres de env.
- **Objetivo:** cualquier agente o desarrollador debe poder leer solo `docs/integrations/*` y saber que sistemas existen, sin releer todo el repo.

## Fuentes Mixtas

Un mismo producto puede combinar varias fuentes (por ejemplo API REST interna + proveedor de auth + CMS + cola/WebSocket). Eso **no cambia** el arquetipo de capas de la wiki:

- Cada fuente externa tiene su **adapter/client** en `infra/` (por feature o por bounded context coherente).
- El dominio expone **repositorios o puertos** que pueden estar respaldados por uno o varios adapters; la UI y los use cases **no** conocen si los datos vienen de dos HTTP distintos o de un BaaS.
- Documentar **todas** las fuentes en `docs/integrations/api.md` (tabla de fuentes registradas) y las variables en `environment.md`, para que el mapa mixto quede trazable.

Prohibido usar la diversidad de backends como excusa para llamadas directas desde componentes o para mezclar SDKs de terceros en presentation sin pasar por `infra/` y contratos.

## Boundary De Integracion

El codigo de UI no debe conocer detalles innecesarios del transporte.

```text
component -> hook -> use case/service -> adapter/client -> sistema externo
```

## Contratos

Para cada integracion documentar:

- Base URL o provider.
- Autenticacion.
- Endpoints/queries/actions consumidas.
- Payloads relevantes.
- Errores esperados.
- Retries/timeouts.
- Estrategia de mocks.
- Variables de entorno.

## Variables De Entorno

Usar nombres explicitos:

```text
VITE_API_BASE_URL=
VITE_AUTH_DOMAIN=
VITE_ANALYTICS_KEY=
```

Reglas:

- No hardcodear URLs productivas.
- No exponer secretos en variables `VITE_*`.
- Documentar `.env.example`.
- Validar envs criticas al arrancar.

## Mocks Y Fixtures

Usar mocks cuando:

- El backend no existe aun.
- Se necesita desarrollo offline.
- Los tests no deben depender de red.
- Hay contratos externos costosos o inestables.

Opciones:

- MSW para HTTP.
- Repositories fake para use cases.
- Fixtures JSON versionadas.
- Storybook con loaders/mocks.

## Errores

Todo boundary debe traducir errores externos a errores manejables:

- `Unauthorized`.
- `Forbidden`.
- `NotFound`.
- `ValidationError`.
- `RateLimited`.
- `NetworkError`.
- `UnknownError`.

La UI debe renderizar estados recuperables y no exponer mensajes tecnicos crudos al usuario final.
