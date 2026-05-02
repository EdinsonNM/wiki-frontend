# frontend-agent-devkit

**Copia en la raíz de tu proyecto frontend** una capa de trabajo para asistentes de IA: método documentado (`wiki/`), plantillas para tu documentación viva (`docs/`, `specs/`), un contrato local (`AGENTS.md`) y un catálogo versionado de **subagentes, skills y comandos** en `.agents/`. El CLI puede además generar las carpetas que esperan Cursor, Claude Code, Codex o Antigravity.

No es un framework de UI ni un generador de apps: **no reemplaza tu código**. Es una forma de que los agentes **lean en orden**, **no contradigan la arquitectura** que tú defines y **reutilicen los mismos flujos** (discovery, specs, QA, docs) en cada repo.

## Indice del README

1. [Por que existe, para que sirve y como se usa](#por-que-existe-para-que-sirve-y-como-se-usa)
2. [Parte 1: Que es este kit](#parte-1-que-es-este-kit)
3. [Parte 2: Arquitectura](#parte-2-arquitectura)
4. [Parte 3: Orquestador](#parte-3-orquestador)
5. [Parte 4: Instalacion](#parte-4-instalacion)
6. [Parte 5: Uso en tu proyecto](#parte-5-uso-en-tu-proyecto)
7. [Parte 6: Referencia](#parte-6-referencia)

**Primera vez:** [Por qué / para qué / cómo](#por-que-existe-para-que-sirve-y-como-se-usa) → Parte 1 → Parte 2 (solo lo necesario) → Parte 4 (instalar) → Parte 5 (discovery con `/orquestador`). **Cualquier tarea con el agente:** Parte 3 — siempre **`/orquestador` + tu objetivo** (no pidas otros roles “a pelo” en un mensaje nuevo).

---

## Por que existe, para que sirve y como se usa

### Por que existe

Sin reglas compartidas, los asistentes de código **improvisan**: recomiendan carpetas nuevas, contradicen decisiones ya tomadas o leen documentación de más o de menos. Ese vaivén cuesta tiempo y rompe arquitectura. El kit existe para dar un **marco repetible**: contrato del repo (`AGENTS.md`), método en `wiki/`, catálogo operativo en `.agents/` y plantillas en `docs/`, de forma que **cada proyecto** pueda alinearse sin depender de un solo chat o de un solo modelo.

### Para que sirve

- **Encaminar al equipo** hacia una **arquitectura frontend explícita** (referencia tipo clean architecture en la wiki; en repos existentes, alinear sin reescribirlo todo).
- **Orquestar el trabajo con IA**: clasificar la tarea (feature, bug, refactor…), elegir Spec Kit / Mini Spec / tarea directa y **no implementar a ciegas**.
- **Separar método y realidad**: `wiki/` = cómo trabajar; `docs/` = qué hay de verdad en **tu** aplicación (stack, límites, integraciones).

### Como se usa (en tres pasos)

1. **Instalar con npm** en la raíz del proyecto: `npx frontend-agent-devkit init` (y opcionalmente `--tool …` para copiar reglas/agentes al IDE). Detalle en [Parte 4: Instalacion](#parte-4-instalacion).
2. **Primer uso — discovery (qué es):** no es instalar nada más ni pedir una feature. Es **una sola conversación (o sesión) donde pides al agente que entienda el repo**: que lea `AGENTS.md` y `wiki/index.md`, recorra el código y la config **sin escribir lógica nueva ni refactors**, y te devuelva un **resumen fiable** (stack, carpetas, cómo se organiza el frontend, scripts de `package.json`, integraciones, riesgos y qué documentar primero). Con eso **tú o el agente actualizáis** `docs/project-overview.md`, `docs/architecture/overview.md`, `docs/architecture/boundaries.md` y `docs/operations/scripts.md` para que dejen de estar genéricos y reflejen **tu** proyecto. Así, cuando más adelante pidas feature o bug, el modelo no inventa la arquitectura. Prompt ejemplo en [Parte 5: Uso en tu proyecto](#parte-5-uso-en-tu-proyecto) (apartado *Primer uso: discovery*).
3. **Día a día**: ante **cada pedido nuevo** al agente (feature, bug, análisis, QA, docs…), empieza siempre con **`/orquestador`** + lo que necesitas en frases normales; el orquestador te dice modo de trabajo y qué agente o skill sigue. Detalle en [Parte 3: Orquestador](#parte-3-orquestador).

---

## Parte 1: Que es este kit

Son **cuatro piezas** que trabajan juntas:

1. **Método reutilizable** (`wiki/`): cómo hacer discovery, specs, alineación arquitectónica, pruebas y trabajo multiagente; sirve como plantilla de proceso.
2. **Contrato del repo** (`AGENTS.md`): qué debe hacer el agente primero, qué está prohibido por defecto y cómo clasificar tareas.
3. **Kit operativo** (`.agents/`): prompts y procedimientos listos (subagentes, skills, comandos) que puedes copiar a cada herramienta con `setup`.
4. **Tu verdad de proyecto** (`docs/`, `specs/`): esqueleto y convenciones para que documentes stack, arquitectura, integraciones y features reales; el agente los actualiza según cambios, no al revés.

### Para quién es

- Equipos o personas que ya usan **Cursor, Claude Code, Codex o Antigravity** y quieren menos improvisación y más coherencia entre conversaciones.
- Proyectos **frontend** (nuevos o legacy) donde importa **respetar boundaries** y evitar reestructuras solo porque el modelo lo sugirió.
- Quien quiere **spec-driven development** ligero (Spec Kit / Mini Spec) sin montar todo desde cero.

### Qué no es

- Una librería npm que se importa en tu bundle.
- Una opinión rígida que obligue a mover carpetas de tu app para “calzar” con la plantilla.
- Un sustituto de revisar código: el kit **orienta**; tú sigues validando.

### Qué deja en tu disco al instalar

| Bloque | Contenido |
|--------|-----------|
| Contrato e IDE | `AGENTS.md`, `CLAUDE.md`, `GEMINI.md` |
| Método (plantilla) | `wiki/` (índice, delivery, arquitectura objetivo) |
| Documentación del proyecto | `docs/`, `specs/` (plantillas y huecos para llenar) |
| Catálogo de agentes | `.agents/` (`agents/`, `skills/`, `commands/`, `AGENTS-CATALOG.md`) |
| Por herramienta | `templates/`, `scripts/` (el CLI usa este flujo al pasar `--tool`) |

Tras `npx frontend-agent-devkit init` (con o sin `--tool`), puedes ejecutar `frontend-agent-devkit verify` para comprobar que el kit copió bien los conteos esperados de agentes, skills y comandos.

---

## Parte 2: Arquitectura

El kit no es “documentación suelta”: está anclado en una **arquitectura frontend explícita** para que humanos y agentes **sepan dónde va cada cambio** y no mezclen responsabilidades.

### Principio rector

En `AGENTS.md` queda fijada la regla **“la arquitectura definida manda”**:

- **Proyectos nuevos**: la línea base está en `wiki/architecture/frontend-clean-architecture.md` (hub con lectura gradual: capas, dependencias, use cases, hooks, UI/design system, datos e integración).
- **Proyectos ya existentes**: no se reescribe el repo para copiar la plantilla. Se **respeta** lo que ya está decidido, se documenta en `docs/architecture/overview.md` y `docs/architecture/boundaries.md`, y se **alinea por incrementos** con `wiki/delivery/architecture-alignment.md` cuando haga falta.

Así el desarrollador **encamina** el código hacia límites claros (qué es dominio, qué es infraestructura, qué es presentación) sin obligar migraciones masivas en cada feature.

### Qué modelo de capas promueve

El arquetipo descrito en la wiki separa, entre otras cosas:

| Área | Rol típico |
|------|------------|
| **presentation** | Componentes, páginas, layouts, hooks de UI acoplados al framework |
| **domains / use cases** | Reglas y orquestación testeable del caso de uso |
| **infra** | HTTP, adapters, mocks, mappers hacia el exterior |
| **core** | Config, errores, logging, tipos compartidos |

La idea es que un agente pueda **tocar solo la zona afectada** (por ejemplo UI reusable vs contrato con API) leyendo el subdocumento que corresponda, no toda la wiki.

### Tu proyecto como fuente de verdad

La wiki (`wiki/`) describe el **método y el objetivo arquitectónico**. Lo que manda en el día a día es lo que documentes en **`docs/architecture/`** (overview, límites entre capas, decisiones). Si esos archivos están vacíos o desactualizados, el kit espera que **discovery** y los agentes de arquitectura los completen **antes** de proponer carpetas nuevas o movidas.

### Lectura mínima por tema (recordatorio)

La arquitectura base y cómo alinearla sin reestructurar de más también están enlazadas desde:

```text
wiki/architecture/frontend-clean-architecture.md
wiki/delivery/project-organization.md
wiki/delivery/architecture-alignment.md
```

En proyectos nuevos, esa arquitectura es baseline. En existentes, respeta lo ya decidido y alinea por incrementos; no reestructures el repo solo para que calque la plantilla.

---

## Parte 3: Orquestador

Además de skills y subagentes especializados, el kit incluye un **orquestador** (`.agents/agents/orchestrator.md`): el rol que **clasifica lo que pides**, **elige el modo de trabajo** y **protege la arquitectura** antes de que alguien implemente a ciegas.

### Qué hace el orquestador

1. **Entiende la intención**: ¿feature, bug, refactor, QA, docs, release, discovery o setup de agentes?
2. **Elige el modo**: **Spec Kit completo**, **Mini Spec** o **tarea directa**, según complejidad y riesgo (criterios en `wiki/delivery/feature-solution-plan.md`).
3. **Define la ruta de lectura mínima**: qué archivos de `wiki/`, `docs/` y `specs/` deben abrirse; evita “leer toda la wiki”.
4. **Protege la arquitectura definida**: no delega reestructuras amplias sin pasar por alineación arquitectónica; evita dos agentes editando los mismos archivos en paralelo.
5. **Delega con contrato**: ownership, archivos permitidos, alcance y cómo validar el resultado.

Salida esperada del orquestador (plantilla): tipo de tarea, modo de trabajo, ruta de lectura, agentes/skills a usar, ownership, validación y riesgos.

### Cuándo usarlo

**Siempre que abras un mensaje nuevo con una intención distinta**: implementar algo, analizar el repo, corregir un bug, revisar calidad, actualizar docs, etc. La convención del kit es **no invocar por tu cuenta** “Usa el Bug Triage Agent…” como primer mensaje; primero **`/orquestador`** y tu objetivo en lenguaje natural, y el orquestador te dice **qué agente del catálogo** toca y en **qué orden**.

Útil también al **inicio de sesión**, cuando la petición es **ambigua** (feature vs bug vs refactor) o cuando quieras saber **si hace falta Spec Kit** antes de tocar código.

### Cómo pedirlo en el IDE

Con **`/orquestador`** ya estás indicando que debe usarse **ese** rol (el definido en `.agents/agents/orchestrator.md`); **no hace falta** escribir “actúa como el orquestador…”. En **una misma burbuja** basta con **`/orquestador`**, tu **pedido en castellano** y, si quieres salida ordenada, el bloque **Respuesta que espero**. El propio contrato del orquestador ya lista qué leer primero (`AGENTS.md`, `wiki/index.md`, catálogo, etc.) cuando haga falta.

**Plantilla recomendada** (cópiala y solo cambia el bloque *Necesito*):

```text
/orquestador Necesito: <una o varias frases: qué quieres lograr. Ejemplos abajo.>

Respuesta que espero:
- Tipo de tarea (feature / bug / refactor / discovery / QA / docs / …)
- Modo de trabajo: Spec Kit completo, Mini Spec o tarea directa (y por qué)
- Ruta de lectura mínima en wiki/docs/specs
- Siguiente paso concreto: qué agente o skill del catálogo ejecuto después y con qué alcance
- Cómo validar el resultado y riesgos
```

**Ejemplos de una sola línea después de `/orquestador`** (misma plantilla, menos formal):

```text
/orquestador Necesito implementar nuevas features en el módulo de facturación y no sé si abrir Spec Kit.
/orquestador Necesito que analices mi proyecto: discovery sin editar código, para dejar docs/ alineados con la realidad.
/orquestador Corregir un error en producción en el flujo de login; sospecho del cliente HTTP.
```

### Ejemplos listos para pegar

**Bug / error**

```text
/orquestador Quiero corregir un error: en la pantalla de perfil, el botón Guardar no hace nada cuando hay errores de validación en el formulario. No sé si es estado, submit handler o capa de API.
```

**Feature mediana o grande** (el orquestador debería tender a Spec Kit o plan formal)

```text
/orquestador Necesito implementar recuperación de contraseña: pantalla “olvidé mi contraseña”, envío de email con link, pantalla para definir nueva contraseña y actualización en backend. Hay que coordinar UI, flujo y seguridad.
```

**Ambigüedad producto / alcance**

```text
/orquestador El PO pidió “mejorar el checkout”. No está claro si es solo UI, performance o cambiar pasos del flujo. Ayúdame a clasificar y decidir si abrimos Spec Kit antes de tocar código.
```

**Refactor arquitectónico**

```text
/orquestador Quiero sacar la lógica de precios del componente grande del carrito y dejarla testeable sin romper comportamiento. Respeta la arquitectura definida en docs/architecture y dime si hace falta architecture-alignment antes de implementar.
```

**Solo QA / revisión**

```text
/orquestador Terminamos una feature en la rama actual. Necesito revisión de tests faltantes, regresiones obvias y accesibilidad básica antes del PR.
```

**Documentación**

```text
/orquestador Actualizamos integración con el API de pagos ayer. Hay que alinear docs/ con lo que quedó en código y comandos reales de package.json; no inventar endpoints.
```

Después de la respuesta del orquestador, **en el mismo hilo** ejecutas lo que te indicó (por ejemplo el prompt exacto para Bug Triage, Solution Planner o Frontend Worker). Si cambias de objetivo (pasas de bug a “además documenta el API”), **nuevo mensaje** → otra vez **`/orquestador …`**.

El catálogo maestro de roles está en `.agents/AGENTS-CATALOG.md`; el orquestador es quien ayuda a **elegir** cuál conviene y en **qué orden**.

---

## Parte 4: Instalacion

Necesitas **Node.js 18 o superior**. La forma prevista de usar el kit es el **paquete npm** (`npx` o instalación global).

### Instalar en tu proyecto

Desde la **raíz del repo** donde quieras tener `wiki/`, `docs/`, `.agents/`, etc.:

```bash
npx frontend-agent-devkit init
npx frontend-agent-devkit init --tool cursor
npx frontend-agent-devkit init --tool claude
npx frontend-agent-devkit init --tool codex
npx frontend-agent-devkit init --tool all
```

Con el CLI instalado globalmente:

```bash
npm install -g frontend-agent-devkit
frontend-agent-devkit init --tool cursor
```

Comandos disponibles:

```bash
frontend-agent-devkit init [--tool codex|cursor|claude|antigravity|all] [--force]
frontend-agent-devkit setup --tool codex|cursor|claude|antigravity|all [--force]
frontend-agent-devkit verify
frontend-agent-devkit help
```

Por defecto **no** sobrescribe archivos que ya existen; usa `--force` solo si quieres que el kit vuelva a copiar plantillas encima de las actuales.

### Qué hace el setup

`setup` (o `init --tool ...`) **no cambia tu aplicación**: replica desde `.agents/` (y plantillas) hacia las rutas que cada herramienta suele leer, para que el mismo catálogo viva en un solo lugar.

```text
Codex       -> usa AGENTS.md y .agents/*; agentes en .codex/agents (desde .agents/agents)
Cursor      -> .cursor/rules, .cursor/commands, .cursor/skills, .cursor/agents
Claude Code -> .claude/agents, .claude/skills, .claude/commands (agentes desde .agents/agents)
Antigravity -> .agent/rules, .agent/workflows, AGENTS.md, GEMINI.md
```

El catálogo de agentes, skills y comandos vive en:

```text
.agents/AGENTS-CATALOG.md
```

### Verificación

Después de instalar:

```bash
frontend-agent-devkit verify
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

### Herramientas soportadas

- Codex
- Cursor
- Claude Code
- Antigravity

Antigravity cambia rápido; valida en tu versión instalada si reconoce `.agent/rules` y `.agent/workflows`. `AGENTS.md` y `GEMINI.md` quedan como fallback conservador.

### Migración desde npm `wiki-frontend`

Mismo contenido y enfoque; el paquete y el comando CLI pasan a llamarse `frontend-agent-devkit`.

### Actualizar el starter en un proyecto que ya lo usa

Desde la raíz del proyecto:

```bash
npx frontend-agent-devkit init
```

Para traer de nuevo los archivos del kit **sobrescribiendo** los que ya hubiera (úsalo con cuidado si personalizaste `docs/`, `AGENTS.md` o `.agents/`):

```bash
npx frontend-agent-devkit init --force
```

Si además quieres refrescar los adaptadores del IDE:

```bash
npx frontend-agent-devkit init --tool cursor --force
```

(sustituye `cursor` por `claude`, `codex`, `antigravity` o `all` según tu caso).

---

## Parte 5: Uso en tu proyecto

### Flujo mental (resumen)

```text
Instalas el kit en tu repo
        |
        v
El agente lee AGENTS.md + wiki/index.md (poco, en orden)
        |
        v
Rellenas / ajustas docs/ y docs/architecture/* con la realidad del proyecto (discovery)
        |
        v
Ante una tarea nueva: orquestador -> modo de trabajo (Spec Kit / Mini Spec / directo) -> agente especializado
        |
        v
Implementación respetando límites de capas y validación acordada
```

### Primer uso: discovery

Después de instalar, abre tu agente/IDE y usa la misma regla: **`/orquestador`** + pedido en natural:

```text
/orquestador Necesito: discovery del proyecto sin editar código ni refactorizar. Explora el repo y resume stack, estructura de carpetas, arquitectura que detectes, scripts relevantes de package.json, riesgos y qué debería actualizarse primero en docs/.

Respuesta que espero: tipo de tarea (discovery), modo de trabajo sugerido, qué archivos de docs/ conviene tocar después y si hace falta otro agente para documentar.
```

Ese primer discovery debe ayudarte a ajustar:

```text
docs/project-overview.md
docs/architecture/overview.md
docs/architecture/boundaries.md
docs/operations/scripts.md
```

No empieces por implementar. Primero deja claro cómo está organizado el proyecto.

### Uso diario (segundo paso, tras `/orquestador`)

El **primer mensaje** de cada objetivo nuevo debe ser **`/orquestador` + lo que necesitas** ([Parte 3](#parte-3-orquestador)). Cuando el orquestador ya te haya dicho *qué rol* usar, puedes pegar en **ese mismo hilo** prompts como los de abajo (son referencias; el orquestador puede acotarlos o combinarlos).

#### Feature (tras clasificación)

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

#### Bug

```text
Usa Bug Triage Agent. Reproduce, aisla y propone el fix minimo para: <descripcion del bug>.
```

#### Arquitectura

```text
Usa Architecture Alignment Agent. Revisa como hacer este cambio respetando la arquitectura definida, sin reestructurar de mas: <descripcion>.
```

#### UI

```text
Usa Design System Agent y UI Implementation Agent. Revisa componentes existentes antes de crear nuevos y cubre estados UI esperados.
```

#### QA

```text
Usa QA Agent. Revisa gaps de tests, estados UI, regresiones, accesibilidad basica y validaciones contra la spec.
```

#### Docs

```text
Usa Project Docs Agent. Actualiza docs/ segun cambios reales. No inventes comandos ni resultados.
```

### Principio de contexto gradual

El agente no debe leer toda la documentación. Ruta mínima:

1. `AGENTS.md`
2. `wiki/index.md`
3. Documento específico según la tarea
4. Archivos afectados

Ejemplo: si vas a tocar UI reusable, no necesitas leer toda la wiki. Lee:

```text
AGENTS.md
wiki/index.md
wiki/architecture/frontend-clean-architecture.md
wiki/architecture/frontend-clean-architecture/presentation-design-system.md
docs/design-system/*
```

---

## Parte 6: Referencia

### Documentos importantes

```text
AGENTS.md
.agents/AGENTS-CATALOG.md
.agents/agents/orchestrator.md
wiki/index.md
wiki/map.md
wiki/architecture/frontend-clean-architecture.md
wiki/delivery/subagents-index.md
wiki/delivery/subagents-prompts.md
wiki/delivery/feature-solution-plan.md
wiki/delivery/spec-driven-development.md
wiki/delivery/architecture-alignment.md
```
