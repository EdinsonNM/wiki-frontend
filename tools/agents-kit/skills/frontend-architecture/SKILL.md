---
name: frontend-architecture
description: Revisa o aplica la arquitectura objetivo de la wiki (capas y librerias acordadas), evitando reestructuras no aprobadas.
---

# Frontend Architecture

## Read First

- `AGENTS.md`
- `wiki/index.md`
- `wiki/delivery/architecture-alignment.md`
- `wiki/delivery/project-organization.md`
- `wiki/architecture/frontend-strategy.md`
- `wiki/architecture/frontend-clean-architecture.md`
- `wiki/architecture/library-strategy.md`
- `docs/architecture/overview.md`
- `docs/architecture/boundaries.md`
- `docs/architecture/decisions.md`
- `docs/architecture/library-decisions.md`, si existe

## Workflow

1. Detecta brecha entre codigo real y objetivo en `wiki/architecture/frontend-clean-architecture.md` mas decisiones en `docs/architecture/*`.
2. Cruza necesidades de la tarea con las filas obligatorias de la tabla en `wiki/architecture/library-strategy.md`.
3. Mapea equivalencias entre la estructura local y la arquitectura base.
4. Identifica si el cambio requiere alinear localmente o migrar gradualmente hacia la wiki.
5. Propone el cambio minimo que respete el scope.
6. Actualiza `docs/architecture/decisions.md` solo si el usuario aprueba una excepcion nueva respecto a la wiki o a la tabla de librerias.

## Do Not

- No redisenes todo el repo por defecto.
- No introduzcas librerias que compitan con una fila obligatoria de la tabla del wiki sin decision explicita del usuario.
- No muevas carpetas durante una feature salvo que el plan lo autorice.
- No uses el codigo legacy como excusa para ignorar la wiki sin excepcion documentada.

## Output

```md
## Architecture Check

### Arquitectura Definida
### Equivalencias Locales
### Riesgo Detectado
### Cambio Minimo Propuesto
### Archivos Permitidos
### Fuera De Alcance
```
