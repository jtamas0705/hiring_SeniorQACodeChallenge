@EXT_API @ALL
Feature: Verify API integration with external API
  Comment: This feature describes testing the integration of the web application
           with an external API to verify that the correct data is received
           and that the system handles responses correctly.

  Scenario: Verify API response status and content from the external API
    When I send a POST request to the external API
    Then I should receive a response with status 200
    And the response should contain a valid JSON payload
