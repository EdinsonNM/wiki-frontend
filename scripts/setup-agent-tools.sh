#!/usr/bin/env bash
set -euo pipefail

TOOL="${1:-}"
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

usage() {
  cat <<'USAGE'
Usage:
  bash scripts/setup-agent-tools.sh codex
  bash scripts/setup-agent-tools.sh cursor
  bash scripts/setup-agent-tools.sh claude
  bash scripts/setup-agent-tools.sh antigravity
  bash scripts/setup-agent-tools.sh all
USAGE
}

copy_file() {
  local src="$1"
  local dest="$2"
  mkdir -p "$(dirname "$dest")"
  if [ -e "$dest" ]; then
    echo "skip existing: ${dest#$ROOT/}"
  else
    cp "$src" "$dest"
    echo "created: ${dest#$ROOT/}"
  fi
}

copy_dir_files() {
  local src_dir="$1"
  local dest_dir="$2"
  if [ ! -d "$src_dir" ]; then
    return 0
  fi
  find "$src_dir" -type f | while IFS= read -r src; do
    local rel="${src#$src_dir/}"
    copy_file "$src" "$dest_dir/$rel"
  done
}

install_codex() {
  echo "== Codex =="
  copy_file "$ROOT/AGENTS.md" "$ROOT/AGENTS.md"
  mkdir -p "$ROOT/.agents/skills" "$ROOT/.agents/commands" "$ROOT/.agents/subagents"
  echo "ready: .agents/skills"
  echo "ready: .agents/commands"
  echo "ready: .agents/subagents"
}

install_cursor() {
  echo "== Cursor =="
  copy_dir_files "$ROOT/templates/cursor/rules" "$ROOT/.cursor/rules"
  copy_dir_files "$ROOT/.agents/commands" "$ROOT/.cursor/commands"
  copy_dir_files "$ROOT/.agents/skills" "$ROOT/.cursor/skills"
  copy_file "$ROOT/.agents/AGENTS-CATALOG.md" "$ROOT/.cursor/AGENTS-CATALOG.md"
  echo "note: Cursor Project Rules live in .cursor/rules."
  echo "note: .cursor/skills support may depend on your Cursor version; rules and commands are the stable path."
}

install_claude() {
  echo "== Claude Code =="
  copy_file "$ROOT/CLAUDE.md" "$ROOT/CLAUDE.md"
  copy_dir_files "$ROOT/.agents/subagents" "$ROOT/.claude/agents"
  copy_dir_files "$ROOT/.agents/skills" "$ROOT/.claude/skills"
  copy_dir_files "$ROOT/.agents/commands" "$ROOT/.claude/commands"
  copy_file "$ROOT/.agents/AGENTS-CATALOG.md" "$ROOT/.claude/AGENTS-CATALOG.md"
  echo "ready: .claude/agents"
  echo "ready: .claude/skills"
  echo "ready: .claude/commands"
}

install_antigravity() {
  echo "== Antigravity =="
  copy_file "$ROOT/GEMINI.md" "$ROOT/GEMINI.md"
  copy_dir_files "$ROOT/templates/antigravity/rules" "$ROOT/.agent/rules"
  copy_dir_files "$ROOT/.agents/commands" "$ROOT/.agent/workflows"
  copy_file "$ROOT/.agents/AGENTS-CATALOG.md" "$ROOT/.agent/AGENTS-CATALOG.md"
  echo "note: Antigravity paths have changed across versions. Verify in the IDE that .agent/rules and .agent/workflows are detected."
  echo "note: AGENTS.md and GEMINI.md remain the conservative fallback."
}

case "$TOOL" in
  codex) install_codex ;;
  cursor) install_cursor ;;
  claude|claude-code) install_claude ;;
  antigravity) install_antigravity ;;
  all)
    install_codex
    install_cursor
    install_claude
    install_antigravity
    ;;
  *)
    usage
    exit 1
    ;;
esac
