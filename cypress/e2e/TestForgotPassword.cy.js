const { LoginPage } = require('./loginPage.cy'); // Named import

describe('Login Functionality with POM', () => {
  const loginPage = new LoginPage(); // Instansiasi objek

it('TC-004: Pengguna mengakses "Forgot Password"', () => {
    loginPage.visit();
    loginPage.clickForgotPassword();

    // Validate "Forgot Password" page
    loginPage.validateForgotPasswordPage();
  });
});