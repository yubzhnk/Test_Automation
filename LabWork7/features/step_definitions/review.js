const { Given, When, Then, After } = require('@cucumber/cucumber');
const { Builder, By } = require('selenium-webdriver');


let driver;
console.log("Test Case 21: Add review on product");
console.log("1. Launch browser");
console.log("2. Navigate to url 'http://automationexercise.com'");
console.log("3. Click on 'Products' button");
console.log("4. Verify user is navigated to ALL PRODUCTS page successfully");
console.log("5. Click on 'View Product' button");
console.log("6. Verify 'Write Your Review' is visible");
console.log("7. Enter name, email and review");
console.log("8. Click 'Submit' button");
console.log("9. Verify success message 'Thank you for your review.'");


Given('User launch browser', async function () {
  driver = await new Builder().forBrowser('chrome').build();
});

When('User navigate to url {string}', { timeout: 15000 }, async function (url) {
  await driver.get(url);
});

When('Click on {string} menu button', { timeout: 15000 }, async function (btnText) {
  const button = await driver.findElement(By.xpath(`//a[contains(text(), '${btnText}')]/i`));
  await button.click();
});

Then('Verify user is navigated to ALL PRODUCTS page successfully', { timeout: 10000 }, async function () {
  let pageTitle = await driver.getTitle();
  if (pageTitle !== "Automation Exercise") {
    throw new Error("All Products page is not visible");
  }
});



When('Click on {string} button', { timeout: 10000 }, async function (string) {
  const firstProduct = await driver.findElement(By.xpath("(//div[@class='features_items']//div[@class='col-sm-4'])[1]"));
  const viewProductButton = await firstProduct.findElement(By.xpath(`//a[contains(text(), '${string}')]/i`));
  await driver.executeScript("arguments[0].click();", viewProductButton);
});

Then('Verify {string} is visible', { timeout: 15000 }, async function (text) {
  await driver.findElement(By.xpath(`.//a[.='Write Your Review']`)).getText();
});

When('Enter name, email and review', { timeout: 20000 }, async function () {
  const userName = await driver.findElement(By.id('name'));
  const userEmail = await driver.findElement(By.id('email'));
  const userReview = await driver.findElement(By.id('review'));
  await userName.sendKeys('Yuliia');
  await userEmail.sendKeys('haged90765@agafx.com');
  await userReview.sendKeys('Good product');
});

When('Click {string} button', { timeout: 5000 }, async function (btnText) {
  const button = await driver.findElement(By.xpath(`//button[contains(text(), "${btnText}")]`));
  await button.click();
  await driver.sleep(2000);
});

Then('Verify success message {string}', { timeout: 5000 }, async function (text) {
  await driver.findElement(By.xpath(`//span[.='Thank you for your review.']`)).getText();
});

After(async function () {
  await driver.quit();
});
