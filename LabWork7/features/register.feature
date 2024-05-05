Feature: Register User with existing email

  Scenario: Register a user with an existing email address
    Given User launch the browser
    When User navigate to the URL "http://automationexercise.com"
    Then User verify that the home page is visible successfully
    When User click on the "Signup / Login" button
    Then User verify that "New User Signup!" is visible
    When User enter name and an already registered email address
    And User click the "Signup" button
    Then User verify that the error "Email Address already exist!" is visible
