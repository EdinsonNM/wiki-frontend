# Changelog

Todos los cambios notables del paquete se documentan aquí.

El formato sigue [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/) y el versionado [SemVer](https://semver.org/lang/es/).

## [Unreleased]

## [1.6.0] - 2026-05-07

### Added

- Soporte para **GitHub Copilot**: `init` / `setup --tool copilot` copian el adaptador a `.github/` (p. ej. `copilot-instructions.md`); fallback al kit empaquetado si falta en `.agents`.
- `scripts/setup-agent-tools.sh` y `install.sh`: herramientas `copilot` y `opencode`; `all` incluye ambas alineado con el CLI.

### Changed

- Documentación (`README`, comando `setup-agent-tools`, skill `agent-setup`, `wiki/delivery/tool-compatibility`) para Copilot y OpenCode en el script bash.

## [1.5.0] - 2026-05-04
## [1.4.0] - 2026-05-03

### Added

- Soporte para **OpenCode** en el CLI (`--tool opencode`). Genera la estructura `.opencode/agents`, `.opencode/skills` y `.opencode/commands`.
- Documentación para la herramienta OpenCode en el `README.md` y en `wiki/delivery/tool-compatibility.md`.

### Changed

- Se modificó el encabezado (frontmatter YAML) de todos los agentes en `tools/agents-kit/agents/` para incluir `mode: subagent`, `model: inherit`, `temperature: 0.1` y la lista de herramientas deshabilitadas (`write`, `edit`, `bash`), unificando el formato para el orquestador y los subagentes.
## [1.3.0] - 2026-05-02

### Added

- Skill `diagram-design` para generar diagramas HTML independientes.
- Agente `diagram-documentation-agent` modificado para usar el skill `diagram-design` y requerir la generación del archivo HTML resultante.

## [1.2.0] - 2026-05-02

### Added

- `init` / `setup`: si se omiten archivos por existir ya y no usaste `--force`, al final se muestra un recordatorio con el comando sugerido (incluye `--force`) para reemplazar por la copia del kit.

### Changed

- Wiki y `AGENTS.md`: alineación con la estrategia de librerías y arquitectura (`wiki/architecture/library-strategy.md` y documentos relacionados).

## [1.1.1] - 2026-05-02

### Fixed

- `init` / `setup`: si las carpetas destino ya existían (p. ej. `.agents`, `wiki`), se fusionan y se copian los archivos que faltan; antes se omitía todo el árbol. Los archivos ya existentes solo se sobrescriben con `--force`.

### Changed

- Documentación del secreto `NPM_TOKEN`: token granular npm con **Bypass 2FA** (Classic/Automation ya no aplican).

## [1.1.0] - 2026-05-02

### Changed

- Catálogo del kit en `tools/agents-kit/`; `init` y `install.sh` copian a `.agents/` en proyectos consumidores; CLI y `setup-agent-tools.sh` resuelven fuente desde ahí o desde `.agents`.
- `.claude/`, `.codex/` y `.agent/` dejan de versionarse; `.gitignore` las ignora; se regeneran con `setup --tool`.
- Cursor en este repo: reglas en `.cursor/rules` y skill `npm-publish-release`; no se duplica el kit publicado bajo `.cursor`.
- Publicación npm vía GitHub Actions: solo `npm publish` cuando `package.json` supera el registry; sin bump ni commits en CI. Skill de mantenedor: commits de trabajo primero, luego changelog y push.
- Documentación: `README`, `CLAUDE.md`, `STARTER-AUDIT`, `wiki/delivery/tool-compatibility.md`, plantilla `templates/cursor/rules/project-context.mdc`.
