# Clean Architecture Frontend

## Objetivo

Hub de arquitectura frontend limpia para lectura gradual.

No leas toda la arquitectura por defecto. Usa este archivo para decidir que subdocumento abrir segun la tarea.

## Regla Principal

La arquitectura debe servir al proyecto, no reemplazarlo. En proyectos nuevos, usar esta arquitectura como baseline. En proyectos existentes, mapear equivalencias y alinear por incrementos.

## Ruta Por Necesidad

| Necesidad | Leer |
| --- | --- |
| Ver estructura base | [Capas Y Estructura](frontend-clean-architecture/layers-and-structure.md) |
| Decidir dependencias entre capas | [Reglas De Dependencia](frontend-clean-architecture/dependency-rules.md) |
| Ubicar un cambio | [Mapa De Responsabilidades](frontend-clean-architecture/responsibility-map.md) |
| Elegir escala del proyecto | [Escalas De Aplicacion](frontend-clean-architecture/application-scales.md) |
| DTOs, schemas y mappers | [Datos, DTOs Y Schemas](frontend-clean-architecture/data-dtos-schemas.md) |
| Use cases y logica testeable | [Use Cases](frontend-clean-architecture/use-cases.md) |
| Hooks y puente hacia React | [Hooks](frontend-clean-architecture/hooks.md) |
| UI, componentes y design system | [Presentation Y Design System](frontend-clean-architecture/presentation-design-system.md) |
| Decidir si simplificar | [Simplificacion](frontend-clean-architecture/simplification.md) |

## Lectura Minima Para Agentes

- Para implementar una feature: leer `responsibility-map.md` y solo el subdocumento del area afectada.
- Para tocar arquitectura: leer `layers-and-structure.md`, `dependency-rules.md` y `wiki/delivery/architecture-alignment.md`.
- Para UI reusable: leer `presentation-design-system.md` y `docs/design-system/*`.
- Para integraciones: leer `data-dtos-schemas.md`, `hooks.md` y `wiki/architecture/frontend-integration.md`.

## Prohibicion

No mover carpetas ni introducir capas nuevas solo porque el arquetipo las menciona. Usar `wiki/delivery/architecture-alignment.md` cuando el proyecto existente requiere equivalencias o migracion gradual.

