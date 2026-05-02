# Pruebas Y Coverage Frontend

## Objetivo

Definir una estrategia de pruebas proporcional al riesgo del proyecto.

## Piramide Recomendada

```text
E2E: pocos, flujos criticos
Integration/component: estados UI y boundaries
Unit: logica pura, mappers, helpers, schemas
```

## Unit Tests

Cubrir:

- Helpers.
- Mappers.
- Schemas.
- Use cases.
- Reglas de dominio frontend.
- Transformaciones de datos.

## Component Tests

Cubrir:

- Render principal.
- Loading.
- Empty.
- Error.
- Success.
- Validacion de formularios.
- Interacciones relevantes.
- Accesibilidad basica.

## Integration Tests

Cubrir:

- Hooks + services con mocks.
- Formularios conectados a mutaciones.
- Rutas protegidas.
- Boundaries de error.
- Adapters de API/storage.

## E2E

Cubrir solo flujos que rompen el producto si fallan:

- Login/onboarding.
- Crear/editar entidad principal.
- Checkout/pago.
- Busqueda critica.
- Configuracion o workflow central.

## Coverage

Meta general:

```text
70% minimo como baseline
80% recomendado para logica critica
```

No perseguir 100% si no reduce riesgo. Priorizar rutas criticas, reglas y boundaries.

## Scripts Esperados

```json
{
  "scripts": {
    "lint": "...",
    "test": "...",
    "test:coverage": "...",
    "build": "...",
    "e2e": "..."
  }
}
```

## Quality Gate

Antes de entregar:

- Lint pasa.
- Tests relevantes pasan.
- Build pasa.
- Coverage no baja sin justificacion.
- E2E critico pasa si esta configurado.
- Documentacion actualizada si cambian comandos o flujos.
