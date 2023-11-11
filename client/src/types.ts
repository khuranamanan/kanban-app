export interface Board {
  name: string;
  description: string;
  columns: string[];
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface Column {
  board: string;
  name: string;
  items: Item[];
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface BoardWithColumns {
  name: string;
  description: string;
  columns: Column[];
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface Item {
  name: string;
  description: string;
  dueDate: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
