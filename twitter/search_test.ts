import * as dotenv from 'dotenv';

dotenv.config({ path: "./twitter/.env" });
const fname = process.env.FRIEND_USERNAME;

Feature('twitter_search');

BeforeSuite(({ login }) => {
    login('tester'); // login using tester session
 });

Scenario('trending',  ({ I }) => {
    I.executeScript(() => {
        var e = document.querySelector("[data-testid='trend']");
        if (e instanceof HTMLElement) {
            e.click();
        }
    });
    I.wait(2);
    // in case of reload --> pause();
    I.scrollPageToBottom();
});

Scenario('search account', ({ I }) => {
    I.clearField("Search query");
    I.click("Clear");
    // in case of reload --> pause();
    I.fillField("Search query", "iuayvwydiuhjan");
    I.wait(2);
    I.click('Search for "iuayvwydiuhjan"');
    I.wait(2);
    I.see("No results");
    I.clearField("Search query");
    I.click("Clear");
    I.fillField("Search query", fname);
    I.wait(2);
    I.click("@"+fname);
    I.wait(2);
    I.see("@"+fname);
});

Scenario('follow', ({ I }) => {
    I.see("@"+fname);
    I.click("Follow");
    I.wait(2);
    I.see("Following");
});
