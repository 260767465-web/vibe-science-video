import { cp, mkdir, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const args = process.argv.slice(2);
const flag = args.indexOf('--out');
if (args.includes('--help')) {
  console.log('node scripts/scaffold.mjs --out <empty project directory>');
  process.exit(0);
}
if (flag < 0 || !args[flag + 1] || args[flag + 1].startsWith('--')) {
  throw new Error('Provide --out <empty project directory>');
}
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.resolve(args[flag + 1]);
let entries;
try { entries = await readdir(out); } catch (error) {
  if (error.code !== 'ENOENT') throw error;
}
if (entries?.length) throw new Error(`Target is not empty; nothing was overwritten: ${out}`);
await mkdir(out, { recursive: true });
await cp(path.join(root, 'assets', 'starter'), out, { recursive: true });
await mkdir(path.join(out, 'scripts'), { recursive: true });
await cp(path.join(root, 'scripts', 'check-timeline.mjs'), path.join(out, 'scripts', 'check-timeline.mjs'));
console.log(`Created an independent Remotion example in ${out}`);
console.log('Next: cd into that directory, then npm install, npm run check, npm run dev.');
console.log('npm run render exports out/video.mp4. No packages or services were installed by this script.');
