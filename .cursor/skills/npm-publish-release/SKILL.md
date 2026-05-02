---
name: npm-publish-release
description: Release npm desde main primero commits del trabajo luego decisión de bump versión CHANGELOG y push; CI publica si package.json > registry.
disable-model-invocation: true
---

# npm publish release

**CI** (`.github/workflows/publish-npm.yml`): si `package.json` > versión en npm → `npm publish` + tag `vX.Y.Z`. No hace bump ni commits.

## Checklist del agente

1. **`main` al día:** `git fetch origin && git branch --show-current` → debe ser `main`; `git pull origin main` si hace falta. Otra rama → parar y avisar al usuario.

2. **Commits del trabajo primero:** si hay cambios sin commit que forman parte de este release, **commitea antes de decidir la versión** (`git add …`, mensajes con **Conventional Commits** cuando puedas: `feat:`, `fix:`, etc.). Objetivo: que **todo el trabajo del release esté en `HEAD`** y el árbol esté limpio antes del análisis de bump. Si el usuario quiere un solo commit grande o varios pequeños, respétalo.

3. **Decidir bump (sobre `HEAD` ya consolidado):** `REG=$(npm view frontend-agent-devkit version)`; `git fetch --tags`; si existe `v$REG`, `bash .github/scripts/determine-npm-bump.sh "v${REG}..HEAD"`; si no, `ROOT=$(git rev-list --max-parents=0 HEAD | tail -1)` y `bash .github/scripts/determine-npm-bump.sh "${ROOT}..HEAD"`. Salida → `patch` | `minor` | `major` | `none`. Cruza con lo que ya dice `package.json`: si **ya es mayor** que `REG` y no quieres otra línea de versión, puedes solo **CHANGELOG + push**; si **igual** que `REG` y el script da `none`, no hay nada que publicar salvo que acordéis forzar nivel.

4. **Versión:** `npm version <patch|minor|major> --no-git-tag-version` según el paso 3 (o lo que el usuario fije explícitamente).

5. **`CHANGELOG.md`:** sección `[X.Y.Z] - fecha`; ajustar `[Unreleased]`.

6. **`npm run verify`**

7. **Commit + push del release:** solo lo que suela quedar tras el bump (típicamente `package.json` + `CHANGELOG.md`) → `chore(release): X.Y.Z` → `git push origin main`. El trabajo ya va commiteado desde el paso 2.

Secreto **`NPM_TOKEN`** en GitHub (nombre exacto). npm solo admite **tokens granulares**: al crear en npmjs.com → **Generate New Token**, marca **Bypass two-factor authentication** (si no, **`EOTP`** en Actions). Permisos de **escritura** y acceso al paquete (p. ej. `frontend-agent-devkit`). Docs: https://docs.npmjs.com/creating-and-viewing-access-tokens

Script: `.github/scripts/determine-npm-bump.sh`.
