# Mapa

```text
wiki-frontend-only/
  README.md
  index.md
  map.md
  schema.md
  sources.md
  log.md
  architecture/
    frontend-strategy.md
    frontend-clean-architecture.md
    frontend-clean-architecture/
      layers-and-structure.md
      dependency-rules.md
      responsibility-map.md
      application-scales.md
      data-dtos-schemas.md
      use-cases.md
      hooks.md
      presentation-design-system.md
      simplification.md
    library-strategy.md
    frontend-integration.md
  delivery/
    project-discovery.md
    project-organization.md
    spec-driven-development.md
    feature-solution-plan.md
    subagents-index.md
    subagents-prompts.md
    agents-skills-commands.md
    agents-md-template.md
    frontend-runbook.md
    testing-and-coverage.md
    architecture-alignment.md
    tool-compatibility.md
```

## Ruta De Lectura

1. [Index](index.md)
2. [Schema](schema.md)
3. [Discovery Del Proyecto](delivery/project-discovery.md)
4. [Estrategia Frontend](architecture/frontend-strategy.md)
5. [Clean Architecture Frontend](architecture/frontend-clean-architecture.md)
6. [Spec Driven Development Con Spec Kit](delivery/spec-driven-development.md)
7. [Plan De Solucion De Features](delivery/feature-solution-plan.md)
8. [Indice De Subagentes Frontend](delivery/subagents-index.md)
9. [Prompts De Subagentes Frontend](delivery/subagents-prompts.md)
10. [Agentes, Skills Y Comandos](delivery/agents-skills-commands.md)
11. [Plantilla AGENTS.md](delivery/agents-md-template.md)
12. [Runbook Frontend Generico](delivery/frontend-runbook.md)
13. [Pruebas Y Coverage Frontend](delivery/testing-and-coverage.md)
14. [Alineacion De Arquitectura](delivery/architecture-alignment.md)
15. [Compatibilidad De Herramientas](delivery/tool-compatibility.md)

## Grafo Conceptual

```mermaid
flowchart TD
  LLM["llm-wiki.md"] --> Schema["schema.md"]
  Ref["wiki-ref/**"] --> Sources["sources.md"]
  Sources --> Index["index.md"]
  Schema --> Index
  Index --> Discovery["delivery/project-discovery.md"]
  Discovery --> Strategy["architecture/frontend-strategy.md"]
  Strategy --> Architecture["architecture/frontend-clean-architecture.md"]
  Architecture --> Layers["frontend-clean-architecture/layers-and-structure.md"]
  Architecture --> Dependencies["frontend-clean-architecture/dependency-rules.md"]
  Architecture --> Responsibilities["frontend-clean-architecture/responsibility-map.md"]
  Architecture --> Scales["Escalas: adopcion incremental"]
  Architecture --> DataSchemas["frontend-clean-architecture/data-dtos-schemas.md"]
  Architecture --> Hooks["frontend-clean-architecture/hooks.md"]
  Architecture --> Presentation["frontend-clean-architecture/presentation-design-system.md"]
  Architecture --> Simplification["frontend-clean-architecture/simplification.md"]
  Strategy --> Libraries["architecture/library-strategy.md"]
  Strategy --> Integration["architecture/frontend-integration.md"]
  Architecture --> Subagents["delivery/subagents-index.md"]
  Subagents --> SubagentPrompts["delivery/subagents-prompts.md"]
  Subagents --> Agents["delivery/agents-skills-commands.md"]
  Agents --> AgentsMd["delivery/agents-md-template.md"]
  Discovery --> SDD["delivery/spec-driven-development.md"]
  Discovery --> Solution["delivery/feature-solution-plan.md"]
  Solution --> Subagents
  SDD --> Runbook["delivery/frontend-runbook.md"]
  Solution --> Runbook
  Runbook --> Tests["delivery/testing-and-coverage.md"]
  Architecture --> Alignment["delivery/architecture-alignment.md"]
  Agents --> ToolCompat["delivery/tool-compatibility.md"]
  Index --> Log["log.md"]
```
