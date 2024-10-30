var timeout = { timeout: 60000 }; // Memperpanjang timeout menjadi 60 detik untuk semua elemen yang mungkin lambat
import 'cypress-file-upload';

describe('Login', () => {
  before(() => {
    // Membersihkan cookies dan local storage sebelum memulai tes
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it('Tes Generate Soal Coqa', () => {
    // Mengunjungi URL aplikasi
    cy.visit('https://dev.marshall-teach.web.id');

    // Langkah Login
    cy.get('#username', timeout).clear().type('risna'); // Mengisi username
    cy.get('#password', timeout).clear().type('telkomgoe'); // Mengisi password
    cy.wait(5000); // Menunggu 5 detik agar halaman dapat sepenuhnya dimuat
    cy.get('.form > .btn', timeout).click(); // Menekan tombol login

    // Memilih menu Coqa
    cy.wait(5000); // Menunggu 5 detik agar navigasi stabil
    cy.get(':nth-child(5) > a > .fas', timeout).click(); // Klik menu Coqa
//========================================================================================================
    // // Bagian 1: Generate Soal tanpa file upload
    cy.get('.drop_grup > .css-58rwkm-control > .css-1khjq34 > .css-19bb58m', timeout)
      .should('be.visible') // Pastikan elemen dropdown grup kompetensi terlihat
      .click(); // Klik dropdown grup kompetensi
    cy.get('#react-select-4-option-1', timeout).click(); // Pilih opsi grup kompetensi pertama

    cy.get('.drop_nama > .css-58rwkm-control > .css-1khjq34 > .css-19bb58m', timeout)
      .should('be.visible') // Pastikan dropdown nama kompetensi terlihat
      .click(); // Klik dropdown nama kompetensi
    cy.get('#react-select-5-option-0', timeout).click(); // Pilih opsi kedua untuk nama kompetensi

    cy.get(':nth-child(9) > .Dropdown-root > .Dropdown-control > .Dropdown-placeholder', timeout)
      .should('be.visible') // Pastikan dropdown level terlihat
      .click(); // Klik dropdown level
    cy.get('.Dropdown-menu > :nth-child(3)', timeout).click(); // Pilih opsi level pertama

    cy.get('.inputText_coqa', timeout).clear().type('30'); // Mengisi jumlah soal

    cy.get(':nth-child(1) > input', timeout).click(); // Pilih opsi database marshall

    cy.get('.dropdown_search_coqa > .css-58rwkm-control > .css-1khjq34 > .css-19bb58m', timeout)
      .click(); // Klik dropdown referensi ebook
    cy.get('[id^="react-select-"][id$="-option-2"]', timeout).click(); // Pilih opsi referensi ebook kedua

    // Mengambil screenshot untuk dokumentasi proses pertama
    cy.screenshot(`generateCOQA-${new Date().toISOString().replace(/[:.]/g, '-')}`);

    // Klik tombol generate
    cy.wait(5000); // Jeda 1 detik
    cy.get('.coqaBut', timeout).click();

    //generate coqa baru
    cy.wait(5000);
    cy.get('.coqaBut_baru', timeout).click();


//========================================================================================================
    // Bagian 2: Generate Soal dengan file upload (PDF)
    // cy.get('.drop_grup > .css-58rwkm-control > .css-1khjq34 > .css-19bb58m', timeout)
    //   .should('be.visible') // Pastikan dropdown grup kompetensi terlihat
    //   .click(); // Klik dropdown grup kompetensi
    // cy.get('#react-select-4-option-1', timeout).click(); // Pilih opsi grup kompetensi pertama

    // cy.get('.drop_nama > .css-58rwkm-control > .css-1khjq34 > .css-19bb58m', timeout)
    //   .should('be.visible') // Pastikan dropdown nama kompetensi terlihat
    //   .click(); // Klik dropdown nama kompetensi
    // cy.get('#react-select-5-option-2', timeout).click(); // Pilih opsi kedua untuk nama kompetensi

    // cy.get(':nth-child(9) > .Dropdown-root > .Dropdown-control > .Dropdown-placeholder', timeout)
    //   .should('be.visible') // Pastikan dropdown level terlihat
    //   .click(); // Klik dropdown level
    // cy.get('.Dropdown-menu > :nth-child(2)', timeout).click(); // Pilih opsi level pertama

    // cy.get('.inputText_coqa', timeout).clear().type('30'); // Mengisi jumlah soal

    // cy.get('[style="display: flex; margin-top: 10px; font-size: 15px;"] > :nth-child(2) > input', timeout).click(); // Pilih opsi untuk upload file

    // // Upload file PDF ke input file
    // cy.get('.drop-file-input > input', timeout).attachFile('How To Use Consultative Selling For Revenue Growth.pdf');

    // // Mengambil screenshot untuk dokumentasi proses kedua
    // cy.screenshot(`generateCOQA-${new Date().toISOString().replace(/[:.]/g, '-')}`);

    // // Klik tombol generate
    // cy.wait(5000); // Jeda 1 detik
    // cy.get('.coqaBut', timeout).click();

    // //generate coqa baru
    // cy.wait(5000);
    // cy.get('.coqaBut_baru', timeout).click();

//========================================================================================================
    // // Bagian 3: Generate Soal dengan file upload (PPTX)
    // cy.get('.drop_grup > .css-58rwkm-control > .css-1khjq34 > .css-19bb58m', timeout)
    //   .should('be.visible') // Pastikan dropdown grup kompetensi terlihat
    //   .click(); // Klik dropdown grup kompetensi
    // cy.get('#react-select-4-option-9', timeout).click(); // Pilih opsi grup kompetensi pertama

    // cy.get('.drop_nama > .css-58rwkm-control > .css-1khjq34 > .css-19bb58m', timeout)
    //   .should('be.visible') // Pastikan dropdown nama kompetensi terlihat
    //   .click(); // Klik dropdown nama kompetensi
    // cy.get('#react-select-5-option-2', timeout).click(); // Pilih opsi kedua untuk nama kompetensi

    // cy.get(':nth-child(9) > .Dropdown-root > .Dropdown-control > .Dropdown-placeholder', timeout)
    //   .should('be.visible') // Pastikan dropdown level terlihat
    //   .click(); // Klik dropdown level
    // cy.get('.Dropdown-menu > :nth-child(3)', timeout).click(); // Pilih opsi level pertama

    // cy.get('.inputText_coqa', timeout).clear().type('30'); // Mengisi jumlah soal

    // cy.get('[style="display: flex; margin-top: 10px; font-size: 15px;"] > :nth-child(2) > input', timeout).click(); // Pilih opsi untuk upload file
    // cy.get(':nth-child(1) > .Dropdown-root > .Dropdown-control > .Dropdown-placeholder').click() //pilih pptx

    // // Upload file PDF ke input file
    // cy.get('.drop-file-input > input', timeout).attachFile('[213_Data Engineering]_Pengantar Dasar Data Engineering dan Siklus Hidup Data_fundamental.pptx');

    // // Mengambil screenshot untuk dokumentasi proses kedua
    // cy.screenshot(`generateCOQA-${new Date().toISOString().replace(/[:.]/g, '-')}`);

    // // Klik tombol generate
    // cy.wait(5000); // Jeda 1 detik
    // cy.get('.coqaBut', timeout).click();

  });
});
