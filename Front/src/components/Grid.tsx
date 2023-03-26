import Box from "@mui/material/Box"
import { styled } from "@mui/material/styles"
import Paper from "@mui/material/Paper"
import Masonry from "@mui/lab/Masonry"
import type {} from "@mui/lab/themeAugmentation"

import "./Grid.css"

const cards = [1, 2, 3, 4, 5]
// replace this array by json file

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
        //ouput date of json here, same for comments on bottom
          <div
            className="card"
            key={index}
            style={{
              height: "500px",
              minWidth: "90vw",
              textAlign: "center",
              backgroundColor: "#5A558F",
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
