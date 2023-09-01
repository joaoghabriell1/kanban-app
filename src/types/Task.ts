import { Substask } from "./Subtask";

export interface Task {
  id: string;
  title: string;
  description: string;
  subtasks: Substask[];
  status: string;
}
