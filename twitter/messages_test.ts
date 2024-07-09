import * as dotenv from 'dotenv';
import { makeFakeAvatar, makeFakeTextFile } from './data-faker';
import * as fs from 'fs';
import { shortWait } from '../global';

dotenv.config({ path: "./twitter/.env" });
const fname = process.env.FRIEND_USERNAME;
const f2name = process.env.FRIEND2_USERNAME;

Feature('twitter_messages');

BeforeSuite(({ login }) => {
    login('twt'); // login using twt session
 });

Scenario('open messages',  ({ I }) => {
    I.click("a[aria-label='Direct Messages']");
    I.wait(shortWait);
    I.see("Messages");
    I.wait(shortWait);
});

Scenario('new dm',  ({ I }) => {
    I.click("New message");
    I.wait(shortWait);
    I.fillField("input[placeholder='Search people']", fname);
    I.wait(shortWait);

    I.click("@"+fname);
    I.click("Next");
    I.wait(shortWait);
    I.see("Start a new message");
});

Scenario('chat', async ({ I }) => {
    I.fillField("Start a new message", "aaaaaaaaa halo halo halo");
    await makeFakeTextFile("output/downloads/text.txt");
    I.fillField("Start a new message", fs.readFileSync("output/downloads/text.txt"));
    await makeFakeAvatar("output/downloads/avatar.jpg");
    I.click("Add photos or video");
    I.attachFile(locate("input").withAttr({'type':'file'}).after(locate("button").withAttr({'aria-label':'Add photos or video'})), "output/downloads/avatar.jpg");
    I.wait(shortWait);

    I.click("Send");
    I.wait(shortWait);

    I.see("Sent");
});

Scenario('new group',  ({ I }) => {
    I.click("Compose a DM");
    I.wait(shortWait);
    I.click("Create a group");
    I.click("@"+fname);
    I.fillField("input[placeholder='Search people']", f2name);
    I.wait(shortWait);
    
    I.click("@"+fname);
    I.click("Next");
    I.wait(shortWait);
    I.see("Start a new message");

});

// chat di group sama spt dm