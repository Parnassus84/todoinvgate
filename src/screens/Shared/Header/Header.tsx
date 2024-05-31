import React from 'react'
import { AppBar, Button, Toolbar } from '@mui/material';
import { useTodo } from '../../../contexts/TodoState';


interface Props {
  children: React.ReactNode
}

export const Header = ({ children }: Props) => {
  const { addTodo } = useTodo();

  const register = () => {    
    addTodo('test2');
  }

  return (
    <AppBar position="fixed">
      <Toolbar>
        {children}        
        <Button color="inherit" onClick={() => register()}>Nuevo</Button>
      </Toolbar>
    </AppBar>
  )
}
