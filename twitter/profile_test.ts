import * as dotenv from 'dotenv';
import { makeFakeAvatar } from './data-faker';
import { shortWait } from '../global';

dotenv.config({ path: "./twitter/.env", override: true });
const uname = process.env.USERNAME;

Feature('twitter_profile');

BeforeSuite(({ login }) => {
    login('twt'); // login using twt session
 });

Scenario('open profile',  ({ I }) => {
    I.click("Profile");
    I.wait(shortWait);
    I.see("@"+uname);
    I.wait(shortWait);
});

Scenario('change profile picture', async ({ I }) => {
    I.click("Edit profile");
    I.wait(shortWait);
    // in case of reload --> pause();
    I.see("Save")
    I.click("Add avatar photo");
    await makeFakeAvatar("output/downloads/avatar.jpg");
    I.attachFile(locate("input").withAttr({'type':'file'}).after(locate("button").withAttr({'aria-label':'Add avatar photo'})), "output/downloads/avatar.jpg");
    I.click("Apply");
    I.wait(shortWait);
    I.click("Save");
});