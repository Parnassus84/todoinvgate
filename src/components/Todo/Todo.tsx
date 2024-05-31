import React from 'react';
import { AddTask } from '../AddTask/AddTask';
import { TodoList } from '../TodoList/TodoList';
import { FilterTask } from '../Filter/FilterTask';

export const Todo = () => {
  // const [list, setList] = useState<Task[]>(localStorageService.getTodos());

  const onAddTask = (val: string) => {
    // const getList = localStorageService.addTask({
    //   name: val,
    //   checked: false,
    // });
    // setList(getList);
  };

  const onRemoveTask = (index: number) => {
    // const getList = localStorageService.removeTask(index);
    // setList(getList);
  };

  const onCheckedTask = (index: number) => {
    // const getList = localStorageService.sendToLast(index);
    // setList(getList);
  };

  const onFilterBy = (filter: string) => {
    // const getList = localStorageService.filterBy(filter);
    // setList(getList);
  };

  return (
    <div className="w-[500px] p-10 self-center">      
      <AddTask className="mb-3 text-xl text-center" addTask={onAddTask} />
      <FilterTask className="mb-3 text-xl" filterBy={onFilterBy} />
      <TodoList
        list={[]}
        onDeleted={onRemoveTask}
        onChecked={onCheckedTask}
      />
    </div>
  );
};
