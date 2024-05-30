import React from 'react';
import { Header } from '../Header/Header';
import { AddTask } from '../AddTask/AddTask';

import { FilterTask } from '../Filter/FilterTask';

export const Todo = () => {


  const onAddTask = (val: string) => {
 
  }; 

  const onFilterBy = (filter: string) => {
    
  };

  return (
    <div className="w-[500px] p-10 self-center">
      <Header className="mb-3 text-xl text-center">
        <h1>TO-DO List</h1>
      </Header>
      <AddTask className="mb-3 text-xl text-center" addTask={onAddTask} />
      <FilterTask className="mb-3 text-xl" filterBy={onFilterBy} />      
    </div>
  );
};
