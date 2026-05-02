# Simplificacion

## Senales Para Simplificar

Simplificar si:

- El proyecto tiene menos de 3 flujos.
- No hay dominio complejo.
- No hay multiples integraciones.
- El equipo no mantendra la app a largo plazo.

## Formas De Simplificar

- Usar `app/features/shared` en vez de todas las capas.
- Mantener services y hooks dentro de la feature.
- Crear use cases solo cuando hay reglas testeables.
- Documentar excepciones en `docs/architecture/overview.md`.

## Regla Final

La arquitectura debe pagar su renta. Si no reduce riesgo o complejidad, se recorta.

