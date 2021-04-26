import { Item } from '../types/Item';
import "./itemCard.scss";

interface ItemCardProps {
  item: Item;
  displayPriority: boolean;
  className?: string;
}
function ItemCard(props: React.PropsWithChildren<ItemCardProps>) {

  return (
    <div className={`item-card ${props.className}`}>
      {props.displayPriority && <p data-testid="item-priority" className="item-priority">{props.item.priority}</p>}
      <p data-testid="item-todo" className="item-todo">{props.item.toDo}</p>
      {props.children}
    </div>
  );
}

export default ItemCard;