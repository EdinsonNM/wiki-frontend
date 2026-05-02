# Datos, DTOs Y Schemas

## DTOs Y Schemas

Reglas:

- Schemas en archivos `*.schema.ts`.
- DTOs delgados.
- Validacion de datos no confiables con Zod/Valibot u otra libreria.
- Mappers explicitos cuando el contrato externo no coincide con el dominio UI.

## Ubicacion Base

```text
src/domains/{feature}/dtos
src/domains/{feature}/schemas
src/infra/{feature}/mappers
```

## Regla

No duplicar validaciones entre formularios, dominio e integracion. Si una regla se repite, moverla a un schema/helper compartido.

