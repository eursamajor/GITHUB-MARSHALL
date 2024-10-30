var timeout = { timeout: 60000 };
var force = { force: true };
import 'cypress-file-upload';

describe('Login and Test Operations', () => {

  beforeEach(() => {
    // Clear cookies and local storage before each test
    cy.clearCookies();
    cy.clearLocalStorage();

    // Perform the login before each test
    cy.visit('https://dev.marshall-teach.web.id/');
    cy.get('#username', timeout).clear().type('risna');
    cy.get('#password', timeout).clear().type('telkomgoe');
    cy.get('.form > .btn', timeout).click();
    cy.wait(5000);
    cy.url().should('include', '/dashboard'); // Verify that login is successful
  });

  it('Tes MAPPING EBOOK', () => {
    cy.visit('https://dev.marshall-teach.web.id');

    // Login
    cy.get('#username', timeout).clear().type('risna');
    cy.get('#password', timeout).clear().type('telkomgoe');
    cy.get('.form > .btn', timeout).click();

    // Pilih menu MAPPING EBOOK
    cy.get(':nth-child(6) > a > .fas', timeout).click();

    // Upload PDF file
    cy.get('input', timeout).click();
    cy.get('input[type="file"]').attachFile('How To Use Consultative Selling For Revenue Growth.pdf');

    // Ambil screenshot setelah upload
    cy.screenshot(`inputMAPPING-${new Date().toISOString().replace(/[:.]/g, '-')}`);
    cy.wait(5000);

    // Klik button mapping
    cy.get('.mappingBut', timeout).click();
    cy.wait(5000);

    // Ambil screenshot setelah proses mapping selesai
    cy.screenshot(`mapping_ebook-${new Date().toISOString().replace(/[:.]/g, '-')}`);

    // Tombol generate
    // cy.get('.coqaBut', timeout).click();
  });
});
