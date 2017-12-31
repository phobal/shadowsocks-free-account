const puppeteer = require('puppeteer');

const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );
async function run(url) {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url);
  await page.waitForNavigation();
  const resultSelector = '#ss tbody tr .sorting_1';
  await page.waitForSelector(resultSelector);
  const result = await page.evaluate((resultSelector) => {
    const rs = Array.from(document.querySelectorAll('#ss tbody tr td'));
    return rs.map(count => {
      return count.textContent.trim();
    })
  }, resultSelector);
  browser.close();
  return chunk(result, 8);
}
module.exports = run;
