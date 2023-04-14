import { TextField, Typography } from '@mui/material'
import { Box } from '@mui/material'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterForm } from './RegisterForm'

import styles from './RegisterPage.module.css'

function RegisterPage() {
   const navigate = useNavigate()

   //inputStates
   const [firstname, setFirstname] = useState<string>('')
   const [lastname, setLastname] = useState<string>('')
   const [name, setUsername] = useState<string>('')
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

   const fetchAccount = async () => {
      const settings = {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({
            name,
            email,
            password,
         }),
      }
      try {
         const response = await fetch('http://localhost:5000/signup', settings)
      } catch (err) {
         console.log(err)
      }
      navigate('/login')
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

      if (firstname === '') {
         setFirstnameErr(true)
      }
      if (lastname === '') {
         setLastnameErr(true)
      }
      if (name === '') {
         setUsernameErr(true)
      }
      if (password === '') {
         setPasswordErr(true)
      }
      if (passwordAgain === '') {
         setPasswordAgainErr(true)
      }
      if (email === '') {
         setEmailErr(true)
      }
      if (firstname && lastname && email && password && passwordAgain) {
         if (password !== passwordAgain) {
            setPassword('')
            setPasswordAgain('')
            setPasswordErr(true)

            console.log('something went wrong')
         } else if (password === passwordAgain) {
            console.log('trying to create user')
            fetchAccount()
         } else {
            console.log('nope')
         }
      }
   }

   // this logic seems crap too

   return (
      <div className={styles['register-page']}>
         <Box className={styles['box-bg']}>
            <h2>Before you fly, lets get you chipped first</h2>
            <p>
               Don't worry we don't care about selling you anything We just need
               a name to add to a number, so we can easily find your pigeons in
               our coop
            </p>

            <div className={styles['register-form']}>
               <Box className={styles['box-register']}>
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
