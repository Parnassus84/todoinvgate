import { useEffect, useMemo, useState } from 'react';
import { ITask } from '../models';
import { taskService } from '../services/task/task.service';
import { useTodo } from '../contexts/context';

export interface IUseTasks {
  todoId: string;
}

export const useTasks = ({ todoId }: IUseTasks) => {
  const [tasks, setTasks] = useState<Array<ITask>>();
  const [loading, setLoading] = useState(false);
  const {state} = useTodo();
  const selectedTodo = state.todos.find((todo) => todo.id === todoId);

  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      try {
        const response = await taskService.getTasks(todoId);
        if (response) {
          setTasks(response);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };  
    if(!selectedTodo?.tasks) fetchTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizedData = useMemo(() => tasks, [tasks]);
  return { tasks: memoizedData, loading };
};

