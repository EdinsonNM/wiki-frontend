---
name: frontend-architecture
description: Revisa o aplica la arquitectura frontend definida, respetando decisiones existentes y evitando reestructuras no aprobadas.
---

# Frontend Architecture

## Read First

- `AGENTS.md`
- `wiki/index.md`
- `wiki/delivery/architecture-alignment.md`
- `wiki/delivery/project-organization.md`
- `wiki/architecture/frontend-strategy.md`
- `wiki/architecture/frontend-clean-architecture.md`
- `wiki/architecture/library-strategy.md`, si hay dependencias
- `docs/architecture/overview.md`
- `docs/architecture/boundaries.md`
- `docs/architecture/decisions.md`

## Workflow

1. Detecta la arquitectura definida del proyecto y las decisiones ya documentadas.
2. Mapea equivalencias entre la estructura local y la arquitectura base.
3. Identifica si el cambio requiere mantener, alinear localmente o migrar gradualmente.
4. Propone el cambio minimo que respete el scope.
5. Actualiza `docs/architecture/decisions.md` solo si se aprueba una decision nueva.

## Do Not

- No redisenes todo el repo por defecto.
- No introduzcas librerias sin justificar responsabilidad.
- No muevas carpetas durante una feature salvo que el plan lo autorice.
- No reemplaces convenciones locales por nombres del starter si ya existe una equivalencia clara.

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
