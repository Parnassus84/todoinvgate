import React from 'react';
import { List } from '@mui/material';
import { Todo } from '../../../models';
import { TodoListItem } from '../TodoListItem/TodoListItem';

interface Props {
  todos: Array<Todo>;
  onEdit: (todo: Todo) => void;
  onDeleted: (todo: Todo) => void;
  onView: (id: number) => void;
}

export const TodoLists = ({ todos, onEdit, onDeleted, onView }: Props) => {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {todos.map((todo: Todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          edit={() => onEdit(todo)}
          deleted={() => onDeleted(todo)}
          view={() => onView(todo.id)}
        />
      ))}
    </List>
  );
};
