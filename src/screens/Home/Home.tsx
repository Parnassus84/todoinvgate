import React from 'react'
import { Typography, Box } from '@mui/material'
import { Header } from '../Shared'
import { TodoLists } from './TodoLists/TodoLists';

export const Home = () => {
  return (
    <>
      <Header>
        <Typography variant="h6" color="inherit" component="div" sx={{ flexGrow: 1 }}>
          ManagTO-Do
        </Typography>
      </Header>
      <Box component="main" sx={{ pt: 10,display: 'flex', justifyContent: 'center'  }}>
        <Box component="div" sx={{ width: '60%' }}>
          <TodoLists todos={[]} />    
        </Box>
      </Box>
    </>
  )
}
