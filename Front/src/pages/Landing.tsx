import { useLinkClickHandler, useNavigate } from "react-router-dom"
import { useAuthStore } from "../context/authStore"
import { Link } from "react-router-dom"

//components
import { Box } from "@mui/system"
import {
  RickyPigeon,
  VeronicaPigeon,
  FreddyPigeon,
} from "../components/graphics/Pigeons"
import { Button } from "../components/button/Button"

//styles
import "./Landing.css"

export default function Landing() {
const navigate = useNavigate()


  const NavRegister = () => {
    navigate("/register")
  }


  return (
    <div
      className="Landing"
      style={{
        position: "absolute",
        backgroundColor: "#7F96FF",
        width: "100%",
        height: "360vh",
        overflow: "hidden",
      }}
    >
      <div
        className="purple-bg"
        style={{
          marginTop: "36rem",
          width: "100%",
          height: "80vh",
        }}
      ></div>
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        marginTop="10px"
      >
        <div style={{ marginBottom: "50px", textAlign: "center" }}>
          <h2
            style={{
              color: "#D9D9D9",
              fontSize: "2.6rem",
              marginTop: "10px",
              marginBottom: "20px",
            }}
          >
            InstaPigeon
          </h2>
          <p
            style={{
              fontFamily: "poppins",
              color: "#D9D9D9",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            Pigeons are often called the 'rats of the sky', but before we
            dismiss them entirely, let's take a closer look at these
            misunderstood birds. Despite their negative reputation, pigeons are
            fascinating creatures with a rich history of coexisting with humans
            in cities around the world.
          </p>
          <Button buttonText="Sign me up!" onClick={NavRegister}></Button> 
        </div>

        {/* every should probably be a component, so it's easier to re-use for different screens ?  */}
        {/* change flex direction on bigger screens ? */}
        <div
          className="illustration-wrap"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <RickyPigeon />

          <p
            style={{
              position: "relative",
              fontFamily: "poppins",
              color: "#D9D9D9",
              textAlign: "center",
            }}
          >
            This is Ricky, raised on greasy pizza found in the trash and monster
            energy mixed with starbucks coffee Don’t let the scar over his eye
            fool you, he’s actually a really nice pigeon even though he’s
            carrying a new strain of bird covid
          </p>
          <VeronicaPigeon />

          <p
            style={{
              position: "relative",
              fontFamily: "poppins",
              color: "#D9D9D9",
              textAlign: "center",
            }}
          >
            This is Ricky, raised on greasy pizza found in the trash and monster
            energy mixed with starbucks coffee Don’t let the scar over his eye
            fool you, he’s actually a really nice pigeon even though he’s
            carrying a new strain of bird covid
          </p>

          <div
            className="purple-bg"
            style={{
              marginTop: "85rem",
              width: "100%",
              height: "80vh",
            }}
          />

          <FreddyPigeon />

          <p
            style={{
              position: "relative",
              fontFamily: "poppins",
              color: "#D9D9D9",
              textAlign: "center",
            }}
          >
            This is Ricky, raised on greasy pizza found in the trash and monster
            energy mixed with starbucks coffee Don’t let the scar over his eye
            fool you, he’s actually a really nice pigeon even though he’s
            carrying a new strain of bird covid
          </p>

        </div>
      </Box>
    </div>
  )
}
