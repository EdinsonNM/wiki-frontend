# Agentes, Skills Y Comandos

## Objetivo

Definir una forma reusable de organizar trabajo con agentes LLM en proyectos frontend.

Para decidir que subagente activar, en que orden y con que salida esperada, leer primero [Indice De Subagentes Frontend](subagents-index.md).

## Roles De Agentes

| Agente | Responsabilidad | Puede editar |
| --- | --- | --- |
| Frontend architect | Decisiones de arquitectura, boundaries, riesgos | docs, planes, ADRs |
| Explorer | Leer codigo y responder preguntas concretas | no edita |
| Frontend worker | Implementar features frontend | areas asignadas |
| UI worker | Componentes, estilos, accesibilidad, responsive | presentation/ui |
| QA worker | Tests, coverage, gaps de calidad | tests y fixtures |
| Project docs worker | README, docs del proyecto, features, patrones, evidencias | docs |
| Diagram docs worker | Diagramas de arquitectura, flujos, estados y datos | docs/**/diagrams |
| Wiki steward | Wiki como fuente de verdad metodologica | wiki |
| Release worker | build, CI, deploy preview, changelog | config y docs asignados |

## Reglas Multiagente

- Definir ownership antes de delegar.
- Evitar que dos agentes editen los mismos archivos.
- Cada agente reporta archivos tocados.
- Explorer responde preguntas especificas, no hace ensayos largos.
- Worker implementa y prueba dentro de su scope.
- Project docs worker no inventa comandos no verificados.
- Diagram docs worker usa `diagram-design` para diagramas HTML/SVG cuando una visualizacion aporta mas claridad que texto.
- Wiki steward actualiza reglas reutilizables, no documentacion operativa del proyecto.

## Skills Recomendadas

Crear skills locales cuando un procedimiento se repetira.

```text
.agents/skills/
  frontend-discovery/
    SKILL.md
  frontend-architecture/
    SKILL.md
  frontend-spec-kit/
    SKILL.md
  frontend-testing/
    SKILL.md
  frontend-ui-review/
    SKILL.md
  frontend-project-docs/
    SKILL.md
  diagram-design/
    SKILL.md
  frontend-wiki-steward/
    SKILL.md
```

## Plantilla De Skill

```md
# Skill: frontend-testing

Use when: necesitas agregar, revisar o ejecutar pruebas frontend.

Read first:
- wiki/index.md
- wiki/delivery/testing-and-coverage.md
- package.json

Workflow:
1. Detectar framework de test.
2. Identificar comportamiento critico.
3. Agregar tests proporcionales al riesgo.
4. Ejecutar test relevante.
5. Reportar comandos y resultado.

Do not:
- Cambiar comportamiento productivo sin pedirlo.
- Bajar thresholds de coverage para hacer pasar tests.
```

## Comandos Operativos

### Discovery

```text
Haz discovery del proyecto frontend. Lee package.json, estructura de carpetas, README, AGENTS.md si existe y configs principales. Resume stack, scripts, riesgos y siguiente paso recomendado. No edites codigo.
```

### Arquitectura

```text
Propón arquitectura frontend para este proyecto usando la wiki. Debe incluir capas, convenciones de carpetas, estado, integraciones, testing y tradeoffs. Si el proyecto ya existe, respeta patrones actuales salvo riesgos claros.
```

### Spec

```text
Crea una spec con Spec Kit para esta feature frontend. Describe comportamiento observable, flujos, estados, criterios de aceptacion, fuera de alcance y riesgos. No implementes.
```

### Implementacion

```text
Implementa las tasks frontend aprobadas. Mantén cambios dentro del scope, agrega tests proporcionales y ejecuta validaciones relevantes. Reporta archivos cambiados y comandos ejecutados.
```

### Elegir Modo De Solucion

```text
Antes de implementar, decide si este trabajo requiere Spec Kit completo, Mini Spec o task directa. Justifica la eleccion y define problema, comportamiento esperado, criterio de salida, validacion y documentacion afectada.
```

### QA

```text
Revisa brechas de tests y coverage contra la spec y la wiki. Prioriza bugs, regresiones, estados UI faltantes, accesibilidad basica y flujos criticos.
```

### Docs

```text
Actualiza README/wiki/AGENTS.md segun la implementacion real. No inventes comandos. Si no pudiste verificar algo, marcalo como pendiente.
```
