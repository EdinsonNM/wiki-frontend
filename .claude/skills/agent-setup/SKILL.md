---
name: agent-setup
description: Instala o sincroniza agentes, skills, comandos y reglas del proyecto para Codex, Cursor, Claude Code o Antigravity.
disable-model-invocation: true
---

# Agent Setup

## Use When

- Quieres preparar este proyecto para una herramienta de agentes.
- Quieres copiar skills, subagentes o comandos a la ubicacion correcta.
- Quieres verificar que las rutas de agente esten creadas.

## Read First

- `AGENTS.md`
- `wiki/index.md`
- `wiki/delivery/agents-skills-commands.md`
- `README.md`

## Workflow

1. Identifica la herramienta: `codex`, `cursor`, `claude`, `antigravity` o `all`.
2. Ejecuta `bash scripts/setup-agent-tools.sh <tool>`.
3. Reporta archivos creados o sincronizados.
4. Indica cualquier ruta experimental que deba validarse manualmente.

## Tool Mapping

| Tool | Project guidance | Skills | Agents | Commands |
| --- | --- | --- | --- | --- |
| Codex | `AGENTS.md` | `.agents/skills` | `.codex/agents/*.md` (sync desde `.agents/agents`) | `.agents/commands` |
| Cursor | `AGENTS.md`, `.cursor/rules/*.mdc` | `.cursor/skills` experimental | `.cursor/agents/*.md` | `.cursor/commands/*.md` |
| Claude Code | `CLAUDE.md` | `.claude/skills/*/SKILL.md` | `.claude/agents/*.md` | `.claude/commands/*.md` |
| Antigravity | `AGENTS.md`, `GEMINI.md` | verificar version | verificar version | `.agent/workflows` fallback |

## Do Not

- No borres configuraciones existentes sin pedir permiso.
- No sobrescribas archivos modificados por el usuario si el script reporta conflicto.
- No asumas que Antigravity reconoce todas las rutas sin validarlo en la UI.

