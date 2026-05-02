# Setup Agent Tools

Instala adaptadores para una herramienta:

```bash
bash scripts/setup-agent-tools.sh codex
bash scripts/setup-agent-tools.sh cursor
bash scripts/setup-agent-tools.sh claude
bash scripts/setup-agent-tools.sh antigravity
bash scripts/setup-agent-tools.sh all
```

Despues reporta que rutas fueron creadas y que pasos deben verificarse manualmente.

Mapa:

- Codex: `AGENTS.md`, `.agents/*`
- Cursor: `.cursor/rules`, `.cursor/commands`
- Claude Code: `.claude/skills`, `.claude/agents`, `.claude/commands`
- Antigravity: `AGENTS.md`, `GEMINI.md`, `.agent/rules`, `.agent/workflows`

Si el script omite archivos por existir, no los sobrescribas sin pedir permiso.
