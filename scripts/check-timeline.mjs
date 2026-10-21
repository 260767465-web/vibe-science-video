import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

export function checkTimeline(plan) {
  const errors = [];
  for (const key of ['fps', 'width', 'height', 'durationInFrames']) {
    if (!Number.isInteger(plan[key]) || plan[key] <= 0) errors.push(`${key} must be a positive integer`);
  }
  if (!Array.isArray(plan.scenes) || !plan.scenes.length) return [...errors, 'scenes must not be empty'];
  const ids = new Set();
  let end = 0;
  for (const scene of plan.scenes) {
    if (!scene.id || ids.has(scene.id)) errors.push(`Duplicate or missing scene id: ${scene.id}`);
    ids.add(scene.id);
    if (!Number.isInteger(scene.from) || scene.from < 0) errors.push(`${scene.id}: invalid from`);
    if (!Number.isInteger(scene.durationInFrames) || scene.durationInFrames < 1) errors.push(`${scene.id}: invalid duration`);
    if (scene.from !== end) errors.push(`${scene.id}: expected start ${end}, got ${scene.from} (gap or overlap)`);
    if (!scene.title || !scene.subtitle) errors.push(`${scene.id}: title and subtitle are required`);
    end = scene.from + scene.durationInFrames;
  }
  if (end !== plan.durationInFrames) errors.push(`Timeline ends at ${end}, expected ${plan.durationInFrames}`);
  return errors;
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const filename = process.argv[2];
  if (!filename) throw new Error('Usage: node scripts/check-timeline.mjs <plan.json>');
  const plan = JSON.parse(await readFile(filename, 'utf8'));
  const errors = checkTimeline(plan);
  if (errors.length) { console.error(errors.join('\n')); process.exitCode = 1; }
  else console.log(`Timeline valid: ${plan.scenes.length} scenes, ${plan.durationInFrames} frames, ${plan.durationInFrames / plan.fps}s.`);
}
