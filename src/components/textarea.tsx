import * as React from 'react';
import Box from '@mui/joy/Box';
import Textarea from '@mui/joy/Textarea';

export default function TextareaVariants({text}:{text:string}) {
  return (
    
    <Box
      sx={{
        py: 1,
        // display: 'grid',
        gap: 0,
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <Textarea name="Outlined" placeholder={text} variant="outlined" />     
    </Box>
  );
}