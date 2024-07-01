import * as dotenv from 'dotenv';

dotenv.config({ path: "./google/.env" });
const email = process.env.EMAIL;
const fname = process.env.FIRSTNAME;
const lname = process.env.LASTNAME;
const password = process.env.PASSWORD;

Feature('google_login');

Scenario('go to login',  ({ I }) => {
    I.amOnPage("https://www.google.com/account/about/");
    pause();
    I.forceClick("Go to Google Account");
    I.wait(2);
});

Scenario('invalid email',  ({ I }) => {
    I.click("Next");
    I.see("Enter an email");
    I.fillField("identifier", "gmaomgaowm6289hufba");
    I.click("Next");
    I.see("Couldn't find");

});

Scenario('valid email',  ({ I }) => {
    I.fillField("identifier", email);
    I.click("Next");
    I.wait(2);
});

Scenario('invalid password',  ({ I }) => {
    I.click("Next");
    I.see("Enter a password");
    I.fillField("Passwd", "mangeak");
    I.click("Next");
    I.wait(2);
    I.see("Wrong password");

});

Scenario('valid password',  ({ I }) => {
    I.fillField("Passwd", password);
    I.click("Next");
    I.wait(10);
    I.see("Welcome, "+fname+" "+lname);
});
