import * as dotenv from 'dotenv';

dotenv.config({ path: "./twitter/.env" });
const email = process.env.EMAIL;
const pass = process.env.PASSWORD;

Given('I am on Twitter login page', () => {
  I.amOnPage("https://x.com/");
  I.click("Sign in"); // sengaja untuk heal
  I.wait(longWait);
});

When('I try to enter my email and password', () => {
  I.fillField("input[name='text']", email);
  I.wait(shortWait);
  I.click("Next");
  I.wait(shortWait);
  
  pause();
  // kalau ada unusual activity
  // I.focus("input[name='text']");
  // I.type(uname, 200);
  // I.click("Next");

  I.fillField("input[name='password']", secret(pass));
  I.wait(shortWait);
});

Then('I should be able to login', () => {
  I.click("Log in");
  I.wait(longWait);
});

Then('see Twitter dashboard with my account', () => {
  I.see("For you");
});
