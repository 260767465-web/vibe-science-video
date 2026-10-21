import { cp, mkdir, access } from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const targetFlag = args.indexOf('--target');
if (args.includes('--help')) {
  console.log('node scripts/install.mjs [--target <empty skill directory>]');
  process.exit(0);
}
if (targetFlag >= 0 && (!args[targetFlag + 1] || args[targetFlag + 1].startsWith('--'))) {
  throw new Error('--target requires a directory');
}
const target = path.resolve(targetFlag >= 0 ? args[targetFlag + 1] : path.join(
  process.env.CODEX_HOME || path.join(os.homedir(), '.codex'), 'skills', 'vibe-science-video',
));
let exists = false;
try { await access(target); exists = true; } catch {}
if (exists) throw new Error(`Target already exists; nothing was overwritten: ${target}`);
await mkdir(path.dirname(target), { recursive: true });
await mkdir(target);
for (const item of ['SKILL.md', 'NOTICE.md', 'LICENSE', 'agents', 'references', 'assets', 'scripts']) {
  await cp(path.join(root, item), path.join(target, item), { recursive: true });
}
console.log(`Installed vibe-science-video to ${target}`);
console.log('Use $vibe-science-video in a new task. Existing skills were not changed.');
