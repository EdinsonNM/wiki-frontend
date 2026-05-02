# Business Rules

Reglas de negocio frontend que afectan comportamiento visible.

| Regla | Ubicacion | Validacion |
| --- | --- | --- |
| Regla principal | `src/domains/{feature}` o equivalente | test esperado |

## Criterio

Si una regla se usa en mas de un componente, extraerla a dominio, hook o helper testeable segun la arquitectura del proyecto.

