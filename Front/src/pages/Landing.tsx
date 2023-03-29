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
        height: "350vh",
        overflow: "hidden",
      }}
    >
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        marginTop="10px"
      >
        <div style={{ marginBottom: "70px", textAlign: "center" }}>
          <h2
            style={{
              color: "#D9D9D9",
              fontSize: "2.6rem",
            }}
          >
            InstaPigeon
          </h2>

          <p className="paragraph"
          style={{marginBottom: "40px"}}>
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
          <div
            className="purple-bg"
            style={{
              width: "100%",
              height: "75vh",
            }}
          >
            <RickyPigeon />

            <p className="paragraph" style={{}}>
              This is Ricky, raised on greasy pizza found in the trash and
              monster energy mixed with starbucks coffee Don’t let the scar over
              his eye fool you, he’s actually a really nice pigeon even though
              he’s carrying a new strain of bird covid
            </p>
          </div>

          <VeronicaPigeon />

          <p className="paragraph">
            This is Ricky, raised on greasy pizza found in the trash and monster
            energy mixed with starbucks coffee Don’t let the scar over his eye
            fool you, he’s actually a really nice pigeon even though he’s
            carrying a new strain of bird covid
          </p>

          <div
            className="purple-bg"
            style={{
              width: "100%",
              height: "80vh",
              marginTop: "20px",
            }}
          >
            <FreddyPigeon />

            <p className="paragraph">
              This is Ricky, raised on greasy pizza found in the trash and
              monster energy mixed with starbucks coffee Don’t let the scar over
              his eye fool you, he’s actually a really nice pigeon even though
              he’s carrying a new strain of bird covid
            </p>
          </div>
        </div>

        <div className="footer"
          style={{marginTop: "20px"}}>
          <h2 style={{ textAlign: "center" }}>
            Where we're going we don't need no roads
          </h2>

          <div
            className="footer-list"
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div className="footer-left">
              <ul>
                <li>Product</li>
                <li>Download</li>
                <li>Albatros</li>
                <li>Status</li>
              </ul>

              <ul>
                <li>Resources</li>
                <li>College</li>
                <li>Support</li>
                <li>FAQ</li>
                <li>Feedback</li>
              </ul>
            </div>

            <div className="footer-right">
              <ul>
                <li>Company</li>
                <li>About</li>
                <li>Jobs</li>
                <li>Branding</li>
              </ul>

              <ul>
                <li>Policies</li>
                <li>Terms</li>
                <li>Privacy</li>
                <li>Cookie settings</li>
                <li>Guidelines</li>
              </ul>
            </div>
          </div>
        </div>
      </Box>
    </div>
  )
}
