Feature('spotify_play');

BeforeSuite(({ login }) => {
    login('tester'); // login using tester session
});

Scenario('play song', ({ I }) => {
    I.executeScript(() => {
        var e = document.querySelector("[role='button']");
        if (e instanceof HTMLElement) {
            e.click();
        }
    });
    I.wait(2);
    I.click("button[data-testid='play-button']");
    I.wait(2);
});

Scenario('play show', ({ I }) => {
    I.click("button[data-testid='top-bar-back-button']");
    I.wait(2);
    I.scrollPageToBottom();
    I.executeScript(() => {
        var e = document.querySelector("[role='button']");
        if (e instanceof HTMLElement) {
            e.click();
        }
    });
    I.wait(2);
    I.click("button[data-testid='play-button']");
    I.wait(2);
});