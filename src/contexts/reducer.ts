import { Task, Todo } from '../models';
import { localStorageService } from '../services/local-storage.service';
import { TodoActionTypes, TodoActions } from './actions';
import { TodoState } from './state';

export function todoReducer(state: TodoState, action: TodoActions): TodoState {
  switch (action.type) {
    case TodoActionTypes.GET_TODOS:
      return {
        ...state,
        todos: action.payload,
      };
    case TodoActionTypes.ADD_TODO:
      const newTodo: Todo = {
        id: state.todos[0] ? state.todos[0].id + 1 : 1,
        name: action.payload.name,
        tasks: [],
      };
      return {
        ...state,
        todos: saveTodos([newTodo, ...state.todos]),
      };

    case TodoActionTypes.EDIT_TODO:
      const index = state.todos.findIndex(
        (item: Todo) => item.id === action.payload.todoId
      );
      if (index !== -1) {
        const newTodos = [...state.todos];
        newTodos[index].name = action.payload.name;
        return {
          ...state,
          todos: saveTodos(newTodos),
        };
      }
      return state;
    case TodoActionTypes.REMOVE_TODO:
      const newTodos = state.todos.filter(
        (item: Todo) => item.id !== action.payload.todoId
      );
      return {
        ...state,
        todos: saveTodos(newTodos),
      };
    case TodoActionTypes.ADD_TASK:
      const indexTodo = state.todos.findIndex(
        (item: Todo) => item.id === action.payload.todoId
      );
      if (indexTodo !== -1) {
        const newTodos = [...state.todos];
        const newTask = {
          id: newTodos[indexTodo].tasks[0]
            ? newTodos[indexTodo].tasks[0].id + 1
            : 1,
          name: action.payload.name,
          checked: false,
        };
        newTodos[indexTodo].tasks = [newTask, ...state.todos[indexTodo].tasks];
        return {
          ...state,
          todos: saveTodos(newTodos),
        };
      }
      return state;
    case TodoActionTypes.REMOVE_TASK:
      const indexTask = state.todos.findIndex(
        (item: Todo) => item.id === action.payload.todoId
      );
      if (indexTask !== -1) {
        const newTodos = [...state.todos];
        newTodos[indexTask].tasks = state.todos[indexTask].tasks.filter(
          (item: Task) => item.id !== action.payload.taskId
        );
        return {
          ...state,
          todos: saveTodos(newTodos),
        };
      }
      return state;
    case TodoActionTypes.COMPLETED_TASK:
      const indexTodoTask = state.todos.findIndex(
        (item: Todo) => item.id === action.payload.todoId
      );
      if (indexTodoTask !== -1) {
        const newTodos = [...state.todos];
        newTodos[indexTodoTask].tasks = state.todos[indexTodoTask].tasks.map(
          (item: Task) => {
            if (item.id === action.payload.taskId) {
              return {
                ...item,
                checked: !item.checked,
              };
            }
            return item;
          }
        );
        return {
          ...state,
          todos: saveTodos(newTodos),
        };
      }
      return state;
    default:
      return state;
  }
}

const saveTodos = (todos: Array<Todo>) => {
  localStorageService.setTodos(todos);
  return todos;
};
