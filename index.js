const puppeteer = require('puppeteer');

async function getPic() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://courseweb.sliit.lk');
  await page.screenshot({path: 'courseweb.png'});

  await browser.close();
}

getPic();