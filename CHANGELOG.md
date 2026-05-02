# Changelog

Todos los cambios notables del paquete se documentan aquí.

El formato sigue [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/) y el versionado [SemVer](https://semver.org/lang/es/).

## [Unreleased]

## [1.1.0] - 2026-05-02

### Changed

- Catálogo del kit en `tools/agents-kit/`; `init` y `install.sh` copian a `.agents/` en proyectos consumidores; CLI y `setup-agent-tools.sh` resuelven fuente desde ahí o desde `.agents`.
- `.claude/`, `.codex/` y `.agent/` dejan de versionarse; `.gitignore` las ignora; se regeneran con `setup --tool`.
- Cursor en este repo: reglas en `.cursor/rules` y skill `npm-publish-release`; no se duplica el kit publicado bajo `.cursor`.
- Publicación npm vía GitHub Actions: solo `npm publish` cuando `package.json` supera el registry; sin bump ni commits en CI. Skill de mantenedor: commits de trabajo primero, luego changelog y push.
- Documentación: `README`, `CLAUDE.md`, `STARTER-AUDIT`, `wiki/delivery/tool-compatibility.md`, plantilla `templates/cursor/rules/project-context.mdc`.
