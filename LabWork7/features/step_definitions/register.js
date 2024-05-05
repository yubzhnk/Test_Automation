const { Given, When, Then, After } = require('@cucumber/cucumber');
const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

let driver;
console.log("\nTest Case 5: Register User with existing email");
console.log("1. Launch browser");
console.log("2. Navigate to url 'http://automationexercise.com'");
console.log("3. Verify that home page is visible successfully");
console.log("4. Click on 'Signup / Login' button");
console.log("5. Verify 'New User Signup!' is visible");
console.log("6. Enter name and already registered email address");
console.log("7. Click 'Signup' button");
console.log("8. Verify error 'Email Address already exist!' is visible");


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


When('User click on the {string} button', async function (buttonText) {
    const link = await driver.findElement(By.xpath(`//a[contains(text(), '${buttonText}')]`));
    await link.click();
});


Then('User verify that {string} is visible', async function (text) {
    await driver.wait(until.elementLocated(By.xpath(`//*[contains(text(), '${text}')]`)), 5000);
});

When('User enter name and an already registered email address', async function () {
    const nameInput = await driver.findElement(By.css("input[data-qa='signup-name']"));
    await nameInput.sendKeys('Yuliia');

    const emailInput = await driver.findElement(By.css("input[data-qa='signup-email']"));
    await emailInput.sendKeys('haged90765@agafx.com');
});


When('User click the {string} button', async function (buttonText) {
    const button = await driver.findElement(By.xpath(`//button[contains(text(), '${buttonText}')]`));
    await button.click();
});

Then('User verify that the error {string} is visible', async function (errorMessage) {
    await driver.wait(until.elementLocated(By.xpath(`//*[contains(text(), '${errorMessage}')]`)), 5000);
});

// Close the browser after scenario execution
After(async function () {
    await driver.quit();
});
