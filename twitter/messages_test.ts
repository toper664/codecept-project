import * as dotenv from 'dotenv';
import { makeFakeAvatar, makeFakeTextFile } from './data-faker';
import * as fs from 'fs';

dotenv.config();
const email = process.env.TWITTER_EMAIL;
const uname = process.env.TWITTER_USERNAME;
const fname = process.env.TWITTER_FRIEND_USERNAME;
const password = process.env.TWITTER_PASSWORD;

Feature('twitter_messages');

Scenario('open messages',  ({ I }) => {
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

    I.click("a[aria-label='Direct Messages']");
    I.wait(2);
    I.see("Messages");
    I.wait(2);
});

Scenario('new dm',  ({ I }) => {
    I.click("New message");
    I.wait(2);
    I.fillField("input[placeholder='Search people']", fname);
    I.wait(2);
    pause(); // in case of reload

    I.click("@"+fname);
    I.click("Next");
    I.wait(2);
    I.see("Start a new message");
});

Scenario('chat', async ({ I }) => {
    I.fillField("Start a new message", "aaaaaaaaa halo halo halo");
    await makeFakeTextFile("output/downloads/text.txt");
    I.fillField("Start a new message", fs.readFileSync("output/downloads/text.txt"));
    await makeFakeAvatar("output/downloads/avatar.jpg");
    I.click("Add photos or video");
    I.attachFile(locate("input").withAttr({'type':'file'}).after(locate("button").withAttr({'aria-label':'Add photos or video'})), "output/downloads/avatar.jpg");
    I.wait(2);

    I.click("Send");
    I.wait(2);

    I.see("Sent");
});
