import { describe, it } from 'mocha';
import assert from 'assert';  // eslint-disable-line

const browser = global.browser;

describe('my feature', () => {
  it('will do something', () => {
    return browser
      .url('http://google.com')
      .getTitle().then((title) => {
        console.log(title);  // eslint-disable-line
      });
  });
});
