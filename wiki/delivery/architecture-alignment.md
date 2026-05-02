# Architecture Alignment

## Objetivo

Reducir la brecha entre el codigo real y lo definido en la **wiki** (`wiki/architecture/frontend-clean-architecture.md`, estrategia, integracion y la tabla de librerias en `wiki/architecture/library-strategy.md`), sin reescrituras masivas en una sola tarea.

La wiki es el norte de alineacion salvo excepcion explicita del usuario documentada.

## Principio

```text
Primero documentar lo real y la brecha vs wiki.
Luego detectar riesgos.
Despues proponer el cambio minimo que acerca al objetivo.
```

## Cuando Usar

- La tarea toca varias capas o carpetas.
- Hay componentes duplicados o boundaries confusos.
- Una feature necesita una ubicacion clara.
- El proyecto existente no coincide con la arquitectura recomendada.
- Se quiere migrar gradualmente hacia una estructura mas mantenible.

## Lectura Minima

- `AGENTS.md`
- `wiki/architecture/library-strategy.md`
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

Usar cuando la estructura local ya equivale a la wiki para esa zona y el cambio no requiere nuevas capas. No usar "mantener" como excusa para ignorar la tabla de librerias del wiki sin excepcion del usuario.

### Alinear Localmente

Usar cuando una feature necesita ordenar su propia zona sin afectar todo el repo.

### Migrar Gradualmente

Usar cuando hay deuda real. Migrar por feature, modulo o carpeta, nunca todo a la vez sin plan.

### Crear Nueva Convencion

Solo si no existe una convencion local o la existente bloquea la entrega. Documentar en `docs/architecture/decisions.md`.

## Prohibiciones

- No mover todo `src/` para ajustarlo al arquetipo en un solo PR sin plan.
- No renombrar carpetas compartidas sin revisar imports y tests.
- No ignorar la wiki ni la tabla de librerias de arquitectura para preservar atajos legacy sin excepcion documentada.
- No mezclar refactor arquitectonico con feature sin criterio de salida.
- No convertir una mejora pequena en migracion global.
