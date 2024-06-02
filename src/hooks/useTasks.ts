import { useEffect, useMemo, useState } from 'react';
import { ITask } from '../models';
import { taskService } from '../services/task/task.service';

export interface IUseTasks {
  todoId: string;
}

export const useTasks = ({ todoId }: IUseTasks) => {
  const [tasks, setTasks] = useState<Array<ITask>>();
  const [loading, setLoading] = useState(false);
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
    fetchTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todoId]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizedData = useMemo(() => tasks, [tasks]);
  return { tasks: memoizedData, loading };
};

