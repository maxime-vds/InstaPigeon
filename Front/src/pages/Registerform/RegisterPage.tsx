import { TextField, Typography } from "@mui/material"
import { Box } from "@mui/material"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { RegisterForm } from "./RegisterForm"

function RegisterPage() {
  const navigate = useNavigate()

  //inputStates
  const [firstname, setFirstname] = useState<string>("")
  const [lastname, setLastname] = useState<string>("")
  const [username, setUsername] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [passwordAgain, setPasswordAgain] = useState<string>("")

  //errorStates
  const [firstnameErr, setFirstnameErr] = useState<boolean>(false)
  const [lastnameErr, setLastnameErr] = useState<boolean>(false)
  const [usernameErr, setUsernameErr] = useState<boolean>(false)
  const [emailErr, setEmailErr] = useState<boolean>(false)
  const [passwordErr, setPasswordErr] = useState<boolean>(false)
  const [passwordAgainErr, setPasswordAgainErr] = useState<boolean>(false)

  const fetchAccount = async () => {
    const settings = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstname, lastname, username, email, password }),
    }
    try {
      const response = await fetch(
        "https://apilogin.herokuapp.com/api/auth/signup",
        settings
      )
    } catch (err) {
      console.log(err)
    }
    navigate("/login")
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFirstnameErr(false)
    setLastnameErr(false)
    setUsernameErr(false)
    setEmailErr(false)
    setPasswordErr(false)
    setPasswordAgainErr(false)

    // form validation

    if (firstname === "") {
      setFirstnameErr(true)
    }
    if (lastname === "") {
      setLastnameErr(true)
    }
    if (username === "") {
      setUsernameErr(true)
    }
    if (password === "") {
      setPasswordErr(true)
    }
    if (passwordAgain === "") {
      setPasswordAgainErr(true)
    }
    if (email === "") {
      setEmailErr(true)
    }
    if (firstname && lastname && email && password && passwordAgain) {
      if (password !== passwordAgain) {
        setPassword("")
        setPasswordAgain("")
        setPasswordErr(true)

        console.log("something went wrong")
      } else if (password === passwordAgain) {
        console.log("trying to create user")
        fetchAccount()
      } else {
        console.log("nope")
      }
    }
  }

  // this logic seems crap too

  return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#D9D9D9",
          height: "100%",
          overflow: "hidden"
        }}
      >
        <Box
          sx={{
            position: "relative",
            backgroundColor: "#BD9B45",
            marginTop: "25px",
            marginBottom: "80px",
            height: "80vh",
            width: "88vw",
            borderRadius: "8px",
            
          }}
        >
          <h3
            style={{ textAlign: "center", color: "#D9D9D9", marginTop: "15px" }}
          >
            Before you fly, lets get you chipped first
          </h3>
          <p
            style={{
              textAlign: "center",
              color: "#D9D9D9",
              fontSize: "13px",
              margin: "20px",
              fontFamily: "worksans",
              marginBottom: "20px",
            }}
          >
            Don't worry we don't care about selling you anything We just need a
            name to add to a number, so we can easily find your pigeons in our
            coop
          </p>
          <Typography
            align="center"
            variant="h6"
            color="textSecondary"
            gutterBottom
          ></Typography>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Box
              sx={{
                position: "relative",
                backgroundColor: "#D9D9D9",
                marginTop: "10px",
                paddingTop: "15px",
                height: "52vh",
                borderRadius: "8px",
              }}
            >
              <RegisterForm
                setFirstname={setFirstname}
                firstnameErr={firstnameErr}
                setLastname={setLastname}
                lastnameErr={lastnameErr}
                setUsername={setUsername}
                usernameErr={usernameErr}
                setEmail={setEmail}
                emailErr={emailErr}
                setPassword={setPassword}
                passwordErr={passwordErr}
                setPasswordAgain={setPasswordAgain}
                passwordAgainErr={passwordAgainErr}
                handleSubmit={handleSubmit}
              />
            </Box>
          </div>
        </Box>
      </div>
  )
}

export default RegisterPage
