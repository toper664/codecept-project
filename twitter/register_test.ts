import * as dotenv from 'dotenv';

dotenv.config({ path: "./twitter/.env" });
const uname = process.env.NAME;
const email = process.env.REGISTER_EMAIL;
const password = process.env.PASSWORD;

Feature('twitter_register');

Scenario('go to register',  ({ I }) => {
    I.amOnPage("https://x.com");
    I.click("Create account");
    I.wait(2);
});

Scenario('invalid name',  ({ I }) => {
    I.click("Next");
    I.see("Create your account");
    I.fillField("name", "aaaaaaaaa");
    I.clearField("name");
    I.click("Next");
});

Scenario('invalid email',  ({ I }) => {
    I.fillField("email", "aaaa@2.ddd");
    I.click("Next");
    I.see("This email is invalid.");

    I.fillField("email", "aaa1232131231");
    I.click("Next");
    I.see("Please enter a valid email.");
});

Scenario('valid credentials',  ({ I }) => {
    I.click("Close");
    I.click("Create account");
    I.fillField("name", uname)
    I.fillField("email", email);

    I.click("Next");
    I.dontSee("Please enter a valid email.");
    I.dontSee("This email is invalid.");
});

Scenario('select DoB',  ({ I }) => {
    I.selectOption("Month", "August");
    I.selectOption("Day", "21");
    I.selectOption("Year", "2000");
    I.click("Next");
    I.dontSee("Create your account");
});

Scenario('finalisasi form',  ({ I }) => {
    I.click("Next");
    pause(); // pengerjaan captcha dan verification code
    I.fillField("password", password);
    I.wait(2);
    I.click("Sign up");
    I.wait(10);
});
