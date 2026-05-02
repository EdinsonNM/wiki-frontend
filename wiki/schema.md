# Schema

Reglas de mantenimiento para esta wiki, basadas en el patron LLM Wiki.

## Capas

```text
raw sources -> generated wiki -> schema
```

## Fuentes Crudas

Las fuentes crudas son inmutables para esta wiki. El agente puede leerlas, citarlas y sintetizarlas, pero no debe modificarlas salvo pedido explicito.

Fuentes actuales:

- `llm-wiki.md`
- `wiki-ref/**`

## Wiki Generada

La wiki generada vive en:

```text
wiki-frontend-only/
```

El agente puede crear y actualizar paginas aqui para mantener la sintesis frontend.

## Archivos Especiales

- `index.md`: catalogo de paginas, conceptos y rutas de lectura. Se actualiza cuando se crea, elimina o cambia el proposito de una pagina.
- `log.md`: bitacora append-only. Se agrega entrada cuando hay ingesta, reestructuracion, lint o decision importante.
- `sources.md`: registro de fuentes leidas y paginas derivadas.
- `map.md`: vista estructural del grafo y ruta de navegacion.

## Convenciones De Pagina

Cada pagina debe:

- Tener un titulo H1 claro.
- Enlazar paginas relacionadas cuando corresponda.
- Separar decisiones, reglas y ejemplos.
- Mantener foco frontend-only.
- Evitar duplicar backend salvo como contrato consumido.
- Preferir bullets concretos sobre explicaciones largas.

## Operaciones

### Ingest

Cuando se procesa una fuente:

1. Leer fuente.
2. Extraer solo lo aplicable al frontend.
3. Actualizar paginas relevantes.
4. Actualizar `index.md`.
5. Actualizar `sources.md`.
6. Agregar entrada en `log.md`.

### Query

Cuando se responde una pregunta sobre esta wiki:

1. Leer `index.md`.
2. Leer paginas relevantes.
3. Responder citando rutas de la wiki cuando ayude.
4. Si la respuesta produce una sintesis reutilizable, proponer o crear una pagina nueva.

### Lint

Revisar periodicamente:

- Paginas huerfanas sin links desde `index.md`.
- Contradicciones entre paginas.
- Referencias backend que se filtraron a la wiki frontend-only.
- Comandos o coverage inventados sin estar marcados como esperados.
- Duplicacion excesiva entre arquitectura y delivery.

## Regla De Alcance

Esta wiki no implementa una app. Documenta una plantilla frontend. Cualquier ejemplo de codigo debe ser orientativo y pertenecer al frontend.
