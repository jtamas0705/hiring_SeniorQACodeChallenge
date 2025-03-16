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
      outputFolder: "reports/cucumber-html"
    },

    fixturesFolder: "source/cypress/fixtures",
    supportFile: "source/cypress/support/e2e.js",
    stepDefinitions: "source/cypress/step_definitions/",
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
      "formatter": "source/cypress/support/cucumber-json-formatter",
      "output": "reports/cucumber-json"
   }
  }
})
