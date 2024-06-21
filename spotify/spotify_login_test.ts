import * as dotenv from 'dotenv';

dotenv.config();
const username = process.env.SPOTIFY_LOGIN_EMAIL;
const password = process.env.SPOTIFY_PASSWORD;

Feature('spotify_login');

Scenario('go to login', async ({ I }) => {
    // tes 0a: buka halaman login
    I.amOnPage('/');
    I.click('Log in');
    I.wait(2);
    // manual override for english
    I.amOnPage("https://accounts.spotify.com/en/login?continue=https%3A%2F%2Fopen.spotify.com%2F");
});

// Scenario('ke register', async ({ I }) => {
//     // tes 0b: buka register dari login
//     I.click("Sign up for Spotify");
//     I.wait(2);
//     I.switchToPreviousTab();
// });

Scenario('invalid email', async ({ I }) => {
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

Scenario('invalid password', async ({ I }) => {
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

Scenario('valid credentials', async ({ I }) => {
    // tes 3: benar ketika login --> berhasil masuk
    I.refreshPage();
    I.checkOption("remember");
    I.uncheckOption("remember");
    
    I.focus("input#login-username.Input-sc-1gbx9xe-0.gOrngm");
    I.type(username, 200);
    I.focus("input#login-password.Input-sc-1gbx9xe-0.gOrngm");
    I.type(password, 200);
    I.wait(10);
    I.click("Log In");
    I.dontSee("Log In");
});

Scenario('logout', async ({ I }) => {
    // tes 4: muncul tampilan homepage lalu log out
    I.see("Explore Premium");
    I.wait(2);

    I.click("G");
    I.click("Log out");
    I.wait(2);
    I.dontSee("Explore Premium");
});
