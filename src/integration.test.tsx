import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import App from './App';

test('renders <App> then creates todo and deletes todo, and deleted todo found in deleted list', () => {
  render(<App/>);

  const todoInput = screen.getByTestId('todo-input');
  userEvent.type(todoInput, 'All you can eat.');

  expect(todoInput).toHaveValue('All you can eat.');

  const addBtn = screen.getByTestId('add-btn');
  userEvent.click(addBtn);

  const todo = screen.getByTestId('item-todo').textContent;
  expect(todo).toEqual("All you can eat.");

  const deleteBtn = screen.getByTestId('delete-btn');
  userEvent.click(deleteBtn);

  const deletedTodo = screen.queryByTestId('item-todo');
  expect(deletedTodo).not.toBeInTheDocument();

  const deleteLink = screen.getByTestId('deleted-link');
  userEvent.click(deleteLink);

  const deletedPageDeletedTodo = screen.getByTestId('item-todo').textContent;
  expect(deletedPageDeletedTodo).toEqual("All you can eat.");
});   
