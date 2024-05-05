const { Given, When, Then, After } = require('@cucumber/cucumber');
const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

let driver;

console.log("Test Case 7: Verify Test Cases Page");
console.log("1. Launch browser");
console.log("2. Navigate to url 'http://automationexercise.com'");
console.log("3. Verify that home page is visible successfully");
console.log("4. Click on 'Test Cases' button");
console.log("5. Verify user is navigated to test cases page successfully");

Given('User launch the browser', async function () {
    driver = await new Builder().forBrowser('chrome').build();
});

When('User navigate to the URL {string}', { timeout: 10000 }, async function (url) {
    await driver.get(url);
});

Then('User verify that the home page is visible successfully', async function () {
    const pageTitle = await driver.getTitle();
    assert.strictEqual(pageTitle, 'Automation Exercise', 'Page title is not as expected');
});

When('User click on the {string} link', async function (linkText) {
    const link = await driver.findElement(By.xpath(`//a[contains(text(), '${linkText}')]`));
    await link.click();
});

Then('User verify that they are navigated to the test cases page successfully', async function () {
    await driver.wait(until.titleIs('Automation Practice Website for UI Testing - Test Cases'), 5000);
});

After(async function () {
    if (driver) {
        await driver.quit();
    }
});
