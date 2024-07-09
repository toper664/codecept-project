import { makeFakeTextFile } from './data-faker';
import * as fs from 'fs';
import { shortWait } from '../global';

Feature('twitter_homepage');

BeforeSuite(({ login }) => {
    login('twt'); // login using twt session
 });

Scenario('like',  ({ I }) => {
    I.executeScript(() => {document.querySelectorAll("[data-testid='like']").forEach((e) => {
        if (e instanceof HTMLElement) {
            e.click();
        }})
    });

});

Scenario('comment', async ({ I }) => {
    I.executeScript(() => {
        var e = document.querySelector("[data-testid='reply']");
        if (e instanceof HTMLElement) {
            e.click();
        }
    });
    I.wait(shortWait);
    I.fillField("Post text", "Aaaaaaaaaa");
    await makeFakeTextFile("output/downloads/text.txt");
    I.fillField("Post text", fs.readFileSync("output/downloads/text.txt"));

    I.click("Close");
    I.click("Discard");
    I.wait(shortWait);
});

Scenario('repost',  ({ I }) => {
    I.executeScript(() => {
        var e = document.querySelector("[data-testid='retweet']");
        if (e instanceof HTMLElement) {
            e.click();
        }
    });
    I.click("Repost");

});
