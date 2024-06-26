import { makeFakeTextFile } from './data-faker';
import * as fs from 'fs';

Feature('twitter_homepage');

Scenario('like',  ({ I }) => {
    I.amOnPage("https://x.com/");
    I.click("article[role='article'] div[aria-labelledby='id__jk8mh66bul id__an2rh9aaxt'] button[data-testid='like']");
    I.scrollPageToBottom();
    I.click("article[role='article'] div[aria-labelledby='id__0hxs9vuy15pj id__6urakpblazr'] button[data-testid='like']");
    I.scrollPageToBottom();
    I.click("article[role='article'] div[aria-labelledby='id__n3vytiw198 id__hx5t8llmz2q'] button[data-testid='like']");
    // bisa diteruskan

});

Scenario('comment', async ({ I }) => {
    I.scrollTo("article[role='article'] div[aria-labelledby='id__4b7gflut9gk id__xwoeg2oqedd'] button[data-testid='reply']");
    I.click("article[role='article'] div[aria-labelledby='id__4b7gflut9gk id__xwoeg2oqedd'] button[data-testid='reply']");
    I.fillField("Post text", "Aaaaaaaaaa");
    pause();
    await makeFakeTextFile("output/downloads/text.txt");
    I.fillField("Post text", fs.readFileSync("output/downloads/text.txt"));
    pause();

    I.click("Close");
    I.click("Discard");
});

Scenario('repost',  ({ I }) => {
    I.scrollTo("article[role='article'] div[aria-labelledby='id__cpf4z5dj0jk id__myay92uaevt'] button[data-testid='reply']");
    I.click("article[role='article'] div[aria-labelledby='id__cpf4z5dj0jk id__myay92uaevt'] button[data-testid='reply']");
    I.click("Repost");
    pause();

});
