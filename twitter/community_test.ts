import * as dotenv from 'dotenv';

dotenv.config();
const email = process.env.TWITTER_EMAIL;
const uname = process.env.TWITTER_USERNAME;
const password = process.env.TWITTER_PASSWORD;

Feature('twitter_community');

Scenario('open community',  ({ I }) => {
    I.amOnPage("https://x.com/");
    I.click("Sign in");
    I.wait(10);
    I.wait(2);

    I.focus("input[name='text']");
    I.type(email, 200);
    I.wait(2);
    I.click("Next");
    I.wait(2);
    
    // captcha
    pause();
    // kalau ada unusual activity
    // I.focus("input[name='text']");
    // I.type(uname, 200);
    // I.click("Next");
    
    I.focus("input[name='password']");
    I.type(password, 200);
    I.wait(2);
    I.click("Log in");
    I.wait(10);
    I.see("For you");

    I.click("a[aria-label='Communities']");
    I.wait(2);
    I.see("Communities");
    I.wait(2);
});

Scenario('join', async ({ I }) => {
    I.click("Search Communities");
    I.wait(2);
    pause(); // in case of reload
    I.fillField("input[type='text']", "valorant");
    I.wait(2);
    I.click("VALORANT");
    I.wait(2);

    I.click("Join");
});

Scenario('by category', async ({ I }) => {
    I.click("Gaming");
    I.wait(2);
    pause(); // in case of reload
    I.click("Next");
    I.click("Next");
    I.click("Cryptocurrency");
    I.wait(2);

    I.scrollPageToBottom();
});
