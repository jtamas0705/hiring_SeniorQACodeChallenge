Feature: Product API testing
    Comment: This feature tests the Product API to ensure that the response contains valid products.
             We perform multiple validations including checking the product price, category, and status code.

  Scenario: Validate product API response
    Comment:  1. Ensure the response status is 200.
              2. Check that the product price is greater than 0.
              3. Validate that the product belongs to the "Electronics" category.
              This will ensure that the products returned by the API meet certain criteria.

    Given the product API is called
    Then the response status should be 200
    And the response should contain products with price greater than 0
    And the product category should be "Electronics"
