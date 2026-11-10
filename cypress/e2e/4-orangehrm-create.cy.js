
describe('OrangeHRM - Create Employee Testing', () => {

  // Data karyawan untuk pengujian
  const employee = {
    firstName: 'SQA',
    middleName: 'Automation',
    lastName: 'Kelompok10',
  };

  it('TC-CREATE-001 - Berhasil menambahkan karyawan baru', () => {

    // Membuat Employee ID unik agar tidak bentrok
    const employeeId = `SQA10${Date.now()}`;

    // 1. Membuka halaman login
    cy.visit('/web/index.php/auth/login');

    // 2. Login menggunakan akun demo
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    // 3. Memastikan login berhasil
    cy.url().should('include', '/dashboard/index');

    // 4. Membuka halaman Add Employee
    cy.visit('/web/index.php/pim/addEmployee');

    cy.contains('h6', 'Add Employee')
      .should('be.visible');

    // 5. Mengisi nama karyawan
    cy.get('input[name="firstName"]')
      .type(employee.firstName);

    cy.get('input[name="middleName"]')
      .type(employee.middleName);

    cy.get('input[name="lastName"]')
      .type(employee.lastName);

    // 6. Mengisi Employee ID
    cy.contains('label', 'Employee Id')
      .parent()
      .find('input')
      .clear()
      .type(employeeId);

    // 7. Menyimpan data karyawan
    cy.get('button[type="submit"]')
      .contains('Save')
      .click();

    // 8. Memastikan halaman Personal Details terbuka
    cy.url().should('include', '/pim/viewPersonalDetails/');

    // 9. Memastikan data karyawan berhasil tersimpan
    cy.get('input[name="firstName"]')
      .should('have.value', employee.firstName);

    cy.get('input[name="lastName"]')
      .should('have.value', employee.lastName);

    cy.contains(employeeId)
      .should('be.visible');

    cy.log(`Employee berhasil dibuat dengan ID: ${employeeId}`);

  });

});
