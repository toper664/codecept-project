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
      url: 'https://open.spotify.com/',
      show: true,
      restart: false,
      waitForAction: 500,
      windowSize: '1200x900',
      chrome: {
        args: [ '--no-sandbox', '--window-size=1200,900' ]
      }
    }
  },
  include: {
    I: './steps_file'
  },
  name: 'codecept-project'
}