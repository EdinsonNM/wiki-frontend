# Presentation Y Design System

## Presentation

Contiene:

- Paginas.
- Componentes.
- Formularios.
- View models.
- Estados visuales.

## Estructura De Referencia

```text
src/
  presentation/
    components/
      ui/
        Button/
        Input/
        Table/
        Modal/
      shared/
        DataTable/
        PageHeader/
        EmptyState/
      domain/
        orders/
          OrderCard/
          OrderTable/
          OrderStatusBadge/
        users/
          UserCard/
          UserAvatar/
    pages/
      orders/
        OrdersPage.tsx
        OrderDetailPage.tsx
      dashboard/
        DashboardPage.tsx
    layouts/
      DashboardLayout.tsx
      AuthLayout.tsx
    hooks/
  design-system/
    tokens/
      colors.ts
      spacing.ts
      typography.ts
    primitives/
      Box.tsx
      Text.tsx
      Stack.tsx
    themes/
      light.ts
      dark.ts
```

## Reglas Antes De Crear Un Componente

- Buscar si ya existe un componente equivalente en `presentation/components/ui`, `presentation/components/shared`, `presentation/components/domain` o `design-system`.
- Reutilizar o extender el componente existente cuando su responsabilidad coincida.
- Crear componentes visuales atomicos en `presentation/components/ui`.
- Crear componentes reutilizables entre dominios en `presentation/components/shared`.
- Crear componentes especificos de negocio en `presentation/components/domain/{feature}`.
- Crear tokens, temas y primitivos base en `design-system`, no dentro de una feature.
- Evitar duplicar variantes de botones, inputs, tablas, modales, headers, empty states o badges si ya existe una base reusable.

## Prohibiciones

- No llamar `fetch` directo desde componentes salvo prototipos muy pequenos.
- No duplicar validaciones de schemas.
- No mezclar mapping de API dentro de JSX.
- No inventar estilos locales si ya existen tokens, primitivas o componentes.

