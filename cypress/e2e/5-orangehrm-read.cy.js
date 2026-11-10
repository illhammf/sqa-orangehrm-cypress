
describe('OrangeHRM - Read Employee Testing', () => {

  // Data karyawan yang sebelumnya berhasil dibuat
  const employee = {
    employeeId: '4322398755',
    firstName: 'SQA',
    middleName: 'Automation',
    lastName: 'Kelompok10',
  };

  // Login sebelum pengujian
  beforeEach(() => {

    cy.visit('/web/index.php/auth/login');

    cy.get('input[name="username"]')
      .should('be.visible')
      .type('Admin');

    cy.get('input[name="password"]')
      .should('be.visible')
      .type('admin123');

    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/dashboard/index');

  });

  it('TC-READ-001 - Berhasil mencari data karyawan berdasarkan Employee ID', () => {

    // =====================================
    // STEP 1 - Membuka halaman Employee List
    // =====================================

    cy.visit('/web/index.php/pim/viewEmployeeList');

    cy.contains('Employee Information')
      .should('be.visible');

    // =====================================
    // STEP 2 - Mengisi Employee ID
    // =====================================

    cy.contains('label', /^Employee Id$/)
      .closest('.oxd-input-group')
      .find('input')
      .should('be.visible')
      .clear()
      .type(employee.employeeId);

    // =====================================
    // STEP 3 - Melakukan pencarian
    // =====================================

    cy.get('button[type="submit"]')
      .contains('Search')
      .click();

    // =====================================
    // STEP 4 - Memastikan data ditemukan
    // =====================================

    cy.contains('.oxd-table-cell', employee.employeeId)
      .should('be.visible');

    // =====================================
    // STEP 5 - Memverifikasi informasi karyawan
    // =====================================

    cy.contains('.oxd-table-cell', employee.employeeId)
      .closest('.oxd-table-row')
      .within(() => {

        cy.contains(employee.firstName)
          .should('be.visible');

        cy.contains(employee.middleName)
          .should('be.visible');

        cy.contains(employee.lastName)
          .should('be.visible');

      });

    // =====================================
    // STEP 6 - Menampilkan hasil pengujian
    // =====================================

    cy.log('READ EMPLOYEE BERHASIL');

    cy.log(`Employee ID: ${employee.employeeId}`);

    cy.log(
      `Employee Name: ${employee.firstName} ${employee.middleName} ${employee.lastName}`
    );

  });

});
