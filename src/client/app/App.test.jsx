/* global describe, test, expect, document */
import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import { render } from 'enzyme';
import App from './App';

describe('App', () => {
  test('home renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router initialEntries={['/']}>
        <App />
      </Router>, div);
  });

  test('the 404 page should contain a 404 message within an h1', () => {
    const app = render(
      <Router initialEntries={['/404']}>
        <App />
      </Router>
    );

    expect(app.find('h1').text()).toMatch(/404/);
  });
});
