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
          <div className={styles.card} key={post.id}>
            <Link
              to={`/posts/${post.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              {/* top  */}
              {/* <div className="card-top"></div> */}

              {/* picture */}

                <img src={post.image} />
{/* 
              <p>
                {post.caption},{post.id}
              </p> */}

              {/* bottom */}
              {/* <div className="card-bottom"></div> */}
            </Link>
          </div>
        ))}
    </Box>
  )
}

export default GridList
