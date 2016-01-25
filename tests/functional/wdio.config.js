exports.config = {

  specs: [
    'tests/functional/spec/**'
  ],

  capabilities: [{
    browserName: 'chrome'
  }],

  logLevel: 'silent',
  coloredLogs: true,
  screenshotPath: 'shots',
  baseUrl: 'http://localhost:3000',
  waitforTimeout: 1000,

  framework: 'mocha',

  // Test reporter for stdout.
  // The following are supported: dot (default), spec and xunit
  // see also: http://webdriver.io/guide/testrunner/reporters.html
  reporter: 'dot',

  mochaOpts: {
    ui: 'bdd',
    compilers: ['js:babel-core/register']
  },

  // Gets executed before all workers get launched.
  onPrepare: () => {
    console.log('let\'s go'); // eslint-disable-line
  },

  // Gets executed before test execution begins. At this point you will have access to all global
  // variables like `browser`. It is the perfect place to define custom commands.
  before: () => {
    console.log('run the tests'); // eslint-disable-line
  },

  // Gets executed after all tests are done. You still have access to all global variables from
  // the test.
  after: (failures, pid) => {
    console.log('finish up the tests'); // eslint-disable-line
  },

  // Gets executed after all workers got shut down and the process is about to exit. It is not
  // possible to defer the end of the process using a promise.
  onComplete: () => {
    console.log('that\'s it'); // eslint-disable-line
  }
};
