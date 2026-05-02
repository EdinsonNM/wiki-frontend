# Project AI Wiki Starter

Kit portable para iniciar cualquier proyecto con una wiki gradual, agentes, skills y comandos sin consumir contexto de mas.

## Uso Rapido

1. Copia el contenido de esta carpeta en la raiz de tu proyecto.
2. Edita `docs/project-overview.md` con el contexto real del proyecto.
3. Ejecuta el setup para tu herramienta:

```bash
bash scripts/setup-agent-tools.sh codex
bash scripts/setup-agent-tools.sh cursor
bash scripts/setup-agent-tools.sh claude
bash scripts/setup-agent-tools.sh antigravity
```

Tambien puedes instalar varias:

```bash
bash scripts/setup-agent-tools.sh all
```

## Instalacion Desde GitHub

Cuando este starter este publicado en GitHub, puedes instalarlo en cualquier proyecto con:

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/EdinsonNM/wiki-frontend/main/install.sh)
```

Instalar y configurar una herramienta en un solo paso:

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/EdinsonNM/wiki-frontend/main/install.sh) --tool cursor
bash <(curl -fsSL https://raw.githubusercontent.com/EdinsonNM/wiki-frontend/main/install.sh) --tool claude
bash <(curl -fsSL https://raw.githubusercontent.com/EdinsonNM/wiki-frontend/main/install.sh) --tool codex
bash <(curl -fsSL https://raw.githubusercontent.com/EdinsonNM/wiki-frontend/main/install.sh) --tool all
```

Por defecto no sobrescribe archivos existentes. Para forzar sobrescritura:

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/EdinsonNM/wiki-frontend/main/install.sh) --tool all --force
```

## Principio Central

El agente no debe leer toda la documentacion. Debe leer:

1. `AGENTS.md`
2. `wiki/index.md`
3. La ruta de lectura especifica para la tarea

Luego debe abrir solo los documentos necesarios.

## Principio Arquitectonico

La arquitectura base ya esta definida en `wiki/architecture/frontend-clean-architecture.md` y se complementa con:

- `wiki/delivery/project-organization.md`
- `wiki/delivery/architecture-alignment.md`
- `docs/architecture/overview.md`
- `docs/architecture/boundaries.md`

En proyectos nuevos, usa la arquitectura base.

En proyectos existentes, respeta las decisiones ya documentadas y mapea equivalencias. No reestructures el repo para que calce con la plantilla; alinea por incrementos solo cuando haya riesgo, bloqueo o deuda clara.

## Estructura

```text
AGENTS.md                 contrato raiz para agentes
wiki/                     metodo reutilizable
docs/                     realidad del proyecto
specs/                    specs por feature
.agents/                  fuente canonica de skills, comandos y subagentes
templates/                adaptadores por herramienta
scripts/setup-agent-tools.sh
```

El catalogo operativo esta en `.agents/AGENTS-CATALOG.md`.

## Estructura Documental Incluida

```text
docs/
  architecture/
  design-system/
  features/
  integrations/
  user-logic/
  quality/
  operations/
  log/
```

La wiki metodologica se basa en `wiki-frontend-only` e incluye estrategia frontend, clean architecture, integracion, organizacion de proyecto, Spec Kit, runbook, subagentes, skills/comandos y testing.

## Herramientas Soportadas

- Codex: `AGENTS.md`, `.agents/skills`, `.agents/commands`, `.agents/subagents`
- Cursor: `.cursor/rules`, `.cursor/commands`, `.cursor/skills` como copia experimental
- Claude Code: `CLAUDE.md`, `.claude/agents`, `.claude/skills`, `.claude/commands`
- Antigravity: `AGENTS.md`, `GEMINI.md`, `.agent/rules`, `.agent/workflows` como fallback verificable

Antigravity cambia rapido; valida en tu version instalada si reconoce `.agent/rules` o si requiere otra ruta.
