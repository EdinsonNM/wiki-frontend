
# Index

Catalogo vivo de la wiki frontend template. Leer este archivo primero antes de responder preguntas, planificar un proyecto o actualizar paginas.

## Hubs

- [README](README.md): entrada principal y uso de la plantilla.
- [Mapa](map.md): grafo documental y ruta de lectura.
- [Schema](schema.md): reglas para mantener esta wiki con el patron LLM Wiki.
- [Fuentes](sources.md): fuentes leidas y paginas derivadas.
- [Log](log.md): bitacora append-only.

## Estrategia Y Arquitectura

- [Estrategia Frontend](architecture/frontend-strategy.md): como decidir stack, alcance, riesgos, convenciones y tradeoffs para cualquier frontend.
- [Clean Architecture Frontend](architecture/frontend-clean-architecture.md): hub de lectura gradual para capas, dependencias, responsabilidades, escalas, datos, hooks y UI.
- [Estrategia De Librerias](architecture/library-strategy.md): criterios para elegir dependencias por responsabilidad.
- [Integracion Frontend](architecture/frontend-integration.md): contratos con APIs, mocks, adapters, variables de entorno y boundaries sin asumir dominio.

## Delivery

- [Discovery Del Proyecto](delivery/project-discovery.md): preguntas y checklist para entender proyectos nuevos o existentes.
- [Organizacion Del Proyecto Frontend](delivery/project-organization.md): estructuras recomendadas para repos nuevos, apps existentes y monorepos.
- [Spec Driven Development Con Spec Kit](delivery/spec-driven-development.md): flujo spec -> plan -> tasks -> implement -> verify.
- [Plan De Solucion De Features](delivery/feature-solution-plan.md): criterios para elegir Spec Kit, Mini Spec o task directa, manteniendo docs y evitando vibecoding.
- [Indice De Subagentes Frontend](delivery/subagents-index.md): mapa maestro de subagentes, proposito, orden de uso y flujos de activacion.
- [Prompts De Subagentes Frontend](delivery/subagents-prompts.md): ubicacion y contrato de prompts listos para usar.
- [Agentes, Skills Y Comandos](delivery/agents-skills-commands.md): diseno de agentes, skills reutilizables y comandos operativos.
- [Plantilla AGENTS.md](delivery/agents-md-template.md): archivo base para guiar agentes en un proyecto frontend.
- [Runbook Frontend Generico](delivery/frontend-runbook.md): ciclos de implementacion aplicables a cualquier proyecto.
- [Pruebas Y Coverage Frontend](delivery/testing-and-coverage.md): estrategia de unit, component, integration, E2E y coverage.
- [Alineacion De Arquitectura](delivery/architecture-alignment.md): como respetar arquitectura definida y migrar incrementalmente sin reestructuras impulsivas.
- [Compatibilidad De Herramientas](delivery/tool-compatibility.md): rutas para Codex, Cursor, Claude Code y Antigravity.

## Conceptos Centrales

- `discovery`: entender producto, usuarios, restricciones y estado del codigo antes de implementar.
- `strategy`: decisiones tecnicas explicitas y tradeoffs.
- `architecture`: limites entre dominio, infraestructura, UI y bootstrap.
- `agents`: roles de trabajo para exploracion, implementacion, QA, docs y release.
- `subagents index`: catalogo maestro para decidir que subagente activar, en que orden y con que salida.
- `wiki/`: fuente de verdad metodologica para el tipo de proyecto.
- `docs/`: documentacion viva del proyecto concreto: patrones, features, logicas de usuario, integraciones, decisiones y diagramas.
- `skills`: procedimientos reutilizables que el agente puede invocar.
- `commands`: prompts o comandos operativos para repetir flujos de trabajo.
- `AGENTS.md`: contrato local de trabajo para agentes dentro del repo.
- `Spec Kit`: sistema para convertir intencion en specs, planes, tareas y validacion.
- `Mini Spec`: version liviana para bugs o features pequenas sin carpeta completa de Spec Kit.
- `anti-vibecoding`: trabajar con problema, hipotesis, criterio de salida y validacion antes de editar.
- `library checkpoint`: revision obligatoria de librerias antes de codificar en proyectos nuevos.
- `small commits`: commits por user story o grupo coherente de tasks, no commits gigantes al final.
- `architecture alignment`: adaptar cambios a la arquitectura definida y documentar equivalencias locales antes de mover carpetas.
- `tool adapters`: instalacion de reglas, skills, comandos y subagentes segun IDE/agente.

## Estado

Ultima ingesta: ver [Log](log.md).
