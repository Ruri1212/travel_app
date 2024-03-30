import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function Simplebox() {
  return (   
    
    <Box sx={{border: '2px dashed blue' }}>
        <Typography variant="h6" gutterBottom>
        行きたい都道府県をクリックしてください
        </Typography>
    </Box>
      
  );
}