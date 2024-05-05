const { Given, When, Then, After } = require('@cucumber/cucumber');
const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

let driver;
console.log("Test Case 3: Login User with incorrect email and password");
console.log("1. Launch browser");
console.log("2. Navigate to url 'http://automationexercise.com'");
console.log("3. Verify that home page is visible successfully");
console.log("4. Click on 'Signup / Login' button");
console.log("5. Verify 'Login to your account' is visible");
console.log("6. Enter incorrect email address and password");
console.log("7. Click 'login' button");
console.log("8. Verify error 'Your email or password is incorrect!' is visible");


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

When('User enter incorrect email address and password', async function () {
    const emailInput = await driver.findElement(By.css("input[data-qa='login-email']"));
    await emailInput.sendKeys('incorrect@example.com');

    const passwordInput = await driver.findElement(By.css("input[data-qa='login-password']"));
    await passwordInput.sendKeys('incorrectpassword');
});


When('User click {string} button', async function (buttonText) {
    const button = await driver.findElement(By.css("button[data-qa='login-button']"));
    await button.click();
});

Then('User verify error {string} is visible', async function (errorMessage) {
    await driver.wait(until.elementLocated(By.xpath(`//*[contains(text(), '${errorMessage}')]`)), 5000);
});

// Close the browser after scenario execution
After(async function () {
    await driver.quit();
});
