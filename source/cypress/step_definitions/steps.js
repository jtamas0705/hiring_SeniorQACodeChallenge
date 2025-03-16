import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"


Given("Visit Page {string}", (url) => {
  cy.visit(url)
})

Given("I send a prebid API request", function () {
  cy.request("POST", "https://id5-sync.com/gm/v3", {
    requests: [
      {
        requestId: "0c2235b0-9c70-4ea1-a92a-1320ac079389",
        role: "leader",
        source: "id5-prebid-ext-module",
        partner: 1677,
        u: "https://magento.softwaretestingboard.com/",
      },
    ],
  }).then((response) => {
    this.setData("apiResponse", response)
  })
})

Then("the API response status should be {int}", function (statusCode) {
  const response = this.getData("apiResponse")
  expect(response.status).to.eq(statusCode)
})
