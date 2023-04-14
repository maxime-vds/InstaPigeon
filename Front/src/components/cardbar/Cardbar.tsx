import { useFetch } from '../../hooks/useFetch'
// import {Likes} from './Likes'
import Likes from '@mui/icons-material/FavoriteBorderSharp'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Box } from '@mui/system'
import { Account } from './Account'
import { Comments } from './Comments'
import { Button } from '../button/Button'

import styles from './Cardbar.module.css'

interface ICardbarProps {
   id: string
   // onClick: () => void
}


const Cardbar = ({id}:ICardbarProps) => {

   function postLikes(id:string) {
      console.log('click like')
      console.log(id);
      
      // this fetch request is crashing the server

      fetch('http://localhost:5000/like', {
         method: 'put',
         headers: {
            'Content-Type':'application/json',
            'Authorization':'Bearer '+localStorage.getItem('jwt')
         },
         body:JSON.stringify({
            postId:id
         })
      }).then(res => res.json())
      .then(result => {
         console.log(result);
      })
   }

   function postFollows() {
      console.log('click follows')
   }

   return (
      <div className={styles['card-wrapper']}>
         <Account />

         <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            {/* <Button buttonText='follow'/> */}
            <Likes onClick={()=>postLikes(id)}/>
            <Comments />
         </div>
      </div>
   )
}

export default Cardbar
