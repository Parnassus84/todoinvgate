import React from 'react';
import { List } from '@mui/material';
import { ITodo } from '../../../models';
import { TodoListItem } from '../TodoListItem/TodoListItem';

interface Props {
  todos: Array<ITodo>;
  onEdit: (todo: ITodo) => void;
  onDeleted: (todo: ITodo) => void;
  onView: (id: string) => void;
}

export const TodoLists = ({ todos, onEdit, onDeleted, onView }: Props) => {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {todos.map((todo: ITodo, index) => (
        <TodoListItem
          todo={todo}
          key={`${todo.id}${index}`}
          edit={() => onEdit(todo)}
          deleted={() => onDeleted(todo)}
          view={() => onView(todo.id)} 
          last={todos?.length === todos.indexOf(todo) + 1}   
        />
      ))}
    </List>
  );
};
