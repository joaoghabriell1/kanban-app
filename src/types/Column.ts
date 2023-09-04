import { Task } from "./Task";

export interface Column {
  id: string | number;
  title: string;
  tasks: Task[];
}

export interface Columns {
  [key: string | number]: Column;
}
