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
    I.focus("input.r-30o5oe.r-1dz5y72.r-13qz1uu.r-1niwhzg.r-17gur6a.r-1yadl64.r-deolkf.r-homxoj.r-poiln3.r-7cikom.r-1ny4l3l.r-t60dpp.r-fdjqy7");
    I.type("2341243", 500);
    I.click("Next");
    I.see("Sign in to X");
    I.focus("input.r-30o5oe.r-1dz5y72.r-13qz1uu.r-1niwhzg.r-17gur6a.r-1yadl64.r-deolkf.r-homxoj.r-poiln3.r-7cikom.r-1ny4l3l.r-t60dpp.r-fdjqy7");
    I.type(email, 500);
    I.click("Next");
    I.wait(2);

    // I.focus("text");
    // I.type(uname, 300);
    // I.click("Next");

    I.focus("password");
    I.type(password, 500);
    I.click("Log in");
    I.wait(10);
    I.see("For you");
});
