# Starter Audit

Revision del starter contra `wiki-frontend-only`.

## Estado

- `wiki/` contiene todos los documentos de `wiki-frontend-only`.
- `wiki/architecture/frontend-clean-architecture.md` se mantiene como hub y se divide en subdocumentos para lectura gradual.
- `wiki/` agrega `delivery/architecture-alignment.md` y `delivery/tool-compatibility.md`.
- `docs/` sigue la estructura recomendada para documentacion viva del proyecto.
- El paquete declara el catalogo en `tools/agents-kit/`; tras `init` (o `install.sh`) queda en `.agents/` con skills, comandos y los 20 subagentes de `wiki/delivery/subagents-index.md`.
- `scripts/setup-agent-tools.sh` sincroniza adaptadores para Codex, Cursor, Claude Code y Antigravity.

## Regla Critica

La arquitectura base definida en `wiki/architecture/frontend-clean-architecture.md` manda. Los agentes deben respetar decisiones existentes, mapear equivalencias y usar alineacion incremental antes de mover carpetas o crear capas nuevas.

## Checklist De Uso

1. Copiar el starter en la raiz del proyecto.
2. Leer `AGENTS.md`.
3. Ejecutar setup de herramienta.
4. Hacer discovery.
5. Confirmar docs de arquitectura.
6. Trabajar con Spec Kit, Mini Spec o task directa segun corresponda.
