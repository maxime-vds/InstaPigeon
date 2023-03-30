import { Box } from "@mui/system"
import { Link } from "react-router-dom"
import Cardbar from "../../components/cardbar/Cardbar"

// styles
import styles from "./GridList.module.css"

// type postProps = {
//   id: number
//   caption: string
//   comments: string
//   likes: number
//   follow: boolean
//   image: string
// }

const GridList = ({ posts }: any) => {
  return (
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
  )
}

export default GridList
