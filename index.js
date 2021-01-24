const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/site/index.html');
  //await page.screenshot({path: 'example.png'});
  // await page.waitForTimeout(1000);
  // await page.click('#left_button button')
  // await page.waitForTimeout(500);
  // let element = await page.$('#resultBlock')
  // let value = await page.evaluate(el => JSON.parse(el.textContent), element)
  // console.log(value)
  await page.waitForTimeout(1000);
  await page.click('#right_button button')
  await page.waitForTimeout(500);
  let element = await page.$x('//div[@id="resultBlock"]')
  let value = await page.evaluate(el => JSON.parse(el.textContent), element)
  console.log(value)
})();
