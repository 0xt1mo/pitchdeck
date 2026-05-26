import puppeteer from 'puppeteer';
import fs from 'fs';
const URL = process.argv[2] || 'http://localhost:5173';
const OUT_DIR = process.argv[3] || '/tmp/deck-audit';
fs.mkdirSync(OUT_DIR, { recursive: true });
const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
await page.goto(URL, { waitUntil: 'networkidle2', timeout: 30000 });
await new Promise(r => setTimeout(r, 1500));
const enter = await page.$('button');
if (enter) { await enter.click(); await new Promise(r => setTimeout(r, 1000)); }
const total = await page.evaluate(() => window.__totalSlides);
console.log(`detected ${total} slides`);
for (let i = 0; i < total; i++) {
  await page.evaluate((idx) => window.__goToSlide(idx), i);
  await new Promise(r => setTimeout(r, 1200));
  const out = `${OUT_DIR}/slide-${String(i).padStart(2, '0')}.png`;
  await page.screenshot({ path: out });
  console.log(`saved ${out}`);
}
await browser.close();
