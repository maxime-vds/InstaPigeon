
import { Box } from "@mui/system"
//components

//styles
const Posts = ({ posts }: any) => {
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
      {posts &&
        posts.map((post: any) => (
          //ouput date of json here, same for comments on bottom
          <div className="card" key={post.id}>
            {/* top  */}
            <div className="card-top"></div>

            {/* picture */}

            <div className="picture">
              <img src={post.image} />
            </div>

            <p>{post.caption}</p>

            {/* bottom */}
            <div className="card-bottom"></div>
          </div>
        ))}
    </Box>
  )
}

export default Posts