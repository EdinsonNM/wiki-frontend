# Plantilla AGENTS.md

## Objetivo

`AGENTS.md` es el contrato local para agentes que trabajen en el proyecto. Debe explicar como leer, editar, probar y entregar cambios sin romper convenciones.

## Plantilla

```md
# AGENTS.md

## Proyecto

Describe brevemente el producto, usuarios y tipo de frontend.

## Stack

- Framework:
- Lenguaje:
- Package manager:
- Styling:
- UI system:
- Testing:
- E2E:
- Deploy:

## Estructura

```text
src/
  core/
  domains/
  infra/
  presentation/
    components/
      ui/
      shared/
      domain/
    pages/
    layouts/
    hooks/
  design-system/
    tokens/
    primitives/
    themes/
  main/
```

Explica aqui la estructura especifica del proyecto si difiere de la arquitectura base.

## Reglas De Arquitectura

- Respetar convenciones existentes.
- No llamar APIs directamente desde componentes si existen hooks/services.
- No introducir librerias sin justificar responsabilidad.
- En proyectos nuevos, revisar librerias necesarias antes de codificar features.
- Mantener validaciones en schemas compartidos cuando aplique.
- Mantener UI accesible y responsive.
- Antes de crear un componente, buscar si ya existe uno equivalente en `presentation/components` o `design-system`.
- Reutilizar componentes existentes cuando su responsabilidad coincida; no duplicar botones, inputs, tablas, modales, headers, empty states o badges.
- Ubicar primitives visuales en `presentation/components/ui`, componentes cross-domain en `presentation/components/shared` y componentes de negocio en `presentation/components/domain/{feature}`.
- Ubicar tokens, temas y primitivas base/headless en `design-system`.

## Flujo De Trabajo

1. Leer `wiki/index.md` o docs del proyecto.
2. Revisar `git status`.
3. Hacer discovery antes de cambios grandes.
4. Antes de implementar, elegir modo: Spec Kit completo, Mini Spec o task directa.
5. Para features medianas/grandes, usar Spec Driven Development.
6. Confirmar librerias necesarias antes de codificar, especialmente en proyectos nuevos.
7. Implementar en pasos pequenos.
8. Agregar o actualizar tests.
9. Ejecutar validaciones relevantes.
10. Hacer commits pequenos por user story o grupo coherente de tasks cuando el usuario pida commits.
11. Documentar cambios si afectan comandos, arquitectura o comportamiento.

## Spec Driven Development

Usar `specs/<id-feature>/` para features relevantes:

- `spec.md`
- `plan.md`
- `tasks.md`

No implementar una feature grande sin spec o task clara.

Para bugs o features pequenas, usar Mini Spec:

```md
## Mini Spec

### Problema
### Comportamiento Esperado
### Criterio De Salida
### Validacion
```

No editar por intuicion sin problema, criterio de salida y validacion.

### Commits Con Spec Kit

- Preferir un commit por user story completada.
- Si una user story es grande, commitear por grupo coherente de tasks.
- Separar commits de setup/librerias, feature, tests y docs cuando mejore la revision.
- No crear un unico commit gigante al final de una feature grande.
- Cada commit debe dejar el repo en un estado verificable o documentar claramente si es WIP.

## Comandos

```bash
pnpm install
pnpm dev
pnpm lint
pnpm test
pnpm test:coverage
pnpm build
pnpm e2e
```

Ajustar esta lista a los scripts reales.

## Testing

- Unit tests para logica pura.
- Component tests para UI con estados.
- Integration tests para boundaries.
- E2E para flujos criticos.
- Mantener coverage minimo acordado.

## Agentes

- Explorer: solo lectura, responde preguntas concretas.
- Frontend worker: implementa cambios de UI/logica.
- QA worker: agrega/revisa tests.
- Docs worker: actualiza documentacion.

Cada worker debe reportar archivos cambiados y comandos ejecutados.

## Prohibido

- Revertir cambios de usuario sin permiso.
- Bajar coverage thresholds para pasar.
- Agregar dependencias sin justificar.
- Empezar a codificar un proyecto nuevo sin revisar librerias necesarias.
- Acumular una feature grande en un solo commit si se acordo trabajar por specs/user stories.
- Vibecodear: editar sin problema claro, criterio de salida, hipotesis y validacion.
- Reescribir arquitectura fuera del scope.
- Inventar resultados de comandos.
```

## Reglas Para Mantenerlo

- Actualizar cuando cambien scripts.
- Actualizar cuando cambie estructura.
- Actualizar cuando se agreguen skills o agentes.
- Mantenerlo corto, operativo y especifico del repo.
