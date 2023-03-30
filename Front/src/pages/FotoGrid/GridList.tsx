import { Box } from "@mui/system"
import { Link } from "react-router-dom"

// styles
import styles from "./GridList.module.css"

const GridList = ({ posts }: any) => {
  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
        }}
      >
        {posts &&
          posts.map((post: any) => (
            <>
              <div className={styles.card} key={post.id}>
                <Link
                  to={`/posts/${post.id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <img src={post.image} />
                </Link>
              </div>
            </>
          ))}
      </Box>
    </>
  )
}

export default GridList
