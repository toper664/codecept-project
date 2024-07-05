Feature('spotify_search');

BeforeSuite(({ login }) => {
    login('tester'); // login using tester session
});

Scenario('search', ({ I }) => {
    I.click("a[aria-label='Search']");
    I.wait(2);
    I.fillField("input[data-testid='search-input']", "persona 3");
    I.wait(2);
});

Scenario('artists', ({ I }) => {
    I.executeScript(() => {
        var e = document.querySelector("Artists");
        if (e instanceof HTMLElement) {
            e.click();
        }
    });
    I.wait(2);
});

Scenario('category', ({ I }) => {
    I.click("a[aria-label='Search']");
    I.wait(2);
    I.executeScript(() => {
        var e = document.querySelector("[class='CqCtb3wr4SK8AiZwxeH0']");
        if (e instanceof HTMLElement) {
            e.click();
        }
    });
    I.wait(2);
});