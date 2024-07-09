import * as dotenv from 'dotenv';

dotenv.config({ path:"./spotify/.env" });
const username = process.env.LOGIN_EMAIL;
const password = process.env.PASSWORD;
const dname = process.env.USERNAME;

Feature('spotify_register');

Scenario('go to register',  ({ I }) => {
    // tes 0a: buka halaman register
    I.amOnPage('/');
    I.click('Sign up');
    I.wait(shortWait);
});

// Scenario('ke login', async ({ I }) => {
//     // tes 0: buka login dari register
//     I.click("Log in here");
//     I.wait(shortWait);
//     I.switchToPreviousTab();
// });

Scenario('invalid email',  ({ I }) => {
    // tes 1: salah ketika register
    I.click("Next");

    I.fillField("username", "dummy");
    I.click("Next");
    I.see("invalid");

    I.fillField("username", "@dummy.com");
    I.click("Next");
    I.see("invalid");

    I.fillField("username", "dummy data@dummy.com");
    I.click("Next");
    I.see("invalid");

    I.fillField("username", "data@dummy");
    I.click("Next");
    I.see("invalid");
});

Scenario('valid email',  ({ I }) => {
    // tes 2: benar ketika register --> diminta password
    I.fillField("username", username);
    I.click("Next");
    I.dontSee("invalid");
});

Scenario('invalid password',  ({ I }) => {
    // tes 3: password tidak sesuai
    I.click("Next");

    I.fillField("new-password", "aa");
    I.click("Next");
    I.see("Create");

    I.fillField("new-password", "aaaaaaaaaaaaa");
    I.click("Next");
    I.see("Create");

    I.fillField("new-password", "??");
    I.click("Next");
    I.see("Create");

    I.fillField("new-password", "????????????????????");
    I.click("Next");
    I.see("Create");

    I.fillField("new-password", "aa??");
    I.click("Next");
    I.see("Create");
});

Scenario('valid password',  ({ I }) => {
    // tes 4: password sesuai --> diminta data diri
    I.fillField("new-password", secret(password));
    I.click("Next");
    I.dontSee("Create");
});

Scenario('fill biodata',  ({ I }) => {
    // tes 5: mengisi biodata
    I.click("Next");

    I.fillField("displayName", dname);
    I.click("Next");
    I.see("about yourself");

    I.fillField("day", "aa");
    I.click("Next");
    I.see("date of birth");

    I.fillField("day", "??");
    I.click("Next");
    I.see("date of birth");

    I.fillField("day", "99");
    I.click("Next");
    I.see("between 1 and 31");

    I.fillField("day", "10");
    I.click("Next");
    I.dontSee("between 1 and 31");

    I.selectOption("month", "Month");
    I.click("Next");
    I.see("birth month");

    I.selectOption("month", "December");
    I.click("Next");
    I.dontSee("birth month");

    I.fillField("year", "aaaa");
    I.click("Next");
    I.see("four digits");

    I.fillField("year", "????");
    I.click("Next");
    I.see("four digits");

    I.fillField("year", "1000");
    I.click("Next");
    I.see("1900 onwards");

    I.fillField("year", "5000");
    I.click("Next");
    I.see("too young");

    I.fillField("year", "2020");
    I.click("Next");
    I.see("too young");

    I.fillField("year", "2002");
    I.click("Next");
    I.dontSee("too young");

    I.checkOption("Something else");
    I.uncheckOption("Something else");
    I.checkOption("Man");
    I.click("Next");
    I.dontSee("about yourself");
});

Scenario('check TnC',  ({ I }) => {
    // tes 6: memilih dan mencabut pilihan Terms and Conditions
    I.checkOption("marketing-opt-in");
    I.checkOption("privacy");
    I.uncheckOption("marketing-opt-in");
    I.uncheckOption("privacy");
    I.checkOption("marketing-opt-in");
    I.dontSee("error");
});

Scenario('logged in',  ({ I }) => {
    // tes 7: akun berhasil dibuat dan masuk ke homepage
    I.click("Sign up");
    I.dontSee("Sign up");
});