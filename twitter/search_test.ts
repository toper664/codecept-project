import * as dotenv from 'dotenv';
import { shortWait } from '../global';

dotenv.config({ path: "./twitter/.env" });
const fname = process.env.FRIEND_USERNAME;

Feature('twitter_search');

BeforeSuite(({ login }) => {
    login('twt'); // login using twt session
 });

Scenario('trending',  ({ I }) => {
    I.executeScript(() => {
        var e = document.querySelector("[data-testid='trend']");
        if (e instanceof HTMLElement) {
            e.click();
        }
    });
    I.wait(shortWait);

    I.scrollPageToBottom();
});

Scenario('search account', ({ I }) => {
    I.clearField("Search query");
    I.click("Clear");

    I.fillField("Search query", "iuayvwydiuhjan");
    I.wait(shortWait);
    I.click('Search for "iuayvwydiuhjan"');
    I.wait(shortWait);
    I.see("No results");
    I.clearField("Search query");
    I.click("Clear");
    I.fillField("Search query", fname);
    I.wait(shortWait);

    I.click("@"+fname);
    I.wait(shortWait);
    I.see("@"+fname);
});

Scenario('follow', ({ I }) => {
    I.see("@"+fname);
    I.click("Follow");
    I.wait(shortWait);
    I.see("Following");
});
