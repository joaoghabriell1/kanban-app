import { Board } from "./Boards";
import { Column } from "./Column";
import { Subtasks } from "./Subtask";
import { Task } from "./Task";

export interface getAllBoardsPayload {
  id: string;
}

export interface getBoardPayload {
  userId: string;
  boardId: string;
}

export interface createNewBoardPayload {
  userId: string;
  data: Board;
}

export interface getTaskPayload {
  userId: string;
  boardId: string;
  columnId: string;
  taskId: string;
}

export interface createNewTaskPayload {
  userId: string;
  boardId: string;
  columnId: string;
  data: Task;
}

export interface updateSubtasksPaylaod {
  userId: string;
  boardId: string;
  columnId: string;
  taskId: string;
  data: Subtasks;
}

export interface updateTaskandChangeColumnPayload {
  userId: string;
  boardId: string;
  currentColumnId: string;
  taskId: string;
  newColumnId: string;
  task: Task;
}

export interface createNewColumnPayload {
  userId: string;
  boardId: string;
  data: Column;
}

export interface deleteTaskPayload {
  userId: string;
  boardId: string;
  columnId: string;
  taskId: string;
}
export interface deleteBoardPayload {
  userId: string;
  boardId: string;
}
