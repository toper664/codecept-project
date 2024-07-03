
Given('I have logged in to my account', () => {
    login('tester'); // login using tester session
});

Given('I am on Twitter home page', () => {
    I.executeScript(() => {
        var e = document.querySelector("[data-testid='bookmark']");
        if (e instanceof HTMLElement) {
            e.click();
        }
    });
    // belum ke register
    I.wait(2);
    I.see("Added to your Bookmarks");
});

When('I try to check bookmarks', () => {
    I.click("a[aria-label='Bookmarks']");
    I.wait(2);
    I.see("Bookmarks");
    I.wait(2);
});

Then('I should be able to remove a bookmark to a post', () => {
    I.executeScript(() => {
        var e = document.querySelector("[data-testid='removeBookmark']");
        if (e instanceof HTMLElement) {
            e.click();
        }
    });
    // belum ke register
    I.wait(2);
    I.see("Removed from your Bookmarks");
});
