---
name: frontend-discovery
description: Analiza un proyecto frontend sin editar codigo y produce un resumen de stack, estructura, scripts, riesgos y siguiente paso.
---

# Frontend Discovery

## Read First

- `AGENTS.md`
- `wiki/index.md`
- `wiki/delivery/project-discovery.md`
- `docs/project-overview.md`
- `docs/architecture/overview.md`
- `docs/architecture/boundaries.md`
- `docs/operations/scripts.md`
- `package.json`, si existe

## Workflow

1. Revisa estructura de carpetas.
2. Identifica stack, package manager y scripts.
3. Detecta arquitectura definida, convenciones existentes y equivalencias locales.
4. Lista riesgos y huecos de informacion.
5. Recomienda siguiente paso sin proponer reestructura automatica.

## Output

```md
## Discovery

### Stack
### Scripts
### Estructura
### Arquitectura Definida
### Equivalencias Locales
### Convenciones
### Riesgos
### Siguiente Paso
```

## Do Not

- No edites codigo.
- No instales dependencias.
- No leas features no relacionadas salvo que sea necesario para entender el repo.
- No propongas migracion de carpetas sin activar `architecture-alignment`.
