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

            {/* problem with the unique id ?  */}
              <div className={styles.card} key={post.id}>
                <Link
                  key={post.id}
                  to={`/posts/${post.id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <img src={post.image} key={post.id} />
                </Link>
              </div>
            </>
          ))}
      </Box>
    </>
  )
}

export default GridList
