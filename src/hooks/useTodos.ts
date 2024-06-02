import { useEffect, useState } from 'react';
import { ITodo } from '../models';
import { todoService } from '../services/todo/todo.service';

export const useTodos = () => {
  const [todos, setTodos] = useState<Array<ITodo>>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchTodos = async () => {
      setLoading(true);
      setTodos([]);
      try {
        const response = await todoService.getTodos();
        if (response) {
          setTodos(response);
        }
      }
      catch (error) {
        console.log(error);
      }
      finally {
        setLoading(false);
      }
    };
    fetchTodos();
  }, []);

  return { loading, todos };
};