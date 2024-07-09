import { shortWait } from "../global";

Feature('spotify_play');

BeforeSuite(({ login }) => {
    login('spf'); // login using spf session
});

Scenario('play song', ({ I }) => {
    I.executeScript(() => {
        var e = document.querySelector("[role='button']");
        if (e instanceof HTMLElement) {
            e.click();
        }
    });
    I.wait(shortWait);
    I.click("button[data-testid='play-button']");
    I.wait(shortWait);
});

Scenario('play show', ({ I }) => {
    I.click("button[data-testid='top-bar-back-button']");
    I.wait(shortWait);
    I.scrollPageToBottom();
    I.executeScript(() => {
        var e = document.querySelector("[role='button']");
        if (e instanceof HTMLElement) {
            e.click();
        }
    });
    I.wait(shortWait);
    I.click("button[data-testid='play-button']");
    I.wait(shortWait);
});