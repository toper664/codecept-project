import * as dotenv from 'dotenv';

dotenv.config({ path: "./twitter/.env" });
const twtmail = process.env.EMAIL;
const twtpass = process.env.PASSWORD;
dotenv.config({ path: "./spotify/.env", override: true });
const spfmail = process.env.LOGIN_EMAIL;
const spfpass = process.env.PASSWORD;

export = function() {
  return actor({
    loginTwitter: function() {
      this.amOnPage("");
      this.click("Sign in");
      this.wait(10);
      this.wait(2);

      this.focus("input[name='text']");
      this.type(twtmail, 200);
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
      this.type(twtpass, 200);
      this.wait(2);
      this.click("Log in");
      this.wait(10);
      this.see("For you");
    },

    loginSpotify: function() {
      this.amOnPage('');
      this.click('Log in');
      this.wait(2);
      // manual override for english
      this.amOnPage("https://accounts.spotify.com/en/login?continue=https%3A%2F%2Fopen.spotify.com%2F");

      this.uncheckOption("remember");
    
      this.focus("input#login-username.Input-sc-1gbx9xe-0.gOrngm");
      this.type(spfmail, 200);
      this.focus("input#login-password.Input-sc-1gbx9xe-0.gOrngm");
      this.type(spfpass, 200);
      this.wait(10);
      this.click("Log In");
      this.dontSee("Log In");
    }
  });

}
