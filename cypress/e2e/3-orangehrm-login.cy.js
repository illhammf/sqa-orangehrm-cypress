
describe('OrangeHRM - Login Testing', () => {

  beforeEach(() => {
    cy.visit('/web/index.php/auth/login');
  });

  it('TC-LOGIN-001 - Berhasil login menggunakan akun valid', () => {

    // Input username
    cy.get('input[name="username"]')
      .should('be.visible')
      .type('Admin');

    // Input password
    cy.get('input[name="password"]')
      .should('be.visible')
      .type('admin123');

    // Klik tombol login
    cy.get('button[type="submit"]')
      .click();

    // Memastikan URL mengarah ke Dashboard
    cy.url().should('include', '/dashboard/index');

    // Memastikan judul halaman adalah Dashboard
    cy.get('.oxd-topbar-header-title')
      .should('contain.text', 'Dashboard');

  });

});
