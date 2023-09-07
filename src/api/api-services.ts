import { Subtasks } from "../types/Subtask";
import { Column } from "../types/Column";
import { Board } from "../types/Boards";
import { Task } from "../types/Task";
import ApiClient from "./api-client";

export const getAllBoards = (id: string) => {
  return ApiClient.get<Board[]>(`users/${id}/boards.json`);
};

export const getBoard = (userID: string, boardID: string) => {
  return ApiClient.get<Board>(`users/${userID}/boards/${boardID}.json`);
};

export const createNewBoard = (userId: string, data: Board) => {
  return ApiClient.post<{ name: string }>(`users/${userId}/boards.json`, data);
};

export const getTask = (
  userId: string,
  boardId: string,
  columnId: string,
  taskId: string
) => {
  return ApiClient.get<Task>(
    `users/${userId}/boards/${boardId}/columns/${columnId}/tasks/${taskId}.json`
  );
};

export const createNewTask = (
  userId: string,
  boardId: string,
  columnId: string,
  data: Task
) => {
  return ApiClient.post(
    `users/${userId}/boards/${boardId}/columns/${columnId}/tasks.json`,
    data
  );
};

export const updateSubtasks = (
  userId: string,
  boardId: string,
  columnId: string,
  taskId: string,
  data: Subtasks
) => {
  return ApiClient.patch(
    `users/${userId}/boards/${boardId}/columns/${columnId}/tasks/${taskId}/subtasks.json`,
    data
  );
};

export const updateTaskandChangeColumn = (
  userId: string,
  boardId: string,
  currentColumnId: string,
  taskId: string,
  newColumnId: string,
  task: Task
) => {
  const delete_task_from_current_place = ApiClient.delete(
    `users/${userId}/boards/${boardId}/columns/${currentColumnId}/tasks/${taskId}.json`
  );
  const realocate_task_to_other_column = ApiClient.post(
    `users/${userId}/boards/${boardId}/columns/${newColumnId}/tasks.json`,
    task
  );

  return Promise.all([
    realocate_task_to_other_column,
    delete_task_from_current_place,
  ]);
};

export const createNewColumn = (
  userId: string,
  boardId: string,
  data: Column
) => {
  return ApiClient.put(
    `users/${userId}/boards/${boardId}/columns/${data.id}.json`,
    data
  );
};

export const updateTask = () => {};
