import Box from "@mui/material/Box"
import { styled } from "@mui/material/styles"
import Paper from "@mui/material/Paper"
import Masonry from "@mui/lab/Masonry"
import type {} from "@mui/lab/themeAugmentation"

import "./Grid.css"

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

// styled component, with dark mode!

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(0.5),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// might just create

const cards = [1, 2, 3, 4, 5]

export default function Grid() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {cards.map((card, index) => (
        <div
          className="card"
          key={index}
          style={{
            height: "500px",
            minWidth: "90vw",
            textAlign: "center",
            backgroundColor: "#D9D9D9",
            marginTop: "10px",
            marginBottom: "5px",
            borderRadius: "10px",

          }}
        >
          {/* top  */}
          <div
            className="card-top"
            style={{
              backgroundColor: "#5A558F",
              width: "100%",
              height: "2.5rem",
              borderRadius: "10px 10px 0 0",
            }}
          ></div>

          {/* picture */}

          <div className="picture">
            <img
              src="../../RickyPigeon.png"
              style={{
                width: "100%",
                maxHeight: "21.22rem",
              }}
            />
          </div>

          <h2>card : {card}</h2>

          {/* bottom */}
          <div
            className="card-bottom"
            style={{
              backgroundColor: "#5A558F",
              width: "100%",
              height: "2.6rem",
              borderRadius: "0 0 10px 10px",
            }}
          ></div>
        </div>
      ))}
    </Box>
  )
}

// return different grid based on screen, mediaquery

{
  /* 
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
*/
}
