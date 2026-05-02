# Estrategia De Librerias

## Principio

Cada dependencia debe tener una responsabilidad clara. No se agregan librerias por preferencia personal, moda o copia de otro proyecto.

## Matriz De Decision

| Necesidad | Opciones comunes | Criterio |
| --- | --- | --- |
| Framework UI | React, Vue, Svelte, Angular | Equipo, ecosistema, SSR/SPA, proyecto existente. |
| Routing | React Router, Next Router, TanStack Router | Complejidad de rutas, loaders, type-safety. |
| Server state | TanStack Query, SWR, Apollo, RTK Query | Cache, invalidacion, GraphQL/REST, SSR. |
| Client state | React state, Zustand, Redux, Jotai, XState | Alcance global, complejidad, maquinas de estado. |
| Forms | React Hook Form, native, Formik | Validacion, performance, formularios complejos. |
| Validation | Zod, Valibot, Yup | Inferencia TS, runtime validation, compatibilidad. |
| UI primitives | Radix, shadcn/ui, Headless UI | Accesibilidad, ownership visual, velocidad. |
| Styling | Tailwind, CSS Modules, CSS-in-JS | Design system, SSR, preferencias del equipo. |
| Testing | Vitest/Jest, Testing Library, Playwright | Velocidad, framework, E2E real. |
| Mocking | MSW, fakes locales, fixtures | Contratos HTTP, desarrollo sin backend, tests. |

## Reglas

- En proyectos nuevos, revisar y decidir librerias necesarias antes de empezar a codificar features.
- Si el proyecto ya existe, preferir el stack actual salvo que haya una razon explicita para migrar.
- Si una libreria es opcional, documentar el disparador que justifica agregarla.
- No usar una libreria de estado global para datos remotos cacheables.
- No usar una libreria de formularios si los formularios son triviales.
- No crear design system desde cero si un sistema existente ya resuelve el problema.

## Checkpoint Antes De Codificar

Para proyectos nuevos, no empezar implementacion productiva hasta completar este checkpoint:

- Framework elegido.
- Router elegido o decision de no usar router.
- Estrategia de styling/UI elegida.
- Estrategia de formularios elegida.
- Estrategia de validacion elegida.
- Estrategia de server state elegida.
- Estrategia de testing elegida.
- Herramienta E2E decidida si hay flujos criticos.
- Librerias opcionales justificadas o descartadas.
- Scripts iniciales de `lint`, `test`, `build` y coverage definidos.

Salida esperada:

```md
## Library Checkpoint

| Necesidad | Decision | Motivo | Instalar ahora | Notas |
| --- | --- | --- | --- | --- |
| Server state | TanStack Query | API remota con cache | Si | Query keys por feature |
```

## Dependencias Recomendadas Por Defecto En React

Para una app React/Vite mediana:

- `@tanstack/react-query`: server state.
- `react-hook-form`: formularios.
- `zod` + resolver: validacion.
- `react-router-dom` o TanStack Router: rutas.
- `vitest` + Testing Library: unit/component.
- `playwright`: E2E.
- `msw`: mocks HTTP opcionales.
- `lucide-react`: iconos.

Agregar solo si aplica:

- `zustand`: estado UI global real.
- `xstate`: flujos con estados finitos complejos.
- `i18next`: internacionalizacion real.
- `sentry` u otro: error tracking.
- `storybook`: design system/component catalog.

## Registro De Decision

Cada proyecto deberia mantener una tabla:

```md
| Libreria | Decision | Motivo | Alternativas | Estado |
| --- | --- | --- | --- | --- |
| TanStack Query | Adoptada | Cache e invalidacion de API | SWR | Activa |
```
