/// <reference types="Cypress" />

var timeout = { timeout: 60000 }
var force = { force: true }

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

  it('Tes Generate Modul', () => {
    cy.visit('https://marshall-teach.web.id');
    cy.get('#username', timeout).clear().type('risna');
    cy.get('#password', timeout).clear().type('telkomgoe');
    cy.get('.form > .btn', timeout).click();
    cy.wait(5000);
    cy.get('.btn-gmodul > span', timeout).click();
    cy.wait(5000);
    //----------------------------------------------------------------------------------------------------------------------------------
    //1  
    //pilih grup kompetensi :
    // cy.get('.dropDown-content-grup > .css-13cymwt-control > .css-i9stkb > .css-19bb58m', timeout).click();
    // cy.get('[id^="react-select-"][id$="-option-1"]').click();  //(1) - (sekian) pilihan opsi grup kompetensi

    // // pilih dirkom :
    // cy.get('.dropDown-content-nama > .css-13cymwt-control > .css-i9stkb > .css-19bb58m', timeout).click();
    // cy.get('[id^="react-select-"][id$="-option-0"]').click(); //deep learning
    

    // // pilih level :
    // cy.get(':nth-child(10) > .Dropdown-root > .Dropdown-control > .Dropdown-placeholder', timeout).click();
    // cy.get('.Dropdown-menu > :nth-child(1)', timeout).click(); //(1) - (5) pilihan opsi level

    // //opsional konten : 
    // cy.get('#judul', timeout).clear().type('Deeplearning');
    // cy.get('#elo', timeout).clear().type('intro duction to deeplearning');  
    // cy.get('#topik1', timeout).clear().type('Starting guide');
    // cy.get('#topik2', timeout).clear().type('methods in deep learning');
    // cy.get('#topik3', timeout).clear().type('using deeplearning');

    // // //pilih referensi auto
    // // cy.get(':nth-child(1) > .Dropdown-root > .Dropdown-control', timeout).click();
    // // cy.get('[aria-selected="false"]', timeout).click();

    // //pilih referensi manual
    // cy.get('.checkBox_multiselect').click();
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
 
    // //ambil screenshot
    // cy.screenshot(`generatemodul1_prod-${new Date().toISOString().replace(/[:.]/g, '-')}`);
    // //tombol generate :
    // cy.get('.modulBut', timeout).click();
    // cy.wait(5000);
    // cy.get('.generateBaru_but', timeout).click();
    // cy.wait(5000);


    //----------------------------------------------------------------------------------------------------------------------------------
    //2  
    //pilih grup kompetensi :
    cy.get('.dropDown-content-grup > .css-13cymwt-control > .css-i9stkb > .css-19bb58m', timeout).click();
    cy.get('[id^="react-select-"][id$="-option-1"]').click();  //(1) - (sekian) pilihan opsi grup kompetensi

    // pilih dirkom :
    cy.get('.dropDown-content-nama > .css-13cymwt-control > .css-i9stkb > .css-19bb58m', timeout).click();
    cy.get('[id^="react-select-"][id$="-option-1"]').click(); //edge computing
    

    // pilih level :
    cy.get(':nth-child(10) > .Dropdown-root > .Dropdown-control > .Dropdown-placeholder', timeout).click();
    cy.get('.Dropdown-menu > :nth-child(2)', timeout).click(); //(1) - (5) pilihan opsi level

    //opsional konten : 
    cy.get('#judul', timeout).clear().type('Machine Learning');
   cy.get('#elo', timeout).clear().type('Understanding Machine Learning');  
   cy.get('#topik1', timeout).clear().type('Machine learning for NLP');
   cy.get('#topik2', timeout).clear().type('Machine Learning various example');
   cy.get('#topik3', timeout).clear().type('Machine learning for NLP in daily life');
   
    // //pilih referensi auto
    cy.get(':nth-child(1) > .Dropdown-root > .Dropdown-control', timeout).click();
    cy.get('[aria-selected="false"]', timeout).click();

    //pilih referensi manual
    // cy.get('.checkBox_multiselect').click();
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
    cy.screenshot(`generatemodul2_prod-${new Date().toISOString().replace(/[:.]/g, '-')}`);
    //tombol generate :
    cy.get('.modulBut', timeout).click();
    cy.wait(5000);
    cy.get('.generateBaru_but', timeout).click();
    cy.wait(5000);


    //----------------------------------------------------------------------------------------------------------------------------------
    //3  
    //pilih grup kompetensi :
    cy.get('.dropDown-content-grup > .css-13cymwt-control > .css-i9stkb > .css-19bb58m', timeout).click();
    cy.get('[id^="react-select-"][id$="-option-1"]').click();  //(1) - (sekian) pilihan opsi grup kompetensi

    // pilih dirkom :
    cy.get('.dropDown-content-nama > .css-13cymwt-control > .css-i9stkb > .css-19bb58m', timeout).click();
    cy.get('[id^="react-select-"][id$="-option-2"]').click(); //edge computing
    

    // pilih level :
    cy.get(':nth-child(10) > .Dropdown-root > .Dropdown-control > .Dropdown-placeholder', timeout).click();
    cy.get('.Dropdown-menu > :nth-child(3)', timeout).click(); //(1) - (5) pilihan opsi level

    //opsional konten : 
    cy.get('#judul', timeout).clear().type('Natural Language Processing');
    cy.get('#elo', timeout).clear().type('advanced Developtment in NLP');  
    cy.get('#topik1', timeout).clear().type('Various Methods to use in NLP');
    cy.get('#topik2', timeout).clear().type('speech to text');
    cy.get('#topik3', timeout).clear().type('text to speech');
    
    // //pilih referensi auto
    // cy.get(':nth-child(1) > .Dropdown-root > .Dropdown-control', timeout).click();
    // cy.get('[aria-selected="false"]', timeout).click();

    //pilih referensi manual
    cy.get('.checkBox_multiselect').click();
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
    cy.screenshot(`generatemodul3_prod-${new Date().toISOString().replace(/[:.]/g, '-')}`);
    //tombol generate :
    cy.get('.modulBut', timeout).click();
    cy.wait(5000);
    cy.get('.generateBaru_but', timeout).click();
    cy.wait(5000);


    //----------------------------------------------------------------------------------------------------------------------------------
    //4  
    //pilih grup kompetensi :
    cy.get('.dropDown-content-grup > .css-13cymwt-control > .css-i9stkb > .css-19bb58m', timeout).click();
    cy.get('[id^="react-select-"][id$="-option-1"]').click();  //(1) - (sekian) pilihan opsi grup kompetensi

    // pilih dirkom :
    cy.get('.dropDown-content-nama > .css-13cymwt-control > .css-i9stkb > .css-19bb58m', timeout).click();
    cy.get('[id^="react-select-"][id$="-option-3"]').click(); //edge computing
    

    // pilih level :
    cy.get(':nth-child(10) > .Dropdown-root > .Dropdown-control > .Dropdown-placeholder', timeout).click();
    cy.get('.Dropdown-menu > :nth-child(4)', timeout).click(); //(1) - (5) pilihan opsi level

    //opsional konten : 
    cy.get('#judul', timeout).clear().type('Natural Language Processing');
    cy.get('#elo', timeout).clear().type('advanced Developtment in NLP');  
    cy.get('#topik1', timeout).clear().type('Various Methods to use in NLP');
    cy.get('#topik2', timeout).clear().type('speech to text');
    cy.get('#topik3', timeout).clear().type('text to speech');
   
    // //pilih referensi auto
    cy.get(':nth-child(1) > .Dropdown-root > .Dropdown-control', timeout).click();
    cy.get('[aria-selected="false"]', timeout).click();

    //pilih referensi manual
    // cy.get('.checkBox_multiselect').click();
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
    cy.screenshot(`generatemodul4_prod-${new Date().toISOString().replace(/[:.]/g, '-')}`);
    //tombol generate :
    cy.get('.modulBut', timeout).click();
    cy.wait(5000);
    cy.get('.generateBaru_but', timeout).click();
    cy.wait(5000);


    //----------------------------------------------------------------------------------------------------------------------------------
    //5  
    //pilih grup kompetensi :
    cy.get('.dropDown-content-grup > .css-13cymwt-control > .css-i9stkb > .css-19bb58m', timeout).click();
    cy.get('[id^="react-select-"][id$="-option-1"]').click();  //(1) - (sekian) pilihan opsi grup kompetensi

    // pilih dirkom :
    cy.get('.dropDown-content-nama > .css-13cymwt-control > .css-i9stkb > .css-19bb58m', timeout).click();
    cy.get('[id^="react-select-"][id$="-option-3"]').click(); //edge computing
    

    // pilih level :
    cy.get(':nth-child(10) > .Dropdown-root > .Dropdown-control > .Dropdown-placeholder', timeout).click();
    cy.get('.Dropdown-menu > :nth-child(5)', timeout).click(); //(1) - (5) pilihan opsi level

    //opsional konten : 
    cy.get('#judul', timeout).clear().type('Natural Language Processing');
    cy.get('#elo', timeout).clear().type('advanced Developtment in NLP');  
    cy.get('#topik1', timeout).clear().type('Various Methods to use in NLP');
    cy.get('#topik2', timeout).clear().type('speech to text');
    cy.get('#topik3', timeout).clear().type('text to speech');
   
    // //pilih referensi auto
    // cy.get(':nth-child(1) > .Dropdown-root > .Dropdown-control', timeout).click();
    // cy.get('[aria-selected="false"]', timeout).click();

    //pilih referensi manual
    cy.get('.checkBox_multiselect').click();
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
    cy.screenshot(`generatemodul5_prod-${new Date().toISOString().replace(/[:.]/g, '-')}`);
    //tombol generate :
    cy.get('.modulBut', timeout).click();
    cy.wait(5000);
    cy.get('.generateBaru_but', timeout).click();
    cy.wait(5000);
    

  });
});