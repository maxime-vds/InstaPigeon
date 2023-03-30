import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import type {} from "@mui/lab/themeAugmentation";

import "./Grid.css";

const cards = [1, 2, 3, 4, 5];
// replace this array by json file

const StyledCard = styled("div")(({ theme }) => ({
  height: "500px",
  minWidth: "300px",
  textAlign: "center",
  backgroundColor: "#5A558F",
  marginTop: "10px",
  marginBottom: "5px",
  borderRadius: "10px",
  [theme.breakpoints.up("sm")]: {
    minWidth: "400px",
  },
  [theme.breakpoints.up("md")]: {
    minWidth: "500px",
    minHeight:"580px"
  },
}));

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
        <StyledCard className="card" key={index}>
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
        </StyledCard>
      ))}
    </Box>
  );
}
