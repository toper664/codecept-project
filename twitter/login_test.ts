import * as dotenv from 'dotenv';
import { shortWait, longWait } from '../global';

dotenv.config({ path: "./twitter/.env", override: true });
const email = process.env.LOGIN_EMAIL;
const uname = process.env.USERNAME;
const password = process.env.PASSWORD;

Feature('twitter_login');

Scenario('go to login',  ({ I }) => {
    I.amOnPage("https://x.com/");
    I.click("Sign in");
    I.wait(longWait);
});

Scenario('check credentials',  ({ I }) => {
    I.see("Sign in to X");

    I.focus("input[name='text']");
    I.type("2341243", 200);
    I.wait(shortWait);
    I.click("Next");

    I.wait(shortWait);
    I.fillField("input[name='text']", email);
    I.wait(shortWait);
    I.click("Next");
    I.wait(shortWait);
    
    pause();
    // kalau ada unusual activity
    // I.focus("input[name='text']");
    // I.type(uname, 200);
    // I.click("Next");

    I.fillField("input[name='password']", secret(password));
    I.wait(shortWait);
    I.click("Log in");
    I.wait(longWait);
    I.see("For you");
});

// Scenario('log out',  ({ I }) => {
//     pause();
//     I.click("button[aria-label='Account menu']");
//     I.click("Log out @"+uname);
//     I.wait(longWait);
//     I.see("Sign in");
// });
