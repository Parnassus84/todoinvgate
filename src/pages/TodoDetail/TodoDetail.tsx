/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useState } from 'react';
import { Header } from '../../shared/components';
import { Box, Button, CircularProgress, Typography } from '@mui/material';
import { TodoComponent } from './TodoComponent/TodoComponent';
import { useNavigate, useParams } from 'react-router-dom';
import { ITask } from '../../models';
import AlertDialog from '../../shared/components/AlertDialog/AlertDialog';
import { FilterBy } from './todo-detail.enum';
import { IAddTaskParams } from '../../services/task/interface/task.dto';
import { useAppDispatch, useAppSelector } from '../../redux';
import { todoSelector } from '../../redux/todos/selectors';
import {
  addTaskAction,
  completedTaskAction,
  getTasksAction,
} from '../../redux/todos';
import { deleteTaskAction } from '../../redux/todos/async-thunks/delete-task';

const TodoDetailPage: FC = () => {
  const { id = '' } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  const [taskDelete, setTaskDelete] = useState<ITask>();
  const [showAlertModal, setShowAlertModal] = useState(false);
  const navigate = useNavigate();
  const { tasksLoading } = useAppSelector((state) => state.todoSection);
  const selectedTodo = useAppSelector(todoSelector(id));

  const [tasks, setTasks] = useState<Array<ITask>>([]);

  useEffect(() => {
    if (selectedTodo && !selectedTodo?.tasks) {     
      dispatch(getTasksAction(id));
    }
  }, [selectedTodo]);

  useEffect(() => {     
    selectedTodo?.tasks && setTasks(selectedTodo.tasks);
  }, [selectedTodo]);

  const addTask = async (name: string) => {
    if (!name) return;
    const newTask: IAddTaskParams = {
      name,
      checked: false,
      todoId: id || '',
    };

    dispatch(addTaskAction(newTask));
  };

  const completedTask = async (task: ITask) => {
    dispatch(completedTaskAction(task));
  };

  const filterBy = (filter: FilterBy) => {
    const filteredTasks = selectedTodo?.tasks?.filter((item: ITask) => {
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

  const deleteTask = (taskId: string) => {
    const task = selectedTodo?.tasks?.find((task) => task.id === taskId);
    setTaskDelete(task);
    setShowAlertModal(true);
  };

  const confirmDelete = async () => {
    taskDelete && dispatch(deleteTaskAction(taskDelete.id));
    setShowAlertModal(false);
  };

  const gotHome = () => {
    navigate(`/`);
  };

  return (
    <>
      {tasksLoading ? (
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
              {`TO-DO ${selectedTodo?.name}`}
            </Typography>
            <Button
              color="inherit"
              onClick={() => gotHome()}
              data-test="buttonHome"
            >
              Home
            </Button>
          </Header>
          <Box
            component="main"
            sx={{ pt: 10, display: 'flex', justifyContent: 'center' }}
          >
            <Box component="div" sx={{ width: '60%' }}>
              <TodoComponent
                tasks={tasks}
                onAddTask={addTask}
                onCheckedTask={completedTask}
                onFilterBy={filterBy}
                onRemoveTask={deleteTask}
              />
            </Box>
          </Box>
          <AlertDialog
            showModal={showAlertModal}
            handleClose={() => setShowAlertModal(false)}
            confirm={confirmDelete}
            isTodo={false}
            name={taskDelete?.name}
          />
        </>
      )}
    </>
  );
};

export default TodoDetailPage;
