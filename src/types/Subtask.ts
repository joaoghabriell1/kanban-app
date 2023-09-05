export interface Subtask {
  id: string;
  body: string;
  completed: boolean;
}

export interface Subtasks {
  [key: string]: Subtask;
}
