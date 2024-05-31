import React from 'react'
import { Header } from '../Shared'
import { Box, Typography } from '@mui/material'
import { Todo } from '../../components/Todo/Todo';

export const TodoDetail = () => {
  

  return (
    <>
      <Header>
        <Typography
          variant="h6"
          color="inherit"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          TO-DOs
        </Typography>
      </Header>
      <Box
        component="main"
        sx={{ pt: 10, display: 'flex', justifyContent: 'center' }}
      >
        <Box component="div" sx={{ width: '60%' }}>
          <Todo />
        </Box>
      </Box>      
    </>
  )
}
