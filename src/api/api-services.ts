import ApiClient from "./api-client";
import { Board } from "../types/Boards";

export const getAllBoards = (id: string) => {
  return ApiClient.get<Board[]>(`users/${id}/boards.json`);
};

export const getBoard = (userID: string, boardID: string) => {
  return ApiClient.get<Board>(`users/${userID}/boards/${boardID}.json`);
};

export const createNewBoard = (id: string, data: Board) => {
  return ApiClient.post<{ name: string }>(`users/${id}/boards.json`, data);
};
