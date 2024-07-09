import Helper from '@codeceptjs/helper';
// import * as dotenv from 'dotenv';

// dotenv.config();
// const email = process.env.TWITTER_EMAIL;
// const password = process.env.TWITTER_PASSWORD;

class CustomHelper extends Helper {

  // add custom methods here
  // If you need to access other helpers
  // use: this.helpers['helperName']
  async getAllElements(locator:string) {
    const allElems = await document.querySelectorAll(locator);
    return allElems;
  }
}

export = CustomHelper;
