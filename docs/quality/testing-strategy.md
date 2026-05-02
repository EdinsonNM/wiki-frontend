# Testing Strategy

## Comandos

Actualizar con scripts reales:

```bash
pnpm lint
pnpm test
pnpm build
```

## Criterio

- Unit tests para logica pura.
- Component tests para UI con estados.
- Integration tests para boundaries.
- E2E para flujos criticos.

No bajar thresholds para hacer pasar tests.

## Matriz De Riesgo

| Cambio | Prueba Minima |
| --- | --- |
| Logica pura | Unit test |
| Componente con estados | Component test |
| Formulario | Validaciones + submit/error |
| Integracion API | Loading/error/success con mock |
| Ruta critica usuario | E2E o prueba manual documentada |
| Refactor sin cambio observable | Tests existentes + smoke/build |

## Reporte Esperado

```md
## Validacion

- Comando:
- Resultado:
- Cobertura/Gaps:
- Riesgo residual:
```
