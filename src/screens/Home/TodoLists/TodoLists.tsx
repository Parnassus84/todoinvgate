import React from 'react';
import { List } from '@mui/material';
import { Todo } from '../../../models';
import { TodoListItem } from '../TodoListItem/TodoListItem';


interface Props {
  todos: Array<Todo>;
}

const test: Todo = {
  name: 'Todo 1',
  list: []
}

export const TodoLists = ({ todos }: Props) => {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <TodoListItem todo={test} />
    </List>
  )
}

