
describe('OrangeHRM - Create Employee Testing', () => {

  // Data karyawan yang akan diuji
  const employee = {
    firstName: 'SQA',
    middleName: 'Automation',
    lastName: 'Kelompok10',
  };

  // Employee ID unik, maksimal 10 karakter
  const employeeId = String(Date.now()).slice(-10);

  // Login sebelum pengujian dimulai
  beforeEach(() => {

    cy.visit('/web/index.php/auth/login');

    cy.get('input[name="username"]')
      .should('be.visible')
      .type('Admin');

    cy.get('input[name="password"]')
      .should('be.visible')
      .type('admin123');

    cy.get('button[type="submit"]').click();

    // Memastikan login berhasil
    cy.url().should('include', '/dashboard/index');

  });

  it('TC-CREATE-001 - Berhasil menambahkan karyawan baru', () => {

    // =====================================
    // STEP 1 - Membuka halaman Add Employee
    // =====================================

    cy.visit('/web/index.php/pim/addEmployee');

    cy.contains('Add Employee')
      .should('be.visible');

    // =====================================
    // STEP 2 - Mengisi nama karyawan
    // =====================================

    cy.get('input[name="firstName"]')
      .should('be.visible')
      .clear()
      .type(employee.firstName);

    cy.get('input[name="middleName"]')
      .clear()
      .type(employee.middleName);

    cy.get('input[name="lastName"]')
      .clear()
      .type(employee.lastName);

    // =====================================
    // STEP 3 - Mengisi Employee ID
    // =====================================

    cy.contains('label', /^Employee Id$/)
      .closest('.oxd-input-group')
      .find('input')
      .should('be.visible')
      .clear()
      .type(employeeId);

    // Memastikan ID tidak lebih dari 10 karakter
    expect(employeeId.length).to.be.at.most(10);

    // =====================================
    // STEP 4 - Menyimpan data karyawan
    // =====================================

    cy.get('button[type="submit"]')
      .should('be.enabled')
      .click();

    // =====================================
    // STEP 5 - Verifikasi halaman Personal Details
    // =====================================

    cy.location('pathname')
      .should('include', '/pim/viewPersonalDetails/');

    cy.contains('Personal Details')
      .should('be.visible');

    // =====================================
    // STEP 6 - Verifikasi data karyawan
    // =====================================

    cy.get('input[name="firstName"]')
      .should('have.value', employee.firstName);

    cy.get('input[name="middleName"]')
      .should('have.value', employee.middleName);

    cy.get('input[name="lastName"]')
      .should('have.value', employee.lastName);

    cy.contains('label', /^Employee Id$/)
      .closest('.oxd-input-group')
      .find('input')
      .should('have.value', employeeId);

    // =====================================
    // STEP 7 - Menampilkan hasil pengujian
    // =====================================

    cy.log('CREATE EMPLOYEE BERHASIL');

    cy.log(`Employee Name: ${employee.firstName} ${employee.middleName} ${employee.lastName}`);

    cy.log(`Employee ID: ${employeeId}`);

  });

});
