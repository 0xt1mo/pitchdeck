import fs from 'fs';
import path from 'path';

const DIST = path.join(process.cwd(), 'dist');
const OUT = process.argv[2] || 'exports/Unicity MSSP.html';

const MIME = {
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ico': 'image/x-icon',
  '.json': 'application/json',
};

const mime = (p) => MIME[path.extname(p).toLowerCase()] || 'application/octet-stream';

const walk = (dir, base = dir, acc = []) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fp = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(fp, base, acc);
    else acc.push('/' + path.relative(base, fp).split(path.sep).join('/'));
  }
  return acc;
};

const toDataURI = (absPath) => {
  const buf = fs.readFileSync(absPath);
  return `data:${mime(absPath)};base64,${buf.toString('base64')}`;
};

const allAssets = walk(DIST)
  .filter((p) => p !== '/index.html')
  .filter((p) => !p.startsWith('/assets/'));

const assetURIs = new Map();
for (const rel of allAssets) {
  const fp = path.join(DIST, rel.replace(/^\//, ''));
  assetURIs.set(rel, toDataURI(fp));
}

let html = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');

html = html.replace(/href="(\/[^"#?]+\.(?:svg|png|ico|webp|jpg|jpeg))"/g, (m, p) => {
  return assetURIs.has(p) ? `href="${assetURIs.get(p)}"` : m;
});

html = html.replace(/<link[^>]+href="(\/assets\/[^"]+\.css)"[^>]*>/g, (_m, href) => {
  let css = fs.readFileSync(path.join(DIST, href.replace(/^\//, '')), 'utf8');
  css = css.replace(/url\((["']?)(\/[^)"']+)\1\)/g, (m, q, p) => {
    return assetURIs.has(p) ? `url(${q}${assetURIs.get(p)}${q})` : m;
  });
  return `<style>${css}</style>`;
});

// Build per-directory runtime maps only for dirs whose paths are built via template literals.
// (Static-literal references are already inlined below, so duplicating them here would bloat the output.)
const TEMPLATE_DIRS = ['logos'];
const dirMaps = {};
for (const rel of assetURIs.keys()) {
  const m = rel.match(/^\/([^/]+)\/([^/]+)$/);
  if (!m) continue;
  const [, dir, file] = m;
  if (!TEMPLATE_DIRS.includes(dir)) continue;
  (dirMaps[dir] ||= {})[file] = assetURIs.get(rel);
}

html = html.replace(/<script[^>]+src="(\/assets\/[^"]+\.js)"[^>]*><\/script>/g, (_m, src) => {
  let js = fs.readFileSync(path.join(DIST, src.replace(/^\//, '')), 'utf8');

  // 1. Replace template literals `/dir/${var}` with runtime lookup
  js = js.replace(/`\/([a-zA-Z0-9_-]+)\/\$\{([^}]+)\}`/g, (m, dir, expr) => {
    return dirMaps[dir] ? `window.__assetMap.${dir}[${expr}]` : m;
  });

  // 2. Replace static string literals with data URIs (longest first)
  const sorted = [...assetURIs.keys()].sort((a, b) => b.length - a.length);
  for (const rel of sorted) {
    const uri = assetURIs.get(rel);
    const escaped = rel.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    js = js.replace(new RegExp(`(["'\`])${escaped}\\1`, 'g'), JSON.stringify(uri));
  }

  const inject = `window.__assetMap=${JSON.stringify(dirMaps)};\n`;
  return `<script type="module">${inject}${js}</script>`;
});

if (!fs.existsSync(path.dirname(OUT))) fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, html);
const size = (fs.statSync(OUT).size / 1024 / 1024).toFixed(1);
console.log(`✅ ${OUT} — ${size} MB (${allAssets.length} assets inlined)`);
