# Capas Y Estructura

## Objetivo

Separar UI, estado, dominio e integraciones para que los agentes puedan leer y editar solo el area necesaria.

## Arquetipo Completo

```text
src/
  core/
    config/
    errors/
    http/
    logging/
    types/
  domains/
    {feature}/
      models/
      repositories/
      usecases/
      dtos/
      schemas/
  infra/
    {feature}/
      services/
      adapters/
      hooks/
      mocks/
      mappers/
  presentation/
    components/
      ui/
      shared/
      domain/
        {feature}/
    pages/
      {feature}/
    layouts/
    hooks/
  design-system/
    tokens/
    primitives/
    themes/
  main/
    providers/
    router/
    app.tsx
    main.tsx
```

## Uso

Usar el arquetipo completo en proyectos grandes, de larga vida, con dominio importante o multiples integraciones.

En proyectos existentes, mapear carpetas actuales contra estas responsabilidades antes de mover archivos.

