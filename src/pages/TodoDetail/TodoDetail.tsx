import React, { FC, useEffect, useState } from 'react';
import { Header } from '../../shared/components';
import { Box, Button, CircularProgress, Typography } from '@mui/material';
import { TodoComponent } from './TodoComponent/TodoComponent';
import { useTodo } from '../../contexts/context';
import { useNavigate, useParams } from 'react-router-dom';
import { TodoStoreFacade } from '../../contexts/facade';
import { ITask } from '../../models';
import AlertDialog from '../../shared/components/AlertDialog/AlertDialog';
import { FilterBy } from './todo-detail.enum';
import { ISaveTaskParams } from '../../services/task/interface/task.dto';
import { taskService } from '../../services/task/task.service';
import { useTasks } from '../../hooks/useTasks';

const TodoDetailPage: FC = () => {
  const { id = '' } = useParams<{ id: string }>();
  const { state, dispatch } = useTodo();
  const [taskDelete, setTaskDelete] = useState<ITask>();
  const [showAlertModal, setShowAlertModal] = useState(false);
  const navigate = useNavigate();
  const selectedTodo = state.todos.find((todo) => todo.id === id);
  const [tasks, setTasks] = useState<Array<ITask>>([]);

  const { tasks: tasksEntries, loading } = useTasks({ todoId: id });
  // eslint-disable-next-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (selectedTodo && !selectedTodo?.tasks && tasksEntries) {
      dispatch(TodoStoreFacade.getTasks(id, tasksEntries));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTodo, tasksEntries]);

  useEffect(() => {
    selectedTodo?.tasks && setTasks(selectedTodo.tasks);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTodo?.tasks]);

  const addTask = async (name: string) => {
    if (!name) return;
    const newTask: ISaveTaskParams = {
      name,
      checked: false,
      todoId: id || '',
    };

    const taskResponse = await taskService.saveTask(newTask);
    id && dispatch(TodoStoreFacade.addTask(id, taskResponse));
  };

  const checkedTask = async (task: ITask) => {
    const tasksResponse = await taskService.completedTask(task);
    id && dispatch(TodoStoreFacade.completedTask(id, tasksResponse.id));
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

  const removeTask = (taskId: string) => {
    const task = selectedTodo?.tasks?.find((task) => task.id === taskId);
    setTaskDelete(task);
    setShowAlertModal(true);
  };

  const confirmDelete = async () => {
    const tasksResponse = await taskService.deleteTask(
      taskDelete?.id as string
    );
    id &&
      taskDelete &&
      dispatch(TodoStoreFacade.removeTask(id, tasksResponse.id));
    setShowAlertModal(false);
  };

  const gotHome = () => {
    navigate(`/`);
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
              {`TO-DO ${selectedTodo?.name}`}
            </Typography>
            <Button color="inherit" onClick={() => gotHome()} data-test="buttonHome">
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
            name={taskDelete?.name}
          />
        </>
      )}
    </>
  );
};

export default TodoDetailPage;
