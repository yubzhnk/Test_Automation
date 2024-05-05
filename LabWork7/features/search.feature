Feature: Automated Testing for Navigation and Search

  Scenario: Verify Navigation and Search Functionality
    Given User launch the browser
    When User navigate to the URL "http://automationexercise.com"
    Then User verify that the home page is visible successfully
    When User click on the 'Products' link
    Then User verify that the user is navigated to the ALL PRODUCTS page successfully
    When User enter "Polo" in the search input and click the search button
    Then User verify that 'Searched Products' is visible
    And User verify that all the products related to the search are visible
