import React from 'react';
import { List } from '@mui/material';
import { Todo } from '../../../models';
import { TodoListItem } from '../TodoListItem/TodoListItem';


interface Props {
  todos: Array<Todo>;
}


export const TodoLists = ({ todos }: Props) => {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {todos.map((todo: Todo) => <TodoListItem todo={todo} key={todo.id} />)}      
    </List>
  )
}

