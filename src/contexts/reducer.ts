import { ITask, ITodo } from '../models';
import { TodoActionTypes, TodoActions } from './actions';
import { TodoState } from './state';

export function todoReducer(state: TodoState, action: TodoActions): TodoState {
  switch (action.type) {
    case TodoActionTypes.GET_TODOS:
      return {
        ...state,
        todos: [],
        loadingTodos: true
      };
    case TodoActionTypes.GET_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.payload.todos,
        loadingTodos: false
      }
    case TodoActionTypes.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload.todo],
      };
    case TodoActionTypes.EDIT_TODO:
      const index = state.todos.findIndex(
        (item: ITodo) => item.id === action.payload.todoId
      );
      if (index !== -1) {
        const newTodos = [...state.todos];
        newTodos[index].name = action.payload.name;       
        return {
          ...state,
          todos: newTodos,
        };
      }
      return state;
    case TodoActionTypes.REMOVE_TODO:
      const newTodos = state.todos.filter(
        (item: ITodo) => item.id !== action.payload.todoId
      );    
      return {
        ...state,
        todos: newTodos,
      };
    case TodoActionTypes.GET_TASKS:
      return {
        ...state,
        todos: state.todos.map((item: ITodo) => {
          if (item.id === action.payload.todoId) {
            return {
              ...item,
              tasks: action.payload.tasks,
            };
          }
          return item;
        }),
      };
    case TodoActionTypes.ADD_TASK:
      const indexTodo = state.todos.findIndex(
        (item: ITodo) => item.id === action.payload.todoId
      );
      if (indexTodo !== -1) {
        const newTodos = [...state.todos];
        if (state.todos[indexTodo].tasks) {         
          newTodos[indexTodo].tasks = [            
            ...state.todos[indexTodo].tasks,
            action.payload.task
          ];
        } else {
          newTodos[indexTodo].tasks = [action.payload.task];
        }
        return {
          ...state,
          todos: newTodos,
        };
      }
      return state;
    case TodoActionTypes.REMOVE_TASK:
      const indexTask = state.todos.findIndex(
        (item: ITodo) => item.id === action.payload.todoId
      );
      if (indexTask !== -1) {
        const newTodos = [...state.todos];
        newTodos[indexTask].tasks = state.todos[indexTask].tasks.filter(
          (item: ITask) => item.id !== action.payload.taskId
        );
        return {
          ...state,
          todos: newTodos,
        };
      }
      return state;
    case TodoActionTypes.COMPLETED_TASK:
      const indexTodoTask = state.todos.findIndex(
        (item: ITodo) => item.id === action.payload.todoId
      );
      if (indexTodoTask !== -1) {
        const newTodos = [...state.todos];
        newTodos[indexTodoTask].tasks = state.todos[indexTodoTask].tasks.map(
          (item: ITask) => {
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
          todos: newTodos,
        };
      }
      return state;
    default:
      return state;
  }
}




