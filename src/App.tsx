import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/header';
import ToDoList from './pages/toDoList';
import CompletedList from './pages/completedList';
import DeletedList from './pages/deletedList';
import { Item, ItemStatus } from './types/Item';

import './App.scss';

function App() {
  const [items, setItems] = useState<Item[]>([]);

  const addItem = (newItem: Item) => {
    setItems([newItem, ...items]);
  }

  const removeItem = (itemId: number) => {
    let tempItemList = [...items];
    const matchedItemIndex = tempItemList.findIndex(item => item.id === itemId);

    tempItemList[matchedItemIndex].status = ItemStatus.DELETED;

    setItems(tempItemList);
  }

  const completeItem = (itemId: number) => {
    let tempItemList = [...items];
    const matchedItemIndex = tempItemList.findIndex(item => item.id === itemId);

    tempItemList[matchedItemIndex].status = ItemStatus.COMPLETED;
    setItems(tempItemList);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route path='/' exact>
            <ToDoList addItem={addItem} removeItem={removeItem} completeItem={completeItem} items={items}/>
          </Route>
          <Route path='/completed'>
            <CompletedList items={items}/>
          </Route>
          <Route path='/deleted'>
            <DeletedList items={items}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
