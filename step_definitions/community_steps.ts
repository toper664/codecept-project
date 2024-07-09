import * as dotenv from 'dotenv';
import { login, I, shortWait } from '../global';

dotenv.config({ path: "./twitter/.env" });

Given('I have logged in to my account', () => {
    login('twt'); // login using twt session
});

Given('I am on Twitter community page', () => {
    I.click("a[aria-label='Communities']");
    I.wait(shortWait);
    I.see("Communities");
    I.wait(shortWait);
});

When('I try to explore communities', () => {
    I.click("Gaming");
    I.wait(shortWait);

    I.click("Next");
    I.click("Next");
    I.click("Cryptocurrency");
    I.wait(shortWait);

    I.scrollPageToBottom();
});

Then('I should be able to join a community I see fit', () => {
    I.click("Search Communities");
    I.wait(shortWait);

    I.fillField("input[placeholder='Search Communities']", "valorant");
    I.wait(shortWait);
    I.click("VALORANT JP");
    I.wait(shortWait);

    I.click("Join");

});

Then('see their latest feeds', () => {
    I.click("Close");
    I.click("Latest");
    I.wait(shortWait);

    I.scrollPageToBottom();
    I.wait(shortWait);

    I.executeScript(() => {document.querySelectorAll("[data-testid='like']").forEach((e) => {
        if (e instanceof HTMLElement) {
            e.click();
        }})
    });
    I.scrollPageToTop();
    I.click("Media");
    I.scrollPageToBottom();
    I.wait(shortWait);

});
