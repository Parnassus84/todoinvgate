import React from 'react'
import { AppBar, Button, Toolbar } from '@mui/material';

interface Props {
  children: React.ReactNode
}

export const Header = ({ children }: Props) => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        {children}        
        <Button color="inherit">Nuevo</Button>
      </Toolbar>
    </AppBar>
  )
}
