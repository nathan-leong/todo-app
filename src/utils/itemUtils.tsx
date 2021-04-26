import { Item } from '../types/Item'

export const orderItemsByPriority = (items: Item[]) => {
  return items.sort( (a,b) => {
    if(a.priority > b.priority) return 1;
    else if (a.priority < b.priority) return -1;
    else return 0;
  })
}

export const orderItemsByDescription = (items: Item[]) => {
  return items.sort( (a,b) => {
    if(a.toDo.toLowerCase() < b.toDo.toLowerCase()) return -1;
    else if (a.toDo.toLowerCase() > b.toDo.toLowerCase()) return 1;
    else return 0;
  })
}