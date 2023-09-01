import ApiClient from "./api-client";
import { Board } from "../types/Boards";
import { Task } from "../types/Task";

export const getAllBoards = (id: string) => {
  return ApiClient.get<Board[]>(`users/${id}/boards.json`);
};

export const getBoard = (userID: string, boardID: string) => {
  return ApiClient.get<Board>(`users/${userID}/boards/${boardID}.json`);
};

export const createNewBoard = (userId: string, data: Board) => {
  return ApiClient.post<{ name: string }>(`users/${userId}/boards.json`, data);
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
