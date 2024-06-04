import React from 'react';
import {
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { ITodo } from '../../../models';
interface Props {
  todo: ITodo;
  last?: boolean;
  deleted?: () => void;
  edit?: () => void;
  view?: () => void;
}

export const TodoListItem = ({
  todo: { name, id },
  edit,
  deleted,
  view,
  last
}: Props) => {
  return (
    <>
      <ListItem alignItems="flex-start" data-test="itemTodo">
        <ListItemButton role="button" onClick={view} data-testid={`view-button-${id}`} dense>
          <ListItemText
            primary={
              <>
                <Typography
                  sx={{ display: 'block' }}
                  component="span"
                  variant="h6"
                  color="text.primary"
                >
                  {name}
                </Typography>
              </>
            }
          />
        </ListItemButton>
        <IconButton
          aria-label="LocationOn"
          className="self-center"
          onClick={edit}
          data-testid={`edit-button-${id}`}
        >
          <EditIcon color="primary" fontSize="medium" />
        </IconButton>
        <IconButton
          aria-label="LocationOn"
          className="self-center"
          onClick={deleted}
          data-testid={`delete-button-${id}`}
        >
          <DeleteIcon color="primary" fontSize="medium" />
        </IconButton>
      </ListItem>
      { !last && (<Divider variant="middle" component="li" data-testid={`divider-${id}`}/>) }
    </>
  );
};
