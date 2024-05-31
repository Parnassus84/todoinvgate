import { Todo } from "../models";

export const localStorageService = {
  getTodos(): Array<Todo> {
    return JSON.parse(localStorage.getItem('todos') || '[]');
  }, 

  setTodos(todos: Array<Todo>): void {
    localStorage.setItem('todos', JSON.stringify(todos));  
  }, 

}