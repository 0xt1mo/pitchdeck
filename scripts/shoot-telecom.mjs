// Screenshot every slide of the running deck to /tmp/telecom-shots/slide-NN.png (1-indexed).
// Usage: node scripts/shoot-telecom.mjs [url]
import puppeteer from 'puppeteer';
import fs from 'fs';

const URL = process.argv[2] || 'http://localhost:5173';
const OUT = '/tmp/telecom-shots';
fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 810, deviceScaleFactor: 2 });
await page.goto(URL, { waitUntil: 'networkidle2', timeout: 30000 });
await new Promise((r) => setTimeout(r, 1500));

const total = await page.evaluate(() => window.__totalSlides || 0);
for (let i = 0; i < total; i++) {
  await page.evaluate((idx) => window.__goToSlide(idx), i);
  await new Promise((r) => setTimeout(r, 700));
  const n = String(i + 1).padStart(2, '0');
  await page.screenshot({ path: `${OUT}/slide-${n}.png` });
  console.log(`shot ${i + 1}/${total}`);
}
await browser.close();
console.log(`done → ${OUT}`);
