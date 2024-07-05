import * as dotenv from 'dotenv';
import { makeFakeAvatar } from '../twitter/data-faker';

dotenv.config({ path:"./spotify/.env" });
const uname = process.env.NAME;

Feature('spotify_profile');

BeforeSuite(({ login }) => {
    login('tester'); // login using tester session
});

Scenario('go to profile', ({ I }) => {
    I.click("button[aria-label="+uname+"]");
    I.click("Profile");
    I.wait(2);
});

Scenario('change profile picture', async ({ I }) => {
    I.click("button[data-testid='more-button']");
    I.wait(2);
    I.click("Edit profile");
    I.click("Choose photo");
    await makeFakeAvatar("output/downloads/avatar.jpg");
    I.attachFile(locate("input").withAttr({'type':'file'}), "output/downloads/avatar.jpg");
    I.wait(10);
    I.click("Save");
    I.wait(2);
});

Scenario('remove profile picture', ({ I }) => {
    I.click("button[data-testid='more-button']");
    I.wait(2);
    I.click("Edit profile");
    I.click("Remove photo");
    I.click("Save");
    I.wait(2);
});