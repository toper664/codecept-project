// import * as dotenv from 'dotenv';
// import * as fs from 'fs';
// import { makeFakeTextFile, makeFakeAvatar } from '../twitter/data-faker';

// dotenv.config({ path: "./twitter/.env" });
// const fname = process.env.FRIEND_USERNAME;

const { I, login } = inject();

Given('I have logged in to my account', () => {
    login('tester'); // login using tester session
});

Given('I am on Twitter community page', () => {
    I.click("a[aria-label='Communities']");
    I.wait(2);
    I.see("Communities");
    I.wait(2);
});

When('I try to explore communities', () => {
    I.click("Gaming");
    I.wait(2);
    // in case of reload --> pause();
    I.click("Next");
    I.click("Next");
    I.click("Cryptocurrency");
    I.wait(2);

    I.scrollPageToBottom();
});

Then('I should be able to join a community I see fit', () => {
    I.click("Search Communities");
    I.wait(2);
    // in case of reload --> pause();
    I.fillField("input[placeholder='Search Communities']", "valorant");
    I.wait(2);
    I.click("VALORANT JP");
    I.wait(2);

    I.click("Join");

});

Then('see their latest feeds', () => {
    I.click("Close");
    I.click("Latest");
    I.wait(2);
    // in case of reload --> pause();
    I.scrollPageToBottom();
    I.wait(2);

    I.executeScript(() => {document.querySelectorAll("[data-testid='like']").forEach((e) => {
        if (e instanceof HTMLElement) {
            e.click();
        }})
    });
    I.scrollPageToTop();
    I.click("Media");
    I.scrollPageToBottom();
    I.wait(2);

    I.see("div[aria-label='Timeline: Community']");
});
