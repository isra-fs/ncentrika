/**
 * Derive favicon sizes from the canonical brand mark: public/favicon.png
 * Does NOT overwrite favicon.png — that file is the source of truth.
 *
 * Usage: node scripts/generate-favicons.js
 * Requires: ffmpeg on PATH
 */
const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const source = path.join(publicDir, 'favicon.png');

if (!fs.existsSync(source)) {
  console.error('Missing public/favicon.png — place the brand mark there first.');
  process.exit(1);
}

function ffmpegScale(outName, size) {
  const outPath = path.join(publicDir, outName);
  execFileSync(
    'ffmpeg',
    ['-y', '-i', source, '-vf', `scale=${size}:${size}`, outPath],
    { stdio: 'inherit' }
  );
  console.log('Wrote', outName);
}

const derived = [
  [32, 'favicon-32.png'],
  [48, 'favicon-48.png'],
  [180, 'apple-touch-icon.png'],
  [192, 'logo192.png'],
  [512, 'logo512.png'],
];

for (const [size, name] of derived) {
  ffmpegScale(name, size);
}

// Single-size ICO fallback (browsers that ignore PNG links)
execFileSync(
  'ffmpeg',
  ['-y', '-i', source, '-vf', 'scale=48:48', path.join(publicDir, 'favicon.ico')],
  { stdio: 'inherit' }
);
console.log('Wrote favicon.ico');

// Remove legacy wordmark SVG if present (would win over PNG in modern browsers)
const legacySvg = path.join(publicDir, 'favicon.svg');
if (fs.existsSync(legacySvg)) {
  fs.unlinkSync(legacySvg);
  console.log('Removed favicon.svg (wordmark) so favicon.png is used');
}

console.log('Done — derived icons from public/favicon.png');
