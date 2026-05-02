# Agents Catalog

Catalogo operativo basado en `wiki/delivery/subagents-index.md`.

## Subagentes

| Orden | Subagente Recomendado | Archivo |
| --- | --- | --- |
| 1 | Orquestador Frontend | `.agents/subagents/orchestrator.md` |
| 2 | Discovery Analyst | `.agents/subagents/discovery-analyst.md` |
| 3 | Solution Planner | `.agents/subagents/solution-planner.md` |
| 4 | Product UX Analyst | `.agents/subagents/product-ux-analyst.md` |
| 5 | Frontend Architect | `.agents/subagents/frontend-architect.md` |
| 6 | Library Strategist | `.agents/subagents/library-strategist.md` |
| 7 | Design System Agent | `.agents/subagents/design-system-agent.md` |
| 8 | UI Implementation Agent | `.agents/subagents/ui-worker.md` |
| 9 | Frontend Feature Agent | `.agents/subagents/frontend-worker.md` |
| 10 | Integration Agent | `.agents/subagents/integration-agent.md` |
| 11 | Bug Triage Agent | `.agents/subagents/bug-triage-agent.md` |
| 12 | Architecture Alignment Agent | `.agents/subagents/architecture-alignment-agent.md` |
| 13 | Design System Refactor Agent | `.agents/subagents/design-system-refactor-agent.md` |
| 14 | Refactor Agent | `.agents/subagents/refactor-agent.md` |
| 15 | QA Agent | `.agents/subagents/qa-worker.md` |
| 16 | Performance Agent | `.agents/subagents/performance-agent.md` |
| 17 | Project Docs Agent | `.agents/subagents/project-docs-worker.md` |
| 18 | Diagram Documentation Agent | `.agents/subagents/diagram-documentation-agent.md` |
| 19 | Wiki Steward Agent | `.agents/subagents/wiki-steward-agent.md` |
| 20 | Release Agent | `.agents/subagents/release-agent.md` |

## Skills

| Skill | Uso |
| --- | --- |
| `agent-setup` | Sincronizar herramientas/IDEs |
| `frontend-discovery` | Discovery sin editar codigo |
| `frontend-architecture` | Arquitectura y boundaries |
| `architecture-alignment` | Alineacion incremental |
| `solution-planning` | Spec Kit, Mini Spec o task directa |
| `frontend-spec-kit` | Specs, plans y tasks |
| `frontend-testing` | Pruebas y coverage |
| `frontend-ui-review` | UI, responsive y accesibilidad basica |
| `frontend-project-docs` | Documentacion viva del proyecto |
| `frontend-diagram-design` | Diagramas de arquitectura/flujo/estado |
| `frontend-wiki-steward` | Mantener wiki metodologica |

## Comandos

| Comando | Uso |
| --- | --- |
| `discovery` | Entender proyecto |
| `choose-solution-mode` | Elegir Spec/Mini/Task |
| `create-spec` | Crear spec completa |
| `architecture-alignment` | Proteger arquitectura |
| `implement-feature` | Implementar feature aprobada |
| `qa-review` | Revisar calidad |
| `update-docs` | Actualizar docs reales |
| `setup-agent-tools` | Sincronizar IDE/agente |

## Instalacion Por Herramienta

`scripts/setup-agent-tools.sh` copia:

- Codex: usa `AGENTS.md` y `.agents/*`.
- Cursor: `.cursor/rules`, `.cursor/commands`, `.cursor/skills`.
- Claude Code: `.claude/agents`, `.claude/skills`, `.claude/commands`.
- Antigravity: `.agent/rules`, `.agent/workflows`, mas `AGENTS.md` y `GEMINI.md`.

