
describe('OrangeHRM - Delete Employee Testing', () => {

  // Data khusus pengujian DELETE
  const employee = {
    firstName: 'DELETE',
    middleName: 'Automation',
    lastName: 'Testing'
  };

  // Employee ID unik setiap pengujian
  const employeeId = String(Date.now()).slice(-10);

  beforeEach(() => {

    // Login OrangeHRM
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

    // =====================================
    // 1. MEMBUAT DATA KARYAWAN
    // =====================================

    cy.visit('/web/index.php/pim/addEmployee');

    cy.contains('h6', 'Add Employee')
      .should('be.visible');

    cy.get('input[name="firstName"]')
      .type(employee.firstName);

    cy.get('input[name="middleName"]')
      .type(employee.middleName);

    cy.get('input[name="lastName"]')
      .type(employee.lastName);

    // Mengisi Employee ID
    cy.contains('label', 'Employee Id')
      .closest('.oxd-input-group')
      .find('input')
      .clear()
      .type(employeeId);

    // Simpan karyawan
    cy.get('button[type="submit"]')
      .click();

    // Pastikan karyawan berhasil dibuat
    cy.url().should('include', '/pim/viewPersonalDetails/');

    cy.contains('Personal Details')
      .should('be.visible');

    cy.log('DATA KARYAWAN BERHASIL DIBUAT');
    cy.log(`Employee ID: ${employeeId}`);

    // =====================================
    // 2. MEMBUKA EMPLOYEE LIST
    // =====================================

    cy.visit('/web/index.php/pim/viewEmployeeList');

    cy.contains('h5', 'Employee Information')
      .should('be.visible');

    // =====================================
    // 3. MENCARI KARYAWAN
    // =====================================

    cy.contains('label', 'Employee Id')
      .closest('.oxd-input-group')
      .find('input')
      .clear()
      .type(employeeId);

    // Menunggu proses pencarian API
    cy.intercept('GET', '**/api/v2/pim/employees**')
      .as('searchEmployee');

    cy.contains('button', 'Search')
      .click();

    cy.wait('@searchEmployee');

    // Memastikan data ditemukan
    cy.contains('.oxd-table-cell', employeeId, {
      timeout: 15000
    }).should('be.visible');

    cy.log('KARYAWAN BERHASIL DITEMUKAN');

    // =====================================
    // 4. MENGHAPUS DATA KARYAWAN
    // =====================================

    cy.contains('.oxd-table-row', employeeId)
      .within(() => {

        // Klik tombol Delete pada baris karyawan
        cy.get('button')
          .last()
          .click();

      });

    // Memastikan dialog konfirmasi tampil
    cy.contains('Are you Sure?', {
      timeout: 10000
    }).should('be.visible');

    // Konfirmasi penghapusan
    cy.contains('button', 'Yes, Delete')
      .should('be.visible')
      .and('be.enabled')
      .click();

    // =====================================
    // 5. VERIFIKASI PENGHAPUSAN
    // =====================================

    cy.contains('.oxd-table-cell', employeeId, {
      timeout: 15000
    }).should('not.exist');

    // Hasil pengujian
    cy.log('DELETE EMPLOYEE BERHASIL');
    cy.log(`Employee ID: ${employeeId}`);
    cy.log('DATA KARYAWAN BERHASIL DIHAPUS');

  });

});
