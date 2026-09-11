const puppeteer = require('puppeteer-core');
const path = require('path');

const BASE = 'http://localhost:4321';
const OUT = path.join(__dirname, 'validacao');
const DESKTOP_W = 1440;
const MOBILE_W = 390;

const pages = [
  { name: 'home',           url: '/' },
  { name: 'como-pensamos',  url: '/como-pensamos/' },
  { name: 'sobre',          url: '/sobre/' },
  { name: 'solucoes',       url: '/solucoes/' },
  { name: 'solucao-estrategia-transformacao', url: '/solucoes/estrategia-transformacao/' },
  { name: 'solucao-tecnologia-inteligencia',  url: '/solucoes/tecnologia-inteligencia/' },
  { name: 'solucao-execucao-evolucao',        url: '/solucoes/execucao-evolucao/' },
  { name: 'insights',       url: '/insights/' },
  { name: 'experiencias',   url: '/experiencias/' },
  { name: 'conversar',      url: '/conversar/' },
  { name: 'nao-encontrada', url: '/404' },
];

async function preparePage(page) {
  // Oculta a Astro Dev Toolbar (artefato exclusivo do `astro dev`, ausente no build publicado)
  await page.addStyleTag({ content: 'astro-dev-toolbar { display: none !important; }' });
  return page.evaluate(async () => {
    // Scroll instantâneo: o CSS global usa `scroll-behavior: smooth`,
    // e o scroll animado corrompe capturas full-page (header fixo aparece no meio da página)
    await new Promise((resolve) => {
      let total = 0;
      const h = 500;
      const timer = setInterval(() => {
        total += h;
        window.scrollBy({ top: h, behavior: 'instant' });
        if (total >= document.body.scrollHeight) { clearInterval(timer); resolve(); }
      }, 80);
    });
    window.scrollTo({ top: 0, behavior: 'instant' });
  });
}

const settle = (ms) => new Promise((r) => setTimeout(r, ms));

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu', '--hide-scrollbars'],
  });

  for (const { name, url } of pages) {
    // Desktop
    const dPage = await browser.newPage();
    await dPage.setViewport({ width: DESKTOP_W, height: 900 });
    await dPage.goto(`${BASE}${url}`, { waitUntil: 'networkidle0', timeout: 30000 });
    await preparePage(dPage);
    await settle(600);
    await dPage.screenshot({ path: path.join(OUT, `${name}_desktop.png`), fullPage: true });
    await dPage.close();
    console.log(`✓ ${name}_desktop.png`);

    // Mobile
    const mPage = await browser.newPage();
    await mPage.setViewport({ width: MOBILE_W, height: 844 });
    await mPage.goto(`${BASE}${url}`, { waitUntil: 'networkidle0', timeout: 30000 });
    await preparePage(mPage);
    await settle(600);
    await mPage.screenshot({ path: path.join(OUT, `${name}_mobile.png`), fullPage: true });
    await mPage.close();
    console.log(`✓ ${name}_mobile.png`);
  }

  await browser.close();
  console.log('\nTodas as screenshots foram atualizadas.');
})();
