
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com', // alamat aplikasi yang akan diuji
    specPattern: 'cypress/e2e/**/*.cy.js', // lokasi file spesifikasi pengujian
    supportFile: 'cypress/support/e2e.js', // file untuk konfigurasi tambahan dan perintah kustom
    viewportWidth: 1366, // lebar viewport
    viewportHeight: 768, // tinggi viewport
    defaultCommandTimeout: 10000, // timeout default untuk perintah Cypress
  },
});
