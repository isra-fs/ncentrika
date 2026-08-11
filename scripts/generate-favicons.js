const fs = require('fs');
const path = require('path');
const { Resvg } = require('@resvg/resvg-js');

const publicDir = path.join(__dirname, '..', 'public');
const logoPath = path.join(publicDir, 'resources', 'images', 'logo.svg');
const logoSvg = fs.readFileSync(logoPath, 'utf8');

// Extract inner content (paths) from the brand logo — no invented artwork
const innerMatch = logoSvg.match(/<svg[^>]*>([\s\S]*)<\/svg>/i);
if (!innerMatch) {
  throw new Error('Could not parse logo.svg');
}
const logoInner = innerMatch[1]
  .replace(/<title>[\s\S]*?<\/title>/i, '')
  .trim();

function makeSquareLogoSvg(size) {
  const pad = size * 0.12;
  const contentW = size - pad * 2;
  const contentH = contentW * (18.85 / 104.41);
  const x = pad;
  const y = (size - contentH) / 2;

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" fill="#FFF8F0"/>
  <svg x="${x}" y="${y}" width="${contentW}" height="${contentH}" viewBox="0 0 104.41 18.85" preserveAspectRatio="xMidYMid meet">
    ${logoInner}
  </svg>
</svg>`;
}

function renderPng(svg, outPath) {
  const resvg = new Resvg(svg, {
    fitTo: { mode: 'original' },
    background: 'transparent',
  });
  const png = resvg.render().asPng();
  fs.writeFileSync(outPath, png);
  console.log('Wrote', outPath);
}

function writeIco(pngBuffers, outPath) {
  // PNG-compressed ICO (supported by modern browsers / Google)
  const count = pngBuffers.length;
  const headerSize = 6 + 16 * count;
  let offset = headerSize;
  const entries = [];

  for (const buf of pngBuffers) {
    // Read width/height from PNG IHDR
    const width = buf[16] === 0 && buf[17] === 0 && buf[18] === 0 && buf[19] === 0
      ? 256
      : buf[19]; // for small icons we pass exact sizes below
    entries.push({ width, height: width, buf, offset });
    offset += buf.length;
  }

  const out = Buffer.alloc(offset);
  out.writeUInt16LE(0, 0);
  out.writeUInt16LE(1, 2);
  out.writeUInt16LE(count, 4);

  let entryOffset = 6;
  for (let i = 0; i < entries.length; i++) {
    const { buf } = entries[i];
    // sizes passed in order: we store actual pixel size from generation
    const size = [16, 32, 48][i];
    out.writeUInt8(size >= 256 ? 0 : size, entryOffset);
    out.writeUInt8(size >= 256 ? 0 : size, entryOffset + 1);
    out.writeUInt8(0, entryOffset + 2);
    out.writeUInt8(0, entryOffset + 3);
    out.writeUInt16LE(1, entryOffset + 4);
    out.writeUInt16LE(32, entryOffset + 6);
    out.writeUInt32LE(buf.length, entryOffset + 8);
    out.writeUInt32LE(entries[i].offset, entryOffset + 12);
    entryOffset += 16;
  }

  for (const entry of entries) {
    bufCopy(entry.buf, out, entry.offset);
  }

  fs.writeFileSync(outPath, out);
  console.log('Wrote', outPath);
}

function bufCopy(src, dest, offset) {
  src.copy(dest, offset);
}

// Favicon SVG (real logo) for modern browsers
const faviconSvg = makeSquareLogoSvg(512);
fs.writeFileSync(path.join(publicDir, 'favicon.svg'), faviconSvg);
console.log('Wrote favicon.svg');

const sizes = [
  [16, 'favicon-16.png'],
  [32, 'favicon-32.png'],
  [48, 'favicon-48.png'],
  [48, 'favicon.png'],
  [180, 'apple-touch-icon.png'],
  [192, 'logo192.png'],
  [512, 'logo512.png'],
];

const icoPngs = [];
for (const [size, name] of sizes) {
  const svg = makeSquareLogoSvg(size);
  const outPath = path.join(publicDir, name);
  renderPng(svg, outPath);
  if (name === 'favicon-16.png' || name === 'favicon-32.png' || name === 'favicon-48.png') {
    icoPngs.push(fs.readFileSync(outPath));
  }
}

writeIco(icoPngs, path.join(publicDir, 'favicon.ico'));
console.log('Done — favicons generated from resources/images/logo.svg');
