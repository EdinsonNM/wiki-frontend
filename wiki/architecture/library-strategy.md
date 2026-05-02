# Estrategia De Librerias (frontend)

Sin dependencias por moda. Ejemplos de dominio (citas, filtros, etc.) son **ilustrativos**; las reglas no cambian.

## Semántica para IA / agentes

| Etiqueta | Significado |
| --- | --- |
| **OBL** | Obligatorio siempre que aplique el alcance indicado |
| **SI_CA** | Solo si hay clean architecture (use cases + repos abstractos en `domains/...`) |
| **SI_DOM** | Solo si hay modelos de dominio como clases |
| **PRIOR** | Usar cuando se cumple el criterio; preferido frente a Context amplio |
| **PROH** | Prohibido |

**PROH (global):** Zustand para datos remotos (eso es TanStack Query). RxJS/Observables en presentation o como sustituto de TanStack Query. `JSON → ts-serializable` sin paso **Zod** previo.

---

## Tabla maestra

| Librería | Alcance | Rol / obligación |
| --- | --- | --- |
| **Zod** | **OBL** | Runtime: forms, params UI→API, IDs/flags en queries; tipos inferidos; archivos `*.schema.ts`; `zodResolver` con RHF. No reemplazar todo el tipado TS. |
| **React Hook Form** | **OBL** | Formularios; bajo re-render; siempre con Zod. |
| **TanStack Query** | **OBL** | Server state; keys estables (incluye todo lo que cambie el contrato); `queryFn` ejecuta **use case** si existe CA (no HTTP crudo desde UI). |
| **shadcn/ui + Tailwind** | **OBL** | UI accesible **copiada** al repo; instalar solo componentes usados. |
| **TSyringe** + `reflect-metadata` | **SI_CA** | DI repo→use case; `@registry()` por UC; interfaz `execute`; **no** TSyringe en componentes (UI→hooks). |
| **RxJS** | **SI_CA** | **OBL** dentro de `domains/.../usecases`: orquestación con `pipe`/etc.; borde público `execute(): Promise<T>` (`lastValueFrom`/`firstValueFrom`). Use cases nuevos o editados cumplen al existir la capa. |
| **Zustand** | **PRIOR** | Estado UI complejo **o** Context implicaría re-render de árbol grande/casi toda la app → preferir store con selectores. También prefs, filtros de vista, layout, paneles. Nunca server state. |
| **ts-serializable** | **SI_DOM** | Hidratar clases en `domains/.../models` solo tras **Zod**; `@jsonProperty`/`@jsonName`; mapper si semántica API≠dominio. Confirmar paquete npm si el nombre es ambiguo. |

---

## Árbol CA (referencia única)

`domains/{feature}/models|repositories|usecases|dtos|schemas` · `infra/{feature}/services|hooks|mocks|mappers` · `presentation/{feature}/components|pages|forms|view-models` · `main/providers|router|App.tsx`

---

## Ejemplo mínimo: repo abstracto + UC + RxJS + TSyringe

Interfaz `UseCase<I,O>` en el `shared` del proyecto.

```ts
// domains/x/repositories/x.repository.ts
export abstract class XRepository {
  abstract load(id: string): Promise<Entity | null>;
}
export const X_REPOSITORY = Symbol("X_REPOSITORY");

// domains/x/usecases/get-x.usecase.ts
import { defer, from, lastValueFrom } from "rxjs";
import { inject, injectable, registry } from "tsyringe";

@injectable()
@registry([{ token: X_REPOSITORY, useClass: XServiceRepository }])
export class GetXUseCase implements UseCase<{ id: string }, Entity | null> {
  constructor(@inject(X_REPOSITORY) private readonly repo: XRepository) {}
  execute(q: { id: string }): Promise<Entity | null> {
    return lastValueFrom(defer(() => from(this.repo.load(q.id))));
  }
}
```

UCs más complejos amplían el `pipe`; la firma sigue siendo `Promise<T>`. TanStack Query llama al UC, no al fetch directo.

---

## Anti‑patrones (check rápido)

- Remote state en Zustand o en Context re-renderizando medio árbol sin necesidad.
- Promesas “a mano” dentro de use cases cuando **SI_CA** (usar RxJS en la implementación).
- Serializable antes que Zod.

---

## Antes de codificar

Router/stack acordados · Query keys definidas · RHF+Zod+`*.schema.ts` · shadcn acotado · si CA: TSyringe+RxJS en UCs · si DOM clase: serializable post‑Zod · si estado UI masivo: valorar Zustand antes que Context amplio · scripts lint/test/build.

**pnpm (ej. monorepo):** `pnpm --filter web add zod react-hook-form @hookform/resolvers @tanstack/react-query rxjs zustand tsyringe reflect-metadata ts-serializable` → `pnpm dlx shadcn@latest init` en la app.

Excepciones a esta lista: `docs/architecture/decisions.md`.
