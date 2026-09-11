const puppeteer = require('puppeteer-core');

const BASE = 'http://localhost:4321';
const routes = [
  '/', '/como-pensamos/', '/sobre/', '/solucoes/',
  '/solucoes/estrategia-transformacao/', '/solucoes/tecnologia-inteligencia/',
  '/solucoes/execucao-evolucao/', '/insights/', '/insights/estrategia/',
  '/experiencias/', '/conversar/', '/404',
];
const viewports = [
  { label: 'desktop', width: 1440, height: 900 },
  { label: 'mobile', width: 390, height: 844 },
];

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--hide-scrollbars'],
  });
  let fail = 0;
  for (const { label, width, height } of viewports) {
    for (const url of routes) {
      const page = await browser.newPage();
      await page.setViewport({ width, height });
      let status = 0;
      try {
        const res = await page.goto(`${BASE}${url}`, { waitUntil: 'networkidle0', timeout: 30000 });
        status = res.status();
      } catch (e) { status = -1; }
      const audit = await page.evaluate(() => ({
        headers: document.querySelectorAll('header').length,
        footers: document.querySelectorAll('footer').length,
        overflowX: document.documentElement.scrollWidth - document.documentElement.clientWidth,
        imgsNoAlt: [...document.querySelectorAll('img')].filter((i) => !i.hasAttribute('alt')).length,
        title: document.title,
      }));
      const ok = status === 200 && audit.headers === 1 && audit.footers === 1 && audit.overflowX <= 0;
      if (!ok) fail++;
      console.log(`${ok ? 'PASS' : 'FAIL'} [${label}] ${url} status=${status} header=${audit.headers} footer=${audit.footers} overflowX=${audit.overflowX}px imgsNoAlt=${audit.imgsNoAlt}`);
      await page.close();
    }
  }

  // Tablet spot-check (768px): home + como-pensamos viewport shots
  const tab = await browser.newPage();
  await tab.setViewport({ width: 768, height: 1024 });
  for (const url of ['/', '/como-pensamos/']) {
    await tab.goto(`${BASE}${url}`, { waitUntil: 'networkidle0', timeout: 30000 });
    const over = await tab.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    console.log(`TABLET ${url} overflowX=${over}px`);
  }
  await browser.close();
  console.log(fail === 0 ? '\nALL ROUTES PASS' : `\n${fail} FAILURES`);
})();
