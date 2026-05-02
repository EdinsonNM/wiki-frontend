# wiki-frontend

Starter portable para trabajar proyectos frontend con wiki gradual, arquitectura definida, agentes, skills y comandos reutilizables.

El objetivo no es meter mas documentacion por meterla. El objetivo es que un agente lea poco, lea bien y respete la arquitectura del proyecto.

## Que Instala

```text
AGENTS.md                 contrato raiz para agentes
CLAUDE.md                 entrada para Claude Code
GEMINI.md                 fallback para herramientas Gemini/Antigravity
wiki/                     metodo reutilizable
docs/                     documentacion viva del proyecto
specs/                    specs por feature
.agents/                  catalogo, skills, comandos y prompts de agentes (.agents/agents)
templates/                reglas base por herramienta
scripts/setup-agent-tools.sh
install.sh
```

## Instalacion Rapida

### Con npx

Cuando el paquete este publicado en npm:

```bash
npx wiki-frontend init
npx wiki-frontend init --tool cursor
npx wiki-frontend init --tool claude
npx wiki-frontend init --tool codex
npx wiki-frontend init --tool all
```

Instalacion global:

```bash
npm install -g wiki-frontend
wiki-frontend init --tool cursor
```

Comandos disponibles:

```bash
wiki-frontend init [--tool codex|cursor|claude|antigravity|all] [--force]
wiki-frontend setup --tool codex|cursor|claude|antigravity|all [--force]
wiki-frontend verify
wiki-frontend help
```

### Con curl

Desde la raiz de cualquier proyecto:

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/EdinsonNM/wiki-frontend/main/install.sh)
```

Instalar y configurar una herramienta en un solo paso:

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/EdinsonNM/wiki-frontend/main/install.sh) --tool codex
bash <(curl -fsSL https://raw.githubusercontent.com/EdinsonNM/wiki-frontend/main/install.sh) --tool cursor
bash <(curl -fsSL https://raw.githubusercontent.com/EdinsonNM/wiki-frontend/main/install.sh) --tool claude
bash <(curl -fsSL https://raw.githubusercontent.com/EdinsonNM/wiki-frontend/main/install.sh) --tool antigravity
bash <(curl -fsSL https://raw.githubusercontent.com/EdinsonNM/wiki-frontend/main/install.sh) --tool all
```

Por defecto no sobrescribe archivos existentes. Para forzar sobrescritura:

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/EdinsonNM/wiki-frontend/main/install.sh) --tool all --force
```

## Instalacion Local

Si ya tienes esta carpeta localmente:

```bash
cp -R wiki-frontend/. /ruta/de/tu/proyecto/
cd /ruta/de/tu/proyecto
bash scripts/setup-agent-tools.sh codex
```

Cambia `codex` por `cursor`, `claude`, `antigravity` o `all`.

## Que Hace El Setup

```text
Codex       -> usa AGENTS.md y .agents/*; agentes en .codex/agents (desde .agents/agents)
Cursor      -> .cursor/rules, .cursor/commands, .cursor/skills, .cursor/agents
Claude Code -> .claude/agents, .claude/skills, .claude/commands (agentes desde .agents/agents)
Antigravity -> .agent/rules, .agent/workflows, AGENTS.md, GEMINI.md
```

El catalogo de agentes, skills y comandos vive en:

```text
.agents/AGENTS-CATALOG.md
```

## Primer Uso En Un Proyecto

Despues de instalar, abre tu agente/IDE y pide:

```text
Lee AGENTS.md y wiki/index.md. Haz discovery del proyecto sin editar codigo. Resume stack, estructura, arquitectura detectada, scripts, riesgos y siguiente paso recomendado.
```

Ese primer discovery debe ayudarte a ajustar:

```text
docs/project-overview.md
docs/architecture/overview.md
docs/architecture/boundaries.md
docs/operations/scripts.md
```

No empieces por implementar. Primero deja claro como esta organizado el proyecto.

## Uso Diario

### Feature

```text
Usa Solution Planner. Decide si esta feature requiere Spec Kit completo, Mini Spec o task directa: <descripcion>.
```

Si requiere Spec Kit:

```text
Usa frontend-spec-kit y crea specs/<feature>/spec.md, plan.md y tasks.md. No implementes aun.
```

Para implementar:

```text
Usa Frontend Feature Agent. Implementa las tasks aprobadas respetando AGENTS.md, la arquitectura definida y el ownership asignado.
```

### Bug

```text
Usa Bug Triage Agent. Reproduce, aisla y propone el fix minimo para: <descripcion del bug>.
```

### Arquitectura

```text
Usa Architecture Alignment Agent. Revisa como hacer este cambio respetando la arquitectura definida, sin reestructurar de mas: <descripcion>.
```

### UI

```text
Usa Design System Agent y UI Implementation Agent. Revisa componentes existentes antes de crear nuevos y cubre estados UI esperados.
```

### QA

```text
Usa QA Agent. Revisa gaps de tests, estados UI, regresiones, accesibilidad basica y validaciones contra la spec.
```

### Docs

```text
Usa Project Docs Agent. Actualiza docs/ segun cambios reales. No inventes comandos ni resultados.
```

## Principio De Contexto Gradual

El agente no debe leer toda la documentacion.

Ruta minima:

1. `AGENTS.md`
2. `wiki/index.md`
3. Documento especifico segun la tarea
4. Archivos afectados

Ejemplo: si vas a tocar UI reusable, no necesitas leer toda la wiki. Lee:

```text
AGENTS.md
wiki/index.md
wiki/architecture/frontend-clean-architecture.md
wiki/architecture/frontend-clean-architecture/presentation-design-system.md
docs/design-system/*
```

## Principio Arquitectonico

La arquitectura base esta definida en:

```text
wiki/architecture/frontend-clean-architecture.md
wiki/delivery/project-organization.md
wiki/delivery/architecture-alignment.md
```

En proyectos nuevos, usa esa arquitectura como baseline.

En proyectos existentes, respeta decisiones ya documentadas, mapea equivalencias y alinea por incrementos. No reestructures el repo solo para que calce con la plantilla.

## Documentos Importantes

```text
AGENTS.md
.agents/AGENTS-CATALOG.md
wiki/index.md
wiki/map.md
wiki/delivery/subagents-index.md
wiki/delivery/subagents-prompts.md
wiki/delivery/feature-solution-plan.md
wiki/delivery/spec-driven-development.md
wiki/delivery/architecture-alignment.md
```

## Actualizar En Un Proyecto Existente

Para reinstalar sin pisar archivos existentes:

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/EdinsonNM/wiki-frontend/main/install.sh)
```

Para actualizar y sobrescribir archivos del starter:

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/EdinsonNM/wiki-frontend/main/install.sh) --force
```

Usa `--force` con cuidado si ya adaptaste `docs/`, `AGENTS.md` o archivos de `.agents/`.

## Verificacion

Despues de instalar:

```bash
wiki-frontend verify
```

O manualmente:

```bash
find .agents/agents -maxdepth 1 -type f -name '*.md' | wc -l
find .agents/skills -name SKILL.md | wc -l
find .agents/commands -type f -name '*.md' | wc -l
```

Valores esperados:

```text
20 subagentes
12 skills
8 comandos
```

## Herramientas Soportadas

- Codex
- Cursor
- Claude Code
- Antigravity

Antigravity cambia rapido; valida en tu version instalada si reconoce `.agent/rules` y `.agent/workflows`. `AGENTS.md` y `GEMINI.md` quedan como fallback conservador.
