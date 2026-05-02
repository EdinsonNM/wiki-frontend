# Wiki Frontend Template

Wiki plantilla para planificar, organizar e implementar la parte frontend de cualquier proyecto, nuevo o existente, usando el patron de `llm-wiki.md`.

La wiki no prescribe un dominio especifico. Sirve como base reutilizable para que un agente LLM pueda:

- Entender el contexto de un proyecto frontend.
- Proponer una estrategia tecnica.
- Definir arquitectura y organizacion.
- Crear o adaptar `AGENTS.md`.
- Diseñar agentes, skills y comandos de trabajo.
- Trabajar bajo Spec Driven Development con Spec Kit.
- Mantener pruebas, coverage y quality gates.
- Evolucionar la documentacion como artefacto persistente.

## Indice Principal

- [Index](index.md)
- [Mapa](map.md)
- [Schema](schema.md)
- [Fuentes](sources.md)
- [Log](log.md)

## Arquitectura Y Estrategia

- [Estrategia Frontend](architecture/frontend-strategy.md)
- [Clean Architecture Frontend](architecture/frontend-clean-architecture.md)
- [Estrategia De Librerias](architecture/library-strategy.md)
- [Integracion Frontend](architecture/frontend-integration.md)

## Delivery Y Operacion

- [Discovery Del Proyecto](delivery/project-discovery.md)
- [Organizacion Del Proyecto Frontend](delivery/project-organization.md)
- [Spec Driven Development Con Spec Kit](delivery/spec-driven-development.md)
- [Plan De Solucion De Features](delivery/feature-solution-plan.md)
- [Agentes, Skills Y Comandos](delivery/agents-skills-commands.md)
- [Plantilla AGENTS.md](delivery/agents-md-template.md)
- [Runbook Frontend Generico](delivery/frontend-runbook.md)
- [Pruebas Y Coverage Frontend](delivery/testing-and-coverage.md)

## Como Usarla

1. Leer [Index](index.md).
2. Ejecutar [Discovery Del Proyecto](delivery/project-discovery.md).
3. Elegir o ajustar [Estrategia Frontend](architecture/frontend-strategy.md).
4. Definir estructura con [Clean Architecture Frontend](architecture/frontend-clean-architecture.md).
5. Crear `AGENTS.md` desde [Plantilla AGENTS.md](delivery/agents-md-template.md).
6. Preparar agentes, skills y comandos con [Agentes, Skills Y Comandos](delivery/agents-skills-commands.md).
7. Elegir modo de trabajo con [Plan De Solucion De Features](delivery/feature-solution-plan.md).
8. Trabajar features grandes con [Spec Driven Development Con Spec Kit](delivery/spec-driven-development.md).
9. Cerrar cada ciclo con [Pruebas Y Coverage Frontend](delivery/testing-and-coverage.md).

## Regla LLM Wiki

Las fuentes (`llm-wiki.md` y `wiki-ref/**`) se tratan como material crudo inmutable. La sintesis mantenida por el agente vive en esta carpeta y debe actualizar `index.md`, `sources.md` y `log.md` cuando cambie.
