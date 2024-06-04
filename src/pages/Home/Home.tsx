import React, { useState } from 'react';
import { Typography, Box, Button, CircularProgress } from '@mui/material';
import { Header } from '../../shared/components';
import { TodoLists } from './TodoLists/TodoLists';
import { ModalTodo } from './ModalTodo/ModalTodo';
import { IForm } from './models';
import { ITodo } from '../../models';
import AlertDialog from '../../shared/components/AlertDialog/AlertDialog';
import { useNavigate } from 'react-router-dom';
import {
  addTodoAction,
  deleteTodoAction,
  editTodoAction,
} from '../../redux/todos';

import { useAppDispatch, useAppSelector } from '../../redux';

const HomePage = () => {
  const { todos, loading } = useAppSelector((state) => state.todoSection);

  const [todoEdit, setTodoEdit] = useState<ITodo | undefined>(undefined);
  const [todoDelete, setTodoDelete] = useState<ITodo | undefined>(undefined);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [showModal, setShowModal] = useState(false);
  const [showAlertModal, setShowAlertModal] = useState(false);

  const onSubmit = ({ name }: IForm) => {
    todoEdit ? editTodo(todoEdit.id, name) : saveTodo(name);
    setShowModal(false);
  };
  const saveTodo = async (name: string) => {
    dispatch(addTodoAction({ name }));
  };

  const editTodo = async (id: string, name: string) => {
    dispatch(editTodoAction({ id, name }));
  };

  const removeTodo = (todo: ITodo) => {
    setShowAlertModal(true);
    setTodoDelete(todo);
  };

  const confirmDelete = async () => {
    if (!todoDelete) return;
    dispatch(deleteTodoAction(todoDelete.id));
    setShowAlertModal(false);
  };

  const showEditTodoModal = (todo: ITodo) => {
    setTodoEdit(todo);
    setShowModal(true);
  };

  const openModal = () => {
    setShowModal(true);
    setTodoEdit(undefined);
  };

  const viewTodo = (id: string) => {
    navigate(`/todo/${id}`);
  };

  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : (
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
                onEdit={showEditTodoModal}
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
      )}
    </>
  );
};

export default HomePage;
