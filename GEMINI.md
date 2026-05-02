# GEMINI.md

Sigue `AGENTS.md` como contrato principal del proyecto.

Este archivo existe como fallback para herramientas basadas en Gemini o Antigravity.

Reglas:

- Trabaja con contexto gradual.
- Lee `wiki/index.md` antes de decidir que documentos abrir.
- No ejecutes comandos destructivos.
- No leas secretos, `.env.local`, artefactos de build o dependencias generadas salvo necesidad explicita.
- Para tareas grandes, crea o actualiza una spec antes de implementar.

