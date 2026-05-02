# Discovery Del Proyecto

## Objetivo

Entender un proyecto frontend antes de planificar o tocar codigo. Aplica tanto a proyectos nuevos como existentes.

## Checklist Inicial

### Producto

- Que problema resuelve.
- Quienes son los usuarios.
- Cuales son los flujos criticos.
- Que significa exito para la primera entrega.
- Que partes son MVP y cuales son nice-to-have.

### Codigo Existente

- Framework y version.
- Estructura de carpetas.
- Package manager.
- Scripts disponibles.
- Estado de tests.
- Estado de build/lint.
- Design system o libreria UI.
- Integraciones activas.
- Deuda tecnica visible.

### Restricciones

- Fecha de entrega.
- Compatibilidad de navegadores.
- SEO/SSR.
- Accesibilidad.
- Performance.
- Autenticacion/autorizacion.
- i18n.
- CI/CD.
- Deployment target.

## Comandos De Exploracion

```bash
pwd
find . -maxdepth 3 -type f | sort
ls -la
cat package.json
find . -name AGENTS.md -o -name README.md -o -name "*.config.*"
```

Si existe git:

```bash
git status --short
git branch --show-current
git log --oneline -5
```

Si existe Node:

```bash
node -v
pnpm -v || npm -v || yarn -v
```

## Salida Del Discovery

Crear o actualizar una nota con:

```md
# Discovery

## Resumen

## Stack Detectado

## Flujos Criticos

## Riesgos

## Decisiones Pendientes

## Siguiente Paso Recomendado
```

## Regla

No crear arquitectura nueva antes de entender el proyecto. En proyectos existentes, documentar convenciones locales y su brecha frente a la wiki y a la tabla de librerias en `wiki/architecture/library-strategy.md`; la alineacion objetivo sigue siendo la wiki salvo excepcion explicita del usuario.
