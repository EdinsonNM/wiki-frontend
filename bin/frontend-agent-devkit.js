#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const CWD = process.cwd();
const VALID_TOOLS = new Set(['codex', 'cursor', 'claude', 'claude-code', 'antigravity', 'all']);

const STARTER_ENTRIES = [
  '.agents',
  'AGENTS.md',
  'CLAUDE.md',
  'GEMINI.md',
  'README.md',
  'STARTER-AUDIT.md',
  'docs',
  'install.sh',
  'scripts',
  'specs',
  'templates',
  'wiki'
];

function usage() {
  console.log(`frontend-agent-devkit

Usage:
  frontend-agent-devkit init [--tool codex|cursor|claude|antigravity|all] [--force]
  frontend-agent-devkit setup --tool codex|cursor|claude|antigravity|all [--force]
  frontend-agent-devkit verify
  frontend-agent-devkit help

Examples:
  npx frontend-agent-devkit init --tool cursor
  frontend-agent-devkit setup --tool claude
  frontend-agent-devkit verify
`);
}

function parseArgs(argv) {
  const args = { _: [], tool: '', force: false };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--tool') {
      args.tool = argv[i + 1] || '';
      i += 1;
    } else if (arg.startsWith('--tool=')) {
      args.tool = arg.slice('--tool='.length);
    } else if (arg === '--force') {
      args.force = true;
    } else if (arg === '-h' || arg === '--help') {
      args._.push('help');
    } else {
      args._.push(arg);
    }
  }
  return args;
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function exists(target) {
  return fs.existsSync(target);
}

function copyPath(src, dest, options = {}) {
  const force = Boolean(options.force);
  const label = path.relative(CWD, dest) || path.basename(dest);

  if (!exists(src)) return;

  if (exists(dest) && !force) {
    console.log(`skip existing: ${label}`);
    return;
  }

  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    ensureDir(dest);
    for (const child of fs.readdirSync(src)) {
      if (child === '.git' || child === 'node_modules') continue;
      copyPath(path.join(src, child), path.join(dest, child), options);
    }
    return;
  }

  ensureDir(path.dirname(dest));
  fs.copyFileSync(src, dest);
  console.log(`${exists(dest) && force ? 'installed' : 'installed'}: ${label}`);
}

function copyDirFiles(srcDir, destDir, options = {}) {
  if (!exists(srcDir)) return;
  ensureDir(destDir);
  for (const child of fs.readdirSync(srcDir)) {
    copyPath(path.join(srcDir, child), path.join(destDir, child), options);
  }
}

function validateTool(tool, required = false) {
  if (!tool && !required) return;
  if (!tool || !VALID_TOOLS.has(tool)) {
    console.error(`Invalid --tool value: ${tool || '(missing)'}`);
    process.exit(1);
  }
}

function init(options) {
  for (const entry of STARTER_ENTRIES) {
    copyPath(path.join(ROOT, entry), path.join(CWD, entry), options);
  }

  if (options.tool) {
    setup(options.tool, options);
  }

  console.log('frontend-agent-devkit starter installed.');
  console.log('Next: ask your agent to read AGENTS.md and run discovery.');
}

function setup(tool, options) {
  validateTool(tool, true);

  if (tool === 'all') {
    setup('codex', options);
    setup('cursor', options);
    setup('claude', options);
    setup('antigravity', options);
    return;
  }

  if (tool === 'claude-code') {
    setup('claude', options);
    return;
  }

  if (tool === 'codex') {
    console.log('== Codex ==');
    ensureDir(path.join(CWD, '.agents', 'skills'));
    ensureDir(path.join(CWD, '.agents', 'commands'));
    ensureDir(path.join(CWD, '.agents', 'agents'));
    console.log('ready: .agents/skills');
    console.log('ready: .agents/commands');
    console.log('ready: .agents/agents');
    copyDirFiles(path.join(CWD, '.agents', 'agents'), path.join(CWD, '.codex', 'agents'), options);
    console.log('ready: .codex/agents');
    return;
  }

  if (tool === 'cursor') {
    console.log('== Cursor ==');
    copyDirFiles(path.join(CWD, 'templates', 'cursor', 'rules'), path.join(CWD, '.cursor', 'rules'), options);
    copyDirFiles(path.join(CWD, '.agents', 'commands'), path.join(CWD, '.cursor', 'commands'), options);
    copyDirFiles(path.join(CWD, '.agents', 'skills'), path.join(CWD, '.cursor', 'skills'), options);
    copyDirFiles(path.join(CWD, '.agents', 'agents'), path.join(CWD, '.cursor', 'agents'), options);
    copyPath(path.join(CWD, '.agents', 'AGENTS-CATALOG.md'), path.join(CWD, '.cursor', 'AGENTS-CATALOG.md'), options);
    console.log('ready: .cursor/agents');
    console.log('note: Cursor Project Rules live in .cursor/rules.');
    console.log('note: .cursor/skills support may depend on your Cursor version; rules and commands are the stable path.');
    return;
  }

  if (tool === 'claude') {
    console.log('== Claude Code ==');
    copyPath(path.join(CWD, 'CLAUDE.md'), path.join(CWD, 'CLAUDE.md'), options);
    copyDirFiles(path.join(CWD, '.agents', 'agents'), path.join(CWD, '.claude', 'agents'), options);
    copyDirFiles(path.join(CWD, '.agents', 'skills'), path.join(CWD, '.claude', 'skills'), options);
    copyDirFiles(path.join(CWD, '.agents', 'commands'), path.join(CWD, '.claude', 'commands'), options);
    copyPath(path.join(CWD, '.agents', 'AGENTS-CATALOG.md'), path.join(CWD, '.claude', 'AGENTS-CATALOG.md'), options);
    console.log('ready: .claude/agents');
    console.log('ready: .claude/skills');
    console.log('ready: .claude/commands');
    return;
  }

  if (tool === 'antigravity') {
    console.log('== Antigravity ==');
    copyPath(path.join(CWD, 'GEMINI.md'), path.join(CWD, 'GEMINI.md'), options);
    copyDirFiles(path.join(CWD, 'templates', 'antigravity', 'rules'), path.join(CWD, '.agent', 'rules'), options);
    copyDirFiles(path.join(CWD, '.agents', 'commands'), path.join(CWD, '.agent', 'workflows'), options);
    copyPath(path.join(CWD, '.agents', 'AGENTS-CATALOG.md'), path.join(CWD, '.agent', 'AGENTS-CATALOG.md'), options);
    console.log('note: Antigravity paths can vary by version. Verify .agent/rules and .agent/workflows in the IDE.');
  }
}

function countFiles(dir, predicate) {
  if (!exists(dir)) return 0;
  let count = 0;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      count += countFiles(fullPath, predicate);
    } else if (predicate(fullPath)) {
      count += 1;
    }
  }
  return count;
}

function verify() {
  const checks = [
    ['AGENTS.md', exists(path.join(CWD, 'AGENTS.md'))],
    ['wiki/index.md', exists(path.join(CWD, 'wiki', 'index.md'))],
    ['.agents/AGENTS-CATALOG.md', exists(path.join(CWD, '.agents', 'AGENTS-CATALOG.md'))]
  ];

  let ok = true;
  for (const [label, pass] of checks) {
    console.log(`${pass ? 'ok' : 'missing'}: ${label}`);
    ok = ok && pass;
  }

  const agents = countFiles(path.join(CWD, '.agents', 'agents'), file => file.endsWith('.md'));
  const skills = countFiles(path.join(CWD, '.agents', 'skills'), file => path.basename(file) === 'SKILL.md');
  const commands = countFiles(path.join(CWD, '.agents', 'commands'), file => file.endsWith('.md'));

  console.log(`agents: ${agents} / 20`);
  console.log(`skills: ${skills} / 12`);
  console.log(`commands: ${commands} / 8`);

  ok = ok && agents === 20 && skills === 12 && commands === 8;

  if (!ok) {
    process.exitCode = 1;
  }
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const command = args._[0] || 'help';

  if (command === 'help') {
    usage();
    return;
  }

  if (command === 'init') {
    validateTool(args.tool, false);
    init(args);
    return;
  }

  if (command === 'setup') {
    validateTool(args.tool, true);
    setup(args.tool, args);
    return;
  }

  if (command === 'verify') {
    verify();
    return;
  }

  console.error(`Unknown command: ${command}`);
  usage();
  process.exit(1);
}

main();
