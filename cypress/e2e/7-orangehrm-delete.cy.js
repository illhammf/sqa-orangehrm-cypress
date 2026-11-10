
describe('OrangeHRM - Delete Employee Testing', () => {

  // Employee ID yang berhasil dibuat pada tahap CREATE
  const employeeId = '4324652364';

  beforeEach(() => {

    // Login ke OrangeHRM
    cy.visit('/web/index.php/auth/login');

    cy.get('input[name="username"]')
      .type('Admin');

    cy.get('input[name="password"]')
      .type('admin123');

    cy.get('button[type="submit"]')
      .click();

    // Memastikan login berhasil
    cy.url().should('include', '/dashboard/index');

  });

  it('TC-DELETE-001 - Berhasil menghapus data karyawan', () => {

    // Membuka halaman Employee List
    cy.visit('/web/index.php/pim/viewEmployeeList');

    cy.contains('h5', 'Employee Information')
      .should('be.visible');

    // Mencari input Employee ID berdasarkan label
    cy.contains('label', 'Employee Id')
      .closest('.oxd-input-group')
      .find('input')
      .clear()
      .type(employeeId);

    // Klik tombol Search
    cy.contains('button', 'Search')
      .click();

    // Memastikan data karyawan ditemukan
    cy.contains('.oxd-table-cell', employeeId)
      .should('be.visible');

    // Memilih baris karyawan berdasarkan Employee ID
    cy.contains('.oxd-table-row', employeeId)
      .within(() => {

        // Klik tombol Delete
        cy.get('button')
          .last()
          .click();

      });

    // Memastikan dialog konfirmasi muncul
    cy.get('.oxd-dialog-container')
      .should('be.visible');

    // Konfirmasi penghapusan
    cy.get('.oxd-dialog-container')
      .contains('button', 'Yes, Delete')
      .click();

    // Memastikan notifikasi penghapusan berhasil
    cy.contains('Successfully Deleted')
      .should('be.visible');

    // Memastikan data sudah tidak ditemukan
    cy.contains('label', 'Employee Id')
      .closest('.oxd-input-group')
      .find('input')
      .clear()
      .type(employeeId);

    cy.contains('button', 'Search')
      .click();

    // Memastikan data karyawan sudah tidak ada
    cy.contains('No Records Found')
      .should('be.visible');

    cy.log('DELETE EMPLOYEE BERHASIL');
    cy.log(`Employee ID: ${employeeId}`);

  });

});
