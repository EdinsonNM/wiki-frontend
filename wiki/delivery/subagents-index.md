# Indice De Subagentes Frontend

## Objetivo

Definir el conjunto de subagentes recomendados para guiar, planificar, construir, validar y documentar proyectos frontend. Este documento funciona como indice maestro: identifica tipos de agente, proposito, orden de intervencion y limites de responsabilidad.

Los prompts detallados, skills necesarias, comandos operativos y plantillas de cada agente deben ramificarse en documentos posteriores.

## Principios

- El usuario no deberia tener que saber de antemano que agente necesita.
- Todo proyecto empieza con entendimiento antes que implementacion.
- La arquitectura debe servir al flujo de trabajo, no bloquearlo.
- Cada agente tiene ownership claro y evita pisar el trabajo de otro.
- Los agentes de implementacion trabajan contra specs, mini specs o tasks directas, no contra intuicion suelta.
- QA, documentacion y release no son pasos opcionales al final; son responsabilidades explicitas del sistema.

## Orden General De Uso

```text
orquestador -> discovery -> solucion -> arquitectura -> design system -> frontend -> integracion -> QA -> docs -> release
```

El orden puede comprimirse para tareas pequenas, pero no debe invertirse cuando hay incertidumbre. Si el proyecto es nuevo, discovery y arquitectura pesan mas. Si el proyecto ya existe, discovery identifica convenciones actuales antes de proponer cambios.

## Mapa De Subagentes

| Orden | Subagente | Proposito | Cuando entra | Salida esperada |
| --- | --- | --- | --- | --- |
| 1 | Orquestador Frontend | Guiar al usuario y decidir el flujo de trabajo | Siempre al inicio o ante dudas | Ruta recomendada: nuevo, existente, feature, bug, refactor o QA |
| 2 | Discovery Analyst | Analizar producto, repo, stack, scripts, riesgos y restricciones | Inicio de proyecto o primera sesion en repo existente | Resumen de contexto, riesgos y siguiente paso |
| 3 | Solution Planner | Decidir si usar Spec Kit, Mini Spec o task directa | Antes de abordar features, bugs o mejoras | Modo de trabajo, criterio de salida y validacion |
| 4 | Product UX Analyst | Aclarar flujos, usuarios, estados y criterios de aceptacion | Cuando la intencion aun es ambigua | User stories, estados UI y criterios verificables |
| 5 | Frontend Architect | Definir boundaries, capas, rutas, estado, integraciones y tradeoffs | Proyectos nuevos, refactors, features medianas/grandes | Plan tecnico y decisiones de arquitectura |
| 6 | Library Strategist | Revisar dependencias necesarias y evitar librerias innecesarias | Antes de codificar en proyectos nuevos o cambios con nueva capacidad | Decision de librerias, descartes y riesgos |
| 7 | Design System Agent | Mantener tokens, primitives, componentes base y coherencia visual | Al crear UI reusable o normalizar interfaz | Reglas de componentes, tokens y uso de UI existente |
| 8 | UI Implementation Agent | Construir componentes, vistas, responsive y accesibilidad basica | Cuando la spec o task ya esta lista | UI implementada y validada visualmente |
| 9 | Frontend Feature Agent | Implementar comportamiento frontend, estado, formularios, rutas y flujos | Features aprobadas con plan claro | Feature funcional con tests proporcionales |
| 10 | Integration Agent | Conectar APIs, mocks, adapters, contratos y variables de entorno | Cuando hay datos remotos o boundaries externos | Integracion aislada, testeable y documentada |
| 11 | Bug Triage Agent | Reproducir, aislar y proponer fix minimo para bugs | Incidentes, regresiones o comportamiento inesperado | Hipotesis, fix, test de regresion y validacion |
| 12 | Architecture Alignment Agent | Alinear arquitectura existente con la arquitectura objetivo | Proyectos existentes con capas mezcladas, boundaries debiles o deuda estructural | Plan de migracion incremental, cambios seguros y reglas actualizadas |
| 13 | Design System Refactor Agent | Refactorizar UI existente hacia el design system objetivo | Proyectos existentes con componentes duplicados, estilos dispersos o tokens inconsistentes | Inventario UI, plan de consolidacion y migracion de componentes |
| 14 | Refactor Agent | Mejorar estructura local sin cambiar comportamiento observable | Deuda tecnica o preparacion para features | Refactor acotado, riesgos controlados y tests intactos |
| 15 | QA Agent | Revisar tests, coverage, accesibilidad, estados y regresiones | Antes de cerrar feature o release | Gaps priorizados, tests agregados o reporte de riesgo |
| 16 | Performance Agent | Detectar riesgos de bundle, rendering, data fetching y UX percibida | Apps grandes, problemas de velocidad o rutas criticas | Hallazgos medibles y optimizaciones recomendadas |
| 17 | Project Docs Agent | Actualizar documentacion viva del proyecto | Cuando cambian patrones, features, flujos, decisiones o logica de usuario | `docs/` actualizado con el estado real del proyecto |
| 18 | Diagram Documentation Agent | Crear diagramas para entender arquitectura, flujos, estados y datos | Cuando una explicacion visual reduce ambiguedad | Diagramas HTML/SVG usando `diagram-design` y enlazados desde docs |
| 19 | Wiki Steward Agent | Mantener la wiki como fuente de verdad metodologica | Cuando cambian reglas, procesos, arquitectura objetivo o convenciones reutilizables | `wiki/` actualizado, consistente y navegable |
| 20 | Release Agent | Preparar build, CI, deploy preview, changelog y handoff | Antes de entrega o publicacion | Estado de entrega, comandos ejecutados y pendientes |

## Subagentes Core

Estos agentes forman el flujo minimo para construir frontend con orden.

### Orquestador Frontend

Responsable de recibir la intencion del usuario, detectar el tipo de trabajo y activar el flujo correcto. No implementa por defecto; primero decide si el usuario necesita discovery, spec, plan, bug triage, QA o release.

Debe responder preguntas como:

- Es un proyecto nuevo o existente?
- Es una feature, bug, refactor, deuda tecnica o entrega?
- Hace falta Spec Kit completo, Mini Spec o task directa?
- Que agente deberia intervenir despues?

### Discovery Analyst

Responsable de entender el proyecto antes de cualquier decision fuerte. Lee estructura, scripts, stack, documentacion, convenciones, riesgos y restricciones.

En proyectos nuevos, ayuda a convertir una idea en contexto inicial. En proyectos existentes, evita imponer una arquitectura externa sin respetar patrones locales.

### Solution Planner

Responsable de convertir una necesidad en estrategia de trabajo. Decide el nivel de formalidad necesario:

- `Spec Kit completo` para features medianas/grandes, multiagente o con riesgo.
- `Mini Spec` para bugs o mejoras pequenas con criterio claro.
- `Task directa` para cambios triviales.

Este agente protege el proceso contra vibecoding.

### Frontend Architect

Responsable de decisiones tecnicas estructurales: capas, boundaries, rutas, estado, integraciones, contratos, carpetas y tradeoffs. Trabaja despues del discovery y antes de dividir tareas grandes.

No deberia redisenar un proyecto existente salvo que exista un riesgo claro, bloqueo real o deuda que impida avanzar.

### Design System Agent

Responsable de coherencia visual y reutilizacion. Decide si corresponde usar primitives existentes, crear componentes compartidos, crear componentes de dominio o extender tokens.

Debe evitar duplicar componentes que ya existen y mantener reglas claras para:

- `presentation/components/ui`
- `presentation/components/shared`
- `presentation/components/domain/{feature}`
- `design-system/tokens`
- `design-system/primitives`
- `design-system/themes`

### Architecture Alignment Agent

Responsable de llevar un proyecto existente hacia la arquitectura objetivo de forma incremental. No asume que el repo puede reescribirse desde cero; primero identifica como esta organizado hoy, que partes ya funcionan y que cambios conviene hacer por etapas.

Debe enfocarse en:

- Separar responsabilidades mezcladas entre UI, estado, integracion y dominio.
- Definir boundaries realistas para el repo actual.
- Proponer una ruta de migracion por modulos, features o carpetas.
- Evitar cambios masivos sin cobertura o criterio de salida.
- Mantener compatibilidad con features existentes mientras se migra.

Su salida principal no es "arquitectura ideal", sino un plan de alineacion aplicable.

### Design System Refactor Agent

Responsable de refactorizar la UI existente para alinearla con el design system objetivo. Trabaja cuando ya existen pantallas, componentes, estilos o librerias visuales dispersas.

Debe enfocarse en:

- Inventariar primitives, componentes compartidos y componentes de dominio existentes.
- Detectar duplicacion visual y variantes innecesarias.
- Migrar estilos sueltos hacia tokens, themes o primitives.
- Proponer una estrategia para reemplazar componentes sin romper pantallas.
- Definir que componentes deben vivir en `ui`, `shared`, `domain` o `design-system`.

Este agente complementa al Design System Agent: uno define la direccion del sistema, el otro ayuda a migrar proyectos existentes hacia esa direccion.

### Frontend Feature Agent

Responsable de implementar comportamiento funcional de features. Trabaja con scope definido, criterios de aceptacion y validacion.

Puede coordinarse con UI Implementation Agent e Integration Agent, pero no deberia mezclar todas las responsabilidades si el cambio es grande.

### QA Agent

Responsable de encontrar gaps antes del cierre: tests faltantes, regresiones, estados UI no cubiertos, accesibilidad basica, validaciones, errores y comportamiento responsive.

Debe priorizar riesgos reales sobre cobertura decorativa.

### Project Docs Agent

Responsable de que la documentacion viva del proyecto refleje lo que realmente existe. Actualiza `docs/` cuando cambian features, flujos de usuario, patrones locales, logica de negocio, integraciones, decisiones del proyecto o guias de mantenimiento.

No debe inventar comandos no verificados.

### Diagram Documentation Agent

Responsable de crear diagramas que ayuden a entender el proyecto. Debe usar `diagram-design` como referencia visual y tecnica para producir diagramas editoriales en HTML/SVG.

Referencia obligatoria:

- [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design)

Debe usar diagramas cuando aclaren mejor que un parrafo:

- Arquitectura de la aplicacion.
- Capas y boundaries.
- Flujo de usuario.
- Secuencia entre UI, estado, adapters y API.
- Estados de una feature.
- Modelo de datos frontend o entidades relevantes.
- Migracion incremental de arquitectura o design system.

Tipos recomendados segun necesidad:

- `architecture`: componentes y conexiones.
- `flowchart`: decisiones o flujos de usuario.
- `sequence`: mensajes en el tiempo.
- `state`: estados y transiciones.
- `ER / data model`: entidades y campos.
- `swimlane`: flujo cross-functional entre usuario, UI, frontend, API y servicios.
- `layers`: capas de arquitectura.
- `timeline`: roadmap o migracion incremental.

### Wiki Steward Agent

Responsable de mantener `wiki/` como fuente de verdad metodologica y reutilizable para el tipo de proyecto. No documenta cada cambio operativo del proyecto; documenta reglas, procesos, patrones objetivo, convenciones, flujos de agentes y criterios que deben guiar futuras decisiones.

Debe intervenir cuando:

- Cambia la arquitectura objetivo.
- Cambian las reglas para agentes, skills o prompts.
- Se agrega una convencion reutilizable.
- Se actualiza el flujo de trabajo para features, bugs, QA, release o documentacion.
- Un aprendizaje del proyecto debe convertirse en regla para futuros proyectos.

## Subagentes Especializados

Estos agentes se activan segun el tipo de problema.

### Product UX Analyst

Aclara intencion, flujos, estados y criterios de aceptacion. Es util cuando el usuario sabe que quiere lograr pero aun no esta claro como se comporta la experiencia.

### Library Strategist

Evalua dependencias antes de instalar o construir. Es clave en proyectos nuevos y cuando una feature requiere formularios, tablas, charts, fechas, auth, data fetching, i18n, testing, animaciones o UI compleja.

### UI Implementation Agent

Construye la parte visual concreta: componentes, layouts, responsive, estados visuales y accesibilidad basica. Usa el design system antes de crear piezas nuevas.

### Integration Agent

Aisla contratos externos: APIs, mocks, adapters, schemas, env vars y clientes HTTP. Su trabajo permite que UI y dominio no dependan directamente de detalles de infraestructura.

### Bug Triage Agent

Responde como abordar un bug: reproducir, aislar, formular hipotesis, corregir con cambio pequeno, agregar test de regresion y verificar.

### Refactor Agent

Actua cuando el problema no es una feature nueva sino estructura, duplicacion o deuda tecnica. Debe preservar comportamiento observable y evitar refactors mezclados con cambios funcionales.

Este agente cubre refactors locales. Para alineacion amplia de arquitectura usar Architecture Alignment Agent. Para migracion visual o consolidacion de componentes usar Design System Refactor Agent.

### Performance Agent

Analiza bundle, renderizado, data fetching, memoizacion, lazy loading, imagenes, rutas criticas y UX percibida. Debe trabajar con evidencia, no con micro-optimizaciones prematuras.

### Release Agent

Prepara la salida: build, lint, tests, CI, deploy preview, changelog, versionado y pendientes. Puede coordinar con QA, Project Docs Agent y Wiki Steward Agent antes de entregar.

## Estructura De Documentacion Del Proyecto

Un proyecto frontend de este tipo debe separar `wiki/` y `docs/`.

### `wiki/`

La wiki es la fuente de verdad metodologica. Define como se debe trabajar en este tipo de proyecto.

Contenido esperado:

- Arquitectura objetivo.
- Convenciones de carpetas y boundaries.
- Reglas de agentes, skills y comandos.
- Flujos de trabajo para proyecto nuevo, existente, feature, bug, refactor, QA y release.
- Criterios de decision para librerias, testing, design system y documentacion.
- Runbooks reutilizables.
- Log de cambios de la wiki.

Regla:

```text
Si la informacion guia decisiones futuras en cualquier proyecto similar, va en wiki/.
```

### `docs/`

`docs/` mantiene la documentacion viva del proyecto concreto. Describe que existe hoy, como funciona y que decisiones locales se tomaron.

Estructura recomendada:

```text
docs/
  README.md
  project-overview.md
  architecture/
    overview.md
    decisions.md
    boundaries.md
    diagrams/
      app-architecture.html
      frontend-layers.html
  design-system/
    overview.md
    tokens.md
    components.md
    migration.md
    diagrams/
      component-map.html
      design-system-migration.html
  features/
    <feature-name>/
      overview.md
      user-flows.md
      states.md
      decisions.md
      diagrams/
        flow.html
        states.html
  integrations/
    api.md
    auth.md
    environment.md
    diagrams/
      api-sequence.html
  user-logic/
    roles-permissions.md
    business-rules.md
    validations.md
  quality/
    testing-strategy.md
    coverage-notes.md
    qa-checklists.md
  operations/
    setup.md
    scripts.md
    release.md
  log/
    changelog.md
    decisions-log.md
```

Regla:

```text
Si la informacion explica este proyecto especifico, su comportamiento actual o sus decisiones locales, va en docs/.
```

### Relacion Entre `wiki/` Y `docs/`

- `wiki/` define el metodo.
- `docs/` documenta la realidad del proyecto.
- Si `docs/` descubre una decision repetible, Wiki Steward Agent evalua moverla o resumirla en `wiki/`.
- Si `wiki/` cambia una regla, Project Docs Agent revisa si `docs/` necesita alinearse.
- Los diagramas viven en `docs/**/diagrams/` y se enlazan desde las paginas `.md` correspondientes.
- Los diagramas deben generarse con `diagram-design` cuando se necesite una pieza visual cuidada y navegable.

## Flujos Recomendados

### Proyecto Nuevo

```text
Orquestador Frontend
-> Discovery Analyst
-> Product UX Analyst
-> Frontend Architect
-> Library Strategist
-> Design System Agent
-> Solution Planner
-> Frontend Feature Agent / UI Implementation Agent / Integration Agent
-> QA Agent
-> Project Docs Agent
-> Release Agent
```

### Proyecto Existente

```text
Orquestador Frontend
-> Discovery Analyst
-> Solution Planner
-> Architecture Alignment Agent si la arquitectura actual debe alinearse
-> Design System Refactor Agent si la UI actual debe consolidarse
-> Frontend Architect si hay decisiones estructurales nuevas
-> agente especializado segun problema
-> QA Agent
-> Project Docs Agent si aplica
-> Wiki Steward Agent si cambia una regla reutilizable
-> Release Agent si hay entrega
```

### Feature Nueva

```text
Solution Planner
-> Product UX Analyst si hay ambiguedad
-> Frontend Architect si afecta arquitectura
-> Library Strategist si requiere dependencia
-> Design System Agent si afecta UI reusable
-> Frontend Feature Agent
-> Integration Agent si hay API/datos
-> QA Agent
-> Project Docs Agent
-> Diagram Documentation Agent si el flujo necesita explicacion visual
```

### Bug

```text
Solution Planner
-> Bug Triage Agent
-> Frontend Feature Agent o Integration Agent segun causa
-> QA Agent
-> Project Docs Agent si cambia comportamiento documentado
-> Wiki Steward Agent si revela una regla reutilizable
```

### Refactor

```text
Solution Planner
-> Discovery Analyst si el area no esta clara
-> Architecture Alignment Agent si el refactor cruza capas o boundaries
-> Design System Refactor Agent si el refactor afecta UI reusable, tokens o primitives
-> Frontend Architect si requiere decision tecnica nueva
-> Refactor Agent para cambios locales acotados
-> QA Agent
-> Diagram Documentation Agent si ayuda a explicar la migracion
-> Project Docs Agent si cambia estructura del proyecto
-> Wiki Steward Agent si cambia convencion reutilizable
```

### Alineacion De Proyecto Existente

```text
Orquestador Frontend
-> Discovery Analyst
-> Architecture Alignment Agent
-> Design System Refactor Agent si hay deuda visual
-> Solution Planner
-> Refactor Agent / UI Implementation Agent / Integration Agent segun el primer incremento
-> QA Agent
-> Diagram Documentation Agent
-> Project Docs Agent
-> Wiki Steward Agent si la alineacion cambia reglas generales
```

## Reglas De Delegacion

- Un agente debe tener un objetivo concreto y una salida verificable.
- Un agente no debe editar archivos fuera de su ownership declarado.
- Si dos agentes necesitan la misma zona del codigo, el Orquestador debe secuenciarlos.
- El Discovery Analyst y Product UX Analyst pueden trabajar sin editar codigo.
- El QA Agent puede proponer fixes, pero la implementacion debe asignarse claramente.
- El Project Docs Agent documenta resultados reales del proyecto, no intenciones no implementadas.
- El Diagram Documentation Agent no debe dibujar si una tabla o parrafo explica mejor el punto.
- El Wiki Steward Agent solo actualiza reglas reutilizables; no convierte la wiki en bitacora operativa del proyecto.
- El Release Agent no debe ocultar validaciones fallidas; debe reportarlas como pendientes.

## Documentos A Ramificar Despues

Este indice debe derivar en documentos especificos:

- `subagents-prompts.md`: prompt base, entradas, salidas y limites de cada agente.
- `subagents-skills.md`: skills necesarias por agente y estructura recomendada.
- `subagents-workflows.md`: flujos detallados para proyecto nuevo, existente, feature, bug, refactor y release.
- `subagents-ownership.md`: reglas de ownership, paralelizacion y coordinacion multiagente.
- `subagents-examples.md`: ejemplos de uso por escenarios reales.

## Criterio De Uso

Si el usuario no sabe que pedir, empezar con el Orquestador Frontend.

Si el agente no entiende el proyecto, activar Discovery Analyst.

Si el agente no sabe como abordar una feature o bug, activar Solution Planner.

Si el cambio toca estructura, activar Frontend Architect.

Si el cambio toca UI reusable, activar Design System Agent.

Si el proyecto existente necesita migrarse hacia la arquitectura objetivo, activar Architecture Alignment Agent.

Si el proyecto existente tiene estilos dispersos, componentes duplicados o primitives inconsistentes, activar Design System Refactor Agent.

Si el cambio esta listo para construir, activar Frontend Feature Agent, UI Implementation Agent o Integration Agent segun el area.

Si el cambio parece terminado, activar QA Agent, Project Docs Agent, Wiki Steward Agent y Release Agent segun el nivel de entrega.

Si el cambio necesita documentacion viva del proyecto, activar Project Docs Agent.

Si el cambio necesita explicacion visual de arquitectura, flujo, estado, datos o migracion, activar Diagram Documentation Agent y usar `diagram-design`.

Si el aprendizaje debe convertirse en regla reutilizable para este tipo de proyecto, activar Wiki Steward Agent.
