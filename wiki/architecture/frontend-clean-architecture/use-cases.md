# Use Cases

## Cuando Usarlos

Use cases recomendados cuando:

- Hay reglas de negocio frontend.
- Se combinan varias fuentes de datos.
- Se quiere testear logica sin React.
- El flujo es importante para el producto.

## Contrato Base

```ts
export interface UseCase<TInput, TOutput> {
  execute(input: TInput): Promise<TOutput>;
}
```

## Regla

No crear use cases ceremoniales para logica trivial. Usarlos cuando reducen acoplamiento o mejoran testabilidad.

