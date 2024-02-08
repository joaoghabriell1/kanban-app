import { Subtasks } from "./Subtask";

export interface Task {
  id: string;
  title: string;
  description: string;
  subtasks: Subtasks;
  status: string;
}
