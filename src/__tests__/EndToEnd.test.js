const puppeteer = require('puppeteer');

describe('show/hide an event details', () => {
  test('An element is collapsed by default', async () => {
    const browser = await puppeteer.launch();

    const page = await browser.newPage();
    await page.goto('http://localhost:3000/');

    await page.waitForSelector('.event');

    const eventDetails = await page.$('.event .event_Details');
    expect(eventDetails).toBeNull();
    browser.close();
  });
});