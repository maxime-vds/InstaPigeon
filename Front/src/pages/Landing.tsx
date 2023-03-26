import { useNavigate } from "react-router-dom"
import { useAuthStore } from "../context/authStore"
import { Box } from "@mui/system"
import { Link } from "react-router-dom"

export default function Landing() {
  return (
    <>
      <div className="Landing">
        <Box
          style={{
            position: "relative",
            backgroundColor: "#7F96FF",
            width: "100vw",
            height: "100vh",
          }}
          display="flex"
          justifyContent="center"
          flexDirection="column"
        >
          <h2
            style={{
              marginTop: "6rem",
              color: "#D9D9D9",
              textAlign: "center",
              fontSize: "2.6rem",
            }}
          >
            InstaPigeon
          </h2>
          <p
            style={{
              fontFamily: "poppins",
              color: "#D9D9D9",
              textAlign: "center",
              margin: "16px",
            }}
          >
            Pigeons are often called the 'rats of the sky', but before we
            dismiss them entirely, let's take a closer look at these
            misunderstood birds. Despite their negative reputation, pigeons are
            fascinating creatures with a rich history of coexisting with humans
            in cities around the world.
          </p>
          <Link to="/login">Login</Link>

          {/* every should probably be a component, so it's easier to re-use for different screens ?  */}

          <img src="/RickyPigeon.png" width="500px"></img>
          {/* <p
            style={{
              fontFamily: "poppins",
              color: "#D9D9D9",
              textAlign: "center",
              margin: "16px",
            }}
          >
            This is Ricky, raised on greasy pizza found in the trash and monster
            energy mixed with starbucks coffee Don’t let the scar over his eye
            fool you, he’s actually a really nice pigeon even though he’s
            carrying a new strain of bird covid
          </p> */}
        </Box>
      </div>
    </>
  )
}
