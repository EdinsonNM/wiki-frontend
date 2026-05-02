# Setup

## Instalacion

Registrar el comando real del proyecto despues de revisar `package.json` o tooling.

Ejemplos comunes:

```bash
pnpm install
npm install
yarn install
bun install
```

## Desarrollo

Registrar el comando real.

Ejemplos comunes:

```bash
pnpm dev
npm run dev
yarn dev
bun dev
```

## Setup De Agentes

Despues de copiar este kit a un proyecto, ejecutar segun herramienta:

```bash
bash scripts/setup-agent-tools.sh codex
bash scripts/setup-agent-tools.sh cursor
bash scripts/setup-agent-tools.sh claude
bash scripts/setup-agent-tools.sh antigravity
```

## Checklist

- Dependencias instaladas.
- Variables de entorno documentadas.
- Comando de desarrollo verificado.
- Tests/lint/build documentados en `docs/operations/scripts.md`.
