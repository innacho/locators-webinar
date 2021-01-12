const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/site/index.html');
  await page.screenshot({path: 'example.png'});
  await page.click("button")
  await page.waitForTimeout(500);
  let element = await page.$('#resultBlock')
  let value = await page.evaluate(el => JSON.parse(el.textContent), element)
  console.log(value)
})();
