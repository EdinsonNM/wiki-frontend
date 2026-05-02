# Herramientas empaquetadas (`tools/`)

## `agents-kit/`

Es la **fuente** del catálogo (subagentes, skills, comandos y `AGENTS-CATALOG.md`) que **va dentro del paquete npm**.  
Al ejecutar `frontend-agent-devkit init` en un proyecto, ese contenido se copia a **`.agents/`** en la raíz del proyecto destino; el comportamiento para quien instala el kit **no cambia**.

En el **repositorio del devkit**, `.cursor/` debe quedar para reglas y skills **solo del desarrollo de este repo**, no para duplicar el kit.

Las carpetas **`.claude/`**, **`.codex/`** y **`.agent/`** no se versionan: se generan con `frontend-agent-devkit setup --tool claude|codex|antigravity` (o `init --tool …`), copiando desde **`tools/agents-kit`** (o desde **`.agents/`** si ya hiciste `init`).
