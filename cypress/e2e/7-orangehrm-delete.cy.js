
describe('OrangeHRM - Delete Employee Testing', () => {

  // Employee ID dari hasil pengujian CREATE sebelumnya
  const employeeId = '4322398755';

  beforeEach(() => {
    // Login ke OrangeHRM
    cy.visit('/web/index.php/auth/login');

    cy.get('input[name="username"]')
      .type('Admin');

    cy.get('input[name="password"]')
      .type('admin123');

    cy.get('button[type="submit"]')
      .click();

    cy.url().should('include', '/dashboard/index');
  });

  it('TC-DELETE-001 - Berhasil menghapus data karyawan', () => {

    // Mengunjungi halaman Employee List
    cy.visit('/web/index.php/pim/viewEmployeeList');

    // Memastikan halaman Employee List tampil
    cy.contains('h5', 'Employee Information')
      .should('be.visible');

    // Mencari karyawan berdasarkan Employee ID
    cy.get('input[name="employeeId"]')
      .clear()
      .type(employeeId);

    // Klik tombol Search
    cy.contains('button', 'Search')
      .click();

    // Memastikan data karyawan ditemukan
    cy.contains('.oxd-table-cell', employeeId)
      .should('be.visible');

    // Mengambil baris karyawan
    cy.contains('.oxd-table-cell', employeeId)
      .closest('.oxd-table-row')
      .as('employeeRow');

    // Memastikan tombol Delete tersedia
    cy.get('@employeeRow')
      .find('button')
      .last()
      .click();

    // Memastikan dialog konfirmasi muncul SEBELUM dihapus
    cy.get('.oxd-dialog-container')
      .should('be.visible');

    // Memastikan pesan konfirmasi tampil
    cy.get('.oxd-dialog-container')
      .should('contain.text', 'Are you Sure?');

    // Memastikan tombol Yes, Delete tersedia
    cy.get('.oxd-dialog-container')
      .contains('button', 'Yes, Delete')
      .should('be.visible');

    // Memantau request DELETE
    cy.intercept(
      'DELETE',
      '**/api/v2/pim/employees/*'
    ).as('deleteEmployee');

    // Konfirmasi penghapusan
    cy.get('.oxd-dialog-container')
      .contains('button', 'Yes, Delete')
      .click();

    // Memastikan server berhasil menghapus data
    cy.wait('@deleteEmployee')
      .its('response.statusCode')
      .should('eq', 200);

    // Memastikan dialog sudah tertutup
    cy.get('.oxd-dialog-container')
      .should('not.exist');

    // Memastikan karyawan sudah tidak ditemukan
    cy.contains('.oxd-table-cell', employeeId)
      .should('not.exist');

    // Memastikan tabel menampilkan kondisi kosong
    cy.contains('No Records Found')
      .should('be.visible');

    // Log hasil pengujian
    cy.log('DELETE EMPLOYEE BERHASIL');
    cy.log(`Employee ID: ${employeeId}`);

  });

});
