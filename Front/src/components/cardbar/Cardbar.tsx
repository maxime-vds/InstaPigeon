import { useFetch } from '../../hooks/useFetch'
// import {Likes} from './Likes'
import Likes from '@mui/icons-material/FavoriteBorderSharp'
import Comments from '@mui/icons-material/MapsUgcRounded'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Box } from '@mui/system'
import { Account } from './Account'
// import { Comments } from './Comments'
import { Button } from '../button/Button'

import styles from './Cardbar.module.css'

interface ICardbarProps {
   post: any
   setUpdatePost: React.Dispatch<React.SetStateAction<boolean>>
}

const Cardbar = ({ post, setUpdatePost }: ICardbarProps) => {
   function postLikes(e: React.MouseEvent<SVGSVGElement>, like: string) {
      e.preventDefault()
      console.log('click like')
      console.log(like)

      // this fetch request is crashing the server
      fetch('http://localhost:5000/like', {
         method: 'put',
         headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('jwt'),
         },
         body: JSON.stringify({
            postId: like,
         }),
      })
         .then((res) => res.json())
         .then((result) => {
            console.log(result)
            setUpdatePost(true)
         })
   }

   function postFollows() {
      console.log('click follows')
   }

   return (
      <div className={styles['card-wrapper']}>
         <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Button
               buttonText="follow"
               size="small"
               backgroundColor='transparent'
               disableElevation
            ></Button>
         </div>
         <div className={styles.icons}>
            <p
               style={{
                  margin: 0,
                  padding: 0,
               }}
            >
               {post.likes.length}
            </p>
               <Likes className={styles.likes} onClick={(e) => postLikes(e, post._id)} />
            <Comments />
         </div>
      </div>
   )
}

export default Cardbar
