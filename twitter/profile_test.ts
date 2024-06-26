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
    I.focus("input[name='text']");
    I.type(uname, 200);
    I.click("Next");

    I.focus("input[name='password']");
    I.type(password, 200);
    I.wait(2);
    I.click("Log in");
    I.wait(10);
    I.see("For you");

    I.click("Profile");
    I.wait(2);
    I.see("@"+uname);
});

Scenario('change profile picture', async ({ I }) => {
    I.click("Edit profile");
    I.wait(2);
    I.see("Save")
    I.click("Add avatar photo");
    await makeFakeAvatar("output/downloads/avatar.jpg");
    I.attachFile("div.css-175oi2r.r-1777fci.r-1udh08x.r-kemksi.r-1xc7w19.r-1phboty.r-d045u9.r-16h92eq.r-1uvakcn.r-1re40zr.r-1xce0ei.r-sdzlij input[type='file']", "output/downloads/avatar.jpg");
    I.click("Apply");
    I.wait(2);
    
    I.click("Next");
});