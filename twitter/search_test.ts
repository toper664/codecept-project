import * as dotenv from 'dotenv';

dotenv.config();
const uname = process.env.TWITTER_FRIEND_USERNAME;
const email = process.env.TWITTER_EMAIL;
const password = process.env.TWITTER_PASSWORD;

Feature('twitter_search');

Scenario('open home',  ({ I }) => {
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

});


Scenario('trending',  ({ I }) => {
    I.executeScript(() => {
        var e = document.querySelector("[data-testid='trend']");
        if (e instanceof HTMLElement) {
            e.click();
        }
    });
    I.wait(2);
    pause(); // in case of reload
    I.scrollPageToBottom();
});

Scenario('search account', ({ I }) => {
    I.clearField("Search query");
    I.click("Clear");
    pause(); // in case of reload
    I.fillField("Search query", "iuayvwydiuhjan");
    I.wait(2);
    I.click('Search for "iuayvwydiuhjan"');
    I.wait(2);
    I.see("No results");
    I.clearField("Search query");
    I.click("Clear");
    I.fillField("Search query", uname);
    I.wait(2);
    I.click("@"+uname);
    I.wait(2);
    I.see("@"+uname);
});

Scenario('follow', ({ I }) => {
    I.see("@"+uname);
    I.click("Follow");
    I.wait(2);
    I.see("Following");
});
