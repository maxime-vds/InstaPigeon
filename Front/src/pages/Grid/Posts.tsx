import { useNavigate, useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Cardbar from '../../components/cardbar/Cardbar'

import { Box } from '@mui/system'
//components
import { useFetch } from '../../hooks/useFetch'
//styles
import styles from './Posts.module.css'

interface postProps {
   setPostModal: React.Dispatch<React.SetStateAction<boolean>>
   id: Number
}

const Posts = ({ setPostModal, id }: postProps) => {
   const url = 'http://localhost:3000/posts/' + id
   const { data: card, isPending, error, postData } = useFetch(url)

   return (
      <>
         <Box
            sx={{
               width: '100%',
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
            }}
         >
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading...</p>}
            {card && (
               <div className={styles.singleCard}>
                  <div
                     style={{ textDecoration: 'none', color: 'black' }}
                     onClick={() => setPostModal(false)}
                  >
                     <div>
                        <img src={card.image} />

                        <p>
                           {card.caption},{card.id}
                        </p>
                     </div>
                  </div>
               </div>
            )}
         </Box>

         <Cardbar />
      </>
   )
}
export default Posts
