
describe('OrangeHRM - Login Testing', () => {

  beforeEach(() => {
    cy.visit('/web/index.php/auth/login');
  });

  it('TC-LOGIN-001 - Berhasil login menggunakan akun valid', () => {

    // Mengisi username
    cy.get('input[name="username"]')
      .type('Admin');

    // Mengisi password akun demo
    cy.get('input[name="password"]')
      .type('admin123');

    // Klik tombol Login
    cy.get('button[type="submit"]')
      .click();

    // Memastikan berhasil masuk ke Dashboard
    cy.url().should('include', '/dashboard/index');

    // Memastikan halaman Dashboard tampil
    cy.contains('Dashboard').should('be.visible');

  });

});
