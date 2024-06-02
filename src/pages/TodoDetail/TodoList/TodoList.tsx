import React, { ComponentProps, FC } from 'react';
import { TodoItem } from '../TodoItem/TodoItem';
import { ITask } from '../../../models/task';

interface Props extends ComponentProps<any> {
  list: Array<ITask>;
  onDeleted: (id: string) => void;
  onChecked: (task: ITask) => void;
}

export const TodoList: FC<Props> = ({
  list,
  onDeleted,
  onChecked,
  ...restProps
}) => {
  return (
    <div {...restProps}>
      {list.map((task: ITask, index: number) => (
        <TodoItem
          key={`task-${index}`}
          name={task.name}
          deleted={() => onDeleted(task.id)}
          isChecked={task.checked}
          onChecked={() => onChecked(task)}
        />
      ))}
    </div>
  );
};
