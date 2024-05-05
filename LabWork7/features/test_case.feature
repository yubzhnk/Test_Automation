Feature: Verify Test Cases Page

  Scenario: User verifies navigation to Test Cases page
    Given User launch the browser
    When User navigate to the URL 'http://automationexercise.com'
    Then User verify that the home page is visible successfully
    When User click on the 'Test Cases' link
    Then User verify that they are navigated to the test cases page successfully
