/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, login: any }
  interface Methods extends Puppeteer, FileSystem {}
  interface I extends ReturnType<steps_file>, WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
