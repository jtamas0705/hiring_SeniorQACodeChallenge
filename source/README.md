# Leveraging Cypress and Cucumber for Effective API Testing

## Overview: Using Cucumber + Cypress to Test APIs of Magento Software Testing Board

In this project, we leverage the combination of **Cypress** and **Cucumber** to automate testing for APIs on the [Magento Software Testing Board](https://magento.softwaretestingboard.com/) website. The goal is to ensure that the web application interacts correctly with external APIs and that all the critical API endpoints function as expected.

### Why Use Cypress + Cucumber?

- **Cypress** provides fast, reliable, and easy-to-set-up end-to-end testing for modern web applications. It allows us to write tests in JavaScript, ensuring excellent integration with modern web technologies.
  
- **Cucumber** enables us to write tests in **Gherkin** language, which is user-friendly and allows non-developers, such as business analysts or product owners, to easily understand the test scenarios. This also helps create more readable and maintainable test code.

By combining **Cypress** for robust automation and **Cucumber** for readable, understandable test scenarios, we achieve the best of both worlds—automation with easy-to-understand business-readable test cases.

### Testing APIs with Cypress and Cucumber

The Magento Software Testing Board site involves interacting with multiple external APIs. For example, in this project, we use Cypress to verify that the **Prebid API** returns the expected responses when triggered from the website. Cypress simplifies making requests to external APIs, and Cucumber allows us to write clear, concise feature files that define the test scenarios.

#### Key Steps in Testing APIs

1. **Setup API Request with Cypress**: We use `cy.request()` to interact with the external API endpoints.
  
2. **Define Scenarios with Cucumber**: We use Gherkin syntax in `.feature` files to define the API interactions, such as verifying that a specific API returns a status code of 200, or checking that the API's response body includes the expected properties.

3. **Validate Responses**: Using Cypress assertions, we verify that the response data meets our expectations (status codes, response body, etc.).

4. **Improve Test Readability with Cucumber**: Using Cucumber, the steps in our API tests are defined in plain English, making it easier for stakeholders to understand how the API is tested.

#### Example Workflow for Testing APIs

1. **Visit the Webpage**: Start by visiting the **Magento Software Testing Board** homepage, or any other specific page relevant to the API being tested.
  
2. **Trigger API Call**: Use **Cypress** to trigger an API request, such as a `POST` request to an external service like **Prebid API**.

3. **Validate API Response**: In the Cucumber feature file, write scenarios like:

   ```gherkin
   Feature: Testing API calls to Prebid API

     Scenario: Verifying successful API response
       Given I send a request to the Prebid API
       Then the API should return a 200 status code
       And the API response body should contain "success"
4. **Run the Tests**: Once the test scenarios are defined, use Cypress and Cucumber to run the tests and validate the API responses against the defined criteria.

#### Benefits of This Approach

- **Clear and Maintainable Tests**: With Cucumber, even non-technical team members can understand and modify the tests. This is particularly useful in API testing, where understanding the logic behind the requests and responses is crucial.

- **Fast and Reliable Testing**: Cypress executes tests quickly and reliably, providing instant feedback during the test run.

- **Comprehensive API Testing**: By integrating Cypress for API requests and assertions, you can test both the frontend interactions and backend API endpoints within a single framework.

## Table of Contents

- [Leveraging Cypress and Cucumber for Effective API Testing](#leveraging-cypress-and-cucumber-for-effective-api-testing)
  - [Overview: Using Cucumber + Cypress to Test APIs of Magento Software Testing Board](#overview-using-cucumber--cypress-to-test-apis-of-magento-software-testing-board)
    - [Why Use Cypress + Cucumber?](#why-use-cypress--cucumber)
    - [Testing APIs with Cypress and Cucumber](#testing-apis-with-cypress-and-cucumber)
      - [Key Steps in Testing APIs](#key-steps-in-testing-apis)
      - [Example Workflow for Testing APIs](#example-workflow-for-testing-apis)
    - [Install Yarn](#install-yarn)
    - [Clone the Repository](#clone-the-repository)
    - [Install Project Dependencies](#install-project-dependencies)
  - [3. Running Tests](#3-running-tests)
    - [Open Cypress](#open-cypress)
    - [Run Tests in Headless Mode](#run-tests-in-headless-mode)
    - [Run Cucumber Tests](#run-cucumber-tests)
    - [Run Tests in Parallel](#run-tests-in-parallel)
  - [4. Generate HTML report](#4-generate-html-report)
  - [5. Additional Information](#5-additional-information)
    - [Troubleshooting](#troubleshooting)

---

## 1. Prerequisites

### Requirements

- **Operating System**: Windows 11 (supported environment)
- **Node.js**: Version 14 or higher
- **Yarn**: Latest stable version
- **Cypress**: Latest stable version (automatically installed via Yarn)
- **Cucumber**: Latest stable version (automatically installed via Yarn)
- **Cypress-Cucumber-Preprocessor**: For integrating Cucumber with Cypress


Before you begin, you need to have the following software installed:

1. **Node.js**: Cypress and Yarn both require Node.js to be installed.
2. **Yarn**: Yarn is a package manager that helps you manage dependencies for your project.

## 2. Install Dependencies

### Install Node.js

Node.js is required to run JavaScript code outside the browser. To install it, follow these steps:

1. Visit the [official Node.js download page](https://nodejs.org/).
2. Download the **LTS** version (Long Term Support) for your platform (Windows, macOS, or Linux).
3. Run the installer and follow the on-screen instructions to complete the installation.

To verify the installation, run the following command in your terminal/command prompt:

```bash
node -v
```

### Install Yarn

Yarn is a fast, reliable, and secure package manager for Node.js. To install Yarn:

1. Visit the [official Yarn installation page](https://classic.yarnpkg.com/en/docs/install).
2. Follow the instructions based on your operating system.

Alternatively, you can install Yarn globally using npm (the default package manager with Node.js):

```bash
npm install --global yarn
```

To verify that Yarn was installed correctly, run:

```bash
yarn --version
```
This will display the Yarn version installed.

### Clone the Repository
If you haven't already, clone the project repository to your local machine:

```bash
git clone https://github.com/your-username/your-repository.git
cd your-repository
```

### Install Project Dependencies
To install the project dependencies, run the following command from the project directory:

```bash
yarn install
```

## 3. Running Tests

### Open Cypress
To open Cypress and run tests interactively, you can run:

```bash
yarn run cucumber:open:chrome
```

This will open the Cypress UI where you can select and run your tests interactively.

### Run Tests in Headless Mode
If you want to run the tests in headless mode (without the UI), use the following command:
```bash
yarn run cypress run
```
This will run all tests defined in your Cypress test folder (cypress/integration by default) and display the results in the terminal.  

### Run Cucumber Tests
To run Cucumber tests with Cypress, ensure that your .feature files are located in the correct directory (e.g., cypress/e2e). Then, run the tests using the following command:
```bash
yarn cucumber:run:chrome'
```

or

```bash
yarn cucumber:run:firefox'
```

This will run all tests in the specified .feature files.

### Run Tests in Parallel
If you have the cypress-parallel package set up, you can run your tests in parallel for faster execution:
```bash
yarn cypress:parallel:chrome 
```

or 

```bash
yarn cypress:parallel:firefox 
```

## 4. Generate HTML report
In order to generate a html cucumber report you have to run the command below:

```bash
yarn generate-report
```

you can find the generated html report at  `reports/cucumber-html/index.html`

## 5. Additional Information

- **Cypress Documentation**: [https://docs.cypress.io/](https://docs.cypress.io/)
- **Cucumber Documentation**: [https://cucumber.io/docs/guides/](https://cucumber.io/docs/guides/)
- **Cypress with Cucumber Preprocessor**: [https://github.com/badeball/cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor)

### Troubleshooting

If you encounter any issues with the installation, check the official documentation links provided above.

- Make sure your `.feature` files and `steps.js` files are correctly structured according to the Cucumber and Cypress integration requirements.
- Ensure that Cypress and the required plugins are installed correctly via Yarn.
