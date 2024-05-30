import React, { useState } from 'react';
import { Header } from '../Header/Header';
import { AddTask } from '../AddTask/AddTask';
import { FilterTask } from '../Filter/FilterTask';
import { TodoList } from '../TodoList/TodoList';
import { Task } from '../../models/task';

const testList = [
  {
    name: 'Task 1',
    checked: false,
  },
  {
    name: 'Task 2',
    checked: true,
  },
  {
    name: 'Task 3',
    checked: false,
  },
  {
    name: 'Task 4',
    checked: true,
  }
];


export const Todo = () => {
  const [list, setList] = useState<Task[]>(testList);


  const onAddTask = (val: string) => {
 
  }; 

  const onFilterBy = (filter: string) => {
    
  };

  const onRemoveTask = (index: number) => {
    setList([]);
  };

  const onCheckedTask = (index: number) => {
    
  };

  return (
    <div className="w-[500px] p-10 self-center">
      <Header className="mb-3 text-xl text-center">
        <h1>TO-DO List</h1>
      </Header>
      <AddTask className="mb-3 text-xl text-center" addTask={onAddTask} />
      <FilterTask className="mb-3 text-xl" filterBy={onFilterBy} />    
      <TodoList
        list={list}
        onDeleted={onRemoveTask}
        onChecked={onCheckedTask}
      />  
    </div>
  );
};
