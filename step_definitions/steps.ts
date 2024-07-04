import * as dotenv from 'dotenv';

dotenv.config({ path: "./twitter/.env" });
const email = process.env.EMAIL;
const pass = process.env.PASSWORD;

const { I } = inject();
// Add in your custom step files

Given('I am on Twitter login page', () => {
  I.amOnPage("https://x.com/");
  I.click("Sign in"); // sengaja untuk heal
  I.wait(10);
});

When('I try to enter my email and password', () => {
  I.focus("input[name='text']");
  I.type(email, 200);
  I.wait(2);
  I.click("Next");
  I.wait(2);
  
  pause();
  // kalau ada unusual activity
  // I.focus("input[name='text']");
  // I.type(uname, 200);
  // I.click("Next");

  I.focus("input[name='password']");
  I.type(pass, 200);
  I.wait(2);
});

Then('I should be able to login', () => {
  I.click("Log in");
  I.wait(10);
});

Then('see Twitter dashboard with my account', () => {
  I.see("For you");
});
