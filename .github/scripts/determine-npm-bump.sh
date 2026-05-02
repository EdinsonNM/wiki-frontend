#!/usr/bin/env bash
# Determina patch | minor | major | none según git log en el rango dado.
# Uso principal: mantenedor prepara release localmente (ver skill npm-publish-release).
# No forma parte del tarball npm de usuarios.
# Convención (Conventional Commits resumida):
# - major: BREAKING CHANGE en cuerpo, o tipo! en asunto (feat!, chore!, …)
# - minor: feat: o feat(scope):
# - patch: fix, docs, chore, etc., o por defecto si hay commits
# - none: cero commits en el rango
set -euo pipefail

RANGE="${1:?Uso: determine-npm-bump.sh <rev-range> (ej: v1.2.0..HEAD)}"

count="$(git rev-list --count "$RANGE" 2>/dev/null || echo 0)"
if [[ "$count" -eq 0 ]]; then
  echo "none"
  exit 0
fi

LOG="$(git log "$RANGE" --pretty=format:'%s%n%b%n---COMMIT---')"

if printf '%s\n' "$LOG" | grep -qiE '(^|[[:space:]])BREAKING CHANGE:'; then
  echo "major"
  exit 0
fi

if printf '%s\n' "$LOG" | grep -qiE '^[a-z]+(\([^)]*\))?!:'; then
  echo "major"
  exit 0
fi

if printf '%s\n' "$LOG" | grep -qiE '^feat(\([^)]*\))?:'; then
  echo "minor"
  exit 0
fi

echo "patch"
