import puppeteer from 'puppeteer';
import { PDFDocument } from 'pdf-lib';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const URL = process.argv[2] || 'http://localhost:5174';
const OUTPUT = 'pitchdeck-mobile.pdf';
const OUTPUT_COMPRESSED = 'pitchdeck-mobile-compressed.pdf';
const VIEWPORT = { width: 1280, height: 720, deviceScaleFactor: 3 };

async function exportMobilePDF() {
  console.log('🚀 Launching browser...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.setViewport(VIEWPORT);

  console.log(`📡 Navigating to ${URL}...`);
  await page.goto(URL, { waitUntil: 'networkidle2', timeout: 30000 });

  // Click "Enter" button on title slide
  console.log('🔓 Clicking Enter...');
  await new Promise(r => setTimeout(r, 2000));
  const enterBtn = await page.$('button');
  if (enterBtn) {
    await enterBtn.click();
    await new Promise(r => setTimeout(r, 1500));
  }

  // Get total slide count via exposed global
  const totalSlides = await page.evaluate(() => window.__totalSlides || 30);
  console.log(`📊 Detected ${totalSlides} slides`);

  const screenshots = [];
  const tmpDir = path.join(process.cwd(), '.tmp-slides-mob');
  if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir);

  for (let i = 0; i < totalSlides; i++) {
    // Navigate directly using exposed goToSlide
    await page.evaluate((idx) => window.__goToSlide(idx), i);

    console.log(`📸 Capturing slide ${i + 1}/${totalSlides}...`);
    await new Promise(r => setTimeout(r, 3000));

    // Hide nav bar and slide counter
    await page.evaluate(() => {
      document.querySelectorAll('.fixed.bottom-0').forEach(el => el.style.display = 'none');
      const c = [...document.querySelectorAll('*')].find(el =>
        el.textContent?.match(/^\d+ \/ \d+$/) && el.children.length === 0
      );
      if (c) c.style.display = 'none';
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
    const pdfPage = pdfDoc.addPage([VIEWPORT.width, VIEWPORT.height]);
    pdfPage.drawImage(img, {
      x: 0, y: 0,
      width: VIEWPORT.width,
      height: VIEWPORT.height,
    });
  }

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync(OUTPUT, pdfBytes);
  console.log(`✅ PDF saved to ${OUTPUT} (${screenshots.length} slides, ${(pdfBytes.length / 1024 / 1024).toFixed(1)}MB)`);

  // Cleanup screenshots
  for (const f of screenshots) fs.unlinkSync(f);
  fs.rmdirSync(tmpDir);

  await browser.close();

  // Compress with Ghostscript
  console.log('🗜️  Compressing with Ghostscript...');
  try {
    execSync(`gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.5 -dPDFSETTINGS=/screen -dNOPAUSE -dQUIET -dBATCH -sOutputFile=${OUTPUT_COMPRESSED} ${OUTPUT}`);
    const compressedSize = fs.statSync(OUTPUT_COMPRESSED).size;
    console.log(`✅ Compressed PDF saved to ${OUTPUT_COMPRESSED} (${(compressedSize / 1024 / 1024).toFixed(1)}MB)`);
  } catch (err) {
    console.error('⚠️  Ghostscript compression failed. Uncompressed PDF is still available.');
  }
}

exportMobilePDF().catch((err) => {
  console.error('❌ Error:', err.message);
  process.exit(1);
});
