import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { makeFakeTextFile, makeFakeAvatar } from '../twitter/data-faker';

dotenv.config({ path: "./twitter/.env" });
const fname = process.env.FRIEND_USERNAME;
const f2name = process.env.FRIEND2_USERNAME;

const { I, login } = inject();

Given('I have logged in to my account', () => {
    login('tester'); // login using tester session
});

Given('I am on Twitter messages page', () => {
    I.click("a[aria-label='Direct Messages']");
    I.wait(2);
    I.see("Messages");
    I.wait(2);
});

When('I try to create a new chat room', () => {
    I.click("New message");
    I.wait(2);
    I.fillField("input[placeholder='Search people']", fname);
    I.wait(2);
    // in case of reload --> pause();

    I.click("@"+fname);
    I.click("Next");
    I.wait(2);
    I.see("Start a new message");
});

When('send a message', async () => {
    I.fillField("Start a new message", "aaaaaaaaa halo halo halo");
    await makeFakeTextFile("output/downloads/text.txt");
    I.fillField("Start a new message", fs.readFileSync("output/downloads/text.txt"));
    await makeFakeAvatar("output/downloads/avatar.jpg");
    I.click("Add photos or video");
    I.attachFile(locate("input").withAttr({'type':'file'}).after(locate("button").withAttr({'aria-label':'Add photos or video'})), "output/downloads/avatar.jpg");
    I.wait(2);

    I.click("Send");
    I.wait(2);
});

Then('I should see my messages sent', () => {
    I.see("Sent");
});

When('I try to create a new group chat room', () => {
    I.click("Compose a DM");
    I.wait(2);
    I.click("Create a group");
    I.click("@"+fname);
    I.fillField("input[placeholder='Search people']", f2name);
    I.wait(2);
    // in case of reload --> pause();

    I.click("@"+f2name);
    I.click("Next");
    I.wait(2);

});

Then('I should see the room created', () => {
    I.see("Start a new message");
});
