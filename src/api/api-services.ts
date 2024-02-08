import { Board } from "../types/Boards";
import { Task } from "../types/Task";
import ApiClient from "./api-client";

import {
  getAllBoardsPayload,
  getBoardPayload,
  createNewBoardPayload,
  getTaskPayload,
  createNewTaskPayload,
  updateSubtasksPaylaod,
  updateTaskandChangeColumnPayload,
  createNewColumnPayload,
  deleteTaskPayload,
  deleteBoardPayload,
  EditTaskPayload,
  EditBoardPayload,
} from "../types/api-payloads";

export const getAllBoards = ({ id }: getAllBoardsPayload) => {
  return ApiClient.get<Board[]>(`users/${id}/boards.json`);
};

export const getBoard = ({ userId, boardId }: getBoardPayload) => {
  return ApiClient.get<Board>(`users/${userId}/boards/${boardId}.json`);
};

export const createNewBoard = ({ userId, data }: createNewBoardPayload) => {
  return ApiClient.post<{ name: string }>(`users/${userId}/boards.json`, data);
};

export const getTask = ({
  userId,
  boardId,
  columnId,
  taskId,
}: getTaskPayload) => {
  return ApiClient.get<Task>(
    `users/${userId}/boards/${boardId}/columns/${columnId}/tasks/${taskId}.json`
  );
};

export const createNewTask = ({
  userId,
  boardId,
  columnId,
  data,
}: createNewTaskPayload) => {
  return ApiClient.put(
    `users/${userId}/boards/${boardId}/columns/${columnId}/tasks/${data.id}.json`,
    data
  );
};

export const updateSubtasks = ({
  userId,
  boardId,
  columnId,
  taskId,
  data,
}: updateSubtasksPaylaod) => {
  return ApiClient.patch(
    `users/${userId}/boards/${boardId}/columns/${columnId}/tasks/${taskId}/subtasks.json`,
    data
  );
};

export const updateTaskandChangeColumn = ({
  userId,
  boardId,
  currentColumnId,
  taskId,
  newColumnId,
  task,
}: updateTaskandChangeColumnPayload) => {
  const delete_task_from_current_place = ApiClient.delete(
    `users/${userId}/boards/${boardId}/columns/${currentColumnId}/tasks/${taskId}.json`
  );
  const realocate_task_to_other_column = ApiClient.put(
    `users/${userId}/boards/${boardId}/columns/${newColumnId}/tasks/${taskId}.json`,
    task
  );

  return Promise.all([
    realocate_task_to_other_column,
    delete_task_from_current_place,
  ]);
};

export const createNewColumn = ({
  userId,
  boardId,
  data,
}: createNewColumnPayload) => {
  return ApiClient.put(
    `users/${userId}/boards/${boardId}/columns/${data.id}.json`,
    data
  );
};

export const deleteTask = ({
  userId,
  boardId,
  columnId,
  taskId,
}: deleteTaskPayload) => {
  return ApiClient.delete(
    `users/${userId}/boards/${boardId}/columns/${columnId}/tasks/${taskId}.json`
  );
};

export const deleteBoard = ({ userId, boardId }: deleteBoardPayload) => {
  return ApiClient.delete(`users/${userId}/boards/${boardId}.json`);
};

export const editTask = ({
  userId,
  boardId,
  columnId,
  taskId,
  data,
}: EditTaskPayload) => {
  return ApiClient.put(
    `users/${userId}/boards/${boardId}/columns/${columnId}/tasks/${taskId}.json`,
    data
  );
};

export const editBoard = ({ userId, boardId, data }: EditBoardPayload) => {
  return ApiClient.put(`users/${userId}/boards/${boardId}.json`, data);
};
