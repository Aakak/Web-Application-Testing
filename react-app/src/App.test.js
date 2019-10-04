import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from '@testing-library/react';

it('renders without crashing', () => {
  render(<App />);
});

//Passed Test
test('strike', () => {
  const { getByText } = render(<App />);

  getByText(/STRIKE 0/i);
});


//Failed Test
test('ball', () => {
  const { getByText } = render(<App />);
  getByText(/BALL 1/i);
});
