import Box from "@mui/material/Box"
import { styled } from "@mui/material/styles"
import Paper from "@mui/material/Paper"
import Masonry from "@mui/lab/Masonry"
import type {} from "@mui/lab/themeAugmentation"
import { useFetch } from "../hooks/useFetch"
import Posts from "./Posts"

import "./Grid.css"

const cards = [1, 2, 3, 4, 5]
// replace this array by json file

export default function Grid() {
  const url = "http://localhost:3000/posts"

  const { data, isPending, error, postData } = useFetch(url)



  return (
    
    <div className="home">
      Home
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <Posts posts={data}/>}
    </div>

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
