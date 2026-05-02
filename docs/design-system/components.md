# Components

## Inventario

| Componente | Ubicacion | Alcance | Notas |
| --- | --- | --- | --- |
| Button | `src/presentation/components/ui` | UI base | Registrar si existe |
| Input | `src/presentation/components/ui` | UI base | Registrar si existe |
| Modal/Dialog | `src/presentation/components/ui` | UI base | Registrar si existe |
| DataTable | `src/presentation/components/shared` | Cross-domain | Registrar si existe |
| EmptyState | `src/presentation/components/shared` | Cross-domain | Registrar si existe |

## Clasificacion

- `ui`: primitives visuales reutilizables.
- `shared`: componentes reutilizables entre dominios.
- `domain/{feature}`: componentes especificos de negocio.
- `design-system`: tokens, temas y primitives base/headless.

## Regla

Crear un componente nuevo solo si no existe equivalente reutilizable o si extender el existente romperia su responsabilidad.

