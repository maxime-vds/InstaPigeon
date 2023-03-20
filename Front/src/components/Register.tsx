import { Button, TextField, Typography } from "@mui/material"
import { Container } from "@mui/system"
import { useEffect, useState} from "react"
import { useNavigate } from 'react-router-dom'
import {KeyboardArrowRight} from '@mui/icons-material/'

function Register() {

  const navigate = useNavigate()


  //inputStates
  const [firstname, setFirstname] = useState<string>('')
  const [lastname, setLastname] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [passwordAgain, setPasswordAgain] = useState<string>('')

  //errorStates
  const [firstnameErr, setFirstnameErr] = useState<boolean>(false)
  const [lastnameErr, setLastnameErr] = useState<boolean>(false)
  const [usernameErr, setUsernameErr] = useState<boolean>(false)
  const [emailErr, setEmailErr] = useState<boolean>(false)
  const [passwordErr, setPasswordErr] = useState<boolean>(false)
  const [passwordAgainErr, setPasswordAgainErr] = useState<boolean>(false)


  //this one doesn't break the page ? still freezes the page

  const fetchAccount = async () => {
    const settings = {
      method: 'POST',
      headers: { "Content-Type": "application/json",
    },
    body: JSON.stringify({firstname, lastname, username, email, password})
    };
    try {
      const response = await fetch('https://apilogin.herokuapp.com/api/auth/signup', settings); 
    } catch (err){
      console.log(err);
    }
    navigate('/login')
  }


const handleSubmit = (e:any) => {
    e.preventDefault()
    setFirstnameErr(false) 
    setLastnameErr(false)
    setUsernameErr(false)
    setEmailErr(false)
    setPasswordErr(false)
    setPasswordAgainErr(false)

// form validation

    if (firstname === '') {
      setFirstnameErr(true)
    }
    if (lastname === '') {
      setLastnameErr(true)
    }
    if (username === '') {
      setUsernameErr(true)
    }
    if (password === '') {
      setPasswordErr(true)
    }
    if (email === '') {
      setEmailErr(true)
    }
    if (password === '' || password !== passwordAgain) {
      setPassword('')
      setPasswordAgain('')
      setPasswordErr(true)
    }
    if (passwordAgain === '') {
      setPasswordAgainErr(true)
    }
    if (firstname && lastname && email && password && passwordAgain) {
      console.log('user created')

        fetchAccount()
    
      
      
      
      //still breaking page ?, localhost get request is getting blocked ?
      //something wrong with the api endpoint ,?
      // async try problems ?


      // fetch('https://apilogin.herokuapp.com/api/auth/signup', {
      //   method: 'POST',
      //   headers: {"Content-type": "application/json"},
      //   body: JSON.stringify({ firstname, lastname, username, email, password})
      // }).then(() => navigate('/login')).then(() => console.log(firstname, lastname, username, email, password))
      // .catch((error) => console.log(error))
    
    }

  


  }


  return (<>

<Typography
    align="center"
    variant='h6'
    color='textSecondary'
    gutterBottom
>instapigeon</Typography>


<Container maxWidth='xs' >
    <form style={{display:"flex", flexDirection:"column"}}>

    <TextField
      sx={{mb:2}}
      onChange={(e) => setFirstname(e.target.value)}
      label='firstname'
      variant='outlined'
      required
      error={firstnameErr}
    />  
    <TextField
      sx={{mb:2}}
      onChange={(e) => setLastname(e.target.value)}
      label='lastname'
      variant='outlined'
      required
      error={lastnameErr}
    /> 
     <TextField
      sx={{mb:2}}
      onChange={(e) => setUsername(e.target.value)}
      label='username'
      variant='outlined'
      required
      error={usernameErr}
    />   
    <TextField
      sx={{mb:2}}
      onChange={(e) => setEmail(e.target.value)}
      label='email'
      variant='outlined'
      required
      error={emailErr}
    />  
    <TextField
      sx={{mb:2}}
      onChange={(e) => setPassword(e.target.value)}
      label='password'
      type='password'
      variant='outlined'
      required
      error={passwordErr}
      // helperText="Incorrect entry."
    />  
     <TextField
      sx={{mb:2}}
      onChange={(e) => setPasswordAgain(e.target.value)}
      label='password'
      type='password'
      variant='outlined'
      required
      error={passwordAgainErr}
    />  

    <Button
      onClick={handleSubmit}
      type='submit'
      color='primary'
      variant='contained'
      endIcon={<KeyboardArrowRight/>}
      >
      Submit
    </Button>



    </form>
</Container>



</>)}

export default Register
