class LoginPage {
    visit() {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }
  
    enterUsername(username) {
      cy.get('[name="username"]').type(username);
    }
  
    enterPassword(password) {
      cy.get('[name="password"]').type(password);
    }
  
    clickLogin() {
      cy.get('[type="submit"]').click();
    }
  
    clickForgotPassword() {
      cy.contains('Forgot your password?').click();
    }
  
    getErrorMessage() {
      return cy.get('.oxd-alert-content-text');
    }
  
    getEmptyFieldMessages() {
      return cy.get('.oxd-input-group__message');
    }
  
    validateRedirectToDashboard() {
      cy.url().should('include', '/dashboard');
    }
  
    validateForgotPasswordPage() {
      cy.get('.oxd-text--h6').should('have.text', 'Reset Password');
    }
  }
  
  module.exports = { LoginPage }; // Named export
  