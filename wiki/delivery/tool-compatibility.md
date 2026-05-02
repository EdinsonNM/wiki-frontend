# Tool Compatibility

## Objetivo

Registrar ubicaciones usadas por el setup multi herramienta y que partes deben verificarse segun version instalada.

## Codex

- Guia principal: `AGENTS.md`.
- Codex descubre `AGENTS.md` en el repo y puede combinar instrucciones por jerarquia.
- Este kit usa `.agents/skills`, `.agents/commands` y `.agents/subagents` como fuente canonica local del proyecto.

Referencia: https://developers.openai.com/codex/guides/agents-md

## Cursor

- Project Rules: `.cursor/rules/*.mdc`.
- Project Commands: `.cursor/commands/*.md`.
- `AGENTS.md` tambien puede usarse como alternativa simple.
- `.cursor/skills` se copia como capa experimental; valida soporte en tu version.

Referencias:

- https://docs.cursor.com/en/context/rules
- https://docs.cursor.com/en/agent/chat/commands

## Claude Code

- Project skills: `.claude/skills/<skill>/SKILL.md`.
- Project subagents: `.claude/agents/*.md`.
- Commands existentes en `.claude/commands/*.md` siguen funcionando, aunque Claude recomienda skills para flujos reutilizables.

Referencias:

- https://code.claude.com/docs/en/slash-commands
- https://docs.claude.com/en/docs/claude-code/subagents

## Antigravity

- Mantener `AGENTS.md` y `GEMINI.md` como fallback conservador.
- El setup copia reglas a `.agent/rules` y workflows a `.agent/workflows`.
- La documentacion y rutas han cambiado entre versiones; valida en la UI de Antigravity que las reglas y workflows aparezcan.

Referencia comunitaria consultada:

- https://antigravity.im/documentation

