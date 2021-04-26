import { render, screen } from '@testing-library/react';
import { ItemStatus } from '../types/Item';
import ToDoList from './toDoList';

const mockFn = jest.fn();

const items = [
  {
    id: 1,
    priority: 7,
    toDo: 'All you can eat.',
    status: ItemStatus.INCOMPLETE
  }
]

test('renders <ToDoList>', () => {
  render(<ToDoList addItem={mockFn} removeItem={mockFn} completeItem={mockFn} items={items}/>);

  const todo = screen.getByTestId('item-todo').textContent;
  expect(todo).toEqual("All you can eat.");

  const priority = screen.getByTestId('item-priority').textContent;
  expect(priority).toEqual("7");

  const deleteBtn = screen.getByTestId('delete-btn');
  expect(deleteBtn).toBeInTheDocument();
});

const multipleItems = [
  {
    id: 1,
    priority: 7,
    toDo: 'All you can eat.',
    status: ItemStatus.INCOMPLETE
  },
  {
    id: 2,
    priority: 3,
    toDo: 'Example to do.',
    status: ItemStatus.INCOMPLETE
  },
  {
    id: 3,
    priority: 5,
    toDo: 'Completed to do do not display.',
    status: ItemStatus.COMPLETED
  }
]

test('renders multiple todo items <ToDoList>', () => {
  render(<ToDoList addItem={mockFn} removeItem={mockFn} completeItem={mockFn} items={multipleItems}/>);

  const todos = screen.getAllByTestId('item-todo');
  expect(todos.length).toEqual(2);

});