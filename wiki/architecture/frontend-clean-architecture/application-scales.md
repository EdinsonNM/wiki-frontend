# Escalas De Aplicacion

## Proyecto Pequeno

```text
src/
  app/
  features/
  shared/
```

Usar esta forma si no hay complejidad de dominio ni multiples fuentes de datos.

## Proyecto Mediano

```text
src/
  core/
  features/
  shared/
  main/
```

Cada feature contiene `components`, `hooks`, `services`, `schemas`.

## Proyecto Grande O De Larga Vida

Usar el arquetipo completo con `domains`, `infra`, `presentation` y use cases.

## Decision

Elegir la escala por complejidad real, no por preferencia estetica.

