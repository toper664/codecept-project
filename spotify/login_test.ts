import * as dotenv from 'dotenv';
import { shortWait, longWait } from '../global';

dotenv.config({ path:"./spotify/.env" });
const username = process.env.LOGIN_EMAIL;
const password = process.env.PASSWORD;

Feature('spotify_login');

Scenario('go to login',  ({ I }) => {
    // tes 0a: buka halaman login
    I.amOnPage('/');
    I.click('Log in');
    I.wait(shortWait);
    // manual override for english
    I.amOnPage("https://accounts.spotify.com/en/login?continue=https%3A%2F%2Fopen.spotify.com%2F");
});

// Scenario('ke register', async ({ I }) => {
//     // tes 0b: buka register dari login
//     I.click("Sign up for Spotify");
//     I.wait(2);
//     I.switchToPreviousTab();
// });

Scenario('invalid email',  ({ I }) => {
    // tes 1: salah ketika login    
    I.click("Log In");

    I.fillField("input#login-username.Input-sc-1gbx9xe-0.gOrngm", "dummy");
    I.click("Log In");
    I.see("Log In");

    I.fillField("input#login-username.Input-sc-1gbx9xe-0.gOrngm", "@dummy.com");
    I.click("Log In");
    I.see("Log In");

    I.fillField("input#login-username.Input-sc-1gbx9xe-0.gOrngm", "dummy data@dummy.com");
    I.click("Log In");
    I.see("Log In");

    I.fillField("input#login-username.Input-sc-1gbx9xe-0.gOrngm", "data@dummy");
    I.click("Log In");
    I.see("Log In");
});

Scenario('invalid password',  ({ I }) => {
    // tes 2: password tidak sesuai
    I.fillField("input#login-password.Input-sc-1gbx9xe-0.gOrngm", "dummy-data");
    I.click("Log In");
    I.see("Log In");

    I.fillField("input#login-password.Input-sc-1gbx9xe-0.gOrngm", "????????????????????");
    I.click("Log In");
    I.see("Log In");

    I.fillField("input#login-password.Input-sc-1gbx9xe-0.gOrngm", "aa??");
    I.click("Log In");
    I.see("Log In");
});

Scenario('valid credentials',  ({ I }) => {
    // tes 3: benar ketika login --> berhasil masuk
    I.refreshPage();
    I.checkOption("remember");
    I.uncheckOption("remember");
    
    I.fillField("input#login-username.Input-sc-1gbx9xe-0.gOrngm", username);
    I.fillField("input#login-password.Input-sc-1gbx9xe-0.gOrngm", secret(password));
    I.wait(longWait);
    I.click("Log In");
    I.dontSee("Log In");
});

Scenario('logout', ({ I }) => {
    // tes 4: muncul tampilan homepage lalu log out
    I.see("Explore Premium");
    I.wait(shortWait);

    I.click("G");
    I.click("Log out");
    I.wait(shortWait);
    I.dontSee("Explore Premium");
});
