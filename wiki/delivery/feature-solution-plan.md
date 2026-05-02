# Plan De Solucion De Features

## Objetivo

Definir como proceder ante una feature, bug o iteracion incompleta sin improvisar en cada vuelta. La meta es mantener contexto, documentacion y decisiones vivas, evitando vibecoding.

## Es Necesario Usar Spec Kit?

Usar Spec Kit cuando se cumpla al menos una condicion:

- La feature tiene mas de una pantalla, estado o flujo.
- Hay impacto en arquitectura, datos, permisos, rutas o integraciones.
- Hay ambiguedad de producto.
- Participaran varios agentes o personas.
- La feature requiere criterios de aceptacion claros.
- El cambio puede romper comportamiento existente.
- El trabajo probablemente tomara mas de una sesion.

No es necesario usar Spec Kit completo cuando:

- Es un bug pequeno y bien entendido.
- Es un ajuste visual acotado.
- Es una mejora de copy.
- Es una refactorizacion local con bajo riesgo.
- Es una tarea de configuracion simple.

Regla practica:

```text
Si la explicacion cabe en una task con criterio de salida claro, no necesitas Spec Kit completo.
Si necesitas explicar contexto, comportamiento, riesgos y plan, usa Spec Kit.
```

## Modos De Trabajo

### Spec Kit Completo

Usar para features medianas/grandes.

```text
spec -> plan -> library checkpoint -> tasks -> implement -> verify -> commit -> docs
```

Salida minima:

- `spec.md`
- `plan.md`
- `tasks.md`
- tests proporcionales
- commits por user story o grupo de tasks
- docs actualizadas

### Mini Spec

Usar para bugs o features pequenas que no justifican carpeta completa de Spec Kit.

```md
## Mini Spec

### Problema

### Comportamiento Esperado

### Criterio De Salida

### Archivos Probables

### Validacion
```

Flujo:

```text
mini spec -> implement -> verify -> commit -> docs si aplica
```

### Task Directa

Usar solo si el cambio es trivial y no requiere nueva decision.

```text
Cambiar X en Y. Criterio de salida: Z. Validar con comando W.
```

## Flujo Sin Spec Kit

Si no se usa Spec Kit, igual debe existir trazabilidad.

1. Escribir una Mini Spec en issue, PR, comentario de trabajo o wiki.
2. Identificar archivos o areas afectadas.
3. Revisar documentacion actual antes de editar.
4. Confirmar librerias si el proyecto es nuevo o si la solucion requiere dependencias.
5. Implementar el cambio mas pequeno que cumpla el criterio.
6. Agregar o ajustar tests.
7. Ejecutar validaciones relevantes.
8. Actualizar docs si cambio comportamiento, arquitectura, comandos o convenciones.
9. Hacer commit pequeno con mensaje claro.

## Mantener Documentacion Actualizada Sin Spec Kit

Actualizar documentacion cuando:

- Cambia un comando.
- Cambia una variable de entorno.
- Cambia una ruta, flujo o comportamiento visible.
- Se agrega una dependencia.
- Se cambia arquitectura o ubicacion de responsabilidades.
- Se introduce una convencion nueva.
- Se descubre una decision que debe repetirse en el futuro.

No hace falta actualizar docs cuando:

- Es un fix interno sin impacto observable.
- Es un cambio de estilo local.
- Es un test adicional sin cambio de comportamiento.

Checklist rapido:

```text
README: comandos, setup, envs, ejecucion.
AGENTS.md: reglas de agentes, arquitectura, comandos, prohibiciones.
wiki: decisiones, flujos, arquitectura, runbooks.
specs/issues: criterios de aceptacion y evidencia de cierre.
```

## Como Evitar Vibecoding

Vibecoding aparece cuando se edita sin hipotesis, sin criterio de salida o sin verificar contra una fuente de verdad.

Para evitarlo:

- Antes de editar, escribir el problema en una frase.
- Definir comportamiento esperado.
- Definir criterio de salida verificable.
- Leer codigo y docs relevantes.
- Formular una hipotesis de causa o estrategia.
- Hacer un cambio pequeno.
- Verificar con test, build, screenshot o reproduccion manual.
- Registrar el aprendizaje si afecta futuras iteraciones.

## Loop Para Bugs

```text
reproducir -> aislar -> hipotesis -> fix pequeno -> test de regresion -> verificar -> commit -> docs si aplica
```

Reglas:

- No cambiar varias causas posibles al mismo tiempo.
- Si no se puede reproducir, crear una prueba o caso manual que capture la sospecha.
- Agregar test de regresion cuando el bug sea importante o pueda volver.
- Si el bug revela una regla no documentada, actualizar wiki o `AGENTS.md`.

## Loop Para Feature Incompleta

```text
comparar contra criterio -> listar gaps -> priorizar -> task pequena -> implementar -> verificar -> actualizar criterio -> commit
```

Preguntas:

- Que criterio de aceptacion no se cumple?
- Es problema de UX, datos, estado, integracion, validacion o arquitectura?
- Hay test que deberia haberlo capturado?
- La documentacion prometia algo distinto?
- Conviene corregir la feature o ajustar la spec?

## Definition Of Ready

Una feature esta lista para implementar cuando:

- Problema y usuario estan claros.
- Comportamiento esperado esta escrito.
- Criterios de aceptacion son verificables.
- Dependencias/librerias necesarias estan revisadas.
- Riesgos principales estan identificados.
- Existe plan de tests proporcional.

## Definition Of Done

Una feature esta terminada cuando:

- Cumple criterios de aceptacion.
- Tiene tests proporcionales al riesgo.
- Lint/build/tests relevantes pasan o quedan pendientes documentados.
- La documentacion afectada esta actualizada.
- Hay commit pequeno por user story o grupo coherente de tasks.
- Riesgos residuales estan anotados.

## Prompt Operativo

```text
Antes de implementar, decide el modo de trabajo para esta feature o bug:
- Spec Kit completo
- Mini Spec
- Task directa

Justifica la eleccion. Luego define comportamiento esperado, criterio de salida, validacion y si hace falta actualizar docs. No empieces a codificar hasta tener ese plan minimo.
```
