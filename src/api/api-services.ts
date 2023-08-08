import ApiClient from "./api-client";
import { Board } from "../types/Boards";

export const getAllBoards = (id: string) => {
  return ApiClient.get<Board[]>(`users/${id}/boards.json`);
};
