import * as dotenv from 'dotenv';
import { shortWait, longWait } from '../global';

dotenv.config({ path: "./google/.env" });
const email = process.env.EMAIL;
const fname = process.env.FIRSTNAME;
const lname = process.env.LASTNAME;
const password = process.env.PASSWORD;

Feature('google_login');

Scenario('go to login',  ({ I }) => {
    I.amOnPage("https://www.google.com/account/about/");
    I.forceClick("Go to Google Account");
    I.wait(shortWait);
});

Scenario('invalid email',  ({ I }) => {
    I.click("Next");
    I.see("Enter an email");
    I.fillField("identifier", "gmaomgaowm6289hufba");
    I.click("Next");
    I.see("Sign in");

});

Scenario('valid email',  ({ I }) => {
    I.fillField("identifier", email);
    I.click("Next");
    I.wait(shortWait);
    pause();
});

Scenario('invalid password',  ({ I }) => {
    I.click("Next");
    I.see("Enter a password");
    I.fillField("Passwd", "mangeak");
    I.click("Next");
    I.wait(shortWait);
    I.see("Wrong password");

});

Scenario('valid password',  ({ I }) => {
    I.fillField("Passwd", secret(password));
    I.click("Next");
    I.wait(longWait);
    I.see("Welcome, "+fname+" "+lname);
});
