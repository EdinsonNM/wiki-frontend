# Architecture Overview

## Estado Actual

Este proyecto usa como baseline la arquitectura definida en `wiki/architecture/frontend-clean-architecture.md`.

Este documento registra como se aplica esa arquitectura en el proyecto concreto, incluyendo desviaciones aceptadas y decisiones locales.

```text
src/
  ...
```

## Lectura Rapida Para Agentes

Antes de tocar arquitectura, leer:

- `AGENTS.md`
- `wiki/architecture/frontend-clean-architecture.md`
- este archivo
- `docs/architecture/boundaries.md`

## Arquitectura Base

La direccion acordada para proyectos frontend de esta familia es:

| Capa/Area | Responsabilidad | Carpeta Esperada |
| --- | --- | --- |
| Core | Configuracion, errores, HTTP base, tipos transversales | `src/core` |
| Domains | Modelos, schemas, use cases, contratos por feature | `src/domains/{feature}` |
| Infra | Services, adapters, hooks, mocks y mappers | `src/infra/{feature}` |
| Presentation | Paginas, layouts, hooks de presentacion y componentes | `src/presentation` |
| Design system | Tokens, primitives y temas | `src/design-system` |
| Main/bootstrap | Providers, router y entrypoint | `src/main` |

Para proyectos pequenos, la variante aceptada es:

```text
src/
  app/
  features/
  shared/
```

## Desviaciones Locales Aceptadas

Registrar aqui solo diferencias intencionales contra la arquitectura base.

| Decision Local | Motivo | Fecha |
| --- | --- | --- |
| Sin desviaciones registradas | La arquitectura base aplica | - |

## Reglas De Dependencia

- UI puede depender de hooks/services publicos, no de detalles internos de infra.
- Infra no debe importar componentes de UI.
- Componentes compartidos no deben depender de una feature concreta.
- Las reglas de negocio compartidas deben vivir fuera de componentes visuales.
- Las excepciones deben documentarse en `docs/architecture/decisions.md`.

## Riesgos

| Riesgo | Area | Mitigacion |
| --- | --- | --- |
| Acoplamiento UI/API | presentation/infra | Usar hooks/services publicos |
| Componentes duplicados | presentation/design-system | Buscar componente existente antes de crear |
| Falta de tests | quality | Aplicar matriz de riesgo en `docs/quality/testing-strategy.md` |

## Decision Log

Las decisiones aceptadas se registran en `docs/architecture/decisions.md`.
