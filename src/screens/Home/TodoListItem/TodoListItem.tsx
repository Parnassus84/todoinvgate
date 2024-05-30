import React from 'react'
import { Divider, IconButton, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Todo } from '../../../models';
interface Props {
  todo: Todo;
  edit?: () => void;
}

export const TodoListItem = ({ todo: {name}, edit }: Props) => {
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemButton
          role="button"
          onClick={edit}
          dense          
        >       
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
        >
          <EditIcon color="primary" fontSize="medium" />
        </IconButton>  
        <IconButton
          aria-label="LocationOn"          
          className="self-center"       
        >
          <DeleteIcon color="primary" fontSize="medium" />
        </IconButton>
      </ListItem>
      <Divider variant="middle" component="li" />
    </>
  )
}

