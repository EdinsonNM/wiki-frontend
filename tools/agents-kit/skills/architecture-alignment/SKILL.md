---
name: architecture-alignment
description: Alinea el proyecto hacia la wiki (clean architecture y tabla de librerias) sin reestructuras masivas no planificadas.
---

# Architecture Alignment

## Read First

- `AGENTS.md`
- `wiki/delivery/architecture-alignment.md`
- `wiki/architecture/frontend-clean-architecture.md`
- `wiki/architecture/library-strategy.md`
- `docs/architecture/overview.md`
- `docs/architecture/boundaries.md`
- `docs/architecture/decisions.md`

## Workflow

1. Lee la arquitectura definida y decisiones existentes.
2. Inspecciona solo el area afectada.
3. Mapea carpetas reales contra responsabilidades de la arquitectura base.
4. Decide: mantener, alinear localmente, migrar gradualmente o documentar excepcion.
5. Propone pasos pequenos con validacion.

## Do Not

- No reestructures todo el proyecto.
- No mezcles feature y migracion global.
- No cambies aliases/import paths sin revisar impacto.
- No crees capas nuevas si no reducen riesgo o complejidad.

