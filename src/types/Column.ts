import { Task } from "./Task";

export interface Column {
  id: string;
  title: string;
  created_at: Date;
  tasks: Task[];
}

export interface Columns {
  [key: string | number]: Column;
}
