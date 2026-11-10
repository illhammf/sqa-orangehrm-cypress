
describe('OrangeHRM - Create Employee Testing', () => {

  const employee = {
    firstName: 'SQA',
    middleName: 'Automation',
    lastName: 'Kelompok10',
  };

  it('TC-CREATE-001 - Berhasil menambahkan karyawan baru', () => {

    // Membuat Employee ID unik maksimal 8 digit
    const employeeId = String(Date.now()).slice(-8);

    // Mengisi Employee ID
    cy.get('input[name="employeeId"]')
    .clear()
    .type(employeeId);

    // Login
    cy.visit('/web/index.php/auth/login');

    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/dashboard/index');

    // Membuka halaman Add Employee
    cy.visit('/web/index.php/pim/addEmployee');

    cy.contains('h6', 'Add Employee')
      .should('be.visible');

    // Mengisi data karyawan
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

    // Menyimpan data
    cy.get('button[type="submit"]')
      .contains('Save')
      .click();

    // Verifikasi halaman Personal Details
    cy.url().should('include', '/pim/viewPersonalDetails/');

    // Verifikasi nama karyawan
    cy.get('input[name="firstName"]')
      .should('have.value', employee.firstName);

    cy.get('input[name="lastName"]')
      .should('have.value', employee.lastName);

    // Verifikasi Employee ID
    cy.contains('label', 'Employee Id')
      .closest('.oxd-input-group')
      .find('input')
      .should('have.value', employeeId);

    cy.log(`Employee ID: ${employeeId}`);

  });

});
