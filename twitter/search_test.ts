import * as dotenv from 'dotenv';

dotenv.config();
const uname = process.env.TWITTER_FRIEND_USERNAME;

Feature('twitter_search');

Scenario('trending',  ({ I }) => {
    I.amOnPage("https://x.com/")
    I.scrollTo("div[aria-label='Timeline: Trending now'] div[aria-labelledby='id__0zrju1z992t']");
    I.click("div[aria-label='Timeline: Trending now'] div[aria-labelledby='id__0zrju1z992t']");
    I.wait(2);

    I.scrollPageToBottom();
});

Scenario('search account', ({ I }) => {
    I.clearField("Search query");
    I.fillField("Search query", "iuayvwydiuhjan");
    I.wait(2);
    I.click('Search for "iuayvwydiuhjan"');
    I.wait(2);
    I.see("No results");
    I.fillField("Search query", uname);
    I.wait(2);
    I.click("@"+uname);
    I.wait(2);
    I.see("@"+uname);
});

Scenario('follow', ({ I }) => {
    I.see("@"+uname);
    I.click("Follow");
    I.wait(2);
    I.see("Following");
});
