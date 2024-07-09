import { faker } from '@faker-js/faker';
import * as fs from 'fs';
import { longWait, shortWait } from '../global';

// Text data
fs.writeFileSync('test.txt', "Element : " + faker.science.chemicalElement().symbol + "\nAtomic Number : " + faker.science.chemicalElement().atomicNumber);
// var testFile = fs.readFileSync('test.txt');

// SVG data
// var img = faker.image.dataUri({type:"svg-base64"});
// var data = img.replace("data:image/svg+xml;base64,", "");
// fs.writeFileSync('image.txt', data);
// var buf = Buffer.from(data, 'base64');
// fs.writeFileSync('testImg.svg', buf);

Feature('upload')

Scenario('upload file', ({ I }) => {
    I.amOnPage('https://jumpshare.com/file-sharing/txt');
    I.attachFile('#guest-file-upload', 'test.txt');
    I.waitForVisible('.file_link', longWait);
    I.click('Share Your Code');
    I.wait(shortWait);
    I.see('Analytics');
})