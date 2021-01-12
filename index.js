const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  await page.goto('https://deworkacy.ru');
  await page.screenshot({path: 'example.png'});
  await page.waitForTimeout(5000);
  page.type()
})();
