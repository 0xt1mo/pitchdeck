import puppeteer from 'puppeteer';
import { PDFDocument } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

const URL = process.argv[2] || 'http://localhost:5174';
const MAIN_SLIDES_ONLY = process.argv.includes('--main-only');
const OUTPUT = process.argv.find(a => a.endsWith('.pdf')) || 'pitchdeck.pdf';
const VIEWPORT = { width: 1440, height: 900, deviceScaleFactor: 3 };

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

  const slideCount = MAIN_SLIDES_ONLY ? Math.min(18, totalSlides) : totalSlides;

  const screenshots = [];
  const tmpDir = path.join(process.cwd(), '.tmp-slides');
  if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir);

  for (let i = 0; i < slideCount; i++) {
    // Navigate directly using exposed goToSlide
    await page.evaluate((idx) => window.__goToSlide(idx), i);

    console.log(`📸 Capturing slide ${i + 1}/${slideCount}...`);
    await new Promise(r => setTimeout(r, 3000));

    // Hide nav bar and slide counter
    await page.evaluate(() => {
      document.querySelectorAll('.fixed.bottom-0').forEach(el => {
        el.style.display = 'none';
      });
      const counter = [...document.querySelectorAll('*')].find(el =>
        el.textContent?.match(/^\d+ \/ \d+$/) && el.children.length === 0
      );
      if (counter) counter.style.display = 'none';
    });

    await new Promise(r => setTimeout(r, 200));

    const screenshotPath = path.join(tmpDir, `slide-${String(i).padStart(3, '0')}.png`);
    await page.screenshot({ path: screenshotPath, type: 'png' });
    screenshots.push(screenshotPath);
  }

  // Build PDF
  console.log(`📄 Building PDF from ${screenshots.length} slides...`);
  const pdfDoc = await PDFDocument.create();

  for (const imgPath of screenshots) {
    const imgBytes = fs.readFileSync(imgPath);
    const img = await pdfDoc.embedPng(imgBytes);

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
