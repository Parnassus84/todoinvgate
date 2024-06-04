import { ITodo } from "../../models";

export const localStorageService = {
  getTodos(): Array<ITodo> {
    return JSON.parse(localStorage.getItem('todos') || '[]');
  }, 

  setTodos(todos: Array<ITodo>): void {
    localStorage.setItem('todos', JSON.stringify(todos));  
  }, 

}