import { ItemStatus } from '../types/Item';
import { orderItemsByPriority, orderItemsByDescription } from './itemUtils';

const items = [
  {
    id: 1,
    priority: 7,
    toDo: 'All you can eat.',
    status: ItemStatus.INCOMPLETE
  },
  {
    id: 2,
    priority: 4,
    toDo: 'Example item.',
    status: ItemStatus.INCOMPLETE
  },
]
test('renders items by priority', () => {

    const itemsByPriority = orderItemsByPriority(items);
    expect(itemsByPriority[0].toDo).toBe('Example item.');

});

test('renders items by description', () => {

  const itemsByDescription = orderItemsByDescription(items);
  expect(itemsByDescription[0].toDo).toBe('All you can eat.');

});