var timeout = { timeout: 60000 }
var force = { force: true }
import 'cypress-file-upload';

describe('Login', () => {
    before(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
    });

    it('Tes Generate Audio Learning', () => {
        cy.visit('https://.marshall-teach.web.id');

        // login
        cy.get('#username', timeout).clear().type('risna');
        cy.get('#password', timeout).clear().type('telkomgoe');
        cy.get('.form > .btn', timeout).click();

        // Tunggu sampai navigasi ke dashboard selesai
        cy.url().should('include', '/dashboard'); // misalnya url dashboard
        
        // Pilih menu audio learning
        cy.get(':nth-child(7) > a > .fas', timeout).click();

        // Pilih output, pastikan menu sudah di-render dengan baik
        cy.get('[style="margin-bottom: 10px;"] > .Dropdown-root > .Dropdown-control').click();
        cy.get('.Dropdown-menu > :nth-child(2)').click();

        // Default testing dengan file PDF
        cy.get('.drop-file-input > input', timeout).attachFile('How To Use Consultative Selling For Revenue Growth.pdf');

        // Setting abstrak dulu
        cy.get('.checkBox_abstrakAudio', timeout).click();
        cy.get('.inputText_AbstrakPDF', timeout).clear().type('4500'); // set abstrak menjadi 4500

        // Pastikan tombol generate hanya diklik jika belum ada request aktif
        cy.get('.audioBut', timeout).should('not.be.disabled'); // pastikan tombol tidak disabled sebelum klik
        cy.screenshot(`inputAudioLearning-${new Date().toISOString().replace(/[:.]/g, '-')}`);

        // Cek jika request belum dikirim sebelumnya (hanya satu request yang dikirim)
        cy.intercept('POST', '/marshall-legacy/result-ebook-to-audio/').as('generateRequest');
        
        // Tombol generate dan tunggu respons
        cy.get('.audioBut', timeout).click();
        
        // Tunggu hingga respons selesai
        cy.wait('@generateRequest').then((interception) => {
            expect(interception.response.statusCode).to.eq(200); // pastikan respons sukses
        });

        // Validasi hasil atau navigasi yang diharapkan setelah generate
        //cy.url().should('include', '/hasil-audio'); // validasi ke halaman hasil

        //--------------------------------------------------------------------------------------------------
        //2
        // Pilih menu audio learning
        // cy.get(':nth-child(7) > a > .fas', timeout).click();

        // // Pilih output, pastikan menu sudah di-render dengan baik
        // cy.get('[style="margin-bottom: 10px;"] > .Dropdown-root > .Dropdown-control').click();
        // cy.get('.Dropdown-menu > :nth-child(2)').click();

        // // Default testing dengan file PPTX
        // cy.get('.drop-file-input > input', timeout).attachFile('[TC-102 Deep Learning]_Deeplearning.pptx');

        // // Setting abstrak dulu
        // cy.get('.checkBox_abstrakAudio', timeout).click();
        // cy.get('.inputText_AbstrakPDF', timeout).clear().type('4500'); // set abstrak menjadi 4500

        // // Pastikan tombol generate hanya diklik jika belum ada request aktif
        // cy.get('.audioBut', timeout).should('not.be.disabled'); // pastikan tombol tidak disabled sebelum klik
        // cy.screenshot(`inputAudioLearning-${new Date().toISOString().replace(/[:.]/g, '-')}`);

        // // Cek jika request belum dikirim sebelumnya (hanya satu request yang dikirim)
        // cy.intercept('POST', '/marshall-legacy/result-ebook-to-audio/').as('generateRequest');
        
        // // Tombol generate dan tunggu respons
        // cy.get('.audioBut', timeout).click();
        
        // // Tunggu hingga respons selesai
        // cy.wait('@generateRequest').then((interception) => {
        //     expect(interception.response.statusCode).to.eq(200); // pastikan respons sukses
        // });

    });
});
