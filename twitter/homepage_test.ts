import * as dotenv from 'dotenv';
import { makeFakeTextFile } from './data-faker';
import * as fs from 'fs';

dotenv.config();
const email = process.env.TWITTER_EMAIL;
const uname = process.env.TWITTER_USERNAME;
const password = process.env.TWITTER_PASSWORD;

Feature('twitter_homepage');

Scenario('open home',  ({ I }) => {
    I.amOnPage("https://x.com/");
    I.click("Sign in");
    I.wait(10);
    I.wait(2);

    I.focus("input[name='text']");
    I.type(email, 200);
    I.wait(2);
    I.click("Next");
    I.wait(2);
    
    // captcha
    pause();
    // kalau ada unusual activity
    // I.focus("input[name='text']");
    // I.type(uname, 200);
    // I.click("Next");

    I.focus("input[name='password']");
    I.type(password, 200);
    I.wait(2);
    I.click("Log in");
    I.wait(10);
    I.see("For you");

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
