import puppeteer from 'puppeteer';
import { PDFDocument } from 'pdf-lib';
import fs from 'fs';

const FILE = 'file:///Users/alanradi/pitchdeck/agentic-opportunity/index.html';
const OUT  = '/Users/alanradi/pitchdeck/exports/Agentic-Opportunity-Unicity-Labs-2026.pdf';
const SCALE   = +(process.env.PDF_SCALE   || 2);   // 2x deviceScaleFactor (retina-crisp)
const QUALITY = +(process.env.PDF_QUALITY || 85);  // JPEG q85 (recipe: ~62% smaller, no visible loss)
const W = 1600, H = 900;                            // 16:9 == the 1280x720 stage, full-bleed (no letterbox)
const sleep = ms => new Promise(r => setTimeout(r, ms));

const b = await puppeteer.launch({ headless:'new', args:['--no-sandbox','--force-color-profile=srgb'] });
const p = await b.newPage();
await p.setViewport({ width:W, height:H, deviceScaleFactor:SCALE });
await p.goto(FILE, { waitUntil:'networkidle0' });
// Force reveals to their final state so every slide is fully painted regardless of animation timing
await p.addStyleTag({ content: '.rv,.rx{opacity:1!important;transform:none!important;animation:none!important}' });
await sleep(900);
const N = await p.evaluate(() => document.querySelectorAll('.sl').length);

const pdf = await PDFDocument.create();
let cur = 0, total = 0;
for (let i = 0; i < N; i++) {
  while (cur < i) { await p.keyboard.press('ArrowRight'); cur++; await sleep(450); }
  await sleep(900); // slide transition + counter snap + auto-fit settle
  const buf = await p.screenshot({ type:'jpeg', quality:QUALITY });
  total += buf.length;
  if (i === 0)  fs.writeFileSync('/tmp/shots/pdf-cover.jpg', buf);
  if (i === 8)  fs.writeFileSync('/tmp/shots/pdf-dense.jpg', buf); // protocol-stack table (densest text)
  const img  = await pdf.embedJpg(buf);
  const page = pdf.addPage([W, H]);
  page.drawImage(img, { x:0, y:0, width:W, height:H });
}
await b.close();

pdf.setTitle('The Agentic Opportunity — Unicity Labs 2026');
pdf.setAuthor('Unicity Labs');
pdf.setSubject('2026 Industry Report');
const bytes = await pdf.save();
fs.mkdirSync('/Users/alanradi/pitchdeck/exports', { recursive:true });
fs.writeFileSync(OUT, bytes);
console.log('pages:', N, '| raw jpeg total:', (total/1048576).toFixed(2)+'MB', '| PDF:', (bytes.length/1048576).toFixed(2)+'MB');
console.log('OUT:', OUT);
