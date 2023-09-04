import { Substask } from "./Subtask";

export interface Task {
  id: string;
  apiKey?: string;
  title: string;
  description: string;
  subtasks: Substask[];
  status: string;
}
