import { Columns } from "./Column";

export type Board = {
  title: string;
  apiKey?: string;
  columns: Columns;
};
