# Organizacion Del Proyecto Frontend

## Proyecto Nuevo

Estructura base recomendada:

```text
.
  src/
    core/
    domains/
    infra/
    presentation/
      components/
        ui/
        shared/
        domain/
      pages/
      layouts/
      hooks/
    design-system/
      tokens/
      primitives/
      themes/
    main/
  public/
  tests/
  e2e/
  specs/
  wiki/
  AGENTS.md
  README.md
  package.json
```

En proyectos nuevos no se define una estructura alternativa por tamano; la base anterior es la referencia.

## Proyecto Existente

Antes de mover carpetas:

- Identificar convenciones actuales.
- Ver que imports y alias existen.
- Revisar tests y CI.
- Evitar refactors masivos antes de una feature.
- Introducir nuevas capas gradualmente.
- Antes de crear componentes, buscar equivalentes en `presentation/components` y `design-system`.

Estrategia segura:

1. Documentar estructura actual.
2. Elegir una feature piloto.
3. Aplicar arquitectura en esa feature.
4. Medir si reduce complejidad.
5. Expandir solo si aporta valor.

## Monorepo

```text
.
  apps/
    web/
  packages/
    ui/
    config/
    shared/
  specs/
  wiki/
  AGENTS.md
  package.json
  pnpm-workspace.yaml
```

Reglas:

- `packages/ui` para componentes compartidos reales.
- `packages/shared` solo para tipos/utilidades estables.
- Evitar acoplar frontend a internals de backend.
- Cada app debe poder ejecutar lint/test/build.

## Regla De Componentes

En proyectos frontend, mantener esta clasificacion:

- `presentation/components/ui`: primitives visuales como `Button`, `Input`, `Table`, `Modal`.
- `presentation/components/shared`: componentes cross-domain como `DataTable`, `PageHeader`, `EmptyState`.
- `presentation/components/domain/{feature}`: componentes especificos de negocio como `OrderCard` o `UserAvatar`.
- `presentation/pages/{feature}`: paginas y rutas visibles.
- `presentation/layouts`: layouts de aplicacion.
- `presentation/hooks`: hooks de presentacion.
- `design-system/tokens`: colores, spacing y tipografia.
- `design-system/primitives`: primitivas headless o base como `Box`, `Text`, `Stack`.
- `design-system/themes`: temas `light`, `dark` u otros.

Antes de crear un componente nuevo, confirmar si ya existe una pieza reutilizable. Si existe, reutilizarla o extenderla en su ubicacion actual. Si no existe, crearla en la carpeta que corresponda a su alcance para evitar duplicacion y conservar coherencia visual.

## Documentacion Minima

- `README.md`: como instalar, correr, probar y desplegar.
- `AGENTS.md`: reglas para agentes.
- `specs/`: features bajo Spec Kit.
- `wiki/`: decisiones y conocimiento persistente.
- `.env.example`: variables sin secretos.
