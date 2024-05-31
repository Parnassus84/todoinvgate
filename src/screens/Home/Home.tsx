import React, { useEffect, useState } from 'react';
import { Typography, Box, Button } from '@mui/material';
import { Header } from '../Shared';
import { TodoLists } from './TodoLists/TodoLists';
import { ModalNewTodo } from './ModalNewTodo/ModalNewTodo';
import { IForm } from './models';
import { useTodo } from '../../contexts/context';
import { localStorageService } from '../../services/local-storage.service';
import { TodoStoreFacade } from '../../contexts/facade';


export const Home = () => {
  const { state: {todos}, dispatch } = useTodo();


  const [showModal, setShowModal] = useState(false);

  useEffect( () => {
   const todos = localStorageService.getTodos();
   dispatch(TodoStoreFacade.getTodos(todos));  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]); 

  const onSubmit = ({ name }: IForm) => {
    dispatch(TodoStoreFacade.addTodo(name));     
    setShowModal(false);
  }

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
        <Button color="inherit" onClick={() => setShowModal(true)}>Nuevo</Button> 
      </Header>
      <Box
        component="main"
        sx={{ pt: 10, display: 'flex', justifyContent: 'center' }}
      >
        <Box component="div" sx={{ width: '60%' }}>
          <TodoLists todos={todos} />
        </Box>
      </Box>
      <ModalNewTodo showModal={showModal} handleClose={() => setShowModal(false)} submit={onSubmit} />
    </>
  );
};
