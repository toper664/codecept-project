import { makeFakeTextFile } from './data-faker';
import * as fs from 'fs';

Feature('twitter_homepage');

BeforeSuite(({ login }) => {
    login('tester'); // login using tester session
 });

Scenario('like',  ({ I }) => {
    I.executeScript(() => {document.querySelectorAll("[data-testid='like']").forEach((e) => {
        if (e instanceof HTMLElement) {
            e.click();
        }})
    });
    // belum ke register

});

Scenario('comment', async ({ I }) => {
    I.executeScript(() => {
        var e = document.querySelector("[data-testid='reply']");
        if (e instanceof HTMLElement) {
            e.click();
        }
    });
    I.wait(2);
    I.fillField("Post text", "Aaaaaaaaaa");
    await makeFakeTextFile("output/downloads/text.txt");
    I.fillField("Post text", fs.readFileSync("output/downloads/text.txt"));

    I.click("Close");
    I.click("Discard");
    I.wait(2);
});

Scenario('repost',  ({ I }) => {
    I.executeScript(() => {
        var e = document.querySelector("[data-testid='retweet']");
        if (e instanceof HTMLElement) {
            e.click();
        }
    });
    I.click("Repost"); // belum ke register

});
