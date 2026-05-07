# Agent DevKit — instrucciones del repositorio

Reglas para trabajar en este proyecto con **frontend-agent-devkit**: `AGENTS.md`, `wiki/`, `docs/`, skills, comandos y `specs/`.

## Catálogo bajo `.github/`

El CLI copia aquí **subagentes** (`.github/agents/*.md`), **skills** (`.github/skills/<nombre>/SKILL.md`) y **`AGENTS-CATALOG.md`** para que Copilot tenga el mismo material que otras herramientas, sin depender solo de rutas ocultas. La copia canónica del kit sigue en **`.agents/`** tras `init`; si algo difiere, prioriza `.agents/` y la wiki.

## Reglas

- Lee **`AGENTS.md`** como contrato principal para el trabajo con agentes en este repo.
- Lee **`wiki/index.md`** antes de responder sobre arquitectura o entrega.
- Si el cambio toca datos remotos, formularios, estado o validación, revisa **`wiki/architecture/library-strategy.md`**.
- Respeta las capas en **`wiki/architecture/frontend-clean-architecture.md`**.
- Para cambios grandes, crea o actualiza especificación en **`specs/`** antes de implementar.
- Si te alejas de la arquitectura de la wiki, documenta la excepción en **`docs/architecture/decisions.md`**.
- No envíes cambios sin pruebas proporcionales o verificación de las existentes.
