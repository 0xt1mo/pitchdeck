// High-quality, compact PDF export.
//
// Strategy: render each slide at 2x scale on a 1920x1080 viewport (so the raw
// raster is 3840x2160), screenshot as JPEG q92, embed into a PDF page sized to
// the viewport. JPEG-92 is visually indistinguishable from PNG at this scale
// but ~6x smaller. Vector text/SVG would be even smaller via page.pdf(), but
// fixed-position slides + video backgrounds make that fragile, so we stick to
// rasterizing at high DPI.

import puppeteer from 'puppeteer';
import { PDFDocument, PDFName, PDFString } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

const URL = process.argv[2] || 'http://localhost:4173';
const OUTPUT = process.argv.find((a) => a.endsWith('.pdf')) || 'exports/Unicity MSSP.pdf';
const VIEWPORT = { width: 1920, height: 1080, deviceScaleFactor: 2 };
const JPEG_QUALITY = 92;

async function exportPDF() {
  console.log(`🚀 Launching browser at ${VIEWPORT.width}x${VIEWPORT.height}@${VIEWPORT.deviceScaleFactor}x`);
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.setViewport(VIEWPORT);

  console.log(`📡 ${URL}`);
  await page.goto(URL, { waitUntil: 'networkidle2', timeout: 30000 });

  // Click the Intro "Enter" button if present
  await new Promise((r) => setTimeout(r, 1500));
  const enterBtn = await page.$('button');
  if (enterBtn) {
    await enterBtn.click();
    await new Promise((r) => setTimeout(r, 1000));
  }

  const totalSlides = await page.evaluate(() => window.__totalSlides || 16);
  console.log(`📊 ${totalSlides} slides`);

  const tmpDir = path.join(process.cwd(), '.tmp-slides');
  if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir);
  const screenshots = [];
  const links = [];

  for (let i = 0; i < totalSlides; i++) {
    await page.evaluate((idx) => window.__goToSlide(idx), i);
    console.log(`📸 ${i + 1}/${totalSlides}`);
    // Wait for slide entrance animations and any fonts/images
    await new Promise((r) => setTimeout(r, 2500));

    // Strip nav chrome and slide counter, then drop the corner mark
    // (skip the corner logo on the cover slide — it collides with "Confidential · 2026"
    // and the cover already displays the Unicity wordmark prominently)
    const isCover = i === 0;
    await page.evaluate((isCover) => {
      document.querySelectorAll('.fixed.bottom-0').forEach((el) => (el.style.display = 'none'));
      const counter = [...document.querySelectorAll('*')].find(
        (el) => el.textContent?.match(/^\d+ \/ \d+$/) && el.children.length === 0
      );
      if (counter) counter.style.display = 'none';

      const existing = document.getElementById('pdf-logo');
      if (existing) existing.remove();

      if (!isCover) {
        const logo = document.createElement('img');
        logo.id = 'pdf-logo';
        logo.src = '/UnicityLogo.svg';
        Object.assign(logo.style, {
          position: 'fixed',
          bottom: '24px',
          right: '48px',
          height: '22px',
          opacity: '0.5',
          zIndex: '9999',
          pointerEvents: 'none',
        });
        document.body.appendChild(logo);
      }
    }, isCover);

    // Give the corner logo a beat to load before snapshotting
    await new Promise((r) => setTimeout(r, 250));

    // Grab any clickable external links on this slide
    const anchors = await page.evaluate(() => {
      return [...document.querySelectorAll('a[href^="http"], a[href^="mailto:"], a[href^="tel:"]')]
        .filter((a) => a.offsetParent !== null)
        .map((a) => {
          const r = a.getBoundingClientRect();
          return { href: a.href, x: r.left, y: r.top, w: r.width, h: r.height };
        })
        .filter((a) => a.w > 0 && a.h > 0);
    });
    for (const a of anchors) links.push({ pageIndex: i, ...a });

    const out = path.join(tmpDir, `slide-${String(i).padStart(3, '0')}.jpg`);
    await page.screenshot({ path: out, type: 'jpeg', quality: JPEG_QUALITY });
    screenshots.push(out);
  }

  console.log(`📄 Building PDF`);
  const pdf = await PDFDocument.create();
  pdf.setTitle('Unicity — Secure Compute Platform for AI');
  pdf.setAuthor('Unicity Labs');
  pdf.setCreator('Unicity Labs');

  for (const imgPath of screenshots) {
    const bytes = fs.readFileSync(imgPath);
    const img = await pdf.embedJpg(bytes);
    const pageW = VIEWPORT.width;
    const pageH = VIEWPORT.height;
    const pdfPage = pdf.addPage([pageW, pageH]);
    pdfPage.drawImage(img, { x: 0, y: 0, width: pageW, height: pageH });
  }

  if (links.length > 0) {
    console.log(`🔗 ${links.length} link annotation(s)`);
    const refsByPage = new Map();
    for (const link of links) {
      const pdfPage = pdf.getPage(link.pageIndex);
      const { height } = pdfPage.getSize();
      const x1 = link.x;
      const x2 = link.x + link.w;
      const y1 = height - (link.y + link.h);
      const y2 = height - link.y;
      const annotation = pdf.context.obj({
        Type: 'Annot',
        Subtype: 'Link',
        Rect: [x1, y1, x2, y2],
        Border: [0, 0, 0],
        A: { Type: 'Action', S: 'URI', URI: PDFString.of(link.href) },
      });
      const ref = pdf.context.register(annotation);
      if (!refsByPage.has(link.pageIndex)) refsByPage.set(link.pageIndex, []);
      refsByPage.get(link.pageIndex).push(ref);
    }
    for (const [pageIndex, refs] of refsByPage) {
      const pdfPage = pdf.getPage(pageIndex);
      pdfPage.node.set(PDFName.of('Annots'), pdf.context.obj(refs));
    }
  }

  const out = await pdf.save({ useObjectStreams: true });
  if (!fs.existsSync(path.dirname(OUTPUT))) fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
  fs.writeFileSync(OUTPUT, out);
  console.log(`✅ ${OUTPUT} — ${(out.length / 1024 / 1024).toFixed(2)} MB (${totalSlides} slides)`);

  for (const f of screenshots) fs.unlinkSync(f);
  fs.rmdirSync(tmpDir);
  await browser.close();
}

exportPDF().catch((err) => {
  console.error('❌', err.message);
  process.exit(1);
});
