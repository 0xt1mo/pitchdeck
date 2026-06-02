import puppeteer from 'puppeteer';
import { mkdirSync } from 'node:fs';

const URL = process.env.URL || 'http://localhost:5173/';
const OUT = '/tmp/entgov-shots';
mkdirSync(OUT, { recursive: true });

const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 1600, height: 900, deviceScaleFactor: 1.25 });
await page.goto(URL, { waitUntil: 'networkidle2', timeout: 60000 });

// Wait for the deck to expose its nav hook
await page.waitForFunction('typeof window.__goToSlide === "function" && window.__totalSlides > 0', { timeout: 20000 });
const total = await page.evaluate('window.__totalSlides');
console.log('total slides:', total);

for (let i = 0; i < total; i++) {
  await page.evaluate((idx) => window.__goToSlide(idx), i);
  await new Promise((r) => setTimeout(r, 2100)); // let entrance animations settle
  const n = String(i + 1).padStart(2, '0');
  await page.screenshot({ path: `${OUT}/slide-${n}.png` });
  console.log('shot', n);
}

await browser.close();
console.log('done →', OUT);
