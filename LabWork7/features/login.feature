Feature: Login functionality on automationexercise.com

  Scenario: Attempting to login with incorrect data
    Given User launch the browser
    When User navigate to the URL "http://automationexercise.com"
    Then User verify that the home page is visible successfully
    When User click on the " Signup / Login" button
    Then User verify that "Login to your account" is visible
    When User enter incorrect email address and password
    And User click "login" button
    Then User verify error "Your email or password is incorrect!" is visible
