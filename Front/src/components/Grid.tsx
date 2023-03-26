import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import {createTheme} from '@mui/material/styles';

import type {} from '@mui/lab/themeAugmentation';




// const theme = createTheme({
//     components: {
//       MuiTimeline: {
//         styleOverrides: {
//           root: {
//             backgroundColor: 'red',
//           },
//         },
//       },
//     },
//   });


// const heights = [150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const heights =[500]


export default function Grid() {
  return (
<div className="BasicMasonry">
   <h2>Grid</h2> 

    <Box sx={{ width: 1800, minHeight: 393 }}>
      <Masonry columns={4} spacing={2}>
        {heights.map((height, index) => (
          <Item key={index} sx={{ height }}>
            {index + 1}
          </Item>
        ))}
      </Masonry>
    </Box>

    </div>



  );
}