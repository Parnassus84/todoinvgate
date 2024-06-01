import React, { useEffect, useState } from 'react';
import { Header } from '../Shared';
import { Box, Button, Typography } from '@mui/material';
import { TodoComponent } from './TodoComponent/TodoComponent';
import { useTodo } from '../../contexts/context';
import { useNavigate, useParams } from 'react-router-dom';
import { TodoStoreFacade } from '../../contexts/facade';
import { Task } from '../../models';
import AlertDialog from '../Shared/components/AlertDialog/AlertDialog';
import { FilterBy } from './todo-detail.enum';

export const TodoDetail = () => {
  const { id } = useParams();
  const { state, dispatch } = useTodo();
  const [tasks, setTasks] = useState<Array<Task>>();
  const [taskIdDelete, setTaskIdDelete] = useState<number | undefined>(
    undefined
  );
  const [showAlertModal, setShowAlertModal] = useState(false);
  const navigate = useNavigate();
  const selectedTodo = state.todos.find((todo) => todo.id === Number(id));
  const task = selectedTodo?.tasks?.find((task) => task.id === taskIdDelete);

  useEffect(() => {
    if (selectedTodo) {
      setTasks(selectedTodo.tasks);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.todos]);

  const addTask = (name: string) => {
    id && dispatch(TodoStoreFacade.addTask(+id, name));
  };

  const checkedTask = (taskId: number) => {
    id && dispatch(TodoStoreFacade.completedTask(+id, taskId));
  };

  const filterBy = (filter: FilterBy) => {
    const filteredTasks = selectedTodo?.tasks?.filter((item: Task) => {
      switch (filter) {
        case FilterBy.PENDING:
          return !item.checked;
        case FilterBy.COMPLETED:
          return item.checked;
        case FilterBy.ALL:
        default:
          return true;
      }
    });
    setTasks(filteredTasks || []);
  };

  const removeTask = (taskId: number) => {
    setShowAlertModal(true);
    setTaskIdDelete(taskId);
  };

  const confirmDelete = () => {
    id &&
      taskIdDelete &&
      dispatch(TodoStoreFacade.removeTask(+id, taskIdDelete));
    setShowAlertModal(false);
  };

  const gotHome = () => {
    navigate(`/`);
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
          {`TO-DO ${selectedTodo?.name}`}
        </Typography>
        <Button color="inherit" onClick={() => gotHome()}>
          Home
        </Button>
      </Header>
      <Box
        component="main"
        sx={{ pt: 10, display: 'flex', justifyContent: 'center' }}
      >
        <Box component="div" sx={{ width: '60%' }}>
          <TodoComponent
            tasks={tasks || []}
            onAddTask={addTask}
            onCheckedTask={checkedTask}
            onFilterBy={filterBy}
            onRemoveTask={removeTask}
          />
        </Box>
      </Box>
      <AlertDialog
        showModal={showAlertModal}
        handleClose={() => setShowAlertModal(false)}
        confirm={confirmDelete}
        isTodo={false}
        name={task?.name}
      />
    </>
  );
};
