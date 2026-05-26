import puppeteer from 'puppeteer';
const URL = process.argv[2] || 'http://localhost:5173';
const SLIDE = parseInt(process.argv[3] || '9', 10);
const OUT = process.argv[4] || '/tmp/slide-snap.png';
const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
await page.goto(URL, { waitUntil: 'networkidle2', timeout: 30000 });
await new Promise(r => setTimeout(r, 1500));
const enter = await page.$('button');
if (enter) { await enter.click(); await new Promise(r => setTimeout(r, 1000)); }
await page.evaluate((i) => window.__goToSlide(i), SLIDE);
await new Promise(r => setTimeout(r, 1500));
await page.screenshot({ path: OUT, fullPage: false });
await browser.close();
console.log('saved', OUT);
