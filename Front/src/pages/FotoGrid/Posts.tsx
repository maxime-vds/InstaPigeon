import { useNavigate, useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import Cardbar from "../../components/cardbar/Cardbar"

import { Box } from "@mui/system"
//components
import { useFetch } from "../../hooks/useFetch"
//styles
import styles from "./Posts.module.css"

const Posts = () => {
  const { id } = useParams()
  const url = "http://localhost:3000/posts/" + id
  const { data: card, isPending, error, postData } = useFetch(url)
  // sort cards here

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
        <div className={styles.singleCard}>
          <Link to="/grid"
          style={{textDecoration: "none", color: "black" }}>
            <img src={card.image} />

            <p>
              {card.caption},{card.id}
            </p>

          </Link>
            <Cardbar></Cardbar>
        </div>
      )}
    </Box>
  )
}

export default Posts
