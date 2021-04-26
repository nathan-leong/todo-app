import { render, screen } from '@testing-library/react';
import { ItemStatus } from '../types/Item';

import ItemCard from './itemCard';

test('renders <ItemCard> with attributes and child element', () => {
  render(<ItemCard 
    item={{ 
      id: 1,
      priority: 7,
      toDo: 'All you can eat.',
      status: ItemStatus.INCOMPLETE
    }}
    displayPriority={false}
  >
    <p data-testid="test-child">
      Test child
    </p>
  </ItemCard>);
  const priority = screen.queryByTestId('item-priority');
  expect(priority).not.toBeInTheDocument();

  const todo = screen.getByTestId('item-todo').textContent;
  expect(todo).toEqual("All you can eat.");

  const childElement = screen.getByTestId('test-child').textContent;
  expect(childElement).toEqual('Test child');
});
