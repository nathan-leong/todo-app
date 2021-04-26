import { render, screen } from '@testing-library/react';
import { ItemStatus } from '../types/Item';

import ToDoItemCard from './toDoItemCard';

const mockFn = jest.fn();

test('renders <ToDoItemCard>', () => {
  render(<ToDoItemCard 
    item={{ 
      id: 1,
      priority: 7,
      toDo: 'All you can eat.',
      status: ItemStatus.INCOMPLETE
    }}
    removeItem={mockFn}
    completeItem={mockFn}
  />);

  const todo = screen.getByTestId('item-todo').textContent;
  expect(todo).toEqual("All you can eat.");

  const priority = screen.getByTestId('item-priority').textContent;
  expect(priority).toEqual("7");

  const deleteBtn = screen.getByTestId('delete-btn');
  expect(deleteBtn).toBeInTheDocument();
});
