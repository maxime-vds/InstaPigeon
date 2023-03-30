import { useNavigate, useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import Cardbar from "../../components/cardbar/Cardbar"

import { Box } from "@mui/system"
//components
import { useFetch } from "../../hooks/useFetch"
//styles
import "./Posts.css"

const Posts = () => {
  const { id } = useParams()
  const url = "http://localhost:3000/posts/" + id
  const { data: card, isPending, error, postData } = useFetch(url)

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {card && (
        <div className="singleCard">
          <Link to="/grid">
          <div className="card-top"></div>

          <div className="picture">
            <img src={card.image} />
          </div>

          <p>
            {card.caption},{card.id}
          </p>

          {/* <div className="card-bottom"></div> */}
          <Cardbar></Cardbar>

        </Link>
        </div>
      )}
    </Box>
  )
}

export default Posts
