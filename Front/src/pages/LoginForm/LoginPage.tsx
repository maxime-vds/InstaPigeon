import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginForm } from './LoginForm'
import { useAuthStore } from '../../context/authStore'
import { Box } from '@mui/system'

import { motion } from 'framer-motion'

const loginPageVariants = {
   
}




//styles
import styles from './LoginPage.module.css'



function LoginPage() {
   const { authed, login } = useAuthStore()
   const navigate = useNavigate()

   //inputState
   const [username, setUsername] = useState<string>('')
   const [password, setPassword] = useState<string>('')

   //errorStates
   const [usernameErr, setUsernameErr] = useState<boolean>(false)
   const [passwordErr, setPasswordErr] = useState<boolean>(false)

   const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      console.log('handleLogin launched')
      console.log(authed)

      setUsernameErr(false)
      setPasswordErr(false)

      // form validation

      // put this in a seperate hook ?

      if (username === '') {
         setUsernameErr(true)
      }
      if (password === '') {
         setPasswordErr(true)
      }

      fetch('https://apilogin.herokuapp.com/api/auth/signin', {
         method: 'POST',
         headers: { 'Content-type': 'application/json' },
         body: JSON.stringify({ username, password }),
      })
         // just gonna do a res.ok check here but might need some extra checks
         .then((res) => {
            if (!res.ok) {
               console.log('failed to log in')
               toast.error('error Login', {
                  theme: 'colored',
                  hideProgressBar: true,
                  autoClose: 1000,
                 
                })
              
            } else {
               login()
               console.log('logged in succesfully!')
               toast.success('Success Login', {
                 theme: 'colored',
                 hideProgressBar: true,
                 autoClose: 500,
                
               })
             
             }
         })
   }

   // navigation on if(data) via useEffect

   useEffect(() => {
      if (authed) {
         
         setTimeout(() => navigate('/grid'), 700)
      }
   }, [authed])

   // console.log(authed)

   return (
      <motion.div className={styles['background-card']}>
         <Box className={styles['box-background']}>
            <h2>Look what the pigeon dragged in!</h2>
            <p className={styles['paragraph']}>
               Glad to see you! if you ever get sick of our pigeon puns, why not
               join our flock and check out our job listings, so we can see even
               more of you!
            </p>

            <div>
               <Box className={styles['box-loginform']}>
                  <LoginForm
                     handleLogin={handleLogin}
                     setUsername={setUsername}
                     usernameErr={usernameErr}
                     setPassword={setPassword}
                     passwordErr={passwordErr}
                  />
               </Box>
            </div>
            <div className={styles['images-login']}>
            <img src="../../public/RickyPigeon.png" alt="RickyPigeon" />
            <img src="../../public/VeronicaPigeon.png" alt="VeronicaPigeon" />
            </div>
         </Box>
        <ToastContainer/> 
      </motion.div>
   ) 
}

export default LoginPage
