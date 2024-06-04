import React from 'react';
import { AddTask } from '../AddTask/AddTask';
import { TodoList } from '../TodoList/TodoList';
import { FilterTask } from '../Filter/FilterTask';
import { ITask } from '../../../models';
import { FilterBy } from '../todo-detail.enum';

interface Props {
  tasks: Array<ITask>;
  onAddTask: (name: string) => void;
  onRemoveTask: (id: string) => void;
  onCheckedTask: (task: ITask) => void;
  onFilterBy: (filter: FilterBy) => void;
}

export const TodoComponent = ({
  tasks,
  onAddTask,
  onRemoveTask,
  onCheckedTask,
  onFilterBy,
}: Props) => {
  return (
    <div className="self-center w-full p-10">
      <AddTask className="mb-3 text-xl text-center" addTask={onAddTask}/>
      <FilterTask className="mb-3 text-xl" filterBy={onFilterBy} />
      <TodoList
        list={tasks || []}
        onDeleted={onRemoveTask}
        onChecked={onCheckedTask}
      />
    </div>
  );
};
