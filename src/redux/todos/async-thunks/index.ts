import { compose } from "@reduxjs/toolkit";
import { getTodosReducer } from './get-todos';
import { addTaskReducer } from "./add-task";
import { addTodoReducer } from "./add-todo";
import { completedTaskReducer } from "./completed-task";
import { deleteTaskReducer } from "./delete-task";
import { deleteTodoReducer } from "./delete-todo";
import { editTodoReducer } from "./edit-todo";
import { getTasksReducer } from "./get-tasks";


export const extraReducers = compose(getTodosReducer, addTaskReducer, addTodoReducer, completedTaskReducer, deleteTaskReducer, deleteTodoReducer, editTodoReducer, getTasksReducer);

export { getTodosAction } from './get-todos';
export {addTaskAction } from './add-task';
export { addTodoAction } from './add-todo';
export { completedTaskAction } from "./completed-task";
export { deleteTodoAction } from "./delete-todo";
export { deleteTaskAction as deleteTasksAction } from "./delete-task";
export { editTodoAction } from "./edit-todo";
export { getTasksAction } from "./get-tasks";


