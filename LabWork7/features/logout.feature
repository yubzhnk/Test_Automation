Feature: Logout User

  Scenario: Logging out a user
    Given User launch the browser
    When User navigate to the URL "http://automationexercise.com"
    Then User verify that the home page is visible successfully
    When User click on the "Signup / Login" link
    Then User verify that "Login to your account" is visible
    When User enter correct email address and password
    And User click "Login" button
    Then User verify that Logged in as "Yuliia" is visible
    When User click on the "Logout" link
    Then User verify that user is navigated to login page
