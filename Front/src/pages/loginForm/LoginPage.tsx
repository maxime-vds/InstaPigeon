import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { useAuthStore } from "../../context/authStore"
import { BackgroundCard } from "./BackgroundCard"
import { LoginForm } from "./LoginForm"
import { Box } from "@mui/system"

function LoginPage() {
  const { authed, login } = useAuthStore()
  const { state } = useLocation()
  const navigate = useNavigate()

  //inputState
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  //errorStates
  const [usernameErr, setUsernameErr] = useState<boolean>(false)
  const [passwordErr, setPasswordErr] = useState<boolean>(false)

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log("handleLogin launched")
    console.log(authed)

    setUsernameErr(false)
    setPasswordErr(false)

    // form validation

    // put this in a seperate hook ?

    if (username === "") {
      setUsernameErr(true)
    }
    if (password === "") {
      setPasswordErr(true)
    }

    fetch("https://apilogin.herokuapp.com/api/auth/signin", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
      // just gonna do a res.ok check here but might need some extra checks
      .then((res) => {
        if (!res.ok) {
          console.log("failed to log in")
          // navigate(state?.path || "/")
          // catch error here?
        } else {
          login()
          console.log("logged in succesfully!")
        }
      })
  }

  // navigation on if(data) via useEffect

  useEffect(() => {
    if (authed) {
      navigate("/home")
    }
  }, [authed])

  // console.log(authed)

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#D9D9D9",
          overflow: "hidden",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            position: "relative",
            backgroundColor: "#BD9B45",
            margin: "20px",
            height: "80vh",
            width: "88vw",
            borderRadius: "8px",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              color: "#D9D9D9",
              margin: "10px",
            }}
          >
            Look what the pigeon dragged in!
          </h2>
          <p
            style={{
              textAlign: "center",
              color: "#D9D9D9",
              fontSize: "13px",
              margin: "20px",
              fontFamily: "worksans",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Glad to see you! if you ever get sick of our pigeon puns, why not
            join our flock and check out our job listings, so we can see even
            more of you!
          </p>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Box
              sx={{
                position: "relative",
                backgroundColor: "#D9D9D9",
                marginTop: "8px",
                height: "28vh",
                borderRadius: "8px",
              }}
            >
              <LoginForm
                handleLogin={handleLogin}
                setUsername={setUsername}
                usernameErr={usernameErr}
                setPassword={setPassword}
                passwordErr={passwordErr}
              />
            </Box>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <img
              src="../../public/RickyPigeon.png"
              alt="RickyPigeon"
              style={{ position: "relative", width: "35rem", left: "2.5rem" }}
            />
          </div>
        </Box>
      </div>
    </>
  )
}

export default LoginPage
