import { Subtask } from "./Subtask";

export interface Task {
  apiKey?: string;
  title: string;
  description: string;
  subtasks: Subtask[];
  status: string;
}
