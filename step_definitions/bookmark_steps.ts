import * as dotenv from 'dotenv';

dotenv.config({ path: "./twitter/.env" });

Given('I have logged in to my account', () => {
    login('twt'); // login using twt session
});

Given('I am on Twitter home page', () => {
    I.executeScript(() => {
        var e = document.querySelector("[data-testid='bookmark']");
        if (e instanceof HTMLElement) {
            e.click();
        }
    });
    
    I.wait(shortWait);
    I.see("Added to your Bookmarks");
});

When('I try to check bookmarks', () => {
    I.click("a[aria-label='Bookmarks']");
    I.wait(shortWait);
    I.see("Bookmarks");
    I.wait(shortWait);
});

Then('I should be able to remove a bookmark to a post', () => {
    I.executeScript(() => {
        var e = document.querySelector("[data-testid='removeBookmark']");
        if (e instanceof HTMLElement) {
            e.click();
        }
    });

    I.wait(shortWait);
    I.see("Removed from your Bookmarks");
});
