import PageBody from '../components/pageBody';
import ItemCard from '../components/itemCard';
import { Item, ItemStatus } from '../types/Item';

interface CompletedListProps {
  items: Item[];
}

function CompletedList(props: CompletedListProps) {

  const displayItems = () => {
    const completedItems = props.items.filter( item => item.status === ItemStatus.COMPLETED);

    return completedItems.map( item => (
    <ItemCard 
      key={item.id}
      item={item} 
      displayPriority={false}
    />
    ))
  }

  return (
    <PageBody title={'Completed List'}>
      <div className="item-list">
        {displayItems()}
      </div>
      <p>Total Tasks Completed: {props.items.filter( item => item.status === ItemStatus.COMPLETED).length}</p>

    </PageBody>
  );
}

export default CompletedList;