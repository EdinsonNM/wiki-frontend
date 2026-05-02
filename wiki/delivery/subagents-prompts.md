# Prompts De Subagentes Frontend

## Objetivo

Definir donde viven los prompts listos para usar de los subagentes recomendados en [Indice De Subagentes Frontend](subagents-index.md).

Los prompts ejecutables viven en:

```text
.agents/agents/
```

El catalogo operativo vive en:

```text
.agents/AGENTS-CATALOG.md
```

## Contrato De Cada Prompt

Cada subagente debe incluir:

- frontmatter con `name`, `description`, `tools` y `model`
- rol
- activacion
- lectura minima
- workflow
- salida esperada
- prohibiciones

## Subagentes Disponibles

| Subagente | Prompt |
| --- | --- |
| Orquestador Frontend | `.agents/agents/orchestrator.md` |
| Discovery Analyst | `.agents/agents/discovery-analyst.md` |
| Solution Planner | `.agents/agents/solution-planner.md` |
| Product UX Analyst | `.agents/agents/product-ux-analyst.md` |
| Frontend Architect | `.agents/agents/frontend-architect.md` |
| Library Strategist | `.agents/agents/library-strategist.md` |
| Design System Agent | `.agents/agents/design-system-agent.md` |
| UI Implementation Agent | `.agents/agents/ui-worker.md` |
| Frontend Feature Agent | `.agents/agents/frontend-worker.md` |
| Integration Agent | `.agents/agents/integration-agent.md` |
| Bug Triage Agent | `.agents/agents/bug-triage-agent.md` |
| Architecture Alignment Agent | `.agents/agents/architecture-alignment-agent.md` |
| Design System Refactor Agent | `.agents/agents/design-system-refactor-agent.md` |
| Refactor Agent | `.agents/agents/refactor-agent.md` |
| QA Agent | `.agents/agents/qa-worker.md` |
| Performance Agent | `.agents/agents/performance-agent.md` |
| Project Docs Agent | `.agents/agents/project-docs-worker.md` |
| Diagram Documentation Agent | `.agents/agents/diagram-documentation-agent.md` |
| Wiki Steward Agent | `.agents/agents/wiki-steward-agent.md` |
| Release Agent | `.agents/agents/release-agent.md` |

## Instalacion

Ejecutar:

```bash
bash scripts/setup-agent-tools.sh codex
bash scripts/setup-agent-tools.sh cursor
bash scripts/setup-agent-tools.sh claude
bash scripts/setup-agent-tools.sh antigravity
```

El setup copia los prompts a la ubicacion esperada de cada herramienta cuando aplica.

