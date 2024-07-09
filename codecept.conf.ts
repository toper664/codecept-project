import * as dotenv from 'dotenv';
import Groq from 'groq-sdk';
import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
require("./heal");
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
dotenv.config();
setHeadlessWhen(process.env.HEADLESS);
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './*_test.ts',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://six.itb.ac.id/', // six
        // 'https://open.spotify.com/', // spotify
        // 'https://x.com/', //twitter
      show: true,
      restart: false,
      keepCookies: true,
      waitForAction: 500,
      waitForNavigation: "networkidle0",
      windowSize: '1200x900',
      chrome: {
        args: [
          '--no-sandbox',
          '--window-size=1200,900',
          '--use-fake-ui-for-media-stream'
        ]
      }
    },
    FileSystem: {}
  },
  include: {
    I: './steps_file'
  },
  mocha: {
    "reporterOptions": {
        "reportDir": "output"
    }
  },
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: [
      './step_definitions/steps.ts',
      './step_definitions/messages_steps.ts',
      './step_definitions/community_steps.ts',
      './step_definitions/bookmark_steps.ts',
      './step_definitions/static_steps.ts',
    ]
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    heal: {
      enabled: true
    },
    autoLogin: {
      enabled: true,
      saveToFile: true,
      inject: 'login',
      users: {
        twt: {
          login: (I: CodeceptJS.I) => I.loginTwitter(),
          check: (I: CodeceptJS.I) => {
            I.seeElement({css: "[data-testid='AppTabBar_Home_Link']"});
          },
          fetch: () => { return "fetch successful" }, // empty function
          restore: () => {}, // empty funciton
        },
        spf: {
          login: (I: CodeceptJS.I) => I.loginSpotify(),
          check: (I: CodeceptJS.I) => {
            I.seeElement({css: "[aria-label='Main']"});
          },
          fetch: () => { return "fetch successful" }, // empty function
          restore: () => {}, // empty funciton
        },
        six: {
          login: (I: CodeceptJS.I) => I.loginSix(),
          check: (I: CodeceptJS.I) => {
            I.seeElement({css: "[title='Home']"});
          },
          fetch: () => { return "fetch successful" }, // empty function
          restore: () => {}, // empty funciton
        }
      }
    },
    testomatio: {
      enabled: true,
      require: '@testomatio/reporter/lib/adapter/codecept',
      apiKey: process.env.TESTOMATIO,
    },
    tryTo: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {}
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  ai: {
    request: async (messages) => {
      const chatCompletion = await groq.chat.completions.create({
          messages,
          model: "mixtral-8x7b-32768",
      });
      return chatCompletion.choices[0]?.message?.content || "";
    },
    maxTokens:100000,
  },
  name: 'codecept-project'
}