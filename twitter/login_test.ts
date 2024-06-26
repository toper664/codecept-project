import * as dotenv from 'dotenv';

dotenv.config();
const email = process.env.TWITTER_EMAIL;
const uname = process.env.TWITTER_USERNAME;
const password = process.env.TWITTER_PASSWORD;

Feature('twitter_login');

Scenario('go to login',  ({ I }) => {
    I.amOnPage("https://x.com/");
    I.click("Sign in");
    I.wait(10);
});

Scenario('check credentials',  ({ I }) => {
    I.see("Sign in to X");

    I.focus("input[name='text']");
    I.type("2341243", 200);
    I.wait(2);
    I.click("Next");
    I.click("OK");
    I.click("Sign in");

    I.wait(2);
    I.focus("input[name='text']");
    I.type(email, 200);
    I.wait(2);
    I.click("Next");
    I.wait(2);
    
    // kalau ada unusual activity
    I.focus("input[name='text']");
    I.type(uname, 200);
    I.click("Next");

    I.focus("input[name='password']");
    I.type(password, 200);
    I.wait(2);
    I.click("Log in");
    I.wait(10);
    I.see("For you");
});

Scenario('log out',  ({ I }) => {
    I.click("Account menu");
    I.click("Log out @"+uname);
    I.wait(10);
    I.see("Sign in");
});
