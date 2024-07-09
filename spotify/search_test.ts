import { shortWait } from "../global";

Feature('spotify_search');

BeforeSuite(({ login }) => {
    login('spf'); // login using spf session
});

Scenario('search', ({ I }) => {
    I.click("a[aria-label='Search']");
    I.wait(shortWait);
    I.fillField("input[data-testid='search-input']", "persona 3");
    I.wait(shortWait);
});

Scenario('artists', ({ I }) => {
    I.executeScript(() => {
        var e = document.querySelector("Artists");
        if (e instanceof HTMLElement) {
            e.click();
        }
    });
    I.wait(shortWait);
});

Scenario('category', ({ I }) => {
    I.click("a[aria-label='Search']");
    I.wait(shortWait);
    I.executeScript(() => {
        var e = document.querySelector("[class='CqCtb3wr4SK8AiZwxeH0']");
        if (e instanceof HTMLElement) {
            e.click();
        }
    });
    I.wait(shortWait);
});