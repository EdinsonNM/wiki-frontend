# Prompts De Subagentes Frontend

## Objetivo

Definir donde viven los prompts listos para usar de los subagentes recomendados en [Indice De Subagentes Frontend](subagents-index.md).

Los prompts ejecutables viven en:

```text
.agents/subagents/
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
| Orquestador Frontend | `.agents/subagents/orchestrator.md` |
| Discovery Analyst | `.agents/subagents/discovery-analyst.md` |
| Solution Planner | `.agents/subagents/solution-planner.md` |
| Product UX Analyst | `.agents/subagents/product-ux-analyst.md` |
| Frontend Architect | `.agents/subagents/frontend-architect.md` |
| Library Strategist | `.agents/subagents/library-strategist.md` |
| Design System Agent | `.agents/subagents/design-system-agent.md` |
| UI Implementation Agent | `.agents/subagents/ui-worker.md` |
| Frontend Feature Agent | `.agents/subagents/frontend-worker.md` |
| Integration Agent | `.agents/subagents/integration-agent.md` |
| Bug Triage Agent | `.agents/subagents/bug-triage-agent.md` |
| Architecture Alignment Agent | `.agents/subagents/architecture-alignment-agent.md` |
| Design System Refactor Agent | `.agents/subagents/design-system-refactor-agent.md` |
| Refactor Agent | `.agents/subagents/refactor-agent.md` |
| QA Agent | `.agents/subagents/qa-worker.md` |
| Performance Agent | `.agents/subagents/performance-agent.md` |
| Project Docs Agent | `.agents/subagents/project-docs-worker.md` |
| Diagram Documentation Agent | `.agents/subagents/diagram-documentation-agent.md` |
| Wiki Steward Agent | `.agents/subagents/wiki-steward-agent.md` |
| Release Agent | `.agents/subagents/release-agent.md` |

## Instalacion

Ejecutar:

```bash
bash scripts/setup-agent-tools.sh codex
bash scripts/setup-agent-tools.sh cursor
bash scripts/setup-agent-tools.sh claude
bash scripts/setup-agent-tools.sh antigravity
```

El setup copia los prompts a la ubicacion esperada de cada herramienta cuando aplica.

