#!/usr/bin/env bash
set -euo pipefail

REPO="${WIKI_FRONTEND_REPO:-EdinsonNM/wiki-frontend}"
BRANCH="${WIKI_FRONTEND_BRANCH:-main}"
TOOL=""
FORCE="false"

usage() {
  cat <<'USAGE'
Install wiki-frontend starter into the current project.

Usage:
  bash install.sh [--tool codex|cursor|claude|antigravity|all] [--force]

Remote usage after publishing:
  bash <(curl -fsSL https://raw.githubusercontent.com/EdinsonNM/wiki-frontend/main/install.sh)
  bash <(curl -fsSL https://raw.githubusercontent.com/EdinsonNM/wiki-frontend/main/install.sh) --tool cursor

Options:
  --tool   Run scripts/setup-agent-tools.sh after copying.
  --force  Overwrite existing files. By default existing files are skipped.
USAGE
}

while [ "$#" -gt 0 ]; do
  case "$1" in
    --tool)
      TOOL="${2:-}"
      shift 2
      ;;
    --force)
      FORCE="true"
      shift
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      echo "Unknown argument: $1" >&2
      usage
      exit 1
      ;;
  esac
done

case "$TOOL" in
  ""|codex|cursor|claude|claude-code|antigravity|all) ;;
  *)
    echo "Invalid --tool value: $TOOL" >&2
    exit 1
    ;;
esac

TARGET="$(pwd)"
TMP_DIR="$(mktemp -d)"
cleanup() {
  rm -rf "$TMP_DIR"
}
trap cleanup EXIT

ARCHIVE_URL="https://github.com/${REPO}/archive/refs/heads/${BRANCH}.tar.gz"

echo "Downloading ${REPO}@${BRANCH}..."
curl -fsSL "$ARCHIVE_URL" -o "$TMP_DIR/wiki-frontend.tar.gz"
tar -xzf "$TMP_DIR/wiki-frontend.tar.gz" -C "$TMP_DIR"
SRC_DIR="$(find "$TMP_DIR" -maxdepth 1 -type d -name 'wiki-frontend-*' | head -n 1)"

if [ -z "$SRC_DIR" ] || [ ! -d "$SRC_DIR" ]; then
  echo "Could not find extracted starter directory." >&2
  exit 1
fi

copy_file() {
  local src="$1"
  local rel="${src#$SRC_DIR/}"
  local dest="$TARGET/$rel"

  case "$rel" in
    .git/*|.github/*) return 0 ;;
  esac

  mkdir -p "$(dirname "$dest")"

  if [ -e "$dest" ] && [ "$FORCE" != "true" ]; then
    echo "skip existing: $rel"
    return 0
  fi

  cp "$src" "$dest"
  echo "installed: $rel"
}

while IFS= read -r file; do
  copy_file "$file"
done < <(find "$SRC_DIR" -type f | sort)

chmod +x "$TARGET/scripts/setup-agent-tools.sh" 2>/dev/null || true
chmod +x "$TARGET/install.sh" 2>/dev/null || true

if [ -n "$TOOL" ]; then
  echo "Running tool setup: $TOOL"
  bash "$TARGET/scripts/setup-agent-tools.sh" "$TOOL"
fi

echo "wiki-frontend starter installed."
echo "Next: ask your agent to read AGENTS.md and run discovery."

