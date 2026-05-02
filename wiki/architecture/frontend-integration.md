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
