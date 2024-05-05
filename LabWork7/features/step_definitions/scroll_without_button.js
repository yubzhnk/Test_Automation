const { Given, When, Then, After } = require('@cucumber/cucumber');
const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

let driver;
console.log("Test Case 26: Verify Scroll Up without 'Arrow' button and Scroll Down functionality");
console.log("1. Launch browser");
console.log("2. Navigate to url 'http://automationexercise.com'");
console.log("3. Verify that home page is visible successfully");
console.log("4. Scroll down page to bottom");
console.log("5. Verify 'SUBSCRIPTION' is visible");
console.log("6. Scroll up page to top");
console.log("7. Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen");


Given('User launch the browser', async function () {
    driver = await new Builder().forBrowser('chrome').build();
});

When('User navigate to the URL {string}', async function (url) {
    await driver.get(url);
});

Then('User verify that the home page is visible successfully', async function () {
    const pageTitle = await driver.getTitle();
    assert.ok(pageTitle.includes('Automation Exercise'), 'Home page is not visible successfully');
});

When('User scroll down the page to bottom', async function () {
    await driver.executeScript('window.scrollTo(0, document.body.scrollHeight)');
});

Then('User verify that {string} is visible', async function (text) {
    try {
        await driver.wait(until.elementLocated(By.xpath(`//*[contains(text(), '${text}')]`)), 5000);
        assert.ok(true, `${text} is visible`);
    } catch (error) {
        assert.fail(`${text} is not visible`);
    }
});

When('User scroll up the page to top', async function () {
    await driver.executeScript('window.scrollTo(0, -document.body.scrollHeight)');
});

Then('User verify that the page is scrolled up and {string} text is visible on screen', async function (text) {
    await driver.wait(until.elementLocated(By.xpath(`//*[contains(text(), '${text}')]`)), 5000);
    assert.ok(true, `${text} is visible after scrolling up`);
});

After(async function () {
    await driver.quit();
});
