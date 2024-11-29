class DirectoryPage {
    visit() {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory');
    }
  
    searchEmployee({ name, jobTitle, location }) {
      // Masukkan nama karyawan
      cy.get('.oxd-autocomplete-text-input > input').type(name);
  
      // Tunggu 1 detik untuk memastikan dropdown muncul
      cy.wait(1000);
      
      // Pilih nama yang muncul dalam dropdown
      cy.contains('.oxd-autocomplete-dropdown', name).click();
  
      // Pilih Job Title
      cy.get('.oxd-select-text-input').contains('-- Select --').click(); // Buka dropdown Job Title
      cy.contains('div', 'Chief Financial Officer').click(); // Pilih "Chief Financial Officer"
  
      // Pilih Location
      cy.get('.oxd-select-text-input').contains('-- Select --').click(); // Buka dropdown Location
      cy.contains('div', 'New York Sales Office').click(); 
  
      // Klik tombol Search
      cy.get('button[type="submit"]').click();
    }
  
    validateSearchResult(name, jobTitle, location) {
        cy.get('.oxd-grid-item').each(($item) => { // Iterasi semua elemen yang ditemukan
          cy.wrap($item).within(() => { // Memastikan setiap elemen diperiksa
            cy.wait(10000);
            cy.contains(name, ).should('exist');
            cy.contains(jobTitle).should('exist');
            cy.contains(location).should('exist');
          });
        });
      }
      
      
  }
  
  module.exports = { DirectoryPage };
  