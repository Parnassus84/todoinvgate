import React, { useState } from 'react';
import { Typography, Box, Button } from '@mui/material';
import { Header } from '../Shared';
import { TodoLists } from './TodoLists/TodoLists';
import { ModalTodo } from './ModalTodo/ModalTodo';
import { IForm } from './models';
import { useTodo } from '../../contexts/context';
import { TodoStoreFacade } from '../../contexts/facade';
import { Todo } from '../../models';
import AlertDialog from '../Shared/components/AlertDialog/AlertDialog';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const {
    state: { todos },
    dispatch,
  } = useTodo();
  const [todoEdit, setTodoEdit] = useState<Todo | undefined>(undefined);
  const [todoDelete, setTodoDelete] = useState<Todo | undefined>(undefined);
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [showAlertModal, setShowAlertModal] = useState(false);

  const onSubmit = ({ name }: IForm) => {
    todoEdit
      ? dispatch(TodoStoreFacade.editTodo(todoEdit.id, name))
      : dispatch(TodoStoreFacade.addTodo(name));
    setShowModal(false);
  };

  const removeTodo = (todo: Todo) => {
    setShowAlertModal(true);
    setTodoDelete(todo);
  };

  const confirmDelete = () => {
    todoDelete && dispatch(TodoStoreFacade.removeTodo(todoDelete.id));
    setShowAlertModal(false);
  };

  const editTodo = (todo: Todo) => {
    setTodoEdit(todo);
    setShowModal(true);
  };

  const openModal = () => {
    setShowModal(true);
    setTodoEdit(undefined);
  };

  const viewTodo = (id: number) => {
    navigate(`/todo/${id}`);
  };

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
        <Button color="inherit" onClick={() => openModal()}>
          Nuevo
        </Button>
      </Header>
      <Box
        component="main"
        sx={{ pt: 10, display: 'flex', justifyContent: 'center' }}
      >
        <Box component="div" sx={{ width: '60%' }}>
          <TodoLists
            todos={todos}
            onDeleted={removeTodo}
            onEdit={editTodo}
            onView={viewTodo}
          />
        </Box>
      </Box>
      <ModalTodo
        showModal={showModal}
        handleClose={() => setShowModal(false)}
        submit={onSubmit}
        todo={todoEdit}
      />
      <AlertDialog
        showModal={showAlertModal}
        handleClose={() => setShowAlertModal(false)}
        confirm={confirmDelete}
        isTodo={true}
        name={todoDelete?.name}
      />
    </>
  );
};
