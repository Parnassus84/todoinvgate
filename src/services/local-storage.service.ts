import { Task } from "../models/task";


export const localStorageService = {
  getTodos(): Array<Task> {
    return JSON.parse(localStorage.getItem('todos') || '[]');
  }, 

  addTask (task: Task): Array<Task> {
    const todos = localStorageService.getTodos();
    const newList = [task, ...todos];   
    localStorage.setItem('todos', JSON.stringify(newList));  
    return newList;     
  },

  removeTask (index: number): Array<Task> {
    const todos = localStorageService.getTodos();   
    todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(todos));
    return todos;
  },
  sendToLast (index: number): Array<Task> {
    const tasks: Array<Task> = localStorageService.getTodos();  
    tasks[index].checked = !tasks[index].checked;
    localStorage.setItem('todos', JSON.stringify(tasks)); 
    return localStorageService.getTodos();
  },
  filterBy(filter: string): Array<Task> {
    const todos = localStorageService.getTodos();
    const filtered = todos.filter((item: Task) => {
      switch (filter) {
          case 'pending':
              return !item.checked;
          case 'completed':
              return item.checked;
          case 'all':
          default:
              return true;
      }
  });
  
    return filtered;
  }
}