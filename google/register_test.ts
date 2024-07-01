import * as dotenv from 'dotenv';

dotenv.config({ path: "./google/.env" });
const email = process.env.EMAIL;
const fname = process.env.FIRSTNAME;
const lname = process.env.LASTNAME;
const password = process.env.PASSWORD;

Feature('google_register');

Scenario('go to register',  ({ I }) => {
    I.amOnPage("https://www.google.com/account/about/");
    I.forceClick("Create an account");
    I.wait(2);
});

Scenario('invalid name',  ({ I }) => {
    I.click("Next");
    I.see("Enter first name");
    I.fillField("firstName", "1314351rfwcsa");
    I.click("Next");
    I.see("Are you sure");

});

Scenario('valid name',  ({ I }) => {
    I.fillField("firstName", fname);
    I.fillField("lastName", lname);
    I.click("Next");
});

Scenario('select DoB and gender',  ({ I }) => {
    I.selectOption("Month", "August");
    I.click("Next");
    I.see("Please fill in a complete birthday");
    I.fillField("day", "69");
    I.click("Next");
    I.see("Please fill in a complete birthday");
    I.fillField("year", "9999");
    I.click("Next");
    I.see("Please enter a valid date");
    I.fillField("year", "2000");
    I.click("Next");
    I.see("Please enter a valid date");
    I.fillField("day", "21");
    I.click("Next");
    I.dontSee("Please enter a valid date");

    I.see("Please select your gender");
    I.selectOption("gender", "Custom");
    I.click("Next");
    I.see("Please indicate the gender")
    I.fillField("input[aria-label='What's your gender?']", "APACHE ATTACK HELICOPTER");
    I.see("Please select a pronoun");
    I.selectOption("genderpronoun", "Other");
    I.selectOption("gender", "Female");
    I.click("Next");
});

Scenario('select email',  ({ I }) => {
    I.click("Create your own Gmail address");
    I.click("Next");
    I.see("Enter a Gmail address");
    I.fillField("Username", email);
    I.click("Next");
    I.see("Sorry");
    I.fillField("Username", email.split('@')[0]);
    I.click("Next");
});

Scenario('invalid password',  ({ I }) => {
    I.click("Next");
    I.see("Enter a password");
    I.fillField("Passwd", password);
    I.click("Next");
    I.see("Confirm your password");
    I.fillField("PasswdAgain", "mangeak");
    I.click("Next");
    I.see("Try again");

});

Scenario('valid password',  ({ I }) => {
    I.fillField("PasswdAgain", password);
    I.click("Next");
    I.wait(10);
});

Scenario('finalisasi form',  ({ I }) => {
    pause(); // verifikasi
    I.click("Next");
});
