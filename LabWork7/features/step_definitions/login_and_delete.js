const { Given, When, Then, After } = require('@cucumber/cucumber');
const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

let driver;
console.log("Test Case 2: Login User with correct email and password");
console.log("1. Launch browser");
console.log("2. Navigate to url 'http://automationexercise.com'");
console.log("3. Verify that home page is visible successfully");
console.log("4. Click on 'Signup / Login' button");
console.log("5. Verify 'Login to your account' is visible");
console.log("6. Enter correct email address and password");
console.log("7. Click 'login' button");
console.log("8. Verify that 'Logged in as username' is visible");
console.log("9.  Click 'Delete Account' button");
console.log("10. Verify that 'ACCOUNT DELETED!' is visible");

Given('User launch the browser', async function () {
    driver = await new Builder().forBrowser('chrome').build();
});

When('User navigate to the URL {string}', async function (url) {
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

Then('User verify that {string} is visible', async function (text) {
    const element = await driver.findElement(By.xpath(`//*[contains(., '${text}')]`));
    const actualText = await element.getAttribute("innerHTML");
    assert(actualText.includes(text), `Text "${text}" is not visible`);
});


When('User enter correct email address and password', async function () {
    const emailInput = await driver.findElement(By.css("input[data-qa='login-email']"));
    await emailInput.sendKeys('haged90765@agafx.com');

    const passwordInput = await driver.findElement(By.css("input[data-qa='login-password']"));
    await passwordInput.sendKeys('mypassword123');
});

When('User click {string} button', async function (buttonText) {
    const button = await driver.findElement(By.xpath(`//button[contains(text(), '${buttonText}')]`));
    await button.click();
});

Then('User verify that Logged in as {string} is visible', async function (name) {
    const loggedInUserElement = await driver.findElement(By.xpath("//a[contains(text(), 'Logged in as')]/b"));
    const actualName = await loggedInUserElement.getText();
    assert.strictEqual(actualName, name, 'Logged in user name is not as expected');
});




After(async function () {
    await driver.quit();
});
