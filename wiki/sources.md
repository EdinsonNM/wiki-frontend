# Fuentes

Registro de fuentes usadas para construir la wiki frontend template.

## Patron LLM Wiki

Fuente:

- [../llm-wiki.md](../llm-wiki.md)

Uso:

- Define fuentes crudas inmutables, wiki generada persistente, schema, operaciones ingest/query/lint, `index.md` y `log.md`.

Paginas derivadas:

- [Schema](schema.md)
- [Index](index.md)
- [Log](log.md)
- [Mapa](map.md)

## Wiki De Referencia

Fuente:

- [../wiki-ref](../wiki-ref)

Uso:

- Se uso como fuente de patrones de arquitectura frontend, librerias, calidad, organizacion, agentes, skills, comandos y Spec Kit.
- El contenido especifico de dominio fue descartado para que esta wiki funcione como plantilla generica.

Paginas fuente relevantes:

- [Frontend Strategy](../wiki-ref/architecture/frontend-strategy.md)
- [Frontend Clean Architecture](../wiki-ref/architecture/frontend-clean-architecture.md)
- [Library Strategy](../wiki-ref/architecture/library-strategy.md)
- [Testing And Quality](../wiki-ref/delivery/testing-and-quality.md)
- [Project Organization](../wiki-ref/delivery/project-organization.md)
- [Implementation Runbook](../wiki-ref/delivery/implementation-runbook.md)
- [AI Development Strategy](../wiki-ref/ai/ai-development-strategy.md)
- [Skills And Agents Setup](../wiki-ref/ai/skills-agents-setup.md)
- [Custom Skills And Subagents](../wiki-ref/ai/custom-skills-and-subagents.md)
- [Skills And Commands](../wiki-ref/ai/skills-and-commands.md)
- [Spec Kit Workflow](../wiki-ref/ai/spec-kit-workflow.md)
- [Project Agents Templates](../wiki-ref/ai/project-agents-templates.md)

Paginas derivadas:

- [Estrategia Frontend](architecture/frontend-strategy.md)
- [Clean Architecture Frontend](architecture/frontend-clean-architecture.md)
- [Estrategia De Librerias](architecture/library-strategy.md)
- [Integracion Frontend](architecture/frontend-integration.md)
- [Discovery Del Proyecto](delivery/project-discovery.md)
- [Organizacion Del Proyecto Frontend](delivery/project-organization.md)
- [Spec Driven Development Con Spec Kit](delivery/spec-driven-development.md)
- [Plan De Solucion De Features](delivery/feature-solution-plan.md)
- [Agentes, Skills Y Comandos](delivery/agents-skills-commands.md)
- [Plantilla AGENTS.md](delivery/agents-md-template.md)
- [Runbook Frontend Generico](delivery/frontend-runbook.md)
- [Pruebas Y Coverage Frontend](delivery/testing-and-coverage.md)

## Notas De Filtrado

Se excluyo:

- Dominio especifico de la fuente original.
- Contratos de API particulares.
- Flujos de negocio especificos.
- Backend, base de datos y deployment no frontend.

Se conservo:

- Forma de organizar conocimiento como wiki.
- Estrategia frontend.
- Clean Architecture frontend.
- Seleccion responsable de librerias.
- Testing y coverage.
- Organizacion de proyecto.
- Agentes, skills, comandos y Spec Kit.
- Plan de solucion para features, bugs e iteraciones incompletas.
