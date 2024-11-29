const { LoginPage } = require('./loginPage.cy'); // Named import

describe('Login Functionality with POM', () => {
  const loginPage = new LoginPage(); // Instansiasi objek

  // Test Case 01: Login with valid credentials
  it('TC-001: Login with valid credentials', () => {
    loginPage.visit();
    loginPage.enterUsername('Admin');
    loginPage.enterPassword('admin123');

    // Intercept request to dashboard API
    cy.intercept('GET', '**/dashboard/employees/action-summary').as('actionSummary');

    loginPage.clickLogin();

    // Wait for the intercepted request and validate response
    cy.wait('@actionSummary', { timeout: 10000 })
      .its('response.statusCode')
      .should('eq', 200);

    // Validate redirect to dashboard
    loginPage.validateRedirectToDashboard();
  });

  // Test Case 02: Login dengan data invalid
  it('TC-002: Pengguna tidak dapat login menggunakan data invalid', () => {
    loginPage.visit();
    loginPage.enterUsername('Aduh');
    loginPage.enterPassword('admon123');
    loginPage.clickLogin();

    // Validate error message
    loginPage.getErrorMessage().should('have.text', 'Invalid credentials');
  });

  // Test Case 03: Login dengan kolom kosong
  it('TC-003: Login with empty fields', () => {
    loginPage.visit();
    loginPage.clickLogin();

    // Validate error messages for empty fields
    loginPage.getEmptyFieldMessages().eq(0).should('have.text', 'Required');
    loginPage.getEmptyFieldMessages().eq(1).should('have.text', 'Required');
  });

});
