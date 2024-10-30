/// <reference types="Cypress" />

var timeout = { timeout: 60000 }
var force = { force: true }

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

  it('Jika username dan password yang di-entry valid maka web akan menampilkan Halaman Home / halaman sebelum melakukan login', () => {
    cy.visit('https://stag.marshall-teach.web.id/');
    cy.get('#username', timeout).clear().type('adi');
    cy.get('#password', timeout).clear().type('telkomgoe');
    cy.screenshot(`login-${new Date().toISOString().replace(/[:.]/g, '-')}`);
    cy.get('.form > .btn', timeout).click();
    
    //view history 
    
    cy.get(':nth-child(3) > a > .fas', timeout).click();

    //open menu e library
    
    cy.get(':nth-child(4) > a > .fas', timeout).click();

    //generate coqa
   
    cy.get(':nth-child(5) > a > .fas', timeout).click();

    //mapping dirkom 11
  
    cy.get(':nth-child(6) > a > .fas', timeout).click();

    //audio learning
    
    cy.get(':nth-child(7) > a > .fas', timeout).click();

    //contact
    
    cy.get(':nth-child(8) > a > .fas', timeout).click();

      });
  });

