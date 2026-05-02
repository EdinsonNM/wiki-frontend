# Reglas De Dependencia

## Flujo Deseado

```text
presentation -> infra/hooks -> domains/usecases -> domains/repositories
infra/services -> domains/repositories
core -> sin dependencia de presentation
main -> compone providers/router/bootstrap
```

## Reglas

- `domains` no debe depender de React, fetch, router, componentes UI ni librerias de server state.
- `core` no debe depender de `presentation`.
- `main` compone providers, router y bootstrap; no debe concentrar logica de negocio.
- `infra` implementa detalles externos y adapta datos hacia el dominio.
- `presentation` consume APIs publicas de hooks, services o use cases; no mezcla mapping de API en JSX.

## En Proyecto Existente

Si la estructura actual usa nombres distintos, no renombrar automaticamente. Documentar equivalencias en `docs/architecture/overview.md`.

