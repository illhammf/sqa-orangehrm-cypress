# OrangeHRM - Software Quality Assurance Testing

## 1. Deskripsi Proyek

Repository ini merupakan proyek pengujian perangkat lunak (*Software Testing*) yang dikembangkan untuk memenuhi tugas kelompok mata kuliah **Software Quality Assurance (SQA)**.

Proyek ini berfokus pada penerapan **Automation Testing menggunakan Cypress** terhadap aplikasi web OrangeHRM, khususnya pada modul Personnel Information Management (PIM).

OrangeHRM merupakan aplikasi berbasis web yang digunakan untuk membantu pengelolaan sumber daya manusia dalam organisasi atau perusahaan. Salah satu fungsi pentingnya adalah pengelolaan informasi karyawan, mulai dari penambahan, pencarian, perubahan, hingga penghapusan data.

Dalam proyek ini, kami melakukan pengujian terhadap lima skenario utama:

1. **Login Testing** – Menguji proses autentikasi pengguna.
2. **Create Employee Testing** – Menguji proses penambahan data karyawan.
3. **Read Employee Testing** – Menguji proses pencarian dan pembacaan data karyawan.
4. **Update Employee Testing** – Menguji proses perubahan informasi karyawan.
5. **Delete Employee Testing** – Menguji proses penghapusan data karyawan.

Seluruh skenario pengujian dikembangkan menggunakan JavaScript dan dijalankan melalui Cypress End-to-End Testing.

Proyek ini tidak hanya bertujuan memastikan bahwa aplikasi dapat digunakan, tetapi juga mempelajari bagaimana proses pengujian perangkat lunak dilakukan secara sistematis, bagaimana suatu fungsi diverifikasi, serta bagaimana kemungkinan kesalahan (*bug*) dapat ditemukan melalui pengujian otomatis.

---

## 2. Latar Belakang dan Tujuan Pengujian

### 2.1 Latar Belakang

Dalam pengembangan perangkat lunak, kualitas aplikasi merupakan salah satu aspek penting yang harus diperhatikan.

Sebuah aplikasi tidak cukup hanya memiliki tampilan yang baik. Setiap fitur di dalamnya juga harus dapat berjalan sesuai dengan kebutuhan dan memberikan hasil yang benar ketika digunakan oleh pengguna.

Sebagai contoh, ketika pengguna menambahkan data karyawan, sistem harus mampu menyimpan informasi tersebut. Ketika pengguna melakukan pencarian, sistem harus menampilkan data yang sesuai. Begitu juga ketika pengguna memperbarui atau menghapus data, perubahan tersebut harus benar-benar diterapkan oleh sistem.

Proses untuk memastikan bahwa fungsi-fungsi tersebut berjalan dengan benar merupakan bagian dari Software Quality Assurance.

Pada proyek ini, kami menggunakan Cypress untuk mengotomatisasi proses pengujian sehingga setiap skenario dapat dijalankan secara berulang dan hasilnya dapat diamati melalui Cypress Runner.

### 2.2 Tujuan Pengujian

Beberapa tujuan yang ingin dicapai melalui proyek ini adalah:

**1. Memastikan Fungsionalitas Aplikasi**

Memastikan fitur autentikasi dan pengelolaan data karyawan pada OrangeHRM dapat berjalan sesuai dengan fungsi yang diharapkan.

**2. Mengidentifikasi Kesalahan Sistem**

Menemukan kemungkinan kesalahan, kegagalan fungsi, maupun ketidaksesuaian antara hasil aktual dan hasil yang diharapkan.

**3. Menerapkan Automation Testing**

Mempelajari bagaimana pengujian otomatis dapat digunakan untuk menjalankan skenario pengujian tanpa harus melakukan seluruh interaksi secara manual.

**4. Menguji Proses CRUD**

Memastikan operasi Create, Read, Update, dan Delete pada modul PIM dapat dijalankan sesuai dengan skenario yang telah ditentukan.

**5. Melakukan Verifikasi Hasil Pengujian**

Menggunakan assertion untuk memastikan bahwa setiap tindakan menghasilkan kondisi sesuai dengan ekspektasi.

**6. Memahami Proses Software Quality Assurance**

Mempelajari tahapan penyusunan test case, implementasi pengujian, pelaksanaan pengujian, identifikasi kendala, hingga evaluasi hasil.

### 2.3 Manfaat Pengujian Otomatis

Penerapan Automation Testing memberikan beberapa manfaat, antara lain:

- **Efisiensi waktu:** Pengujian dapat dijalankan kembali tanpa mengulangi seluruh proses secara manual.
- **Konsistensi:** Setiap pengujian menggunakan langkah dan kondisi yang telah ditentukan.
- **Reproducibility:** Skenario yang sama dapat dijalankan berulang kali untuk membandingkan hasil.
- **Deteksi kesalahan:** Membantu menemukan elemen yang tidak tersedia, data yang tidak sesuai, dan kegagalan proses.
- **Dokumentasi:** Hasil pengujian dapat diamati melalui Cypress Runner dan didokumentasikan menggunakan screenshot.

---

## 3. Objek dan Ruang Lingkup Pengujian

### 3.1 Objek Pengujian

Aplikasi yang digunakan sebagai objek pengujian adalah OrangeHRM Open Source Demo.

| Keterangan | Informasi |
|---|---|
| Nama Aplikasi | OrangeHRM |
| Jenis Aplikasi | Web-Based Human Resource Management System |
| Modul Pengujian | Personnel Information Management (PIM) |
| Pendekatan Pengujian | End-to-End Testing |
| Framework | Cypress |
| Bahasa Pemrograman | JavaScript |
| Browser | Microsoft Edge |
| Lingkungan Pengujian | OrangeHRM Open Source Demo |

**URL aplikasi:**

https://opensource-demo.orangehrmlive.com/

### 3.2 Ruang Lingkup Pengujian

Pengujian difokuskan pada lima fungsi utama.

| No. | Skenario | Fungsi yang Diuji |
|---|---|---|
| 1 | Login | Autentikasi pengguna |
| 2 | Create | Penambahan data karyawan |
| 3 | Read | Pencarian dan pembacaan data |
| 4 | Update | Perubahan informasi karyawan |
| 5 | Delete | Penghapusan data karyawan |

### 3.3 Batasan Pengujian

Untuk menjaga fokus proyek, terdapat beberapa batasan:

1. Pengujian hanya mencakup fungsi Login dan pengelolaan data karyawan pada modul PIM.
2. Pengujian dilakukan melalui antarmuka aplikasi menggunakan browser.
3. Pengujian menggunakan lingkungan OrangeHRM Open Source Demo.
4. Pengujian berfokus pada skenario positif (*positive testing*), yaitu penggunaan data dan tindakan yang valid.
5. Pengujian tidak mencakup seluruh modul OrangeHRM.
6. Pengujian tidak melakukan pengukuran performa, load testing, maupun penetration testing.

Dengan demikian, hasil pengujian hanya menggambarkan kondisi fungsi-fungsi yang termasuk dalam ruang lingkup proyek.

---

## 4. Teknologi dan Tools yang Digunakan

Berikut merupakan teknologi dan perangkat yang digunakan selama pengerjaan proyek.

### 4.1 Cypress

Cypress merupakan framework pengujian otomatis yang digunakan untuk menguji aplikasi web.

Cypress menjadi komponen utama dalam proyek ini karena mampu menjalankan perintah pengujian melalui browser, berinteraksi dengan elemen halaman, serta melakukan verifikasi terhadap hasil tindakan.

Fungsi Cypress yang digunakan:

| Perintah | Kegunaan |
|---|---|
| `describe()` | Mengelompokkan test case |
| `it()` | Mendefinisikan satu skenario pengujian |
| `beforeEach()` | Menjalankan persiapan sebelum setiap test |
| `cy.visit()` | Membuka halaman aplikasi |
| `cy.get()` | Memilih elemen berdasarkan selector |
| `cy.contains()` | Mencari elemen berdasarkan teks |
| `cy.type()` | Mengisi kolom input |
| `cy.clear()` | Menghapus isi kolom input |
| `cy.click()` | Melakukan klik pada elemen |
| `cy.url()` | Memeriksa URL halaman |
| `cy.intercept()` | Memantau HTTP request dan response |
| `cy.wait()` | Menunggu proses tertentu |
| `should()` | Memverifikasi kondisi menggunakan assertion |
| `cy.log()` | Menampilkan informasi pada Cypress Runner |

### 4.2 JavaScript

JavaScript digunakan sebagai bahasa pemrograman untuk membuat seluruh skenario pengujian.

Pada proyek ini, JavaScript digunakan untuk:

- Mendefinisikan data pengujian.
- Mengatur alur test case.
- Mengelompokkan fungsi pengujian.
- Melakukan interaksi dengan elemen aplikasi.
- Melakukan verifikasi terhadap hasil pengujian.

### 4.3 Node.js

Node.js merupakan lingkungan runtime JavaScript yang digunakan untuk menjalankan kebutuhan proyek Cypress.

Node.js juga menjadi dasar agar perintah NPM dan Npx dapat digunakan melalui terminal.

### 4.4 NPM (Node Package Manager)

NPM digunakan untuk mengelola package dan dependency proyek.

Dalam proyek ini, NPM digunakan untuk menginstal Cypress dan mengelola kebutuhan library yang tercantum pada `package.json`.

### 4.5 Visual Studio Code

Visual Studio Code digunakan sebagai editor kode untuk:

- Membuat file pengujian JavaScript.
- Mengubah dan memperbaiki skenario pengujian.
- Mengelola struktur direktori proyek.
- Melakukan pemeriksaan kode.
- Menjalankan perintah melalui terminal.

### 4.6 Microsoft Edge

Microsoft Edge digunakan sebagai browser untuk menjalankan aplikasi OrangeHRM.

Browser ini menjadi media interaksi yang digunakan Cypress ketika menjalankan skenario End-to-End Testing.

### 4.7 Cypress Runner

Cypress Runner merupakan antarmuka visual untuk menjalankan dan mengamati proses pengujian.

Melalui Cypress Runner, kita dapat melihat:

- Daftar file pengujian.
- Nama test case.
- Status PASS atau FAIL.
- Perintah Cypress yang dijalankan.
- Aktivitas browser.
- Assertion yang berhasil atau gagal.
- Aktivitas HTTP request dan response.
- Informasi kesalahan ketika pengujian gagal.

---

## 5. Arsitektur Pengujian

Proyek ini menggunakan pendekatan **End-to-End (E2E) Testing**.

End-to-End Testing merupakan metode pengujian yang memverifikasi alur penggunaan aplikasi dari awal hingga akhir melalui interaksi dengan sistem.

Dalam proyek ini, pengujian dilakukan dengan mengotomatisasi tindakan pengguna, seperti login, mengisi formulir, mencari data, memperbarui informasi, dan menghapus data karyawan.

### 5.1 Gambaran Arsitektur

Berikut gambaran alur arsitektur pengujian yang digunakan:

```text
+--------------------------------+
|         Test Engineer          |
|         Kelompok SQA           |
+---------------+----------------+
                |
                v
+--------------------------------+
|       Visual Studio Code       |
|                                |
|       JavaScript Test Files    |
+---------------+----------------+
                |
                v
+--------------------------------+
|            Cypress             |
|                                |
|       End-to-End Testing       |
|                                |
|  - Test Runner                 |
|  - Commands                    |
|  - Assertions                  |
|  - Test Execution              |
+---------------+----------------+
                |
                v
+--------------------------------+
|          Web Browser           |
|         Microsoft Edge         |
+---------------+----------------+
                |
                v
+--------------------------------+
|            OrangeHRM           |
|                                |
|       Web Application          |
|                                |
|  - Authentication              |
|  - Employee List               |
|  - Add Employee                |
|  - Edit Employee               |
|  - Delete Employee             |
+---------------+----------------+
                |
                v
+--------------------------------+
|          Backend / API         |
|                                |
|       HTTP Request             |
|       HTTP Response            |
|       Data Processing          |
+--------------------------------+
```

### 5.2 Penjelasan Komponen Arsitektur

**1. Test Engineer**

Test Engineer merupakan pihak yang menyusun skenario pengujian, membuat test case, menulis kode, menjalankan pengujian, dan mengevaluasi hasilnya.

Dalam proyek ini, peran tersebut dilakukan oleh anggota kelompok SQA.

**2. Visual Studio Code**

Visual Studio Code digunakan sebagai lingkungan pengembangan untuk menulis dan mengelola kode JavaScript yang berisi skenario pengujian.

**3. Cypress**

Cypress bertindak sebagai framework utama yang menjalankan seluruh instruksi pengujian.

Cypress membaca file pengujian, menjalankan perintah, melakukan interaksi dengan elemen browser, serta memverifikasi hasil menggunakan assertion.

**4. Web Browser**

Browser digunakan sebagai media untuk menampilkan aplikasi OrangeHRM.

Cypress menjalankan interaksi otomatis pada browser sehingga proses pengujian dapat diamati secara langsung.

**5. OrangeHRM**

OrangeHRM merupakan aplikasi yang menjadi objek pengujian.

Aplikasi menyediakan halaman dan fungsi yang menjadi target pengujian, seperti Login, Employee List, Add Employee, Edit Employee, dan Delete Employee.

**6. Backend / API**

Backend merupakan bagian aplikasi yang memproses permintaan dari antarmuka pengguna.

Ketika pengguna melakukan pencarian atau menyimpan data, aplikasi mengirimkan HTTP request ke backend. Backend kemudian memproses permintaan dan memberikan response.

Cypress dapat mengamati aktivitas jaringan tersebut sebagai informasi tambahan ketika proses pengujian berlangsung.

### 5.3 Alur Kerja Pengujian

Secara umum, proses pengujian berlangsung melalui tahapan berikut:

1. Test Engineer membuat skenario pengujian menggunakan JavaScript.
2. Cypress membaca file test yang telah dibuat.
3. Cypress membuka aplikasi OrangeHRM melalui browser.
4. Cypress menjalankan tindakan sesuai instruksi test case.
5. Aplikasi memproses tindakan pengguna melalui backend.
6. Cypress memverifikasi hasil aktual menggunakan assertion.
7. Cypress menampilkan hasil pengujian pada Cypress Runner.

Apabila seluruh kondisi yang diharapkan terpenuhi, test case memperoleh status PASS. Sebaliknya, apabila terdapat kondisi yang tidak terpenuhi, Cypress akan menampilkan informasi kegagalan.

---

## 6. Struktur Direktori Proyek

Berikut merupakan struktur direktori yang digunakan dalam proyek:

```text
sqa-orangehrm-cypress/
│
├── cypress/
│   │
│   └── e2e/
│       │
│       ├── 1-getting-started/
│       │
│       ├── 2-advanced-examples/
│       │
│       ├── 3-orangehrm-login.cy.js
│       │
│       ├── 4-orangehrm-create.cy.js
│       │
│       ├── 5-orangehrm-read.cy.js
│       │
│       ├── 6-orangehrm-update.cy.js
│       │
│       └── 7-orangehrm-delete.cy.js
│
├── docs/
│   │
│   └── screenshots/
│       │
│       ├── 01-login.png
│       ├── 02-create-employee.png
│       ├── 03-read-employee.png
│       ├── 04-update-employee.png
│       ├── 05-delete-employee.png
│       └── 06-all-tests.png
│
├── cypress.config.js
├── package.json
├── package-lock.json
├── .gitignore
│
└── README.md
```

### 6.1 Penjelasan Direktori

| File / Direktori | Fungsi |
|---|---|
| `cypress/` | Direktori utama kebutuhan Cypress |
| `cypress/e2e/` | Menyimpan file End-to-End Testing |
| `1-getting-started/` | Contoh pengujian bawaan Cypress |
| `2-advanced-examples/` | Contoh pengujian lanjutan bawaan Cypress |
| `3-orangehrm-login.cy.js` | Pengujian autentikasi |
| `4-orangehrm-create.cy.js` | Pengujian penambahan karyawan |
| `5-orangehrm-read.cy.js` | Pengujian pencarian karyawan |
| `6-orangehrm-update.cy.js` | Pengujian perubahan informasi karyawan |
| `7-orangehrm-delete.cy.js` | Pengujian penghapusan karyawan |
| `docs/screenshots/` | Menyimpan bukti visual pengujian |
| `cypress.config.js` | Konfigurasi Cypress |
| `package.json` | Informasi proyek dan dependency |
| `package-lock.json` | Mengunci versi dependency hasil instalasi |
| `.gitignore` | Mengatur file yang tidak perlu dimasukkan ke Git |
| `README.md` | Dokumentasi utama proyek |

Folder `node_modules/` akan terbentuk setelah proses instalasi dependency. Folder tersebut tidak perlu dimasukkan ke repository GitHub karena dapat dibuat kembali melalui `npm install`.

---

## 7. Persiapan dan Instalasi Lingkungan Pengujian

Sebelum menjalankan proyek, diperlukan beberapa perangkat lunak yang harus disiapkan terlebih dahulu.

### 7.1 Instalasi Node.js

Node.js dapat diunduh melalui situs resmi:

https://nodejs.org/

Setelah instalasi selesai, buka terminal dan jalankan:

```bash
node -v
npm -v
```

Jika instalasi berhasil, terminal akan menampilkan versi Node.js dan NPM.

### 7.2 Instalasi Visual Studio Code

Visual Studio Code dapat diunduh melalui:

https://code.visualstudio.com/

Aplikasi ini digunakan untuk mengelola kode JavaScript dan seluruh file proyek.

### 7.3 Clone Repository

Untuk mendapatkan salinan repository, jalankan perintah:

```bash
git clone https://github.com/illhammf/sqa-orangehrm-cypress.git
```

Masuk ke direktori proyek:

```bash
cd sqa-orangehrm-cypress
```

### 7.4 Instalasi Dependency

Setelah berada di direktori proyek, jalankan:

```bash
npm install
```

Perintah ini akan membaca `package.json` dan menginstal dependency yang dibutuhkan.

### 7.5 Memeriksa Instalasi Cypress

Untuk memastikan Cypress berhasil terinstal, jalankan:

```bash
npx cypress version
```

Jika berhasil, informasi versi Cypress akan ditampilkan.

### 7.6 Membuka Cypress Runner

Jalankan perintah:

```bash
npx cypress open
```

Kemudian ikuti tahapan berikut:

1. Pilih **E2E Testing**.
2. Pilih browser yang tersedia, misalnya Microsoft Edge.
3. Klik **Start E2E Testing**.
4. Tunggu hingga Cypress Runner terbuka.
5. Pilih file pengujian yang ingin dijalankan.

Cypress kemudian akan membuka browser dan menjalankan skenario pengujian sesuai file yang dipilih.

### 7.7 Menjalankan Seluruh Pengujian

Untuk menjalankan seluruh file pengujian melalui terminal, gunakan:

```bash
npx cypress run
```

Perintah tersebut akan menjalankan seluruh file spec yang terdeteksi berdasarkan konfigurasi Cypress.

Untuk menjalankan satu file pengujian tertentu:

```bash
npx cypress run --spec "cypress/e2e/3-orangehrm-login.cy.js"
```

Nama file dapat diganti sesuai skenario yang ingin dijalankan.

---

## 8. Implementasi Skenario Pengujian

Bagian ini menjelaskan seluruh skenario pengujian yang telah dikembangkan.

Setiap skenario memiliki tujuan, test case, tahapan pelaksanaan, serta hasil yang diharapkan.

### 8.1 Login Testing

**File:** `3-orangehrm-login.cy.js`

**Tujuan:**

Memastikan pengguna dapat melakukan autentikasi menggunakan username dan password yang valid.

**Test Case:**

`TC-LOGIN-001 - Berhasil login ke OrangeHRM`

**Tahapan Pengujian:**

1. Membuka halaman login OrangeHRM.
2. Memastikan kolom username tersedia.
3. Mengisi username.
4. Mengisi password.
5. Menekan tombol Login.
6. Memastikan pengguna berhasil diarahkan ke halaman Dashboard.

**Implementasi Utama:**

```javascript
cy.visit('/web/index.php/auth/login');

cy.get('input[name="username"]')
  .type('Admin');

cy.get('input[name="password"]')
  .type('PASSWORD');

cy.get('button[type="submit"]')
  .click();

cy.url()
  .should('include', '/dashboard/index');
```

**Penjelasan Kode:**

- `cy.visit()` membuka halaman login.
- `cy.get()` memilih kolom username dan password.
- `cy.type()` mengisi informasi login.
- `cy.click()` menekan tombol Login.
- `cy.url()` memeriksa alamat halaman setelah autentikasi.
- `should()` memastikan URL mengandung alamat Dashboard.

**Hasil yang Diharapkan:**

Pengguna berhasil masuk ke halaman Dashboard OrangeHRM.

### 8.2 Create Employee Testing

**File:** `4-orangehrm-create.cy.js`

**Tujuan:**

Memastikan sistem dapat menambahkan dan menyimpan informasi karyawan baru.

**Test Case:**

`TC-CREATE-001 - Berhasil menambahkan data karyawan baru`

**Data Pengujian:**

| Field | Nilai |
|---|---|
| First Name | SQA |
| Middle Name | Automation |
| Last Name | Kelompok10 |
| Employee ID | Dibuat secara unik |

**Tahapan Pengujian:**

1. Login ke OrangeHRM.
2. Membuka modul PIM.
3. Membuka halaman Add Employee.
4. Mengisi First Name.
5. Mengisi Middle Name.
6. Mengisi Last Name.
7. Mengisi Employee ID.
8. Menekan tombol Save.
9. Memastikan halaman Personal Details berhasil dibuka.
10. Memverifikasi informasi karyawan yang telah disimpan.

**Implementasi Utama:**

```javascript
cy.get('input[name="firstName"]')
  .type(employee.firstName);

cy.get('input[name="middleName"]')
  .type(employee.middleName);

cy.get('input[name="lastName"]')
  .type(employee.lastName);

cy.contains('label', 'Employee Id')
  .closest('.oxd-input-group')
  .find('input')
  .clear()
  .type(employeeId);

cy.get('button[type="submit"]')
  .click();

cy.url()
  .should('include', '/pim/viewPersonalDetails/');
```

**Penjelasan Kode:**

- Data karyawan disimpan dalam variabel atau objek JavaScript.
- `cy.get()` digunakan untuk memilih input berdasarkan atribut HTML.
- `cy.contains()` digunakan untuk menemukan label Employee Id.
- `closest()` mencari elemen induk berupa input group.
- `find()` mencari kolom input di dalam kelompok tersebut.
- `clear()` menghapus nilai sebelumnya.
- `type()` memasukkan Employee ID.
- `click()` menekan tombol Save.
- `cy.url()` memverifikasi bahwa aplikasi berpindah ke halaman Personal Details.

**Hasil yang Diharapkan:**

Data karyawan berhasil ditambahkan dan informasi karyawan dapat ditampilkan pada halaman Personal Details.

### 8.3 Read Employee Testing

**File:** `5-orangehrm-read.cy.js`

**Tujuan:**

Memastikan sistem dapat mencari dan menampilkan data karyawan berdasarkan Employee ID.

**Test Case:**

`TC-READ-001 - Berhasil mencari data karyawan berdasarkan Employee ID`

**Tahapan Pengujian:**

1. Login ke OrangeHRM.
2. Membuka halaman Employee List.
3. Memastikan halaman Employee Information tersedia.
4. Mengisi Employee ID pada kolom pencarian.
5. Menekan tombol Search.
6. Memastikan data karyawan ditemukan.
7. Memverifikasi informasi nama karyawan pada tabel.

**Implementasi Utama:**

```javascript
cy.visit('/web/index.php/pim/viewEmployeeList');

cy.contains('label', /^Employee Id$/)
  .closest('.oxd-input-group')
  .find('input')
  .should('be.visible')
  .clear()
  .type(employee.employeeId);

cy.get('button[type="submit"]')
  .contains('Search')
  .click();

cy.contains('.oxd-table-cell', employee.employeeId)
  .should('be.visible');
```

**Penjelasan Kode:**

- `cy.visit()` membuka halaman Employee List.
- `cy.contains()` mencari label Employee Id secara spesifik.
- `closest()` dan `find()` digunakan untuk menemukan input yang benar.
- `clear()` mengosongkan input pencarian.
- `type()` memasukkan Employee ID yang ingin dicari.
- `click()` menjalankan pencarian.
- `should('be.visible')` memastikan hasil pencarian benar-benar terlihat.

Setelah data ditemukan, pengujian dilanjutkan dengan memverifikasi nama karyawan pada baris tabel yang sama.

**Hasil yang Diharapkan:**

Sistem berhasil menampilkan data karyawan sesuai dengan Employee ID yang dimasukkan.

**Catatan Penting:**

Employee ID pada pengujian READ harus sesuai dengan Employee ID yang benar-benar tersimpan pada aplikasi.

Apabila Employee ID berubah ketika pengujian CREATE dijalankan, nilai yang digunakan dalam pengujian READ juga harus disesuaikan.

Hal ini penting karena Cypress tidak otomatis menggunakan data dari test case sebelumnya.

### 8.4 Update Employee Testing

**File:** `6-orangehrm-update.cy.js`

**Tujuan:**

Memastikan sistem dapat memperbarui informasi karyawan dan menyimpan perubahan tersebut.

**Test Case:**

`TC-UPDATE-001 - Berhasil memperbarui data karyawan`

**Contoh Perubahan Data:**

| Field | Data Awal | Data Baru |
|---|---|---|
| Middle Name | Automation | AutomationUpdated |

**Tahapan Pengujian:**

1. Login ke OrangeHRM.
2. Membuka halaman Employee List.
3. Mencari karyawan berdasarkan Employee ID.
4. Memilih data karyawan yang ditemukan.
5. Membuka halaman Personal Details.
6. Mengubah informasi Middle Name.
7. Menekan tombol Save.
8. Memastikan perubahan berhasil disimpan.
9. Memverifikasi nilai terbaru pada halaman Personal Details.

**Implementasi Utama:**

```javascript
cy.get('input[name="middleName"]')
  .should('have.value', employee.oldMiddleName)
  .clear()
  .type(employee.newMiddleName);

cy.get('button[type="submit"]')
  .click();

cy.get('input[name="middleName"]')
  .should('have.value', employee.newMiddleName);
```

**Penjelasan Kode:**

- `should('have.value')` memeriksa nilai awal pada kolom input.
- `clear()` menghapus nilai sebelumnya.
- `type()` memasukkan informasi baru.
- `click()` menyimpan perubahan.
- Assertion terakhir memastikan nilai yang ditampilkan sudah sesuai dengan informasi terbaru.

**Hasil yang Diharapkan:**

Informasi karyawan berhasil diperbarui dan nilai terbaru dapat ditampilkan pada halaman Personal Details.

**Catatan Penting:**

Seperti pada pengujian READ, Employee ID yang digunakan harus mengarah ke data karyawan yang benar-benar tersedia.

Data awal dan data baru juga harus didefinisikan secara konsisten agar proses verifikasi tidak menghasilkan kesalahan.

### 8.5 Delete Employee Testing

**File:** `7-orangehrm-delete.cy.js`

**Tujuan:**

Memastikan sistem dapat menghapus data karyawan setelah pengguna memberikan konfirmasi penghapusan.

**Test Case:**

`TC-DELETE-001 - Berhasil menghapus data karyawan`

**Tahapan Pengujian:**

1. Login ke OrangeHRM.
2. Membuat data karyawan khusus untuk pengujian DELETE.
3. Menghasilkan Employee ID unik menggunakan `Date.now()` atau mekanisme unik lainnya.
4. Menyimpan data karyawan.
5. Membuka halaman Employee List.
6. Mencari karyawan berdasarkan Employee ID.
7. Memastikan data ditemukan.
8. Menekan tombol Delete.
9. Memastikan dialog konfirmasi muncul.
10. Menekan tombol Yes, Delete.
11. Memastikan data karyawan tidak lagi ditemukan.

**Implementasi Utama:**

```javascript
cy.contains('.oxd-table-row', employeeId)
  .within(() => {

    cy.get('button')
      .last()
      .click();

  });

cy.contains('Are you Sure?')
  .should('be.visible');

cy.contains('button', 'Yes, Delete')
  .should('be.visible')
  .and('be.enabled')
  .click();

cy.contains('.oxd-table-cell', employeeId, {
  timeout: 15000
}).should('not.exist');
```

**Penjelasan Kode:**

- `cy.contains()` mencari baris karyawan berdasarkan Employee ID.
- `within()` membatasi pencarian elemen hanya di dalam baris tersebut.
- `get('button').last()` memilih tombol aksi terakhir pada baris karyawan, yaitu tombol Delete pada struktur tabel yang digunakan.
- `cy.contains('Are you Sure?')` memastikan dialog konfirmasi tampil.
- `cy.contains('button', 'Yes, Delete')` mencari tombol konfirmasi.
- `click()` menjalankan penghapusan.
- `should('not.exist')` memastikan Employee ID sudah tidak ditemukan pada tabel.

**Hasil yang Diharapkan:**

Data karyawan berhasil dihapus dan Employee ID tidak lagi ditemukan pada Employee List.

**Catatan Penting:**

Pengujian DELETE membuat data karyawan sendiri sebelum melakukan penghapusan.

Pendekatan ini digunakan agar pengujian tidak bergantung pada data dari proses CREATE sebelumnya.

Selain itu, verifikasi dilakukan berdasarkan kondisi akhir data, bukan hanya berdasarkan keberhasilan menekan tombol Delete.

---

## 9. Dokumentasi Screenshot Pengujian

Bagian ini berisi bukti visual dari proses pengujian yang telah dilakukan menggunakan Cypress.

Screenshot digunakan untuk mendokumentasikan aktivitas pengujian, tampilan aplikasi, serta hasil yang ditampilkan oleh Cypress Runner.

Seluruh screenshot disimpan pada direktori:

```text
docs/screenshots/
```

Pastikan nama file screenshot sesuai dengan pemanggilan gambar di bawah ini.

### 9.1 Login Testing

**Bukti Pengujian Login**

![Login Testing](docs/screenshots/01-login.png)

Keterangan:

Screenshot ini menunjukkan proses pengujian autentikasi pengguna, mulai dari pengisian username dan password hingga keberhasilan masuk ke halaman Dashboard.

### 9.2 Create Employee Testing

**Bukti Pengujian Create Employee**

![Create Employee Testing](docs/screenshots/02-create-employee.png)

Keterangan:

Screenshot ini menunjukkan proses penambahan data karyawan baru melalui halaman Add Employee dan hasil penyimpanan informasi karyawan pada OrangeHRM.

### 9.3 Read Employee Testing

**Bukti Pengujian Read Employee**

![Read Employee Testing](docs/screenshots/03-read-employee.png)

Keterangan:

Screenshot ini menunjukkan proses pencarian data karyawan berdasarkan Employee ID serta hasil informasi yang ditemukan pada halaman Employee List.

### 9.4 Update Employee Testing

**Bukti Pengujian Update Employee**

![Update Employee Testing](docs/screenshots/04-update-employee.png)

Keterangan:

Screenshot ini menunjukkan proses perubahan informasi karyawan dan verifikasi bahwa data terbaru berhasil disimpan.

### 9.5 Delete Employee Testing

**Bukti Pengujian Delete Employee**

![Delete Employee Testing](docs/screenshots/05-delete-employee.png)

Keterangan:

Screenshot ini menunjukkan proses konfirmasi penghapusan data karyawan dan hasil ketika data berhasil dihapus dari Employee List.

---

## 10. Hasil dan Evaluasi Pengujian

Hasil pengujian digunakan untuk mengetahui apakah setiap fungsi aplikasi telah berjalan sesuai dengan skenario yang telah ditentukan.

### 10.1 Rekapitulasi Test Case

Berikut merupakan daftar skenario pengujian yang dikembangkan:

| No. | Test Case | Fungsi | Expected Result |
|---|---|---|---|
| 1 | TC-LOGIN-001 | Login | Berhasil masuk ke Dashboard |
| 2 | TC-CREATE-001 | Create | Data karyawan berhasil disimpan |
| 3 | TC-READ-001 | Read | Data karyawan berhasil ditemukan |
| 4 | TC-UPDATE-001 | Update | Informasi karyawan berhasil diperbarui |
| 5 | TC-DELETE-001 | Delete | Data karyawan berhasil dihapus |

### 10.2 Interpretasi Status Pengujian

Cypress memberikan informasi status pengujian berdasarkan hasil assertion.

| Status | Keterangan |
|---|---|
| PASS | Seluruh kondisi yang diuji terpenuhi |
| FAIL | Terdapat kondisi yang tidak sesuai dengan ekspektasi |
| PENDING / SKIPPED | Pengujian tidak dijalankan atau dilewati |

Status PASS menunjukkan bahwa skenario yang diuji berhasil memenuhi kondisi yang telah didefinisikan.

Status FAIL menunjukkan bahwa terdapat kondisi yang perlu diperiksa lebih lanjut, seperti selector yang tidak sesuai, data yang tidak ditemukan, atau proses aplikasi yang belum selesai.

### 10.3 Analisis Setiap Skenario

**Login**

Memastikan proses autentikasi dapat berjalan menggunakan kredensial yang valid.

**Create**

Memastikan sistem mampu menerima informasi karyawan baru dan menyimpan data tersebut.

**Read**

Memastikan sistem dapat mencari dan menampilkan informasi karyawan berdasarkan Employee ID.

**Update**

Memastikan sistem dapat mengubah informasi karyawan serta menampilkan nilai terbaru setelah penyimpanan.

**Delete**

Memastikan sistem dapat menghapus data karyawan setelah pengguna memberikan konfirmasi.

### 10.4 Evaluasi Hasil

Berdasarkan hasil yang diperoleh melalui Cypress Runner, setiap skenario dievaluasi berdasarkan kondisi aktual dan hasil yang diharapkan.

Hasil evaluasi akhir harus mengikuti status pengujian yang benar-benar ditampilkan oleh Cypress Runner.

Dengan demikian, hasil pengujian tidak hanya didasarkan pada keberhasilan menjalankan perintah, tetapi juga pada keberhasilan seluruh proses verifikasi.

---

## 11. Konsep Software Quality Assurance yang Diterapkan

Dalam pengerjaan proyek ini, terdapat beberapa konsep Software Quality Assurance yang diterapkan.

### 11.1 End-to-End Testing

Pengujian dilakukan dengan menjalankan alur penggunaan aplikasi melalui browser dari proses awal hingga proses akhir.

### 11.2 Functional Testing

Pengujian berfokus pada kesesuaian fungsi aplikasi dengan kebutuhan yang telah ditentukan.

Contohnya adalah memastikan proses login, penambahan karyawan, pencarian data, perubahan informasi, dan penghapusan data dapat berjalan sesuai fungsinya.

### 11.3 Automation Testing

Pengujian dilakukan secara otomatis menggunakan Cypress sehingga langkah pengujian dapat dijalankan kembali secara konsisten.

### 11.4 Assertion Testing

Assertion digunakan untuk membandingkan kondisi aktual dengan kondisi yang diharapkan.

Contoh:

```javascript
cy.url().should('include', '/dashboard/index');
```

Perintah tersebut memastikan pengguna berhasil diarahkan ke halaman Dashboard.

Contoh lainnya:

```javascript
cy.get('input[name="middleName"]')
  .should('have.value', 'AutomationUpdated');
```

Perintah tersebut memastikan kolom Middle Name memiliki nilai yang sesuai dengan perubahan yang diharapkan.

### 11.5 Positive Testing

Pengujian utama menggunakan data valid dan tindakan yang sesuai dengan alur penggunaan normal aplikasi.

Tujuannya adalah memastikan fungsi aplikasi dapat berjalan ketika pengguna memasukkan informasi yang benar.

### 11.6 Regression Testing

Skenario pengujian yang telah dibuat dapat dijalankan kembali ketika diperlukan untuk memeriksa apakah perubahan atau pengujian sebelumnya memengaruhi fungsi yang sudah diuji.

Namun, pelaksanaan regression testing yang lebih menyeluruh membutuhkan pengelolaan data dan kondisi pengujian yang konsisten.

---

## 12. Kendala dan Penyelesaian

Selama proses pengerjaan proyek, terdapat beberapa kendala teknis yang ditemukan.

Berikut beberapa kendala dan solusi yang diterapkan:

| Kendala | Penyelesaian |
|---|---|
| Cypress tidak menemukan elemen halaman | Memeriksa struktur HTML dan menyesuaikan selector |
| Terjadi timeout saat menunggu elemen | Memastikan halaman telah dimuat dan menggunakan timeout yang sesuai |
| Employee ID tidak ditemukan | Memastikan ID sesuai dengan data yang benar-benar tersimpan |
| Dialog konfirmasi tidak ditemukan | Menggunakan pencarian berdasarkan teks dialog yang tampil |
| Data sudah terhapus pada pengujian sebelumnya | Membuat data khusus untuk pengujian DELETE |
| Nilai setelah UPDATE tidak sesuai | Memeriksa nilai awal, nilai baru, dan hasil penyimpanan |
| Test case bergantung pada data test case lain | Menentukan data pengujian secara konsisten dan mengurangi ketergantungan antar-test |

### 12.1 Pembelajaran dari Proses Debugging

Salah satu pembelajaran penting dalam proyek ini adalah bahwa keberhasilan menjalankan perintah Cypress belum tentu berarti seluruh proses pengujian telah benar.

Contohnya, ketika proses pencarian menggunakan Employee ID yang tidak sesuai dengan data pada aplikasi, Cypress akan mengalami kegagalan pada assertion meskipun halaman Employee List berhasil dibuka.

Begitu juga ketika dialog konfirmasi memiliki struktur HTML yang berbeda dari selector yang digunakan, Cypress tidak akan menemukan elemen tersebut.

Oleh karena itu, proses debugging dilakukan dengan memperhatikan:

1. Kondisi aplikasi ketika pengujian berlangsung.
2. Struktur elemen HTML yang digunakan.
3. Selector yang diterapkan dalam kode.
4. Data yang digunakan pada setiap test case.
5. Pesan kesalahan yang ditampilkan Cypress Runner.
6. Hasil aktual setelah tindakan dilakukan.

Proses ini membantu kami memahami bahwa Automation Testing membutuhkan pemahaman terhadap aplikasi, alur bisnis, dan pengelolaan data pengujian.

---

## 13. Tim Pengembang

Proyek ini dikerjakan secara berkelompok untuk memenuhi tugas mata kuliah **Software Quality Assurance (SQA)**.

Berikut merupakan anggota kelompok yang terlibat:

| No. | NIM | Nama |
|---|---|---|
| 1 | 20240801059 | Adelia Rizky Cantika |
| 2 | 20240801157 | Dafa Rafi Nur Wansyah |
| 3 | 20240801102 | Ilham Firmansyah |
| 4 | 20240801234 | Muhammad Aditya |
| 5 | 20240801165 | Angga Aditya Nugraha |
| 6 | 20240801168 | Saelendra Farell Syahbana |

**Informasi Proyek:**

- Mata Kuliah: Software Quality Assurance (SQA)
- Jenis Proyek: Tugas Kelompok
- Bidang: Software Testing
- Objek Pengujian: OrangeHRM
- Modul: Personnel Information Management (PIM)
- Framework: Cypress
- Bahasa Pemrograman: JavaScript
- Metode: End-to-End Testing
- Tahun: 2026

---

## 14. Kesimpulan

Berdasarkan seluruh tahapan pengerjaan, proyek ini menerapkan pengujian otomatis menggunakan Cypress terhadap aplikasi OrangeHRM.

Pengujian difokuskan pada lima skenario utama, yaitu Login, Create, Read, Update, dan Delete.

Melalui penerapan Cypress, proses pengujian dapat dilakukan secara lebih terstruktur dengan memanfaatkan perintah otomatis, selector, assertion, dan Cypress Runner.

Selain memahami bagaimana Automation Testing dijalankan, proyek ini juga memberikan pengalaman dalam menyusun test case, mengidentifikasi kesalahan, mengelola data pengujian, melakukan debugging, serta mengevaluasi hasil pengujian.

Penerapan konsep Software Quality Assurance dalam proyek ini membantu menunjukkan pentingnya pengujian perangkat lunak untuk memastikan bahwa fungsi aplikasi berjalan sesuai dengan kebutuhan.

Dengan demikian, proyek ini menjadi salah satu bentuk implementasi pembelajaran Software Quality Assurance melalui praktik pengujian aplikasi berbasis web.

---

## 15. Referensi dan Dokumentasi

Berikut merupakan referensi resmi yang digunakan sebagai sumber pembelajaran dan dokumentasi teknis:

1. Cypress Documentation  
   https://docs.cypress.io/

2. Cypress API Documentation  
   https://docs.cypress.io/api/table-of-contents

3. OrangeHRM Official Website  
   https://www.orangehrm.com/

4. OrangeHRM Open Source Demo  
   https://opensource-demo.orangehrmlive.com/

5. Node.js Documentation  
   https://nodejs.org/docs/

---

**Software Quality Assurance Project**

OrangeHRM Automated Testing using Cypress

Dikembangkan sebagai bagian dari pemenuhan tugas kelompok mata kuliah Software Quality Assurance (SQA).

**Kelompok 1 SQA - 2026**