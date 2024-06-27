import * as dotenv from 'dotenv';
import { makeFakeAvatar } from './data-faker';

dotenv.config();
const email = process.env.TWITTER_EMAIL;
const uname = process.env.TWITTER_USERNAME;
const password = process.env.TWITTER_PASSWORD;

Feature('twitter_profile');

Scenario('open profile',  ({ I }) => {
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

    I.click("Profile");
    I.wait(2);
    I.see("@"+uname);
    I.wait(2);
});

Scenario('change profile picture', async ({ I }) => {
    I.click("Edit profile");
    I.wait(2);
    pause(); // in case of reload
    I.see("Save")
    I.click("Add avatar photo");
    await makeFakeAvatar("output/downloads/avatar.jpg");
    I.attachFile(locate("input").withAttr({'type':'file'}).after(locate("button").withAttr({'aria-label':'Add avatar photo'})), "output/downloads/avatar.jpg");
    I.click("Apply");
    I.wait(2);
    I.click("Save");
});