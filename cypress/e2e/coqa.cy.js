var timeout = { timeout: 60000 };
var force = { force: true };
import 'cypress-file-upload';

describe('Login', () => {
  beforeEach(() => {
    // Clear cookies and local storage before each test
    cy.clearCookies();
    cy.clearLocalStorage();

    // Perform the login before each test
    cy.visit('https://stag.marshall-teach.web.id/');
    cy.get('#username', timeout).clear().type('risna');
    cy.get('#password', timeout).clear().type('telkomgoe');
    cy.get('.form > .btn', timeout).click();
    cy.wait(5000);
    cy.url().should('include', '/dashboard'); // Verify that login is successful
  });

  it('Tes Generate Soal Coqa', () => {
    // Pilih menu coqa
    cy.wait(2000); // Jeda 2 detik
    cy.get(':nth-child(5) > a > .fas', timeout).click();

    // Tunggu elemen grup kompetensi muncul dan bisa diklik
    cy.wait(1000); // Jeda 1 detik
    cy.get('.drop_grup > .css-13cymwt-control > .css-1wy0on6 > .css-1xc3v61-indicatorContainer > .css-8mmkcg')
      .should('be.visible') // Pastikan elemen terlihat
      .click(); // Klik elemen
    cy.get('#react-select-4-option-0', timeout).click(); // Pilih opsi grup kompetensi

    // Pilih dirkom
    cy.wait(1000); // Jeda 1 detik
    cy.get('.drop_nama > .css-13cymwt-control > .css-lsbgp6')
      .should('be.visible') // Pastikan elemen terlihat
      .click();
    cy.get('#react-select-5-option-1', timeout).click(); // Pilih opsi dirkom

    // Pilih level
    cy.wait(1000); // Jeda 1 detik
    cy.get(':nth-child(9) > .Dropdown-root > .Dropdown-control > .Dropdown-placeholder', timeout)
      .should('be.visible') // Pastikan elemen terlihat
      .click();
    cy.get('.Dropdown-menu > :nth-child(1)', timeout).click(); // Pilih opsi level

    // Isi jumlah soal
    cy.wait(1000); // Jeda 1 detik
    cy.get('.inputText_coqa', timeout).clear().type('30');

    // Pilih database marshall
    cy.wait(1000); // Jeda 1 detik
    cy.get(':nth-child(1) > input', timeout).click();

    // Pilih referensi
    cy.wait(1000); // Jeda 1 detik
    cy.get(':nth-child(1) > input', timeout).click();
    //cy.get(':nth-child(2) > input').click();

    // Pilih multi select referensi ebook
    cy.wait(1000); // Jeda 1 detik
    cy.get('.dropdown_search_coqa > .css-13cymwt-control > .css-lsbgp6', timeout).click();
    cy.get('[id^="react-select-"][id$="-option-8"]', timeout).click();

    // Ambil screenshot
    cy.wait(1000); // Jeda 1 detik
    cy.screenshot(`generateCOQA-${new Date().toISOString().replace(/[:.]/g, '-')}`);

    // Klik tombol generate
    cy.wait(1000); // Jeda 1 detik
    cy.get('.coqaBut', timeout).click();
  });
});
