import { ChangeEvent, FormEvent, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import PageBody from '../components/pageBody';
import ToDoItemCard from '../components/toDoItemCard';
import { Item, ItemStatus } from '../types/Item';
import { orderItemsByDescription, orderItemsByPriority } from '../utils/itemUtils';

import './toDoList.scss';

interface ToDoListProps {
  items: Item[];
  addItem: (newItem: Item) => void;
  removeItem: (itemId: number) => void;
  completeItem: (itemId: number) => void;
}

enum sortByOptions {
  priority,
  description
}

function ToDoList(props: ToDoListProps) {

  const [newToDo, setNewToDo] = useState<string>('');
  const [priority, setPriority] = useState<number>(1);
  const [sortBy, setSortBy] = useState<keyof typeof sortByOptions>('priority');

  const [validationError, setValidationError] = useState<string | null>();

  const handleToDoChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewToDo(event.target.value)
  }

  const handlePriorityChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPriority(Number(event.target.value))
  }

  const handleSortByChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value as keyof typeof sortByOptions);
  }
  
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if(!newToDo){
      setValidationError('Todo cannot be empty');
    } else {
      //increment by 1 new item id
      const highestId = props.items.length > 0 ? Math.max(...props.items.map( item => item.id )) : 0;

      props.addItem({
        id: highestId + 1,
        priority: priority,
        status: ItemStatus.INCOMPLETE,
        toDo: newToDo
      })

      //reset form
      setNewToDo('');
      setPriority(1);
    }

  }

  const displayItems = () => {

    const incompleteItems = props.items.filter( item => item.status === ItemStatus.INCOMPLETE);

    if(sortBy === 'priority'){
      return orderItemsByPriority(incompleteItems).map( item => (
        <ToDoItemCard 
          key={item.id}
          item={item}
          removeItem={props.removeItem}
          completeItem={props.completeItem}
        />
      ))
    } else if(sortBy === 'description'){
      return orderItemsByDescription(incompleteItems).map( item => (
        <ToDoItemCard 
          key={item.id}
          item={item}
          removeItem={props.removeItem}
          completeItem={props.completeItem}
        />
      ))
    }
  }

  return (
    <PageBody title={'To Do List'}>

      <form className="todo-form" onSubmit={handleSubmit}>
        <input data-testid="todo-input" className="todo-input" name="todo" type="text" placeholder="What do you need to do?" value={newToDo} maxLength={50} minLength={10} onChange={handleToDoChange}></input>
        <label>
          Priority:
          <input className="priority-input" name="priority" type="number" min="1" max="100" placeholder="Min 1, Max 100" value={priority} onChange={handlePriorityChange}></input>
        </label>
        <button data-testid="add-btn" className="add-btn" type="submit"><FontAwesomeIcon icon={faPlus} type="submit"/></button>

        {validationError && <p>{validationError}</p>}
      </form>

      <div>
        <label>
          Sort By:
          <select className="sortby-select" onChange={handleSortByChange}>
            <option value="priority">Priority</option>
            <option value="description">Description</option>
          </select>
        </label>
      </div>
      <div className="item-list">
        {displayItems()}
      </div>

      <p>Total Tasks to do: {props.items.filter( item => item.status === ItemStatus.INCOMPLETE).length}</p>
    </PageBody>
  );
}

export default ToDoList;