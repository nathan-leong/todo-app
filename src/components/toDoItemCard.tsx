import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrashAlt,  } from '@fortawesome/free-solid-svg-icons';

import ItemCard from './itemCard';
import { Item } from '../types/Item';

interface ToDoItemCardProps {
  item: Item;
  removeItem?: (itemId: number) => void;
  completeItem?: (itemId: number) => void;
}

/**
 * @desc Wrapper around the ItemCard Component for the To Do list, includes delete/complete buttons
 */
function ToDoItemCard(props: ToDoItemCardProps) {

  const removeItem = () => {
    props.removeItem ? props.removeItem(props.item.id) : console.error('No remove item method found');
  }

  const completeItem = () => {
    props.completeItem ? props.completeItem(props.item.id) : console.error('No complete item method found');
  }

  return (
    <ItemCard className="todo-item-card" key={props.item.id} displayPriority={true} item={props.item}>
      <div className="item-card-btn-group">
        <button data-testid="delete-btn" className="delete-btn" onClick={removeItem}><FontAwesomeIcon icon={faTrashAlt}/></button>
        <button className="complete-btn" onClick={completeItem}><FontAwesomeIcon icon={faCheck}/></button>
      </div>
    </ItemCard>
  );
}

export default ToDoItemCard;