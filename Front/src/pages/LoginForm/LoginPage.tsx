import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { BackgroundCard } from './BackgroundCard'
import { LoginForm } from './LoginForm'
import { useAuthStore } from '../../context/authStore'
import { Box } from '@mui/system'

//styles
import styles from './LoginPage.module.css'

function LoginPage() {
   const { authed, login } = useAuthStore()
   const location = useLocation()
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
               // navigate(state?.path || "/")
               // catch error here?
            } else {
               login()
               console.log('logged in succesfully!')
            }
         })
   }

   // navigation on if(data) via useEffect

   useEffect(() => {
      if (authed) {
         navigate('/grid')
      }
   }, [authed])

   // console.log(authed)

   return (
      <>
         <div className={styles['background-card']}>
            <Box className={styles['box-background']}>
               <h2>Look what the pigeon dragged in!</h2>
               <p className={styles['paragraph']}>
                  Glad to see you! if you ever get sick of our pigeon puns, why
                  not join our flock and check out our job listings, so we can
                  see even more of you!
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
               <img src="../../public/RickyPigeon.png" alt="RickyPigeon" />
            </Box>
         </div>
      </>
   )
}

export default LoginPage
