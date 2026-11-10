
describe('OrangeHRM - Delete Employee Testing', () => {

  const employee = {
    employeeId: '4322398755',
  };

  beforeEach(() => {

    // Login ke OrangeHRM
    cy.visit('/web/index.php/auth/login');

    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/dashboard/index');

  });

  it('TC-DELETE-001 - Berhasil menghapus data karyawan', () => {

    // Membuka halaman Employee List
    cy.visit('/web/index.php/pim/viewEmployeeList');

    // Mencari karyawan berdasarkan Employee ID
    cy.contains('label', 'Employee Id')
      .closest('.oxd-input-group')
      .find('input')
      .clear()
      .type(employee.employeeId);

    // Klik Search
    cy.contains('button', 'Search').click();

    // Memastikan karyawan ditemukan
    cy.contains('.oxd-table-cell', employee.employeeId)
      .should('be.visible');

    // Mengambil baris karyawan dan klik Delete
    cy.contains('.oxd-table-row', employee.employeeId)
      .within(() => {
        cy.get('button').last().click();
      });

    // Memastikan dialog konfirmasi muncul
    cy.get('.oxd-dialog-container')
      .should('be.visible');

    // Konfirmasi penghapusan
    cy.get('.oxd-dialog-container')
      .contains('button', 'Yes, Delete')
      .click();

    // Memastikan notifikasi berhasil muncul
    cy.contains('Successfully Deleted')
      .should('be.visible');

    // Memastikan karyawan sudah tidak ditemukan
    cy.contains('label', 'Employee Id')
      .closest('.oxd-input-group')
      .find('input')
      .clear()
      .type(employee.employeeId);

    cy.contains('button', 'Search').click();

    cy.contains('No Records Found')
      .should('be.visible');

    // Log hasil pengujian
    cy.log('DELETE EMPLOYEE BERHASIL');
    cy.log(`Employee ID: ${employee.employeeId}`);
    cy.log('Data karyawan berhasil dihapus');

  });

});
