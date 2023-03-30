import { Comment } from "@mui/icons-material"
import { Box } from "@mui/system"
import { Link } from "react-router-dom"

// styles
import "./GridList.css"

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
        gridTemplateColumns: "auto auto auto",
      }}
    >
      {posts &&
        posts.map((post: any) => (
          //ouput date of json here, same for comments on bottom
          <div className="card" key={post.id} onClick={() => handleClick}>
            <Link
              to={`/posts/${post.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              {/* top  */}
              <div className="card-top"> </div>

              {/* picture */}

              <div className="picture">
                <img src={post.image} />
              </div>

              <p>
                {post.caption},{post.id}
              </p>

              {/* bottom */}
              <div className="card-bottom"></div>
            </Link>
          </div>
        ))}
       
    </Box>
  )
}

export default GridList
