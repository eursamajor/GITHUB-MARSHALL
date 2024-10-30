var timeout = { timeout: 60000 }
var force = { force: true }
import 'cypress-file-upload';

describe('Login and Review Module', () => {
    before(() => {
      // Clear cookies and local storage before all tests
      cy.clearCookies();
      cy.clearLocalStorage();
    });

    it('Login and review a module', () => {
        // Visit the target URL
        cy.visit('https://dev.marshall-teach.web.id');

        // Login Process
        cy.get('#username', timeout).clear().type('risna', { force: true });
        cy.get('#password', timeout).clear().type('telkomgoe', { force: true });
        cy.get('.form > .btn', timeout).click();

        // Wait for the dashboard or review button to be visible
        cy.get('.btn-review > span', timeout).should('be.visible').click();

        // // Uploading the review PPTX file
        // cy.get('#dropPPTX > input', timeout).attachFile({
        //     filePath: '[TC-102 Deep Learning]_Deeplearning.pptx',
        //     force: true
        // });

        // Uploading a PDF file as well
        cy.get('.dropFile_ebook_review > .drop-file-input > input', timeout).attachFile({
            filePath: 'How To Use Consultative Selling For Revenue Growth.pdf',
            force: true
        });

        // Take a screenshot after file uploads
        cy.screenshot(`reviewmodul1-${new Date().toISOString().replace(/[:.]/g, '-')}`);

        // Click review button to start the review process
        cy.get('.reviewBut', timeout).should('be.visible').click();

        // Start a new review process
        cy.get('.reviewBaru_but', timeout).should('be.visible').click();

        // Optional: View history (if needed in your test flow)
        // cy.get(':nth-child(3) > a', timeout).click();
    });
});
