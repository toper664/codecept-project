import * as dotenv from 'dotenv';
import { makeFakeAvatar } from '../twitter/data-faker';
import { shortWait, longWait } from '../global';

dotenv.config({ path:"./spotify/.env" });
const uname = process.env.NAME;

Feature('spotify_profile');

BeforeSuite(({ login }) => {
    login('spf'); // login using spf session
});

Scenario('go to profile', ({ I }) => {
    I.click("button[aria-label="+uname+"]");
    I.click("Profile");
    I.wait(shortWait);
});

Scenario('change profile picture', async ({ I }) => {
    I.click("button[data-testid='more-button']");
    I.wait(shortWait);
    I.click("Edit profile");
    I.click("Choose photo");
    await makeFakeAvatar("output/downloads/avatar.jpg");
    I.attachFile(locate("input").withAttr({'type':'file'}), "output/downloads/avatar.jpg");
    I.wait(longWait);
    I.click("Save");
    I.wait(shortWait);
});

Scenario('remove profile picture', ({ I }) => {
    I.click("button[data-testid='more-button']");
    I.wait(shortWait);
    I.click("Edit profile");
    I.click("Remove photo");
    I.click("Save");
    I.wait(shortWait);
});