import * as dotenv from 'dotenv';
import { makeFakeAvatar } from './data-faker';

dotenv.config({ path: "./twitter/.env" });
const uname = process.env.USERNAME;

Feature('twitter_profile');

BeforeSuite(({ login }) => {
    login('tester'); // login using tester session
 });

Scenario('open profile',  ({ I }) => {
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