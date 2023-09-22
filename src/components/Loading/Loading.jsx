import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loading = () => {
  return (
    <div>
        <Box sx={{ display: 'flex', alignItems : "center", justifyContent : "center"}}>
            <CircularProgress />
        </Box>
    </div>
  )
}

export default Loading;

// imported Box and CircularProgerss component from MUI library.... 