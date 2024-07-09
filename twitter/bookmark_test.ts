Feature('twitter_bookmark');

BeforeSuite(({ login }) => {
    login('twt'); // login using twt session
 });

Scenario('bookmark post',  ({ I }) => {
    I.executeScript(() => {
        var e = document.querySelector("[data-testid='bookmark']");
        if (e instanceof HTMLElement) {
            e.click();
        }
    });
    I.wait(shortWait);
    I.see("Added to your Bookmarks");

});

Scenario('see bookmark',  ({ I }) => {
    I.click("a[aria-label='Bookmarks']");
    I.wait(shortWait);
    I.see("Bookmarks");
    I.wait(shortWait);

});

Scenario('remove bookmark',  ({ I }) => {
    I.executeScript(() => {
        var e = document.querySelector("[data-testid='removeBookmark']");
        if (e instanceof HTMLElement) {
            e.click();
        }
    });
    I.wait(shortWait);
    I.see("Removed from your Bookmarks");

});