import * as dotenv from 'dotenv';

dotenv.config({ path: "./twitter/.env" });
const twtmail = process.env.LOGIN_EMAIL;
const twtpass = process.env.PASSWORD;
dotenv.config({ path: "./spotify/.env", override: true });
const spfmail = process.env.LOGIN_EMAIL;
const spfpass = process.env.PASSWORD;
dotenv.config({ path: "./six/.env", override: true });
const sixmail = process.env.EMAIL;
const sixpass = process.env.PASSWORD;

export = function() {
  return actor({
    loginTwitter: function() {
      this.amOnPage("");
      this.click("Sign in");
      this.wait(shortWait);

      this.fillField("input[name='text']", twtmail);
      this.wait(shortWait);
      this.click("Next");
      this.wait(shortWait);
      
      // captcha
      pause();
      // kalau ada unusual activity
      // this.focus("input[name='text']");
      // this.type(uname, 200);
      // this.click("Next");

      this.fillField("input[name='password']", secret(twtpass));
      this.wait(shortWait);
      this.click("Log in");
      this.wait(longWait);
      this.see("For you");
    },

    loginSpotify: function() {
      this.amOnPage('');
      this.click('Log in');
      this.wait(shortWait);
      // manual override for english
      this.amOnPage("https://accounts.spotify.com/en/login?continue=https%3A%2F%2Fopen.spotify.com%2F");

      this.uncheckOption("remember");
    
      this.fillField("input#login-username.Input-sc-1gbx9xe-0.gOrngm", spfmail);
      this.fillField("input#login-password.Input-sc-1gbx9xe-0.gOrngm", secret(spfpass));
      this.wait(longWait);
      this.click("Log In");
      this.dontSee("Log In");
    }, 

    loginSix: function() {
      this.amOnPage('');
      this.click('Login');
      this.wait(shortWait);
      this.click('Login dengan ITB Account');
      this.wait(shortWait);
      this.fillField('loginfmt', sixmail);
      this.click('Next');
      this.wait(shortWait);
      this.fillField('passwd', secret(sixpass));
      this.click('Sign in');

      this.waitForText('Status Mahasiswa', longWait);
    }, 
  });

}
