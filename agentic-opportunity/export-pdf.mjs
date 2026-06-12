import puppeteer from 'puppeteer';
import { PDFDocument } from 'pdf-lib';
import fs from 'fs';

const FILE = 'file:///Users/alanradi/pitchdeck/agentic-opportunity/index.html';
const OUT  = '/Users/alanradi/pitchdeck/exports/Agentic-Opportunity-Unicity-Labs-2026.pdf';
const SCALE   = +(process.env.PDF_SCALE   || 2);   // 2x deviceScaleFactor (retina-crisp)
const QUALITY = +(process.env.PDF_QUALITY || 85);  // JPEG q85 (recipe: ~62% smaller, no visible loss)

// The deck scales its 1280x720 stage to min((innerWidth-48)/1280, (innerHeight-140)/720) —
// i.e. it ALWAYS leaves nav-chrome margin around the slide. For a PDF we want ONLY the slide.
// Render at a viewport whose perfect-fit scale is a clean ratio, force --s to fill it (drop the
// chrome margin), then screenshot CLIPPED to the .stage element. Each page = the slide, edge-to-edge.
const VW = 1600, VH = 900, S = VW / 1280; // 1.25 -> stage renders exactly 1600x900 = viewport
const sleep = ms => new Promise(r => setTimeout(r, ms));

const b = await puppeteer.launch({ headless:'new', args:['--no-sandbox','--force-color-profile=srgb'] });
const p = await b.newPage();
await p.setViewport({ width:VW, height:VH, deviceScaleFactor:SCALE });
await p.goto(FILE, { waitUntil:'networkidle0' });
// reveals -> final state (every slide fully painted); hide all nav chrome
await p.addStyleTag({ content:
  // force EVERY reveal to its final state — incl. the trifecta (.blk/.op/.triresult, slam ends 2.05s in)
  '.rv,.rx,.blk,.op,.triresult,h1 .c{opacity:1!important;transform:none!important;animation:none!important}' +
  '.navbtns,.hint,.autochip,.hud,.ledger,.ov,.blk0{display:none!important}' +
  // ladder climb is transient — capture its settled end state (bar on L3 only)
  '.lv::before{animation:none!important;opacity:0!important}' +
  '.sl.is-active .ladder .lv:nth-child(2)::before{opacity:1!important}' });
// static-document framing for the compliance clock: a PDF can't count down,
// so the live-ticker copy becomes a creation-date stamp (the HTML deck keeps the live clock)
await p.evaluate(() => {
  const M = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
  const d = new Date();
  const ds = M[d.getMonth()] + ' ' + (d.getDate() < 10 ? '0' : '') + d.getDate() + ' ' + d.getFullYear();
  const live = document.querySelector('.clock .live');
  if (live) live.innerHTML = 'AS OF DOCUMENT CREATION · ' + ds;
  const em = document.querySelector('.hmsrow em');
  if (em) em.textContent = 'HOURS · MINUTES · SECONDS — AT DOCUMENT CREATION';
});
await sleep(900);
const N = await p.evaluate(() => document.querySelectorAll('.sl').length);

const pdf = await PDFDocument.create();
const PW = 1280, PH = 720; // uniform 16:9 PDF page (points); high-res image drawn to fill
let cur = 0, total = 0;
for (let i = 0; i < N; i++) {
  while (cur < i) { await p.keyboard.press('ArrowRight'); cur++; await sleep(450); }
  // force the stage to fill the viewport exactly (drop the -48/-140 chrome margin)
  await p.evaluate(s => document.documentElement.style.setProperty('--s', s), S);
  await sleep(850); // settle: counter snap + inner auto-fit
  const stage = await p.$('.sl.is-active .stage');
  const box = await stage.boundingBox();
  const clip = { x:Math.max(0,Math.round(box.x)), y:Math.max(0,Math.round(box.y)),
                 width:Math.round(box.width), height:Math.round(box.height) };
  const buf = await p.screenshot({ type:'jpeg', quality:QUALITY, clip });
  total += buf.length;
  if (i === 0) fs.writeFileSync('/tmp/shots/pdf-cover.jpg', buf);
  if (i === 5) fs.writeFileSync('/tmp/shots/pdf-gov.jpg', buf);
  const img  = await pdf.embedJpg(buf);
  const page = pdf.addPage([PW, PH]);
  page.drawImage(img, { x:0, y:0, width:PW, height:PH });
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
