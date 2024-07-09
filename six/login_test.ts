import * as dotenv from 'dotenv';

dotenv.config({path:'./six/.env', override: true});
const email = process.env.EMAIL;
const password = process.env.PASSWORD;

Feature('six_login');

BeforeSuite(({ I }) => {
    I.amOnPage('');
    I.click('Login');
    I.wait(shortWait);
    I.click('Login dengan ITB Account');
    I.wait(shortWait);
});

Scenario('empty fields', ({ I }) => {
    I.click('Next');
    I.see('Enter a valid email address, phone number, or Skype name.');
    I.fillField('loginfmt', email);
    I.click('Next');
    I.wait(shortWait);
    I.click('Sign in');
    I.see('Please enter your password.');
});

Scenario('invalid email and password', ({ I }) => {
    I.fillField('loginfmt', 'gamogamogamogamo');
    I.click('Next');
    I.see('We couldn\'t find an account with that username.');
    I.fillField('loginfmt', 'dummy-data@dummy.com');
    I.click('Next');
    I.see('We couldn\'t find an account with that username.');
    I.fillField('loginfmt', 'dummy@.com');
    I.click('Next');
    I.see('Enter a valid email address, phone number, or Skype name.');
    I.fillField('loginfmt', email);
    I.click('Next');
    
    I.wait(shortWait);
    I.fillField('passwd', 'mangeakmangeakmangeakmangeak@gamogamogamo');
    I.click('Sign in');
    I.waitForText('Your account or password is incorrect.', longWait);
});

Scenario('complete login', ({ I }) => {
    I.fillField('loginfmt', email);
    I.click('Next');
    I.wait(shortWait);
    I.fillField('passwd', secret(password));
    I.click('Sign in');
    I.say('Please authenticate login');
    pause();
    I.waitForText('Status Mahasiswa', longWait);
});