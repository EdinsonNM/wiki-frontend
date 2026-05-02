# AGENTS.md

## Objetivo

Guiar agentes LLM para trabajar en este proyecto con contexto gradual, ownership claro y validacion real.

## Regla Principal: La Wiki Es El Objetivo De Alineacion

La wiki del repo (`wiki/`, empezando por `wiki/index.md`) define **como debe evolucionar** el proyecto: arquitectura, integracion y estrategia de librerias. Los agentes **encaminan** codigo y docs hacia esa wiki en **cada** cambio (proyecto nuevo o existente).

**Unica excepcion:** el usuario declara por escrito una desviacion puntual (por ejemplo en el chat o en `docs/architecture/decisions.md`). Sin esa excepcion explicita, no mantener atajos legacy que contradigan la wiki.

Antes de crear carpetas, mover archivos, cambiar boundaries o introducir patrones nuevos:

1. Lee la estructura actual y mapeala frente a `wiki/architecture/frontend-clean-architecture.md` y `wiki/delivery/architecture-alignment.md`.
2. Identifica convenciones, aliases, imports, tests y scripts; documenta brechas en `docs/architecture/overview.md` y `docs/architecture/boundaries.md`.
3. Propone el **cambio minimo** que acerca el codigo a la wiki sin mezclar scope de feature con migracion masiva.

Prohibido por defecto:

- Tratar el codigo legacy como fuente de verdad por encima de la wiki sin excepcion documentada del usuario.
- Introducir librerias o patrones que sustituyan lo definido en `wiki/architecture/library-strategy.md` (ver abajo).
- Mover carpetas masivamente durante una feature sin plan y Architecture Alignment.
- Duplicar componentes, hooks, services o helpers existentes.
- Ignorar aliases y convenciones de import del proyecto al aplicar la wiki.

## Librerías parte de la arquitectura

En `wiki/architecture/library-strategy.md` debe existir la **tabla resumen de librerías de arquitectura** (por rol: frontend, backend, etc.). Esa tabla **no es sugerencia**: es el mismo tipo de contrato que las capas en `frontend-clean-architecture.md`.

1. Antes de implementar cualquier cambio que toque datos remotos, formularios, validacion, UI base, estado o DI: abre ese archivo, localiza la fila de cada necesidad y cumple lo que marca obligatorio para el alcance que tocas.
2. Adopcion obligatoria en el alcance (p. ej. Frontend **Sí**): **usa esa libreria** para ese rol. No sustituyas por otra sin decision explicita del usuario en `docs/architecture/decisions.md`.
3. Filas opcionales: sigue las notas de la tabla (cuando aplican y cuando no). No añadas una libreria competidora sin aprobacion explicita del usuario.
4. Si existe `docs/architecture/library-decisions.md` como espejo, ante conflicto manda la tabla en `wiki/architecture/library-strategy.md` hasta que el usuario unifique.

Prohibido por defecto:

- Codificar sin respetar la tabla de librerias de arquitectura del wiki.
- Anadir dependencias que solapen responsabilidades ya cubiertas por una fila obligatoria.

## Regla De Contexto

No leas toda la documentacion por defecto.

Ruta minima:

1. Lee este archivo.
2. Lee `wiki/index.md`.
3. Clasifica la tarea.
4. Sigue la ruta de lectura correspondiente.
5. Abre solo documentos relacionados con la tarea.

## Clasificacion Inicial

- Proyecto nuevo o discovery: usa `wiki/delivery/project-discovery.md`.
- Feature mediana/grande: usa `wiki/delivery/feature-solution-plan.md` y `specs/<feature>/`.
- Bug pequeno: usa Mini Spec.
- Refactor o arquitectura: lee `wiki/delivery/architecture-alignment.md`, docs/architecture y archivos afectados.
- Testing/QA: lee `docs/quality/testing-strategy.md` y `package.json`.
- Docs: lee solo documentos afectados y comandos reales.
- Setup de agentes: usa `.agents/skills/agent-setup/SKILL.md`.

## Rutas De Lectura

### Discovery

- `README.md`
- `docs/project-overview.md`
- `docs/operations/scripts.md`
- `package.json`, si existe

### Arquitectura

- `docs/architecture/overview.md`
- `docs/architecture/boundaries.md`
- `docs/architecture/decisions.md`
- `docs/architecture/library-decisions.md`, si existe (espejo de la tabla del wiki)
- `wiki/delivery/project-organization.md`
- `wiki/delivery/architecture-alignment.md`
- `wiki/architecture/frontend-strategy.md`
- `wiki/architecture/frontend-clean-architecture.md`
- `wiki/architecture/library-strategy.md` (obligatorio antes de codificar si la tarea toca librerias de arquitectura acordadas)

### Feature

- `specs/<feature>/spec.md`, si existe
- `specs/<feature>/tasks.md`, si existe
- `docs/features/<feature>/overview.md`, si existe
- archivos directamente relacionados

### Integracion

- `docs/integrations/api.md`
- `docs/integrations/environment.md`
- contratos o clients relacionados

### Testing

- `wiki/delivery/testing-and-coverage.md`
- `docs/quality/testing-strategy.md`
- `package.json`
- tests relacionados

## Trabajo Con Agentes

- Define ownership antes de delegar.
- No asignes dos agentes al mismo archivo al mismo tiempo.
- Si dos agentes necesitan la misma zona, secuencialos.
- Cada agente debe reportar archivos tocados y comandos ejecutados.
- El agente principal integra resultados y valida.
- No inventes comandos ni resultados.
- No reviertas cambios de usuario sin permiso.
- No cambies arquitectura dentro de una tarea funcional salvo que el plan lo apruebe.

## Modos De Trabajo

Usa `Spec Kit completo` cuando la feature tenga varios flujos, riesgo, integraciones, arquitectura o trabajo multiagente.

Usa `Mini Spec` para bugs o mejoras pequenas:

```md
## Mini Spec

### Problema
### Comportamiento Esperado
### Criterio De Salida
### Archivos Probables
### Validacion
```

Usa `Task directa` solo para cambios triviales con criterio de salida claro.

## Validacion

Ejecuta comandos relevantes segun el proyecto. Si no existen o fallan por configuracion externa, reporta:

- comando exacto
- salida resumida
- causa probable
- riesgo pendiente
