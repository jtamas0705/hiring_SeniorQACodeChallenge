import { Before, Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Before(() => {
  cy.wait(3000)
})

Given('Go to page {string}', (url) => {
  cy.visit(url)
})

Given('the web application interacts with the external API', () => {
  cy.visit('https://magento.softwaretestingboard.com/')
  cy.intercept('POST', '**/api/download').as('downloadRequest');
  cy.wait('@downloadRequest').then((interception) => {
  console.log(interception.response);
})
})

When('I send a POST request to the external API', () => {
  cy.request({
    method: 'POST',
    url: 'https://id5-sync.com/gm/v3', // External API URL
    body: {
      "requests": [
        {
          "requestId": "0c2235b0-9c70-4ea1-a92a-1320ac079389",
          "requestCount": 1,
          "role": "leader",
          "source": "id5-prebid-ext-module",
          "partner": 1677,
          "v": "unknown",
          "tml": "https://magento.softwaretestingboard.com/",
          "u": "https://magento.softwaretestingboard.com/"
        }
      ]
    },
    headers: {
      'Content-Type': 'application/json'
    }
  }).as('apiResponse') // Alias for the response
})

Then('I should receive a response with status 200', () => {
  cy.get('@apiResponse').should((response) => {
    expect(response.status).to.eq(200) // Verify the response status is 200
  })
})

Then('the response should contain a valid JSON payload', () => {
  cy.get('@apiResponse').should((response) => {
    expect(response.body).to.be.an('object') // Verify the response body is a valid JSON object
    expect(response.body).to.have.property('requests') // Verify the response contains the expected property
  })
})

function validateProductPrice(products) {
  products.forEach((product) => {
    expect(product.price).to.be.greaterThan(0, `Price of product ${product.name} is greater than 0`)
  })
}

function validateProductCategory(products, category) {
  products.forEach((product) => {
    expect(product.category).to.equal(category, `Product ${product.name} belongs to ${category} category`)
  })
}

Given('the product API is called', () => {
  cy.request('GET', 'https://magento.softwaretestingboard.com/api/products') // API URL
    .as('apiResponse');
})

Then('the response status should be 200', function () {
  cy.get('@apiResponse').should((response) => {
    expect(response.status).to.equal(200);
  })
})

Then('the response should contain products with price greater than 0', function () {
  cy.get('@apiResponse').then((response) => {
    const products = response.body.products
    validateProductPrice(products)
  })
})

Then('the product category should be {string}', function (category) {
  cy.get('@apiResponse').then((response) => {
    const products = response.body.products;
    validateProductCategory(products, category)
  })
})
