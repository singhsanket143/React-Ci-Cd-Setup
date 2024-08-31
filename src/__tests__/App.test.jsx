import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

// eslint-disable-next-line no-undef
test('renders Vite + React text', () => {
  render(<App />);
  const headerElement = screen.getByText(/Vite \+ React/i);
  expect(headerElement).toBeInTheDocument();
});

test('increments count on button click', () => {
  render(<App />);
  const buttonElement = screen.getByText(/count is 0/i);
  expect(buttonElement).toBeInTheDocument();

  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveTextContent('count is 1');

  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveTextContent('count is 2');
});
