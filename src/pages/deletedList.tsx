import PageBody from '../components/pageBody';
import ItemCard from '../components/itemCard';
import { Item, ItemStatus } from '../types/Item';

interface DeletedListProps {
  items: Item[];
}

function DeletedList(props: DeletedListProps) {

  const displayItems = () => {
    const completedItems = props.items.filter( item => item.status === ItemStatus.DELETED);

    return completedItems.map( item => (
    <ItemCard 
      key={item.id}
      item={item}
      displayPriority={false}
    />
    ))
  }

  return (
    <PageBody title={'Deleted List'}>
      <div className="item-list">
        {displayItems()}
      </div>
      <p>Total Tasks Deleted: {props.items.filter( item => item.status === ItemStatus.DELETED).length}</p>

    </PageBody>
  );
}

export default DeletedList;