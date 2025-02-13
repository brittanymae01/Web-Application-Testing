import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders without crashing', () => {
  render(<App />)
})

test('strikes is rendered to the UI', () => {
  const { getByText } = render(<App />)

  getByText(/strikes/i)
})

test('scoreboard is rendered', () => {
  const { getByTestId } = render(<App />);

  getByTestId(/scoreboard/i)
})






