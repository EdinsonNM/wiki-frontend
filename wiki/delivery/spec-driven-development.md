# Spec Driven Development Con Spec Kit

## Objetivo

Trabajar features frontend desde especificaciones verificables, no desde implementacion improvisada.

Flujo:

```text
idea -> spec -> plan -> library checkpoint -> tasks -> implement -> verify -> commit -> document
```

## Cuando Usarlo

Usar Spec Kit para:

- Features nuevas.
- Refactors grandes.
- Migraciones.
- Integraciones complejas.
- Cambios con impacto UX.
- Trabajo multiagente.

Para bugs pequenos, una issue o task corta puede bastar.

Para decidir entre Spec Kit completo, Mini Spec o task directa, ver [Plan De Solucion De Features](feature-solution-plan.md).

## Estructura Esperada

```text
specs/
  001-feature-name/
    spec.md
    plan.md
    tasks.md
    research.md
    data-model.md
    contracts/
```

## Spec

Debe describir comportamiento observable, no implementacion.

Incluye:

- Problema.
- Usuarios.
- User stories.
- Flujos.
- Estados.
- Reglas de negocio.
- Criterios de aceptacion.
- Fuera de alcance.
- Riesgos.

## Plan

Traduce la spec a estrategia tecnica.

Incluye:

- Arquitectura afectada.
- Componentes/rutas/hooks/use cases.
- Integraciones.
- Librerias necesarias o confirmacion de que el stack existente basta.
- Datos y contratos.
- Tests.
- Rollout.
- Riesgos tecnicos.

## Library Checkpoint

En proyectos nuevos, revisar librerias antes de codificar. El plan debe confirmar:

- Librerias requeridas por la feature.
- Librerias ya disponibles.
- Librerias que deben instalarse antes de implementar.
- Librerias descartadas y motivo.
- Impacto en bundle, testing, accesibilidad o mantenimiento.

En proyectos existentes, revisar el stack actual primero y evitar introducir dependencias si una convencion local ya resuelve el problema.

## Tasks

Lista accionable y verificable.

Buenas tasks:

- Tienen archivos o areas claras.
- Tienen criterio de salida.
- Pueden ejecutarse en orden.
- Separan implementacion, tests y docs.
- Indican si forman parte de una user story o grupo de commit.

## Commits Pequenos

Si se sigue Spec Kit, evitar un commit gigante al final.

Regla recomendada:

- Un commit por user story completada, validada y testeada.
- O un commit por grupo coherente de tasks cuando una user story sea grande.
- No commitear trabajo roto salvo que el equipo use commits WIP explicitamente.
- Cada commit debe dejar lint/test/build relevante en estado conocido.
- El mensaje debe explicar comportamiento o valor, no solo archivos tocados.

Ejemplos:

```text
feat(auth): agregar formulario de login
feat(search): conectar filtros con query params
test(profile): cubrir estados empty y error
docs(agents): documentar comandos frontend
```

## Prompt Base Para Spec

```text
Crea una spec para esta feature frontend usando Spec Driven Development.

Contexto:
- Proyecto:
- Usuarios:
- Problema:
- Flujo esperado:
- Restricciones:

Reglas:
- Describe comportamiento observable.
- No prescribas implementacion salvo restricciones ya decididas.
- Incluye estados loading, empty, error y success cuando aplique.
- Incluye criterios de aceptacion testeables.
```

## Prompt Base Para Plan

```text
Genera el plan tecnico frontend para la spec.

Lee:
- wiki/index.md
- wiki/architecture/frontend-strategy.md
- wiki/architecture/frontend-clean-architecture.md
- wiki/architecture/library-strategy.md
- specs/<feature>/spec.md

Incluye:
- estructura de carpetas afectada
- componentes/hooks/use cases
- integraciones
- checkpoint de librerias antes de codificar
- estrategia de tests
- riesgos
- pasos incrementales
- estrategia de commits por user story o grupo de tasks
```

## Prompt Base Para Tasks

```text
Convierte el plan en tasks frontend ejecutables.

Reglas:
- Cada task debe tener criterio de salida.
- Ordena por dependencias.
- Separa tests de implementacion cuando ayude.
- Marca tareas paralelizables.
- Agrupa tasks por user story y sugiere punto de commit.
- Incluye actualizacion de docs si cambia arquitectura o comandos.
```

## Quality Gate

Una feature no esta terminada si:

- No cumple criterios de aceptacion.
- No tiene tests proporcionales al riesgo.
- Rompe lint/build.
- No actualiza docs cuando cambia flujo, comandos o arquitectura.
- No tiene commits pequenos o al menos puntos de commit claros para user stories/grupos de tasks.
