const { LoginPage } = require('./loginPage.cy');
const { DirectoryPage } = require('./directoryPage.cy');

describe('Testing Directory Menu', () => {
  const loginPage = new LoginPage();
  const directoryPage = new DirectoryPage();

  before(() => {
    // Step login sebelum mengakses menu Directory
    loginPage.visit();
    loginPage.enterUsername('Admin');
    loginPage.enterPassword('admin123');
    loginPage.clickLogin();

    // Validasi login berhasil
    loginPage.validateRedirectToDashboard();
  });

  it('TC-001: Search employee in Directory', () => {
    // Akses halaman Directory
    directoryPage.visit();

    // Lakukan pencarian karyawan
    directoryPage.searchEmployee({
      name: 'Peter',
      jobTitle: 'Chief Financial Officer',
      location: 'New York Sales Office',
    });

    // Validasi hasil pencarian
    directoryPage.validateSearchResult('Peter Mac Anderson', 'Chief Financial Officer', 'New York Sales Office');
  });
});