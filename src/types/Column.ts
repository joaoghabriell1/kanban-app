import { Task } from "./Task";

export interface Column {
  id: number;
  title: string;
  tasks: Task[];
}
