import * as dotenv from 'dotenv';

dotenv.config({ path:"./facebook/.env" });
const email = process.env.EMAIL;
const password = process.env.PASSWORD;
const fname = process.env.FIRSTNAME;
const lname = process.env.LASTNAME;

Feature('facebook_register');

Scenario('go to register',  ({ I }) => {
    I.amOnPage("https://id-id.facebook.com/r.php");
    // I.click("Buat akun baru");
    I.wait(2);
});

Scenario('fill name',  ({ I }) => {
    I.click("Daftar");
    I.see("Siapa nama Anda?");
    I.fillField("firstname", fname);

    I.click("Daftar");
    I.see("Siapa nama Anda?");
    I.fillField("lastname", lname);

    I.click("Daftar");
    I.dontSee("Siapa nama Anda?");
});

Scenario('fill email',  ({ I }) => {
    I.fillField("reg_email__", "aaa1232131231");
    I.click("Daftar");
    I.see("Harap masukkan");

    I.fillField("reg_email__", "091232131231");
    I.click("Daftar");
    I.see("Harap masukkan");

    I.fillField("reg_email__", "dummy@dummy");
    I.click("Daftar");
    I.see("Harap masukkan");

    I.fillField("reg_email__", email);
    I.click("Daftar");
    I.dontSee("Harap masukkan");

    I.fillField("reg_email_confirmation__", "lmaolmaolmao");
    I.click("Daftar");
    I.see("Masukkan alamat email yang valid.");

    I.fillField("reg_email_confirmation__", "lmao@lmao");
    I.click("Daftar");
    I.see("Masukkan alamat email yang valid.");

    I.fillField("reg_email_confirmation__", email);
    I.click("Daftar");
    I.dontSee("Masukkan alamat email yang valid.");
});

Scenario('fill password',  ({ I }) => {
    I.fillField("reg_passwd__", "aaa1232131231");
    I.click("Daftar");
    I.dontSee("Masukkan kombinasi");
    I.fillField("reg_passwd__", password);
});

Scenario('select DoB',  ({ I }) => {
    I.click("Gunakan tanggal lahir");
    I.selectOption("birthday_day", "21");
    I.click("Daftar");
    I.see("info yang salah");

    I.selectOption("birthday_month", "Agu");
    I.click("Daftar");
    I.see("Gunakan tanggal lahir");

    I.click("Gunakan tanggal lahir");
    I.selectOption("birthday_year", "2000");
    I.click("Daftar");
    I.dontSee("info yang salah");
});

Scenario('finalisasi form',  ({ I }) => {
    I.click("Daftar");
    I.see("Harap pilih jenis kelamin.");
    I.checkOption("Perempuan");
    I.click("Daftar");
    I.wait(20);
    I.dontSee("Buat Akun Baru");
});
