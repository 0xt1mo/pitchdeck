import fs from 'fs';
import path from 'path';

const DIST = path.join(process.cwd(), 'dist');
const OUT = process.argv[2] || 'exports/Unicity for EU Telecom.html';

const mime = (p) => {
  const ext = path.extname(p).toLowerCase();
  return {
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.webp': 'image/webp',
    '.mp4': 'video/mp4',
  }[ext] || 'application/octet-stream';
};

const dataURI = (relPath) => {
  const fp = path.join(DIST, relPath.replace(/^\//, ''));
  if (!fs.existsSync(fp)) {
    console.warn('  (missing)', relPath);
    return null;
  }
  const buf = fs.readFileSync(fp);
  return `data:${mime(fp)};base64,${buf.toString('base64')}`;
};

let html = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');

// 1. Inline the CSS link
html = html.replace(/<link[^>]+href="(\/assets\/[^"]+\.css)"[^>]*>/g, (_m, href) => {
  const css = fs.readFileSync(path.join(DIST, href.replace(/^\//, '')), 'utf8');
  return `<style>${css}</style>`;
});

// 2. Inline the JS script
html = html.replace(/<script[^>]+src="(\/assets\/[^"]+\.js)"[^>]*><\/script>/g, (_m, src) => {
  let js = fs.readFileSync(path.join(DIST, src.replace(/^\//, '')), 'utf8');

  // 2a. Replace string-literal absolute asset paths
  const literalPaths = [
    '/UnicityLogo.svg',
    '/dashboards/governance.png',
    '/dashboards/networking.png',
    '/dashboards/payments.png',
    '/dashboards/security.png',
    '/team/mike.jpg',
    '/team/tony.png',
    '/team/Alan Portrait.jpg',
  ];
  for (const p of literalPaths) {
    const uri = dataURI(p);
    if (!uri) continue;
    const escaped = p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    js = js.replace(new RegExp(`(["'\`])${escaped}\\1`, 'g'), JSON.stringify(uri));
  }

  // 2b. Build runtime map for the /logos/${file} template
  const logosDir = path.join(DIST, 'logos');
  const logosMap = {};
  for (const f of fs.readdirSync(logosDir)) {
    const buf = fs.readFileSync(path.join(logosDir, f));
    logosMap[f] = `data:${mime(f)};base64,${buf.toString('base64')}`;
  }
  // Replace `/logos/${...}` template literal with window.__logosMap[...]
  js = js.replace(/`\/logos\/\$\{([^}]+)\}`/g, 'window.__logosMap[$1]');

  // Inject the map BEFORE the bundle code so it's defined when components render
  const inject = `window.__logosMap=${JSON.stringify(logosMap)};\n`;
  return `<script type="module">${inject}${js}</script>`;
});

if (!fs.existsSync(path.dirname(OUT))) fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, html);
console.log(`✅ ${OUT} — ${(fs.statSync(OUT).size / 1024 / 1024).toFixed(1)} MB`);
