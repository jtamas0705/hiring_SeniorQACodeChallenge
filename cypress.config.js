const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress")


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())

      return config
    },

    cucumberJson: {
      generate: true,
      outputFolder: "source/cypress/reports/cucumber-json"
    },

    fixturesFolder: "source/cypress/fixtures",
    supportFile: false,
    stepDefinitions: "source/cypress/support/step_definitions/",
    baseUrl: 'https://magento.softwaretestingboard.com',
    specPattern: "source/cypress/e2e/**/*.feature",
    chromeWebSecurity: false,
    screenshotsFolder: "source/cypress/screenshots",
    videosFolder: "source/cypress/videos", 
  },
  "cypress-cucumber-preprocessor": {
    "nonGlobalStepDefinitions": false,
    "json": {
      "enabled": true,
      "formatter": "source/support/cucumber-json-formatter",
      "output": "source/cypress/reports/report.json"
   }
  }
})
