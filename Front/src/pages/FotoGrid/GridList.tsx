import { Box } from "@mui/system"
import { Link } from "react-router-dom"

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
  const handleClick: () => void = () => {}

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
      }}
    >
      {posts &&
        posts.map((post: any) => (
          //ouput date of json here, same for comments on bottom
          <div className={styles.card} key={post.id} onClick={() => handleClick}>
            <Link
              to={`/posts/${post.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              {/* top  */}
              <div className={styles["card-top"]}></div>

              {/* picture */}

              <div className={styles.picture}>
                <img src={post.image} />
              </div>

              <p className={styles.paragraph}>
                {post.caption},{post.id}
              </p>

              {/* bottom */}
              <div className={styles["card-bottom"]}></div>
            </Link>
          </div>
        ))}
    </Box>
  )
}

export default GridList
