
describe('OrangeHRM - Update Employee Testing', () => {

  const employee = {
    employeeId: '4325965526', // Ganti dengan Employee ID yang valid
    newMiddleName: 'AutomationUpdated',
  };

  beforeEach(() => {

    // Login ke OrangeHRM
    cy.visit('/web/index.php/auth/login');

    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/dashboard/index');

  });

  it('TC-UPDATE-001 - Berhasil memperbarui data karyawan', () => {

    // Membuka halaman Employee List
    cy.visit('/web/index.php/pim/viewEmployeeList');

    // Mencari karyawan berdasarkan Employee ID
    cy.contains('label', 'Employee Id')
      .closest('.oxd-input-group')
      .find('input')
      .clear()
      .type(employee.employeeId);

    cy.contains('button', 'Search').click();

    // Memastikan karyawan ditemukan
    cy.contains('.oxd-table-cell', employee.employeeId)
      .should('be.visible');

    // Membuka halaman Edit Employee
    cy.contains('.oxd-table-row', employee.employeeId)
      .within(() => {
        cy.get('button').first().click();
      });

    // Memastikan halaman Personal Details tampil
    cy.url().should('include', '/pim/viewPersonalDetails/');

    cy.contains('Personal Details')
      .should('be.visible');

    // Memastikan input nama tengah tersedia
    cy.get('input[name="middleName"]')
      .should('be.visible');

    // Mengubah nama tengah
    cy.get('input[name="middleName"]')
      .clear()
      .type(employee.newMiddleName);

    // Menyimpan perubahan
    cy.contains('button', 'Save')
      .first()
      .click();

    // Memastikan perubahan berhasil tersimpan
    cy.get('input[name="middleName"]')
      .should('have.value', employee.newMiddleName);

    // Refresh halaman untuk memastikan data tersimpan
    cy.reload();

    // Verifikasi data setelah halaman dimuat ulang
    cy.get('input[name="middleName"]')
      .should('have.value', employee.newMiddleName);

    // Log hasil pengujian
    cy.log('UPDATE EMPLOYEE BERHASIL');
    cy.log(`Employee ID: ${employee.employeeId}`);
    cy.log(`Middle Name: ${employee.newMiddleName}`);

  });

});
