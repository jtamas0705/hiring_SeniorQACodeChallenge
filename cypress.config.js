const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    fixturesFolder: "source/fixtures",
    supportFile: false,
    specPattern: "source/**/*.cy.js",
    chromeWebSecurity: false,
    baseUrl: "https://magento.softwaretestingboard.com",
    screenshotsFolder: "source/cypress/screenshots",
    videosFolder: "source/cypress/videos", 
  },
});
