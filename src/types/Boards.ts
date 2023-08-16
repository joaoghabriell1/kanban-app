import { Column } from "./Column";

export type Board = {
  title: string;
  apiKey: string;
  columns: Column[];
};
