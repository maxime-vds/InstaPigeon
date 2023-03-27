import { Box } from "@mui/system"
import { useFetch } from "../hooks/useFetch"

// type postProps = {
//   id: number
//   caption: string
//   comments: string
//   likes: number
//   follow: boolean
//   image: string
// }

// const data = [0,1]

const Posts = ({posts}:any) => {



  return (


    
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {posts && posts.map((post:any) => (
        //ouput date of json here, same for comments on bottom
        <div
          className="card"
          key={post.id}
          style={{
            height: "500px",
            minWidth: "90vw",
            textAlign: "center",
            backgroundColor: "#5A558F",
            marginTop: "10px",
            marginBottom: "5px",
            borderRadius: "10px",
          }}
        >
          {/* top  */}
          <div
            className="card-top"
            style={{
              backgroundColor: "#5A558F",
              width: "100%",
              height: "2.5rem",
              borderRadius: "10px 10px 0 0",
            }}
          ></div>

          {/* picture */}

          <div className="picture">
            <img
              src={post.image}
              style={{
                width: "100%",
                maxHeight: "21.22rem",
              }}
            />
          </div>

          {/* <h2>card : {post.title}</h2> */}

          {/* bottom */}
          <div
            className="card-bottom"
            style={{
              backgroundColor: "#5A558F",
              width: "100%",
              height: "2.6rem",
              borderRadius: "0 0 10px 10px",
            }}
          ></div>
        </div>
      ))}
    </Box>
  )
}

export default Posts
