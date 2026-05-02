# Boundaries

## Reglas Locales

Boundaries base definidos para este starter. Si un proyecto existente ya tiene nombres equivalentes, respetar la equivalencia y documentar la desviacion en `docs/architecture/overview.md`.

| Responsabilidad | Ubicacion | Regla |
| --- | --- | --- |
| Paginas/rutas | `src/presentation/pages` o routing local | No mezclar llamadas API directas si existen services/hooks |
| Layouts | `src/presentation/layouts` | Componer estructura visual, no reglas de negocio |
| Hooks de presentacion | `src/presentation/hooks` | Estado visual y helpers de UI |
| Componentes UI base | `src/presentation/components/ui` | Reutilizar antes de crear nuevos |
| Componentes compartidos | `src/presentation/components/shared` | Cross-domain, sin dependencia de feature concreta |
| Componentes de dominio | `src/presentation/components/domain/{feature}` | Mantener responsabilidad de negocio visible |
| Design system | `src/design-system` | Tokens, primitives y temas |
| Dominio | `src/domains/{feature}` | Modelos, schemas, use cases y contratos |
| Integraciones/API | `src/infra/{feature}` | Aislar clients/adapters/mappers |
| Bootstrap | `src/main` | Providers, router y entrypoint |

## Prohibiciones

- No importar UI desde infra.
- No llamar APIs directamente desde componentes si hay una capa de integracion.
- No crear componentes duplicados sin buscar equivalentes.
- No agregar dependencias runtime sin justificar responsabilidad y alternativa.
- No mover carpetas masivamente sin plan, tests y criterio de salida.

## Regla Para Agentes

Si un cambio cruza mas de una responsabilidad de la tabla, activar plan de solucion antes de editar:

- `wiki/delivery/feature-solution-plan.md`
- `.agents/skills/solution-planning/SKILL.md`
