# Simplificacion

## Objetivo

Reducir superficie, duplicacion y ceremonia **sin saltarse capas ni boundaries**. La simplificacion no es una licencia para usar `app/features/shared` u otra jerarquia que contradiga [Capas Y Estructura](layers-and-structure.md).

## Cuando Tiene Sentido

- Flujos acotados donde una feature aun no necesita use cases (solo si no hay reglas testeables que aislar).
- Pocas integraciones externas: igualmente viven en `infra/{feature}/` segun responsabilidad.
- Evitar carpetas vacias permanentes; crear la carpeta cuando exista el primer archivo que la justifique.

## Formas Permitidas

- Mantener services, adapters, hooks y mocks en `infra/{feature}/` segun [Mapa De Responsabilidades](responsibility-map.md).
- Anadir use cases en `domains/{feature}/usecases/` cuando aparezcan reglas de negocio o composicion que merezca tests unitarios.
- Reutilizar `presentation/components/shared`, `presentation/components/ui` y `design-system/` antes de crear piezas nuevas.

## Lo Que No Es Simplificacion

- Sustituir u omitir `domains`, `infra`, `presentation` en favor de carpetas transversales tipo `features/` sin dominios diferenciados.
- Tomar el codigo legacy como fuente de verdad por encima de la wiki sin excepcion en `docs/architecture/decisions.md`.

## Regla Final

Si la complejidad no justifica mas archivos, hay menos archivos **dentro** de cada capa; no menos capas definidas en el arquetipo.
