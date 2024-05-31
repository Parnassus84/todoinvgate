import { Task, Todo } from "../models";
import { TodoActionTypes, TodoActions } from "./actions";
import { TodoState } from "./state";

export function todoReducer(state: TodoState, action: TodoActions): TodoState {
  switch (action.type) {
    case TodoActionTypes.GET_TODOS:
      return {
        ...state,
        todos: action.payload
      };
    case TodoActionTypes.ADD_TODO:
      const newTodo: Todo = {
        id: state.todos[0].id + 1,
        name: action.payload.name,
        tasks: []
      }
      return {
        ...state,
        todos: [newTodo, ...state.todos]
      }
      
    case TodoActionTypes.SELECTED_TODO: 
      return {
        ...state,
        SelectedTodo: getTodo(state.todos, action.payload.todoId)
      }
    case TodoActionTypes.EDIT_TODO:      
      const index = state.todos.findIndex((item: Todo) => item.id === action.payload.todoId);
      if (index !== -1) {
        const newTodos = [...state.todos];
        newTodos[index].name = action.payload.name;
        return {
          ...state,
          todos: newTodos
        };
      }
      return state;
    case TodoActionTypes.REMOVE_TODO:
      const newTodos = state.todos.filter((item: Todo) => item.id !== action.payload.todoId);
      return {
        ...state,
        todos: newTodos
      }
    case TodoActionTypes.ADD_TASK:
      const indexTodo = state.todos.findIndex((item: Todo) => item.id === action.payload.todoId);
      if (indexTodo !== -1) {
        const newTodos = [...state.todos];
        const newTask = {
          id: newTodos[indexTodo].tasks[0].id + 1,
          name: action.payload.name,
          checked: false
        }
        newTodos[indexTodo].tasks = [newTask, ...state.todos[indexTodo].tasks];
        return {
          ...state,
          todos: newTodos
        };
      }
      return state;
    case TodoActionTypes.REMOVE_TASK:
      const indexTask = state.todos.findIndex((item: Todo) => item.id === action.payload.todoId);
      if (indexTask !== -1) {
        const newTodos = [...state.todos];
        newTodos[indexTask].tasks = state.todos[indexTask].tasks.filter((item: Task) => item.id !== action.payload.taskId);
        return {
          ...state,
          todos: newTodos
        };
      }
      return state;
    case TodoActionTypes.COMPLETED_TASK:
      const indexTask2 = state.todos.findIndex((item: Todo) => item.id === action.payload.todoId);
      if (indexTask2 !== -1) {
        const newTodos = [...state.todos];
        newTodos[indexTask2].tasks = state.todos[indexTask2].tasks.map((item: Task) => {
          if (item.id === action.payload.taskId) {
            return {
              ...item,
              checked: !item.checked
            }
          }
          return item;
        });
        return {
          ...state,
          todos: newTodos
        };
      }     
      return state;
    default:
      return state;
  }
}


const getTodo = (todos: Array<Todo>, id: number): Todo | null => {
  if (!todos || todos.length === 0) return null;
  const todo = todos.find((item: Todo) => item.id === id);
  if (!todo) return null;
  return todo; 
};