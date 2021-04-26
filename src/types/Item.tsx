export interface Item {
  id: number;
  priority: number;
  toDo: string;
  status: ItemStatus;
}

export enum ItemStatus {
  INCOMPLETE,
  COMPLETED,
  DELETED
}