/* 
action === actions.MANAGE
action === "addnewboard" 
action === "addnewcolumn"
action === "addnewtask" &
action === "deletetask" &
action === "deleteboard" 
action === "edittask" && 
*/

export enum actions {
  MANAGE_CURRENT_TASK = "manage_current_task",
  ADD_NEW_BOARD = "add_new_board",
  ADD_NEW_COLUMN = "add_new_colummn",
  ADD_NEW_TASK = "add_new_task",
  DELETE_TASK = "delete_task",
  DELETE_BOARD = "delete_board",
  EDIT_TASK = "edit_task",
  EDIT_BOARD = "edit_board",
}
