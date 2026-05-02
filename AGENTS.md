# AGENTS.md

## Objetivo

Guiar agentes LLM para trabajar en este proyecto con contexto gradual, ownership claro y validacion real.

## Regla Principal: La Arquitectura Definida Manda

Este starter trae una arquitectura frontend base ya definida en `wiki/architecture/frontend-clean-architecture.md`.

En proyectos nuevos, usa esa arquitectura como baseline.

En proyectos existentes, respeta la arquitectura ya definida o documentada por el proyecto y alinea cambios de forma incremental. No reemplaces decisiones ya analizadas por una plantilla generica.

Antes de crear carpetas, mover archivos, cambiar boundaries o introducir patrones nuevos:

1. Lee la estructura actual.
2. Identifica convenciones, aliases, imports, tests, scripts y decisiones ya documentadas.
3. Revisa `docs/architecture/overview.md` y `docs/architecture/boundaries.md`.
4. Si esos docs estan incompletos, actualizalos con lo descubierto antes de proponer cambios.
5. Propone migracion incremental solo si hay un riesgo, bloqueo o deuda clara.

Prohibido por defecto:

- Reescribir la estructura para que coincida con este starter.
- Mover carpetas masivamente durante una feature.
- Crear capas nuevas si la estructura actual resuelve bien el problema.
- Duplicar componentes, hooks, services o helpers existentes.
- Ignorar aliases, convenciones de import o patrones locales.

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
- `wiki/delivery/project-organization.md`
- `wiki/delivery/architecture-alignment.md`
- `wiki/architecture/frontend-strategy.md`
- `wiki/architecture/frontend-clean-architecture.md`
- `wiki/architecture/library-strategy.md`, si requiere dependencias

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
