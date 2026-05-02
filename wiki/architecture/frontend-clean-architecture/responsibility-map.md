# Mapa De Responsabilidades

| Necesito cambiar... | Ubicacion |
| --- | --- |
| Configuracion global | `src/core/config` |
| Cliente HTTP base | `src/core/http` |
| Errores transversales | `src/core/errors` |
| Reglas de validacion | `src/domains/{feature}/schemas` |
| Tipos de transporte | `src/domains/{feature}/dtos` |
| Modelo de negocio frontend | `src/domains/{feature}/models` |
| Caso de uso | `src/domains/{feature}/usecases` |
| Contrato de datos | `src/domains/{feature}/repositories` |
| Implementacion HTTP/storage | `src/infra/{feature}/services` |
| Mapper externo -> dominio | `src/infra/{feature}/mappers` |
| Hook para componentes | `src/infra/{feature}/hooks` |
| Mock/fake | `src/infra/{feature}/mocks` |
| Primitivos UI visuales | `src/presentation/components/ui` |
| Componentes cross-domain | `src/presentation/components/shared` |
| Componentes de dominio | `src/presentation/components/domain/{feature}` |
| Paginas | `src/presentation/pages/{feature}` |
| Layouts | `src/presentation/layouts` |
| Hooks UI/presentacion | `src/presentation/hooks` |
| Tokens de diseño | `src/design-system/tokens` |
| Primitivos headless/base | `src/design-system/primitives` |
| Temas | `src/design-system/themes` |
| Providers y router | `src/main` |

## Regla

Antes de crear una ubicacion nueva, buscar equivalentes existentes en el proyecto.

