Feature: API Testing with Prebid

  Scenario: Verify Prebid API Response
    Given I send a prebid API request
    Then the API response status should be 200