# Estrategia Frontend

## Objetivo

Definir un plan estrategico frontend aplicable a cualquier proyecto antes de implementar. La estrategia debe explicar que se va a construir, para quien, con que stack, bajo que restricciones y como se validara.

## Entradas Necesarias

Antes de decidir arquitectura o librerias, recopilar:

- Tipo de producto: SaaS, ecommerce, dashboard, herramienta interna, portal publico, app educativa, juego, etc.
- Usuarios principales y tareas criticas.
- Estado del proyecto: nuevo, existente, migracion, refactor, rescue project.
- Stack actual si existe.
- Restricciones: tiempo, equipo, infraestructura, SEO, accesibilidad, performance, compliance.
- Integraciones: APIs, auth, pagos, CMS, analytics, feature flags, i18n.
- Quality gates esperados: lint, tests, coverage, E2E, visual regression, CI.
- Criterios de entrega: demo local, deploy preview, PR, paquete publicado, documentacion.

## Decisiones Estrategicas

Documentar explicitamente:

| Decision | Pregunta |
| --- | --- |
| Framework | React Vite, Next.js, Remix, Astro, Vue, Svelte u otro. |
| Rendering | SPA, SSR, SSG, islands, hybrid. |
| Routing | File-based, router declarativo, nested routes. |
| Estado servidor | TanStack Query, framework loaders, SWR, Apollo, RTK Query. |
| Estado cliente | React state, Zustand, Redux, Jotai, XState. |
| Formularios | React Hook Form, Formik, native forms, framework actions. |
| Validacion | Zod, Valibot, Yup, schemas compartidos. |
| UI system | Design system existente, shadcn/ui, Radix, MUI, Chakra, custom. |
| Styling | Tailwind, CSS Modules, vanilla-extract, styled-components, CSS puro. |
| Testing | Vitest/Jest, Testing Library, Playwright/Cypress. |
| Observabilidad | Logging, analytics, error tracking, web vitals. |

## Resultado Esperado

La pagina de estrategia del proyecto real debe terminar con:

- Vision de producto.
- Alcance frontend.
- Stack elegido y razones.
- Tradeoffs aceptados.
- Riesgos conocidos.
- Capas o modulos principales.
- Flujo de trabajo con specs.
- Quality gates obligatorios.
- Plan incremental.

## Plantilla De Estrategia

```md
# Estrategia Frontend

## Contexto

## Usuarios Y Flujos Criticos

## Stack Elegido

## Arquitectura Propuesta

## Integraciones

## Estado Y Datos

## Testing Y Calidad

## Riesgos

## Plan Incremental
```

## Principios

- Primero entender el producto, luego elegir patrones.
- No agregar dependencias sin responsabilidad clara.
- Preferir convenciones existentes cuando el proyecto ya existe.
- Mantener decisiones reversibles cuando el dominio aun es incierto.
- Separar estrategia de implementacion: la estrategia orienta; las specs ejecutan.
