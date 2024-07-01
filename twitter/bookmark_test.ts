Feature('twitter_bookmark');

BeforeSuite(({ login }) => {
    login('tester'); // login using tester session
 });

Scenario('bookmark post',  ({ I }) => {
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

Scenario('see bookmark',  ({ I }) => {
    I.click("a[aria-label='Bookmarks']");
    I.wait(2);
    I.see("Bookmarks");
    I.wait(2);

});

Scenario('remove bookmark',  ({ I }) => {
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