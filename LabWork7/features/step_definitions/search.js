const { Given, When, Then, After } = require('@cucumber/cucumber');
const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

let driver;
console.log("Test Case 9: Search Product");
console.log("1. Launch browser");
console.log("2. Navigate to url 'http://automationexercise.com'");
console.log("3. Verify that home page is visible successfully");
console.log("4. Click on 'Products' button");
console.log("5. Verify user is navigated to ALL PRODUCTS page successfully");
console.log("6. Enter product name in search input and click search button");
console.log("7. Verify 'SEARCHED PRODUCTS' is visible");
console.log("8. Verify all the products related to search are visible");


Given('User launch the browser', async function () {
    driver = await new Builder().forBrowser('chrome').build();
});

When('User navigate to the URL {string}', { timeout: 10000 }, async function (url) {
    await driver.get(url);
});

Then('User verify that the home page is visible successfully', async function () {
    const pageTitle = await driver.getTitle();
    assert.ok(pageTitle.includes('Automation Exercise'), 'Home page is not visible successfully');
});

When('User click on the {string} link', { timeout: 10000 }, async function (linkText) {
    const link = await driver.findElement(By.xpath(`//a[contains(text(), '${linkText}')]`));
    await link.click();
});

Then('User verify that the user is navigated to the ALL PRODUCTS page successfully', async function () {
    await driver.wait(until.titleContains('All Products'), 8000);
    const pageTitle = await driver.getTitle();
    assert.ok(pageTitle.includes('Automation Exercise - All Products'), 'User is not navigated to the ALL PRODUCTS page successfully');
});

When('User enter {string} in the search input and click the search button', async function (productName) {
    const searchInput = await driver.findElement(By.id('search_product'));
    await searchInput.clear(); // Clear any existing text in the input field
    await searchInput.sendKeys(productName); // Enter the product name
    const searchButton = await driver.findElement(By.id('submit_search')); // Locate the search button by its id
    await searchButton.click(); // Click the search button
});


Then('User verify that {string} is visible', async function (text) {
    try {
        await driver.wait(until.elementLocated(By.xpath(`//*[contains(text(), '${text}')]`)), 5000);
        assert.ok(true, `${text} is visible`);
    } catch (error) {
        assert.fail(`${text} is not visible`);
    }
});

Then('User verify that all the products related to the search are visible', async function () {
    const productInfoElements = await driver.findElements(By.className('productinfo'));
    assert.ok(productInfoElements.length > 0, 'No products related to the search are visible');
});

After(async function () {
    await driver.quit();
});
