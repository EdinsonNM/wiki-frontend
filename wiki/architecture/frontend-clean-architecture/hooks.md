# Hooks

## Objetivo

Los hooks son puente hacia React.

## Responsabilidades

- Encapsulan TanStack Query/SWR/loaders.
- Invocan use cases o services compuestos.
- Exponen estados `data`, `error`, `isLoading`, acciones y helpers.
- No deben esconder reglas de dominio complejas si esas reglas pueden vivir en use cases.

## Ubicacion Base

```text
src/infra/{feature}/hooks      # hooks de data/integracion
src/presentation/hooks         # hooks UI/presentacion
```

## Regla

Si un hook empieza a mezclar mapping, validacion, permisos y UI, separar responsabilidades.

