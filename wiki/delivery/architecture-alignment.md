# Architecture Alignment

## Objetivo

Alinear un proyecto existente sin borrar su historia ni imponer una plantilla generica.

La arquitectura objetivo sirve como referencia, no como orden de reescritura.

## Principio

```text
Primero documentar lo real.
Luego detectar riesgos.
Despues proponer el cambio minimo.
```

## Cuando Usar

- La tarea toca varias capas o carpetas.
- Hay componentes duplicados o boundaries confusos.
- Una feature necesita una ubicacion clara.
- El proyecto existente no coincide con la arquitectura recomendada.
- Se quiere migrar gradualmente hacia una estructura mas mantenible.

## Lectura Minima

- `AGENTS.md`
- `docs/architecture/overview.md`
- `docs/architecture/boundaries.md`
- `docs/architecture/decisions.md`
- archivos del area afectada
- configs de aliases/imports: `tsconfig*`, `vite*`, `next*`, `webpack*`, etc.

## Checklist De Discovery Arquitectonico

- Estructura real de carpetas.
- Aliases de import.
- Donde viven paginas/rutas.
- Donde viven componentes base y compartidos.
- Donde viven llamadas API o clients.
- Donde viven hooks.
- Donde viven schemas/validaciones.
- Donde viven tests.
- Patrones repetidos en 2 o mas features.
- Excepciones o deuda visible.

## Salida Esperada

```md
## Architecture Alignment

### Arquitectura Actual
### Convenciones Locales
### Riesgos Reales
### Objetivo Incremental
### Cambios Permitidos Ahora
### Cambios Fuera De Alcance
### Validacion
```

## Estrategias Permitidas

### Mantener

Usar cuando la arquitectura actual funciona y el cambio no requiere nuevas capas.

### Alinear Localmente

Usar cuando una feature necesita ordenar su propia zona sin afectar todo el repo.

### Migrar Gradualmente

Usar cuando hay deuda real. Migrar por feature, modulo o carpeta, nunca todo a la vez sin plan.

### Crear Nueva Convencion

Solo si no existe una convencion local o la existente bloquea la entrega. Documentar en `docs/architecture/decisions.md`.

## Prohibiciones

- No mover todo `src/` para ajustarlo al arquetipo.
- No renombrar carpetas compartidas sin revisar imports y tests.
- No crear `core/domains/infra/presentation` si el proyecto usa otra estructura valida y suficiente.
- No mezclar refactor arquitectonico con feature sin criterio de salida.
- No convertir una mejora pequena en migracion global.
