import { setWorldConstructor, Before } from "cypress-cucumber-preprocessor/steps"

class WorldConstructor {
  constructor() {
    this.testData = {} // Storage for shared test data
  }

  setData(key, value) {
    this.testData[key] = value
  }

  getData(key) {
    return this.testData[key]
  }
}

Before(function () {
  this.setData("baseUrl", "https://magento.softwaretestingboard.com/")
  this.setData("defaultHeaders", { "Content-Type": "application/json" })

  cy.log("Running before each scenario")
  cy.wait(1000) // Example: Add a delay if needed
  cy.visit("https://magento.softwaretestingboard.com/")
})

// Set the world constructor
setWorldConstructor(WorldConstructor)
