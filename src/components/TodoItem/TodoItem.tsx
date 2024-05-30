import React, { FC } from "react";
import { Button, Checkbox } from "@mui/material";

interface Props {
  name: string;
  isChecked: boolean;
  onChecked: () => void;
  deleted: () => void;
}

export const TodoItem: FC<Props> = ({ name, isChecked = false, onChecked, deleted }) => {

  return (
    <div className="flex align-center">
      <Checkbox checked={isChecked} onChange={onChecked} />
      <div className={`self-center flex-1 ${isChecked ? 'line-through' : ''}`}>{name}</div>
      <Button onClick={() => deleted()} className="self-center">X</Button>
    </div>
  );
}