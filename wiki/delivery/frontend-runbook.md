# Runbook Frontend Generico

## Principio

Avanzar por ciclos pequenos:

```text
discovery -> choose mode -> strategy/spec -> plan -> library checkpoint -> tasks -> implement -> test -> commit -> document
```

Antes de empezar una feature o bug, elegir modo:

- Spec Kit completo.
- Mini Spec.
- Task directa.

Ver [Plan De Solucion De Features](feature-solution-plan.md).

## Ciclo 0: Discovery

Objetivo:

- Entender producto y repo.
- Identificar stack y scripts.
- Detectar riesgos.
- Decidir si hace falta Spec Kit.

Salida:

- Resumen de discovery.
- Riesgos.
- Siguiente paso.

## Ciclo 1: Estrategia

Objetivo:

- Definir stack y arquitectura.
- Documentar tradeoffs.
- Definir quality gates.
- En proyectos nuevos, revisar librerias necesarias antes de codificar.

Salida:

- Estrategia frontend.
- Decisiones de librerias.
- Estructura objetivo.
- Library checkpoint inicial.

## Ciclo 2: Setup Operativo

Objetivo:

- Crear o actualizar `AGENTS.md`.
- Crear skills locales si aplica.
- Crear comandos/prompts operativos.
- Confirmar scripts de validacion.

Salida:

- `AGENTS.md` usable.
- Skills documentadas.
- Comandos conocidos.

## Ciclo 3: Spec

Objetivo:

- Convertir una feature en spec.
- Decidir si requiere Spec Kit completo, Mini Spec o task directa.
- Separar comportamiento de implementacion.
- Acordar criterios de aceptacion.

Salida:

- `spec.md`.

## Ciclo 4: Plan Y Tasks

Objetivo:

- Traducir spec a plan tecnico.
- Confirmar librerias necesarias antes de implementar.
- Dividir trabajo en tasks.
- Marcar tareas paralelizables.
- Agrupar tasks por user story o unidad de commit.

Salida:

- `plan.md`.
- `tasks.md`.
- Puntos de commit sugeridos.

## Ciclo 5: Implementacion

Objetivo:

- Implementar tasks en orden.
- Mantener scope.
- Agregar tests proporcionales.
- Cerrar user stories o grupos de tasks en commits pequenos.

Salida:

- Cambios productivos.
- Tests.
- Validaciones locales.
- Commit por user story o grupo coherente cuando corresponda.

## Ciclo 6: Verificacion

Ejecutar segun proyecto:

```bash
pnpm lint
pnpm test
pnpm test:coverage
pnpm build
pnpm e2e
```

Salida:

- Resultado de comandos.
- Coverage.
- Riesgos residuales.

## Ciclo 7: Documentacion

Actualizar:

- README.
- Wiki.
- AGENTS.md.
- Specs.
- Changelog si aplica.

Regla: documentar solo comandos y comportamientos reales o marcar lo no verificado como pendiente.

## Politica De Commits

Evitar commits enormes que mezclen muchas decisiones.

Recomendado:

- Commit por user story terminada.
- Commit por grupo pequeno de tasks relacionadas.
- Commit separado para docs si no forma parte natural de la feature.
- Commit separado para chore/setup de librerias cuando ocurre antes de la feature.

Antes de commitear:

- Revisar diff.
- Confirmar que no se incluyen cambios ajenos.
- Ejecutar validacion relevante.
- Usar mensaje claro con scope.
