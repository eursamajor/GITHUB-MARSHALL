/// <reference types="Cypress" />

var timeout = { timeout: 60000 }
var force = { force: true }

describe('Login', () => {
  before(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it('Tes Generate Modul', () => {
    cy.visit('https://stag.marshall-teach.web.id');
    cy.get('#username', timeout).clear().type('risna');
    cy.get('#password', timeout).clear().type('telkomgoe');
    cy.get('.form > .btn', timeout).click();
    cy.wait(5000);
    cy.get('.btn-gmodul > span', timeout).click();
    cy.wait(5000);
    //----------------------------------------------------------------------------------------------------------------------------------
    //1  
    //pilih grup kompetensi :
    cy.get('.dropDown-content-grup > .css-13cymwt-control > .css-i9stkb > .css-19bb58m', timeout).click();
    cy.get('[id^="react-select-"][id$="-option-1"]').click();  //(1) - (sekian) pilihan opsi grup kompetensi

    // pilih dirkom :
    cy.get('.dropDown-content-nama > .css-13cymwt-control > .css-i9stkb > .css-19bb58m', timeout).click();
    cy.get('[id^="react-select-"][id$="-option-0"]').click(); //deep learning
    

    // pilih level :
    cy.get(':nth-child(10) > .Dropdown-root > .Dropdown-control > .Dropdown-placeholder', timeout).click();
    cy.get('.Dropdown-menu > :nth-child(1)', timeout).click(); //(1) - (5) pilihan opsi level

    //opsional konten : 
    cy.get('#judul', timeout).clear().type('Deeplearning');
    cy.get('#elo', timeout).clear().type('intro duction to deeplearning');  
    cy.get('#topik1', timeout).clear().type('Starting guide');
    cy.get('#topik2', timeout).clear().type('methods in deep learning');
    cy.get('#topik3', timeout).clear().type('using deeplearning');

    //pilih referensi auto
    // cy.get(':nth-child(1) > .Dropdown-root > .Dropdown-control', timeout).click();
    // cy.get('[aria-selected="false"]', timeout).click();

    //pilih referensi manual
    cy.get('.dropdown_search > .css-13cymwt-control > .css-i9stkb > .css-19bb58m').click();
    cy.get('[id^="react-select-"][id$="-option-1"]').click(); 
    cy.get('.css-1bjxe7c > .css-19bb58m').click();
    cy.get('[id^="react-select-"][id$="-option-2"]').click(); 
    cy.get('.css-1bjxe7c > .css-19bb58m').click();
    cy.get('[id^="react-select-"][id$="-option-3"]').click(); 
    cy.get('.css-1bjxe7c > .css-19bb58m').click();
    cy.get('[id^="react-select-"][id$="-option-4"]').click(); 
    cy.get('.css-1bjxe7c > .css-19bb58m').click();
    cy.get('[id^="react-select-"][id$="-option-5"]').click(); 
 
    //ambil screenshot
    cy.screenshot(`generatemodul1_stag-${new Date().toISOString().replace(/[:.]/g, '-')}`);
    //tombol generate :
    cy.get('.modulBut', timeout).click();
    cy.wait(5000);
    cy.get('.generateBaru_but', timeout).click();
    cy.wait(5000);

    //----------------------------------------------------------------------------------------------------------------------------------
    //2  
    //pilih grup kompetensi :
    cy.get('.dropDown-content-grup > .css-13cymwt-control > .css-i9stkb > .css-19bb58m', timeout).click();
    cy.get('[id^="react-select-"][id$="-option-2"]').click();  //(1) - (sekian) pilihan opsi grup kompetensi

    // pilih dirkom :
    cy.get('.dropDown-content-nama > .css-13cymwt-control > .css-i9stkb > .css-19bb58m', timeout).click();
    cy.get('[id^="react-select-"][id$="-option-1"]').click(); //deep learning
    

    // pilih level :
    cy.get(':nth-child(10) > .Dropdown-root > .Dropdown-control > .Dropdown-placeholder', timeout).click();
    cy.get('.Dropdown-menu > :nth-child(2)', timeout).click(); //(1) - (5) pilihan opsi level

    //opsional konten : 
    cy.get('#judul', timeout).clear().type('Pemahaman Dasar dan Pengembangan Algoritma Machine Learning');
    cy.get('#elo', timeout).clear().type('Memahami dan menerapkan dasar Machine Learning dalam kasus AI yang relevan.');  
    cy.get('#topik1', timeout).clear().type('Pengantar Machine Learning');
    cy.get('#topik2', timeout).clear().type('Algoritma Machine Learning Dasar');
    cy.get('#topik3', timeout).clear().type('Evaluasi Model dan Pengembangan Machine Learning');

    //pilih referensi auto
    // cy.get(':nth-child(1) > .Dropdown-root > .Dropdown-control', timeout).click();
    // cy.get('[aria-selected="false"]', timeout).click();

    //pilih referensi manual
    cy.get('.dropdown_search > .css-13cymwt-control > .css-i9stkb > .css-19bb58m').click();
    cy.get('[id^="react-select-"][id$="-option-1"]').click(); 
    cy.get('.css-1bjxe7c > .css-19bb58m').click();
    cy.get('[id^="react-select-"][id$="-option-2"]').click(); 
    cy.get('.css-1bjxe7c > .css-19bb58m').click();
    // cy.get('[id^="react-select-"][id$="-option-3"]').click(); 
    // cy.get('.css-1bjxe7c > .css-19bb58m').click();
    // cy.get('[id^="react-select-"][id$="-option-4"]').click(); 
    // cy.get('.css-1bjxe7c > .css-19bb58m').click();
    // cy.get('[id^="react-select-"][id$="-option-5"]').click(); 
 
    //ambil screenshot
    cy.screenshot(`generatemodul1_stag-${new Date().toISOString().replace(/[:.]/g, '-')}`);
    //tombol generate :
    // cy.get('.modulBut', timeout).click();
    // cy.wait(5000);
    cy.get('.generateBaru_but', timeout).click();
    cy.wait(5000);

    //----------------------------------------------------------------------------------------------------------------------------------
    //3 
    //pilih grup kompetensi :
    cy.get('.dropDown-content-grup > .css-13cymwt-control > .css-i9stkb > .css-19bb58m', timeout).click();
    cy.get('[id^="react-select-"][id$="-option-3"]').click();  //(1) - (sekian) pilihan opsi grup kompetensi

    // pilih dirkom :
    cy.get('.dropDown-content-nama > .css-13cymwt-control > .css-i9stkb > .css-19bb58m', timeout).click();
    cy.get('[id^="react-select-"][id$="-option-2"]').click(); //deep learning
    

    // pilih level :
    cy.get(':nth-child(10) > .Dropdown-root > .Dropdown-control > .Dropdown-placeholder', timeout).click();
    cy.get('.Dropdown-menu > :nth-child(3)', timeout).click(); //(1) - (5) pilihan opsi level

    //opsional konten : 
    cy.get('#judul', timeout).clear().type('Manajemen Optimalisasi Aset dalam Siklus Hidup Aset');
    cy.get('#elo', timeout).clear().type('Memahami dan menerapkan optimalisasi aset dalam siklus hidup aset dengan strategi efisien sesuai standar industri.');  
    cy.get('#topik1', timeout).clear().type('Pengantar Manajemen Siklus Hidup Aset');
    cy.get('#topik2', timeout).clear().type('Teknik Optimalisasi Aset');
    cy.get('#topik3', timeout).clear().type('Evaluasi dan Pengukuran Kinerja Aset');

    //pilih referensi auto
    cy.get(':nth-child(1) > .Dropdown-root > .Dropdown-control', timeout).click();
    cy.get('[aria-selected="false"]', timeout).click();

    //pilih referensi manual
    // cy.get('.dropdown_search > .css-13cymwt-control > .css-i9stkb > .css-19bb58m').click();
    // cy.get('[id^="react-select-"][id$="-option-1"]').click(); 
    // cy.get('.css-1bjxe7c > .css-19bb58m').click();
    // cy.get('[id^="react-select-"][id$="-option-2"]').click(); 
    // cy.get('.css-1bjxe7c > .css-19bb58m').click();
    // cy.get('[id^="react-select-"][id$="-option-3"]').click(); 
    // cy.get('.css-1bjxe7c > .css-19bb58m').click();
    // cy.get('[id^="react-select-"][id$="-option-4"]').click(); 
    // cy.get('.css-1bjxe7c > .css-19bb58m').click();
    // cy.get('[id^="react-select-"][id$="-option-5"]').click(); 
 
    //ambil screenshot
    cy.screenshot(`generatemodul1_stag-${new Date().toISOString().replace(/[:.]/g, '-')}`);
    //tombol generate :
    cy.get('.modulBut', timeout).click();
    cy.wait(5000);
    cy.get('.generateBaru_but', timeout).click();
    cy.wait(5000);

    //----------------------------------------------------------------------------------------------------------------------------------
    //4
    //pilih grup kompetensi :
    cy.get('.dropDown-content-grup > .css-13cymwt-control > .css-i9stkb > .css-19bb58m', timeout).click();
    cy.get('[id^="react-select-"][id$="-option-16"]').click();  //(1) - (sekian) pilihan opsi grup kompetensi

    // pilih dirkom :
    cy.get('.dropDown-content-nama > .css-13cymwt-control > .css-i9stkb > .css-19bb58m', timeout).click();
    cy.get('[id^="react-select-"][id$="-option-6"]').click(); //deep learning
    

    // pilih level :
    cy.get(':nth-child(10) > .Dropdown-root > .Dropdown-control > .Dropdown-placeholder', timeout).click();
    cy.get('.Dropdown-menu > :nth-child(4)', timeout).click(); //(1) - (5) pilihan opsi level

    //opsional konten : 
    cy.get('#judul', timeout).clear().type('Strategi Keuangan dan Tata Kelola untuk Peningkatan Kinerja Perusahaan');
    cy.get('#elo', timeout).clear().type('Memahami dan menerapkan strategi keuangan yang efektif serta tata kelola yang baik untuk meningkatkan kinerja dan keberlanjutan perusahaan.');  
    cy.get('#topik1', timeout).clear().type('Perumusan Strategi Keuangan yang Efektif');
    cy.get('#topik2', timeout).clear().type('Implementasi Tata Kelola Keuangan yang Baik');
    cy.get('#topik3', timeout).clear().type('Pengukuran Kinerja Keuangan dan Manajemen Risiko');

    //pilih referensi auto
    cy.get(':nth-child(1) > .Dropdown-root > .Dropdown-control', timeout).click();
    cy.get('[aria-selected="false"]', timeout).click();

    //pilih referensi manual
    // cy.get('.dropdown_search > .css-13cymwt-control > .css-i9stkb > .css-19bb58m').click();
    // cy.get('[id^="react-select-"][id$="-option-1"]').click(); 
    // cy.get('.css-1bjxe7c > .css-19bb58m').click();
    // cy.get('[id^="react-select-"][id$="-option-2"]').click(); 
    // cy.get('.css-1bjxe7c > .css-19bb58m').click();
    // cy.get('[id^="react-select-"][id$="-option-3"]').click(); 
    // cy.get('.css-1bjxe7c > .css-19bb58m').click();
    // cy.get('[id^="react-select-"][id$="-option-4"]').click(); 
    // cy.get('.css-1bjxe7c > .css-19bb58m').click();
    // cy.get('[id^="react-select-"][id$="-option-5"]').click(); 
 
    //ambil screenshot
    cy.screenshot(`generatemodul1_stag-${new Date().toISOString().replace(/[:.]/g, '-')}`);
    //tombol generate :
    cy.get('.modulBut', timeout).click();
    cy.wait(5000);
    cy.get('.generateBaru_but', timeout).click();
    cy.wait(5000);

//-----------------------------------------------------------------------------------------------------------------
    //5
    //pilih grup kompetensi :
    cy.get('.dropDown-content-grup > .css-13cymwt-control > .css-i9stkb > .css-19bb58m', timeout).click();
    cy.get('[id^="react-select-"][id$="-option-19"]').click();  //(1) - (sekian) pilihan opsi grup kompetensi

    // pilih dirkom :
    cy.get('.dropDown-content-nama > .css-13cymwt-control > .css-i9stkb > .css-19bb58m', timeout).click();
    cy.get('[id^="react-select-"][id$="-option-8"]').click(); //deep learning
    

    // pilih level :
    cy.get(':nth-child(10) > .Dropdown-root > .Dropdown-control > .Dropdown-placeholder', timeout).click();
    cy.get('.Dropdown-menu > :nth-child(5)', timeout).click(); //(1) - (5) pilihan opsi level

    //opsional konten : 
    cy.get('#judul', timeout).clear().type('Manajemen Manfaat Medis yang Efektif untuk Optimalisasi Layanan Kesehatan');
    cy.get('#elo', timeout).clear().type('Mengelola manfaat medis secara strategis dan efisien untuk meningkatkan akses dan kualitas layanan kesehatan.');  
    cy.get('#topik1', timeout).clear().type('Pengelolaan Manfaat Medis dan Pemangku Kepentingan');
    cy.get('#topik2', timeout).clear().type('Optimasi Program Manfaat Kesehatan');
    cy.get('#topik3', timeout).clear().type('Kepatuhan dan Regulasi dalam Manfaat Medis');

    //pilih referensi auto
    // cy.get(':nth-child(1) > .Dropdown-root > .Dropdown-control', timeout).click();
    // cy.get('[aria-selected="false"]', timeout).click();

    //pilih referensi manual
    // cy.get('.dropdown_search > .css-13cymwt-control > .css-i9stkb > .css-19bb58m').click();
    // cy.get('[id^="react-select-"][id$="-option-1"]').click(); 
    // cy.get('.css-1bjxe7c > .css-19bb58m').click();
    // cy.get('[id^="react-select-"][id$="-option-2"]').click(); 
    // cy.get('.css-1bjxe7c > .css-19bb58m').click();
    // cy.get('[id^="react-select-"][id$="-option-3"]').click(); 
    // cy.get('.css-1bjxe7c > .css-19bb58m').click();
    // cy.get('[id^="react-select-"][id$="-option-4"]').click(); 
    // cy.get('.css-1bjxe7c > .css-19bb58m').click();
    // cy.get('[id^="react-select-"][id$="-option-5"]').click(); 
 
    //ambil screenshot
    cy.screenshot(`generatemodul1_stag-${new Date().toISOString().replace(/[:.]/g, '-')}`);
    //tombol generate :
    cy.get('.modulBut', timeout).click();
    cy.wait(5000);
    cy.get('.generateBaru_but', timeout).click();
    cy.wait(5000);

  
  });
});