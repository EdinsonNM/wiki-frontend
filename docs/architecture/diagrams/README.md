# Architecture Diagrams

Guardar aqui diagramas de arquitectura, capas y boundaries.

Preferir diagramas cuando aclaren mejor que texto:

- capas
- data flow
- secuencias UI/API
- migracion incremental

## Convencion

- Usar nombres descriptivos: `frontend-layers.html`, `api-sequence.html`, `migration-plan.html`.
- Enlazar cada diagrama desde el `.md` que lo explica.
- No crear diagramas decorativos: deben responder una pregunta concreta.

## Preguntas Que Un Diagrama Debe Responder

- Que capas existen y como dependen entre si?
- Donde entra/sale informacion externa?
- Que boundaries no deben cruzarse?
- Que parte se migra ahora y que queda fuera de alcance?
