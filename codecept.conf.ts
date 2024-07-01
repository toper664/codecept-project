import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './*_test.ts',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://x.com/',
      show: true,
      restart: false,
      keepCookies: true,
      waitForAction: 500,
      waitForNavigation: "networkidle0",
      windowSize: '1200x900',
      chrome: {
        args: [ '--no-sandbox', '--window-size=1200,900', '--use-fake-ui-for-media-stream' ]
      }
    },
    FileSystem: {},
  },
  plugins: {
    autoLogin: {
      enabled: false,
      saveToFile: true,
      inject: 'login',
      users: {
        tester: {
          login: (I: CodeceptJS.I) => I.loginTwitter(),
          check: (I: CodeceptJS.I) => {
            I.seeElement({css: "[data-testid='AppTabBar_Home_Link']"});
          },
          fetch: () => {}, // empty function
          restore: () => {}, // empty funciton
        }
      }
    }
  },
  include: {
    I: './steps_file'
  },
  name: 'codecept-project'
}