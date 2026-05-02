# Estrategia De Librerias

## Principio

No se agregan librerias por catalogo ni por moda. Cada dependencia tiene un rol claro: tipos seguros, validacion, UX, estado, mantenibilidad, testabilidad o acuerdo de arquitectura.

Los ejemplos de dominio (citas, filtros admin, etc.) son **ilustrativos**: sustituye por los modulos reales del proyecto sin cambiar las reglas.

## Frontend: inclusion obligatoria

Para un frontend React alineado con esta wiki y clean architecture, **debes** usar:

| Libreria | Inclusion | Rol |
| --- | --- | --- |
| **Zod** | Obligatoria | Validar datos no confiables; schemas compartidos; tipos inferidos desde schema |
| **React Hook Form** | Obligatoria | Formularios con bajo re-render; integracion con Zod (`zodResolver`) |
| **TanStack Query** | Obligatoria | Server state: fetch, cache, loading/error, refetch |
| **shadcn/ui** + **Tailwind** | Obligatoria | Componentes accesibles **copiados al repo**; sistema visual con Tailwind |
| **`ts-serializable`** | Obligatoria si hay **modelos de dominio** como clases | Hidratar instancias **solo despues** de validar JSON con Zod |
| **TSyringe** (+ `reflect-metadata`) | Obligatoria si el frontend usa **use cases** y repos abstractos | Inyectar implementaciones de repository en use cases; no DI caotica en componentes |
| **RxJS** | Obligatoria **dentro de cada use case** (`domains/.../usecases`) | Composicion y orquestacion asincrona **solo** ahi; hacia afuera sigue siendo `Promise<T>` |
| **Zustand** | Prioritaria **cuando aplique el criterio** (ver seccion Zustand) | Estado UI complejo o cuando **React Context** obligaria a refrescar/re-renderizar casi toda la app; no usar Context como parche si Zustand aisla mejor el slice |

**Prohibiciones recurrentes:**

- No usar **Zustand** para server state: ese rol es de **TanStack Query**.
- No usar **RxJS** en presentation (componentes, hooks de vista): no sustituye a TanStack Query ni se expone Observable al arbol UI salvo decision explicita y acotada.
- No hidratar **`ts-serializable`** directo desde JSON externo sin pasar por **Zod** antes.

## Librerias de arquitectura (tabla resumen)

Misma normativa que la tabla anterior, en formato compacto para el repo (adaptar columnas si hay backend en el mismo documento):

```md
| Libreria | Frontend | Backend | Notas |
| --- | --- | --- | --- |
| Zod | Si | Segun proyecto | Ver seccion Zod |
| React Hook Form | Si | No | Ver seccion RHF |
| TanStack Query | Si | No | Server state |
| Zustand | Prioritaria si criterio | No | Estado complejo o Context re-renderiza demasiado arbol |
| RxJS | Si (en use cases) | No | Obligatorio dentro capa use case; execute(): Promise |
| shadcn/ui | Si | No | Codigo copiado + Tailwind |
| TSyringe | Si con CA | No recomendado en NestJS | Ver seccion TSyringe |
| ts-serializable | Si bajo convencion CA | Segun proyecto | Siempre despues de Zod |
```

## Zod

**Uso obligatorio / recomendado:**

- Validar formularios (login, altas, filtros, etc.).
- Validar identificadores y parametros construidos desde UI (por ejemplo IDs, flags tipo `include`, grupos `fields` en queries de detalle cuando aplique).
- Inferir tipos desde schemas.
- Integrarse con React Hook Form mediante `@hookform/resolvers` y `zodResolver`.
- Definir schemas en archivos `*.schema.ts`, fuera de clases DTO.

**No hacer:**

- No usar Zod para **reemplazar** todo el tipado TypeScript. Su valor es validar **datos no confiables**: inputs de usuario, query params armados en UI y, si se acordo, respuestas API como defensa extra.

## React Hook Form

**Uso obligatorio / recomendado:**

- Formularios con bajo re-render.
- Flujos con muchos campos o selects dependientes (por ejemplo alta compleja, wizard, filtros de listados admin).
- Integracion con Zod.

**Aplicacion tipica:** cualquier pantalla donde mantener validacion consistente y pocos re-renders sea prioritario.

## Zustand

**Prioridad** frente a React Context cuando:

1. El estado es **suficientemente complejo** (muchas ramas, suscripciones, actualizaciones frecuentes, estado compartido entre rutas o layouts) y Context + memo **no** lo dejan mantenible.
2. Resolver el mismo problema con **React Context** supondria que el proveedor envuelve un **arbol grande** y cualquier cambio **dispara re-render de casi toda la web** (o de un subarbol tan amplio que equivalga a eso). En ese caso **Zustand es la opcion preferida** para ese slice de estado: los consumidores se suscriben por selector y evitan el refresco global.

**Tambien usar** para estado global UI que no sea servidor ni formulario activo, cuando aplique: preferencias persistentes, vista de calendario o filtros de vista, columnas o paneles, etc.

**Reglas:**

- No usar Zustand para server state: ese rol es **TanStack Query**.
- No usar Context como estado global amplio si el coste de re-render invalida la UX o el rendimiento: valorar Zustand primero segun los criterios anteriores.

## TanStack Query

**Uso obligatorio / recomendado:**

- Fetch de listados, detalles y recursos remotos que la feature necesite.
- Cache por **query keys** estables (incluir en la key todo lo que cambie el contrato: IDs, `include`, `fields`, etc., cuando aplique).
- Estados `isPending`, `error`, `data`.
- Refetch al cambiar parametros cuando corresponda.
- Devtools en desarrollo si aportan valor.

Evita reimplementar a mano loading, cache y sincronizacion de datos remotos.

**Con clean architecture:** los `queryFn` deben ejecutar **use cases** (orquestacion testeable), no invocar el cliente HTTP crudo desde la UI cuando ya exista ese boundary.

## RxJS

Solo aplica cuando el repo tenga **capa de use cases** segun clean architecture; al introducir o extender esa capa, los use cases **nuevos o tocados** cumplen esta norma.

**Obligatorio en frontend** dentro de la capa de **use cases** (`domains/.../usecases`): la implementacion del caso de uso compone trabajo asincrono con RxJS (`pipe`, `switchMap`, `forkJoin`, `defer`, etc.). Asi hay un **unico estilo** de orquestacion en esa capa y se evita mezclar cadenas ad hoc de `Promise` que luego no escalan.

**Regla de superficie hacia afuera:**

```text
UseCase.execute(...) -> Promise<T>
RxJS es solo detalle interno del use case (p. ej. lastValueFrom / firstValueFrom al final)
```

**Usar para (dentro del use case):**

- Una o varias llamadas a repositories.
- Combinar resultados, coordinar llamadas dependientes, errores y cancelaciones de forma explicita.

**No usar para:**

- Reemplazar TanStack Query en presentation.
- Exponer Observables al arbol de React (salvo excepcion documentada del proyecto).

## shadcn/ui

**Uso obligatorio / recomendado:**

- Button, Input, Checkbox, Select, Tabs, Alert, Badge, Card para patrones repetidos o superficies de herramientas.
- Componentes **copiados** al codigo del proyecto para poder ajustarlos.
- Mantener **Tailwind** como sistema visual.

**Nota:** shadcn/ui no es una dependencia de componentes opaca: es patron de **copiar codigo**. Anade solo los componentes que uses.

## TSyringe en frontend

**Obligatoria** cuando el frontend implementa **clean architecture** con use cases y repositories abstractos.

**Uso recomendado:**

- Inyectar implementations de repositories en use cases.
- Mantener `domains/{module}/usecases` desacoplado de `infra/{module}/services`.
- Facilitar tests unitarios sustituyendo repositories por mocks o fakes.
- Usar `@registry()` en cada use case para evitar un registro central enorme.
- Que los use cases implementen una interfaz base comun con metodo `execute`.

**Arquetipo de carpetas (ejemplo):**

```text
apps/web/src/
  core/
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
      hooks/
      mocks/
      mappers/
  presentation/
    {feature}/
      components/
      pages/
      forms/
      view-models/
  main/
    providers/
    router/
    App.tsx
    main.tsx
```

**Regla:** TSyringe no debe aparecer en componentes React como acoplamiento global. Los componentes consumen **hooks** o servicios ya compuestos.

**Ejemplo conceptual:**

```ts
// domains/appointment/repositories/appointment.repository.ts
export abstract class AppointmentRepository {
  abstract findDetail(
    query: AppointmentDetailQueryDTO,
  ): Promise<AppointmentDetail | null>;
}

export const APPOINTMENT_REPOSITORY = Symbol("APPOINTMENT_REPOSITORY");
```

```ts
// domains/appointment/usecases/get-appointment-detail.usecase.ts
import { defer, from, lastValueFrom } from "rxjs";
import { inject, injectable, registry } from "tsyringe";
import { UseCase } from "../../shared/usecases/usecase";
import { AppointmentServiceRepository } from "../../../infra/appointment/services/appointment.service.repository";

@injectable()
@registry([
  {
    token: APPOINTMENT_REPOSITORY,
    useClass: AppointmentServiceRepository,
  },
])
export class GetAppointmentDetailUseCase
  implements UseCase<AppointmentDetailQueryDTO, AppointmentDetail | null>
{
  constructor(
    @inject(APPOINTMENT_REPOSITORY)
    private readonly repository: AppointmentRepository,
  ) {}

  execute(query: AppointmentDetailQueryDTO): Promise<AppointmentDetail | null> {
    return lastValueFrom(
      defer(() => from(this.repository.findDetail(query))),
    );
  }
}
```

Casos mas elaborados amplian el `pipe` dentro del mismo patron; la firma publica sigue siendo `Promise<T>`.

Con este enfoque, **TanStack Query** ejecuta use cases en lugar de llamar directamente al cliente HTTP desde la vista.

## ts-serializable

Permitido en frontend cuando forma parte del arquetipo de modelos de dominio.

**Uso recomendado:**

- Hidratar modelos en `src/domains/{module}/models` (o ruta equivalente del repo).
- Mantener metodos y helpers en clases de dominio.
- Usar `@jsonProperty()` y `@jsonName()` segun convencion del proyecto.
- Convertir **JSON ya validado** a instancias de modelo.
- Renombrado estructural simple cuando la API use snake_case o nombres inconsistentes (siempre sobre datos ya validados).

**Regla obligatoria:**

```text
JSON externo -> schema Zod -> mapper o modelo Serializable
```

**No hacer:**

```text
JSON externo -> modelo Serializable directo
```

Motivo: sin validacion previa, el comportamiento por defecto puede ocultar datos incorrectos. Solo es aceptable hidratar con `ts-serializable` cuando **Zod** ya valido la forma externa del JSON.

**Mapeo:**

- `@jsonName()` para renombrado estructural simple.
- Mapper explicito para traduccion semantica o contratos externos malos.
- Mantener nombres de dominio consistentes en codigo aunque la API use otros idiomas o convenciones.

Si aparece una referencia ambigua a otro paquete similar (`tts-serializable`, etc.), confirmar el **nombre exacto del paquete npm** antes de adoptarlo.

## Matriz De Decision

Referencia rapida cuando aun no hay tabla de proyecto cerrada:

| Necesidad | Opciones comunes | Criterio |
| --- | --- | --- |
| Framework UI | React, Vue, Svelte, Angular | Equipo, ecosistema, SSR/SPA |
| Routing | React Router, Next Router, TanStack Router | Complejidad, loaders, type-safety |
| Server state | TanStack Query, SWR, Apollo, RTK Query | Este documento fija TanStack Query para el stack objetivo |
| Client state | React state, Context, Zustand | Zustand prioritario si estado complejo o Context implica re-render masivo |
| Forms | React Hook Form, native, Formik | Este documento fija RHF |
| Validation | Zod, Valibot, Yup | Este documento fija Zod |
| UI primitives | Radix, shadcn/ui, Headless UI | Este documento fija shadcn/ui + Tailwind |

## Reglas

- Completar la **tabla resumen** del proyecto y el checkpoint antes de codificar features nuevas.
- En proyectos existentes, alinear el codigo hacia estas librerias por incrementos; el legado solo permanece con excepcion documentada del usuario.
- Documentar en `docs/architecture/decisions.md` cualquier excepcion (por ejemplo saltar RxJS en un use case o usar Context donde este documento pide Zustand).

## Checkpoint Antes De Codificar

- Framework y router acordados.
- Tabla de librerias de arquitectura actualizada en este archivo (o enlace unico si vive en otro doc del wiki).
- Server state: TanStack Query con convencion de query keys.
- Formularios: RHF + Zod + `*.schema.ts`.
- UI: shadcn/ui acorde al set de componentes necesarios + Tailwind.
- Si hay CA frontend: TSyringe + contrato `execute()` + repos abstractos + **RxJS dentro de cada use case** (superficie `Promise<T>`).
- Estado UI compartido complejo o sensible a Context: valorar **Zustand** antes que Context amplio.
- Si hay modelos clase dominio: `ts-serializable` solo despues de Zod.
- Scripts `lint`, `test`, `build` definidos.

## Dependencias Recomendadas Iniciales (referencia pnpm)

Ejemplo para una app `web` en monorepo (ajustar filtros y rutas):

```bash
pnpm --filter web add zod react-hook-form @hookform/resolvers @tanstack/react-query rxjs zustand tsyringe reflect-metadata ts-serializable
cd apps/web
pnpm dlx shadcn@latest init
```

Instalar desde shadcn **solo** los componentes que uses.

## Registro De Decision

Para cambios respecto a esta lista base:

```md
| Libreria | Decision | Motivo | Estado |
| --- | --- | --- | --- |
| … | … | … | … |
```
