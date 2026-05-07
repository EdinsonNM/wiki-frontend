---
name: agent-setup
description: Instala o sincroniza agentes, skills, comandos y reglas del proyecto para Codex, Cursor, Claude Code, Antigravity, OpenCode o GitHub Copilot.
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

1. Identifica la herramienta: `codex`, `cursor`, `claude`, `antigravity`, `opencode`, `copilot` o `all`.
2. Ejecuta `bash scripts/setup-agent-tools.sh <tool>`.
3. Reporta archivos creados o sincronizados.
4. Indica cualquier ruta experimental que deba validarse manualmente.

## Mantenedor del repo `frontend-agent-devkit`

Si editas el kit fuente, trabaja en **`tools/agents-kit/`**. En este repo, Cursor no debe duplicar ese catalogo bajo `.cursor/` salvo reglas de desarrollo.

## Tool Mapping

| Tool | Project guidance | Skills | Agents | Commands |
| --- | --- | --- | --- | --- |
| Codex | `AGENTS.md` | `.agents/skills` | `.codex/agents/*.md` (sync desde `.agents/agents`) | `.agents/commands` |
| Cursor | `AGENTS.md`, `.cursor/rules/*.mdc` | `.cursor/skills` experimental | `.cursor/agents/*.md` | `.cursor/commands/*.md` |
| Claude Code | `CLAUDE.md` | `.claude/skills/*/SKILL.md` | `.claude/agents/*.md` | `.claude/commands/*.md` |
| Antigravity | `AGENTS.md`, `GEMINI.md` | verificar version | verificar version | `.agent/workflows` fallback |
| OpenCode | `AGENTS.md` | `.opencode/skills` | `.opencode/agents/*.md` | `.opencode/commands/*.md` |
| GitHub Copilot | `AGENTS.md`, `.github/copilot-instructions.md` | `.github/skills` (réplica) | `.github/agents/*.md` | catálogo en `.github/AGENTS-CATALOG.md` |

## Do Not

- No borres configuraciones existentes sin pedir permiso.
- No sobrescribas archivos modificados por el usuario si el script reporta conflicto.
- No asumas que Antigravity reconoce todas las rutas sin validarlo en la UI.

