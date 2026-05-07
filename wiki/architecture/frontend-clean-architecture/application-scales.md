# Escalas De Aplicacion

## Objetivo

Aclarar que **la forma del codigo en `src/` es una sola**: el arquetipo descrito en [Capas Y Estructura](layers-and-structure.md). No hay variantes oficiales por tamano de equipo, numero de integraciones o “fase inicial”.

## Que Significa Escala Aqui

- **Escala de adopcion**: cuanto codigo migras por iteracion en un repo existente, no que arbol de carpetas eliges para un proyecto nuevo.
- **Proyectos nuevos**: crear desde el inicio `core`, `domains`, `infra`, `presentation`, `design-system`, `main` segun ese arquetipo (vacío donde aun no haya archivos esta bien; omitir capas enteras no).
- **Proyectos existentes**: documentar lo real, medir la brecha frente al arquetipo y alinear con cambios minimos siguiendo [Architecture Alignment](../../delivery/architecture-alignment.md).

## Fuera De Alcance De Esta Guia

Definir layouts tipo `app/`, `features/` y `shared/` como alternativa valida al modelo de capas. Eso contradice esta wiki; solo procede con **excepcion explicita del usuario** registrada en `docs/architecture/decisions.md`.

## Relacion Con [Simplificacion](simplification.md)

La simplificacion reduce duplicacion y archivos innecesarios **dentro** del modelo; no sustituye dominios, infra o presentation por una jerarquia plana.
