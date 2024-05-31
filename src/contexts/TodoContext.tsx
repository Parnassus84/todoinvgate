import { useReducer } from 'react';
import { Task, Todo } from '../models';
import { localStorageService } from '../services/local-storage.service';
import { TodoContext, initialState } from './TodoState';
import { GET_TODOS, reducer } from './TodoReducer';

interface Props {
  children: React.ReactNode;
}


export const TodoProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getTodos = (): void => {
    const data = localStorageService.getTodos();
    dispatch({ type: GET_TODOS, payload: data });
  };

  const addTodo = (name: string): void => {   
    const newId = (state.todos.length > 0) ? (state.todos[0].id + 1) : 1;   
    const newTodo: Todo = {
      id: newId,
      name,
      tasks: [],
    };
    const newList = [newTodo, ...state.todos];
    localStorageService.setTodos(newList);    
    getTodos();
  };

  const removeTodo = (todoId: number): void => {
    const newList = state.todos.filter((item: Todo) => item.id !== todoId);
    localStorageService.setTodos(newList);
    getTodos();
  };

  const editTodo = (todo: Todo): void => {
    const newList = state.todos.map((item: Todo) => {
      if (item.id === todo.id) {
        return todo;
      }
      return item;
    });
    localStorageService.setTodos(newList);
    getTodos();
  };

  const addTask = (todoId: number, name: string): void => {
    const newList = state.todos.map((item: Todo) => {
      if (item.id === todoId) {
        const newId = item.tasks[0].id + 1;
        const newTask: Task = {
          id: newId,
          name,
          checked: false,
        };

        return {
          ...item,
          tasks: [newTask, ...item.tasks],
        };
      }
      return item;
    });
    localStorageService.setTodos(newList);
    getTodos();
  };

  const removeTask = (todoId: number, taskId: number): void => {
    const newList = state.todos.map((item: Todo) => {
      if (item.id === todoId) {
        const newList = item.tasks.filter((task: Task) => task.id !== taskId);
        return {
          ...item,
          tasks: newList,
        };
      }
      return item;
    });
    localStorageService.setTodos(newList);
    getTodos();
  };

  const filterTask = (todoId: number, filter: string): void => {
    const newList = state.todos.map((item: Todo) => {
      if (item.id === todoId) {
        const newList = item.tasks.filter((task: Task) => {
          switch (filter) {
            case 'pending':
              return !task.checked;
            case 'completed':
              return task.checked;
            case 'all':
            default:
              return task;
          }
        });
        return {
          ...item,
          tasks: newList,
        };
      }
      return item;
    });
    localStorageService.setTodos(newList);
    getTodos();
  };

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        getTodos,
        addTodo,
        removeTodo,
        editTodo,
        addTask,
        removeTask,
        filterTask,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
