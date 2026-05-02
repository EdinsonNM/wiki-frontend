# Design System Overview

Documenta como se aplica el sistema visual en este proyecto concreto.

## Baseline

La referencia metodologica vive en:

- `wiki/architecture/frontend-clean-architecture.md`
- `wiki/delivery/project-organization.md`
- `wiki/delivery/subagents-index.md`

## Ubicaciones Esperadas

| Responsabilidad | Ubicacion Base |
| --- | --- |
| Tokens | `src/design-system/tokens` |
| Primitives/base | `src/design-system/primitives` |
| Themes | `src/design-system/themes` |
| Componentes UI base | `src/presentation/components/ui` |
| Componentes shared | `src/presentation/components/shared` |
| Componentes de dominio | `src/presentation/components/domain/{feature}` |

Si el proyecto usa otra estructura equivalente, registrarla en `docs/architecture/overview.md`.

## Regla Para Agentes

Antes de crear un componente, buscar equivalentes existentes. No duplicar botones, inputs, tablas, modales, headers, empty states, badges ni tokens.

