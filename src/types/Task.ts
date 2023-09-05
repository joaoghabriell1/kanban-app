import { Subtasks } from "./Subtask";

export interface Task {
  apiKey?: string;
  title: string;
  description: string;
  subtasks: Subtasks;
  status: string;
}
