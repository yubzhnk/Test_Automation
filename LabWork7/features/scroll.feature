Feature: Verify Scroll Up and Scroll Down Functionality

  Scenario: Verify Scroll Up using 'Arrow' button and Scroll Down functionality
    Given User launch the browser
    When User navigate to the URL "http://automationexercise.com"
    Then User verify that the home page is visible successfully
    When User scroll down the page to bottom
    Then User verify that 'Subscription' is visible
    When User click on the arrow at the bottom right side to move upward
    Then User verify that the page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen
