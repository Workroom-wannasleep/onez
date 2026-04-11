import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';

const IMAGE_DIR = new URL('../public/images', import.meta.url).pathname;
const MAX_WIDTH = 1920;
const QUALITY = 82;

async function getJpgFiles(dir) {
  const results = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...await getJpgFiles(fullPath));
    } else if (['.jpg', '.jpeg'].includes(extname(entry.name).toLowerCase())) {
      results.push(fullPath);
    }
  }
  return results;
}

async function compress(filePath) {
  const before = (await stat(filePath)).size;
  const image = sharp(filePath);
  const meta = await image.metadata();

  const needsResize = meta.width > MAX_WIDTH;

  const buffer = await image
    .rotate() // auto-rotate based on EXIF
    .resize(needsResize ? { width: MAX_WIDTH } : undefined)
    .jpeg({ quality: QUALITY, mozjpeg: true })
    .toBuffer();

  const after = buffer.length;

  // Only overwrite if we actually made it smaller
  if (after < before) {
    await sharp(buffer).toFile(filePath);
    const saved = ((1 - after / before) * 100).toFixed(1);
    console.log(`✓ ${filePath.split('/public/')[1].padEnd(55)} ${(before / 1024 / 1024).toFixed(1)}MB → ${(after / 1024 / 1024).toFixed(1)}MB  (-${saved}%)`);
  } else {
    console.log(`- ${filePath.split('/public/')[1].padEnd(55)} already optimized, skipped`);
  }
}

const files = await getJpgFiles(IMAGE_DIR);
console.log(`Found ${files.length} JPEG files\n`);
for (const file of files) {
  await compress(file);
}
console.log('\nDone.');
