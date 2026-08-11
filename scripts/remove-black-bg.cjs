const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const input = path.join("public", "images", "hero-arwin.png");
const output = path.join("public", "images", "hero-arwin.png");

(async () => {
  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height } = info;
  const threshold = 32;
  const visited = new Uint8Array(width * height);
  const queue = [];

  const idx = (x, y) => y * width + x;
  const isBg = (x, y) => {
    const i = idx(x, y) * 4;
    const luma = 0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2];
    return luma <= threshold;
  };

  const push = (x, y) => {
    if (x < 0 || y < 0 || x >= width || y >= height) return;
    const p = idx(x, y);
    if (visited[p]) return;
    if (!isBg(x, y)) return;
    visited[p] = 1;
    queue.push(p);
  };

  // Flood-fill only from image edges so black clothes stay solid
  for (let x = 0; x < width; x++) {
    push(x, 0);
    push(x, height - 1);
  }
  for (let y = 0; y < height; y++) {
    push(0, y);
    push(width - 1, y);
  }

  while (queue.length) {
    const p = queue.pop();
    const x = p % width;
    const y = (p / width) | 0;
    const i = p * 4;
    data[i + 3] = 0;
    push(x + 1, y);
    push(x - 1, y);
    push(x, y + 1);
    push(x, y - 1);
  }

  // Soften silhouette edge a bit
  const copy = Buffer.from(data);
  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      const p = idx(x, y);
      const i = p * 4;
      if (copy[i + 3] === 0) continue;
      let transparentNeighbors = 0;
      for (const [dx, dy] of [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ]) {
        const ni = idx(x + dx, y + dy) * 4;
        if (copy[ni + 3] === 0) transparentNeighbors++;
      }
      if (transparentNeighbors > 0) {
        data[i + 3] = Math.max(90, 255 - transparentNeighbors * 50);
      }
    }
  }

  const tmp = output + ".tmp.png";
  await sharp(data, {
    raw: { width, height, channels: 4 },
  })
    .png()
    .toFile(tmp);

  fs.renameSync(tmp, output);

  const meta = await sharp(output).metadata();
  console.log("done", {
    format: meta.format,
    hasAlpha: meta.hasAlpha,
    channels: meta.channels,
    bytes: fs.statSync(output).size,
  });
})();
