import * as dotenv from 'dotenv';

dotenv.config({ path:"./facebook/.env" });
const email = process.env.LOGIN_EMAIL;
const password = process.env.LOGIN_PASSWORD;

Feature('facebook_login');

Scenario('go to login',  ({ I }) => {
    I.amOnPage("https://id-id.facebook.com/");
    I.click("Masuk");
    I.wait(2);
});

Scenario('check credentials',  ({ I }) => {
    I.see("Cari akun Anda dan login.");

    I.focus("email");
    I.type(email, 500);
    // I.click("Masuk");
    // I.wait(2);
    // I.see("Login sebagai");

    // I.fillField("pass", "lmaolmaolmao");
    // I.click("Masuk");
    // I.wait(2);
    // I.see("Kata sandi yang Anda masukkan salah.");

    I.focus("pass");
    I.type(password, 500);
    I.click("Masuk");
    I.wait(2);
    I.dontSee("Masuk");
});
