
var timeout = { timeout: 60000 }
var force = { force: true }
import 'cypress-file-upload';

describe('Login', () => {
    before(() => {
      cy.clearCookies();
      cy.clearLocalStorage();
    });
  
    
  
    // it('Menampilkan Halaman Login', () => {
    //   cy.get('img')
    //   .should('be.visible')
    //   .and(($img) => {
    //     expect($img[0].complete).to.be.true;
    //     expect($img[0].naturalWidth).to.be.greaterThan(0);
    //   });
    //   cy.get('#username', timeout).should('be.visible');
    //   cy.get('#password', timeout).should('be.visible');
    //   cy.get('.ant-btn', timeout).should('be.visible');
    // });

    it('Tes review Modul', () => {
        cy.visit('https://.marshall-teach.web.id');

        //login heula didieu:
        cy.get('#username', timeout).clear().type('risna');
        cy.get('#password', timeout).clear().type('telkomgoe');
        cy.get('.form > .btn', timeout).click();

        //pilih fitur review
        cy.get('.btn-review > span', timeout).click();

        //check/unchecked review 1
        //cy.get(':nth-child(2) > .checkBox_revItem', timeout).click();
        //check/unchecked review 2
        //cy.get(':nth-child(3) > .checkBox_revItem', timeout).click();
        //check/unchecked auto crawling
       //cy.get(':nth-child(4) > .checkBox_revItem', timeout).click();

        //upload file jika  gak pake reviewer 1
        //cy.get('.drop-file-input > input', timeout).click();
        //cy.get('input[type="file"]').attachFile('1.[TC-102 Deep Learning]_End to End Deeplearning.pptx');

        //upload file jika  pake reviewer 1
        cy.get('.dropFile_review > :nth-child(1) > input');
        cy.get('input[type="file"]').attachFile('1.[TC-102 Deep Learning]_End to End Deeplearning.pptx');
        
        //upload file pdf juga
        cy.get('.dropFile_ebook_review > .drop-file-input > input');
        cy.get('input[type="file"]').attachFile('How To Use Consultative Selling For Revenue Growth.pdf');


        //ambil screenshot heula :
        cy.screenshot(`reviewmodul1-${new Date().toISOString().replace(/[:.]/g, '-')}`);

        //gas review
        cy.get('.reviewBut', timeout).click();
        
        //review baru lagi
        cy.get('.reviewBaru_but', timeout).click();

        //klik view history
       // cy.get(':nth-child(3) > a', timeout).click();
    });
});