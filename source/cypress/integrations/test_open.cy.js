describe('Open Webpage Test', () => {
    it('should load the homepage without errors', () => {
      // Mock window.__tcfapi function before the page loads
      cy.visit('https://magento.softwaretestingboard.com', {
        onBeforeLoad: (window) => {
          // Mock __tcfapi to simulate a valid response
          window.__tcfapi = (command, version, callback) => {
            // Simulate the response that would be expected by the CMP (e.g., `getTCData`)
            if (command === 'getTCData') {
              callback({
                tcString: 'sample_tc_string',  // Example of consent data (replace with appropriate structure)
                gdprApplies: true,
                purpose: { 1: { consent: true }, 2: { consent: false } },  // Example purposes
                // Add more properties as needed
              }, true);  // Indicate success
            }
          };
        },
      });
  
      // Verify the page title or any other page element
      cy.title().should('include', 'Homepage'); // Adjust with your expected page title
  
      // Alternatively, check if a specific element exists on the page
      cy.get('h1').should('contain', 'Welcome'); // Adjust with your expected content
    });
  });
  