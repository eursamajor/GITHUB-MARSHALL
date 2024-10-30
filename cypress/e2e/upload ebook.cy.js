var timeout = { timeout: 60000 }
var force = { force: true }
import 'cypress-file-upload';

describe('Login', () => {
    before(() => {
      cy.clearCookies();
      cy.clearLocalStorage();
    });
it('Menampilkan Halaman Login', () => {
      cy.get('img')
      .should('be.visible')
      .and(($img) => {
        expect($img[0].complete).to.be.true;
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });
      cy.get('#username', timeout).should('be.visible');
      cy.get('#password', timeout).should('be.visible');
      cy.get('.ant-btn', timeout).should('be.visible');
    });

    it('Tes Generate Modul', () => {
        cy.visit('https://stag.marshall-teach.web.id');

        //login heula didieu:
        cy.get('#username', timeout).clear().type('adi');
        cy.get('#password', timeout).clear().type('telkomgoe');
        cy.get('.form > .btn', timeout).click();

        //pilih fitur review
        cy.get('.btn-history > span', timeout).click();

        //grup kompetensi
        cy.get(':nth-child(3) > .Dropdown-root > .Dropdown-control > .Dropdown-placeholder', timeout).click();
        cy.get('.Dropdown-menu > :nth-child(1)', timeout).click();
        //kompetensi
        cy.get(':nth-child(6) > .Dropdown-root > .Dropdown-control > .Dropdown-placeholder', timeout).click();
        cy.get('.Dropdown-menu > :nth-child(2)', timeout).click();
        //jenis ebook
        cy.get(':nth-child(8) > .Dropdown-root > .Dropdown-control > .Dropdown-placeholder', timeout).click();
        cy.get('.Dropdown-menu > :nth-child(2)', timeout).click();
        //bahasa
        cy.get(':nth-child(10) > .Dropdown-root > .Dropdown-control', timeout).click();
        cy.get('.Dropdown-menu > :nth-child(2)', timeout).click();
        //judul ebook
        cy.get('#judulebook', timeout).clear().type('JUDUL');

        //penerbit
        cy.get('.baris-dua > :nth-child(6)', timeout).clear().type('PENERBIT');

        //author
        cy.get('.baris-dua > :nth-child(9)', timeout).clear().type('AUTHOR');

        //tahun terbit
        cy.get('[type="number"]', timeout).clear().type('TAHUN');

        //isbn
        cy.get('.baris-tiga > :nth-child(5)', timeout).clear().type('ISBN');

        //doi
        cy.get('.baris-tiga > :nth-child(8)', timeout).clear().type('DOI');

        //input pdf
        cy.get('.file-ebook');
        cy.get('input[type="file"]').attachFile('Artificial Neural Networks and Machine Learning – ICANN 2018.pdf');

        //screenshot
        cy.screenshot(`uploadebook1-${new Date().toISOString().replace(/[:.]/g, '-')}`);

        //klik upload ebook
        cy.get('.uploadBut')

        
    });
});