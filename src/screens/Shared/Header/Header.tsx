import React from 'react'
import { AppBar, Toolbar } from '@mui/material';

interface Props {
  children: React.ReactNode;  
}

export const Header = ({ children }: Props) => { 

  return (
    <AppBar position="fixed">
      <Toolbar>
        {children}                 
      </Toolbar>
    </AppBar>
  )
}
