import React, { ComponentProps, FC } from 'react';
import { TodoItem } from '../TodoItem/TodoItem';
import { Task } from '../../../models/task';

interface Props extends ComponentProps<any> {
  list: Array<Task>;
  onDeleted: (id: number) => void;
  onChecked: (id: number) => void;
}

export const TodoList: FC<Props> = ({
  list,
  onDeleted,
  onChecked,
  ...restProps
}) => {
  return (
    <div {...restProps}>
      {list.map(({ id, name, checked }: Task, index: number) => (
        <TodoItem
          key={`task-${index}`}
          name={name}
          deleted={() => onDeleted(id)}
          isChecked={checked}
          onChecked={() => onChecked(id)}
        />
      ))}
    </div>
  );
};
