import puppeteer from 'puppeteer';
import { PDFDocument } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

const URL = process.argv[2] || 'http://localhost:5174';
const MAIN_SLIDES_ONLY = process.argv.includes('--main-only');
const SKIP_TITLE = process.argv.includes('--skip-title');
const OUTPUT = process.argv.find(a => a.endsWith('.pdf')) || 'pitchdeck-text.pdf';

const PAGE_W = 1440;
const PAGE_H = 900;

async function exportPDF() {
  console.log(`🚀 Launching browser...`);
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: PAGE_W, height: PAGE_H, deviceScaleFactor: 1 });

  console.log(`📡 Navigating to ${URL}...`);
  await page.goto(URL, { waitUntil: 'networkidle2', timeout: 30000 });

  console.log(`🔓 Clicking Enter...`);
  await new Promise(r => setTimeout(r, 2000));
  const enterBtn = await page.$('button');
  if (enterBtn) {
    await enterBtn.click();
    await new Promise(r => setTimeout(r, 1500));
  }

  const totalSlides = await page.evaluate(() => window.__totalSlides || 27);
  console.log(`📊 Detected ${totalSlides} slides`);

  const maxSlides = MAIN_SLIDES_ONLY ? Math.min(18, totalSlides) : totalSlides;
  const startSlide = SKIP_TITLE ? 1 : 0;
  const slideCount = maxSlides - startSlide;

  const tmpDir = path.join(process.cwd(), '.tmp-slides-text');
  if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir);

  const slidePdfs = [];

  for (let i = startSlide; i < startSlide + slideCount; i++) {
    await page.evaluate((idx) => window.__goToSlide(idx), i);

    console.log(`📄 Capturing slide ${i - startSlide + 1}/${slideCount}...`);
    await new Promise(r => setTimeout(r, 3000));

    await page.evaluate(() => {
      document.querySelectorAll('.fixed.bottom-0').forEach(el => {
        el.style.display = 'none';
      });
      const counter = [...document.querySelectorAll('*')].find(el =>
        el.textContent?.match(/^\d+ \/ \d+$/) && el.children.length === 0
      );
      if (counter) counter.style.display = 'none';

      const existing = document.getElementById('pdf-logo');
      if (existing) existing.remove();
      const logo = document.createElement('img');
      logo.id = 'pdf-logo';
      logo.src = '/UnicityLogo.svg';
      Object.assign(logo.style, {
        position: 'fixed', bottom: '24px', right: '48px',
        height: '20px', opacity: '0.5', zIndex: '9999',
        pointerEvents: 'none',
      });
      document.body.appendChild(logo);
    });

    await new Promise(r => setTimeout(r, 250));

    const slidePath = path.join(tmpDir, `slide-${String(i).padStart(3, '0')}.pdf`);
    await page.pdf({
      path: slidePath,
      width: `${PAGE_W}px`,
      height: `${PAGE_H}px`,
      printBackground: true,
      preferCSSPageSize: false,
      pageRanges: '1',
      margin: { top: 0, bottom: 0, left: 0, right: 0 },
    });
    slidePdfs.push(slidePath);
  }

  console.log(`📚 Merging ${slidePdfs.length} slide PDFs...`);
  const merged = await PDFDocument.create();
  for (const p of slidePdfs) {
    const bytes = fs.readFileSync(p);
    const src = await PDFDocument.load(bytes);
    const pages = await merged.copyPages(src, src.getPageIndices());
    pages.forEach(pg => merged.addPage(pg));
  }

  const out = await merged.save();
  fs.writeFileSync(OUTPUT, out);
  console.log(`✅ PDF saved to ${OUTPUT} (${slidePdfs.length} slides, ${(out.length / 1024 / 1024).toFixed(1)}MB) — text is selectable`);

  for (const f of slidePdfs) fs.unlinkSync(f);
  fs.rmdirSync(tmpDir);

  await browser.close();
}

exportPDF().catch((err) => {
  console.error('❌ Error:', err.message);
  process.exit(1);
});
