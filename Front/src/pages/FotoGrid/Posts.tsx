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
  // then map them out

  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {error && <p className="error">{error}</p>}
        {isPending && <p className="loading">Loading...</p>}
        {card && (
          <div className={styles.singleCard}>
            {/* can't hardcode the link, can I add -1 on Link? otherwise will have to figure out navigate here */}
            <Link to="/grid" style={{ textDecoration: "none", color: "black" }}>
              <div>
                <img src={card.image} />

                <p>
                  {card.caption},{card.id}
                </p>
              </div>
            </Link>
          </div>
        )}
      </Box>

      <Cardbar />
    </>
  )
}
export default Posts
