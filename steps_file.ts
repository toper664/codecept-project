import * as dotenv from 'dotenv';

dotenv.config({ path: "./twitter/.env" });
const email = process.env.EMAIL;
const password = process.env.PASSWORD;

export = function() {
  return actor({
    loginTwitter: function() {
      this.amOnPage("");
      this.click("Sign in");
      this.wait(10);
      this.wait(2);

      this.focus("input[name='text']");
      this.type(email, 200);
      this.wait(2);
      this.click("Next");
      this.wait(2);
      
      // captcha
      pause();
      // kalau ada unusual activity
      // this.focus("input[name='text']");
      // this.type(uname, 200);
      // this.click("Next");

      this.focus("input[name='password']");
      this.type(password, 200);
      this.wait(2);
      this.click("Log in");
      this.wait(10);
      this.see("For you");
    }
  });

}
