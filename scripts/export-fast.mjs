import puppeteer from 'puppeteer';
import { PDFDocument, PDFName, PDFString } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

const URL = process.argv[2] || 'http://localhost:5174';
const MAIN_SLIDES_ONLY = process.argv.includes('--main-only');
const SKIP_TITLE = process.argv.includes('--skip-title');
const OUTPUT = process.argv.find(a => a.endsWith('.pdf')) || 'pitchdeck.pdf';
const VIEWPORT = { width: 1440, height: 900, deviceScaleFactor: 2 };

async function exportPDF() {
  console.log(`🚀 Launching browser...`);
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.setViewport(VIEWPORT);

  console.log(`📡 Navigating to ${URL}...`);
  await page.goto(URL, { waitUntil: 'networkidle2', timeout: 30000 });

  // Click "Enter" button on title slide
  console.log(`🔓 Clicking Enter...`);
  await new Promise(r => setTimeout(r, 2000));
  const enterBtn = await page.$('button');
  if (enterBtn) {
    await enterBtn.click();
    await new Promise(r => setTimeout(r, 1500));
  }

  // Get total slide count via exposed global
  const totalSlides = await page.evaluate(() => window.__totalSlides || 27);
  console.log(`📊 Detected ${totalSlides} slides`);

  const maxSlides = MAIN_SLIDES_ONLY ? Math.min(16, totalSlides) : totalSlides;
  const startSlide = SKIP_TITLE ? 1 : 0;
  const slideCount = maxSlides - startSlide;

  const screenshots = [];
  const links = []; // { pageIndex, href, x, y, w, h } in CSS pixels (top-left origin)
  const tmpDir = path.join(process.cwd(), '.tmp-slides');
  if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir);

  for (let i = startSlide; i < startSlide + slideCount; i++) {
    // Navigate directly using exposed goToSlide
    await page.evaluate((idx) => window.__goToSlide(idx), i);

    console.log(`📸 Capturing slide ${i - startSlide + 1}/${slideCount}...`);
    await new Promise(r => setTimeout(r, 3000));

    // Hide nav bar and slide counter, then inject logo
    await page.evaluate(() => {
      document.querySelectorAll('.fixed.bottom-0').forEach(el => {
        el.style.display = 'none';
      });
      const counter = [...document.querySelectorAll('*')].find(el =>
        el.textContent?.match(/^\d+ \/ \d+$/) && el.children.length === 0
      );
      if (counter) counter.style.display = 'none';

      // Inject Unicity logo bottom-right
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

    // When --skip-title, boost video opacity on all slides for PDF
    if (SKIP_TITLE) {
      await page.evaluate(() => {
        document.querySelectorAll('video').forEach(v => {
          v.style.opacity = '0.35';
        });
      });
    }

    await new Promise(r => setTimeout(r, 200));

    // Capture any external anchor positions on this slide for clickable PDF links
    const anchors = await page.evaluate(() => {
      return [...document.querySelectorAll('a[href^="http"]')]
        .filter(a => a.offsetParent !== null)
        .map(a => {
          const r = a.getBoundingClientRect();
          return { href: a.href, x: r.left, y: r.top, w: r.width, h: r.height };
        })
        .filter(a => a.w > 0 && a.h > 0);
    });
    const slidePageIndex = i - startSlide;
    for (const a of anchors) {
      links.push({ pageIndex: slidePageIndex, ...a });
    }

    const screenshotPath = path.join(tmpDir, `slide-${String(i).padStart(3, '0')}.jpg`);
    await page.screenshot({ path: screenshotPath, type: 'jpeg', quality: 88 });
    screenshots.push(screenshotPath);
  }

  // Build PDF
  console.log(`📄 Building PDF from ${screenshots.length} slides...`);
  const pdfDoc = await PDFDocument.create();

  for (const imgPath of screenshots) {
    const imgBytes = fs.readFileSync(imgPath);
    const img = await pdfDoc.embedJpg(imgBytes);

    const pageWidth = VIEWPORT.width;
    const pageHeight = VIEWPORT.height;
    const pdfPage = pdfDoc.addPage([pageWidth, pageHeight]);
    pdfPage.drawImage(img, {
      x: 0,
      y: 0,
      width: pageWidth,
      height: pageHeight,
    });
  }

  // Add clickable link annotations
  if (links.length > 0) {
    console.log(`🔗 Adding ${links.length} clickable link annotation(s)...`);
    const refsByPage = new Map();
    for (const link of links) {
      const pdfPage = pdfDoc.getPage(link.pageIndex);
      const { height } = pdfPage.getSize();
      // PDF coords: origin bottom-left. CSS rect: origin top-left.
      const x1 = link.x;
      const x2 = link.x + link.w;
      const y1 = height - (link.y + link.h);
      const y2 = height - link.y;
      const annotation = pdfDoc.context.obj({
        Type: 'Annot',
        Subtype: 'Link',
        Rect: [x1, y1, x2, y2],
        Border: [0, 0, 0],
        A: { Type: 'Action', S: 'URI', URI: PDFString.of(link.href) },
      });
      const ref = pdfDoc.context.register(annotation);
      if (!refsByPage.has(link.pageIndex)) refsByPage.set(link.pageIndex, []);
      refsByPage.get(link.pageIndex).push(ref);
    }
    for (const [pageIndex, refs] of refsByPage) {
      const pdfPage = pdfDoc.getPage(pageIndex);
      pdfPage.node.set(PDFName.of('Annots'), pdfDoc.context.obj(refs));
    }
  }

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync(OUTPUT, pdfBytes);
  console.log(`✅ PDF saved to ${OUTPUT} (${screenshots.length} slides, ${(pdfBytes.length / 1024 / 1024).toFixed(1)}MB)`);

  // Cleanup
  for (const f of screenshots) fs.unlinkSync(f);
  fs.rmdirSync(tmpDir);

  await browser.close();
}

exportPDF().catch((err) => {
  console.error('❌ Error:', err.message);
  process.exit(1);
});
