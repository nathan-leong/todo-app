import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders header menu items correctly', () => {
  render(<App />);
  const todoLink = screen.getByTestId('todo-link');
  expect(todoLink.getAttribute('href')).toBe('/');

  const completedLink = screen.getByTestId('completed-link');
  expect(completedLink.getAttribute('href')).toBe('/completed');

  const deletedLink = screen.getByTestId('deleted-link');
  expect(deletedLink.getAttribute('href')).toBe('/deleted');
});
