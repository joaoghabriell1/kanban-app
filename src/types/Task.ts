import { Substask } from "./Subtask";

export interface Task {
  title: string;
  body: string;
  subtask: Substask[];
  status: string;
}
