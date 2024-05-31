import React, { useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import { Header } from '../Shared';
import { TodoLists } from './TodoLists/TodoLists';
import { useTodo } from '../../contexts/TodoState';


export const Home = () => {
  const { todos, getTodos } = useTodo();

  useEffect( () => {
    getTodos();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <>
      <Header>
        <Typography
          variant="h6"
          color="inherit"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          TO-DOs
        </Typography>
      </Header>
      <Box
        component="main"
        sx={{ pt: 10, display: 'flex', justifyContent: 'center' }}
      >
        <Box component="div" sx={{ width: '60%' }}>
          <TodoLists todos={todos} />
        </Box>
      </Box>
    </>
  );
};
