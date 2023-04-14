import { useNavigate, useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Cardbar from '../../components/cardbar/Cardbar'

import { Box } from '@mui/system'
//components
import { useFetch } from '../../hooks/useFetch'
//styles
import styles from './Posts.module.css'

interface postProps {
   postModal: boolean
   setPostModal: React.Dispatch<React.SetStateAction<boolean>>
   id: Number
}

const Posts = ({ postModal, setPostModal, id }: postProps) => {
   const url = 'http://localhost:5000/allpost/' + id
   const { data: card, isPending, error, postData } = useFetch(url)


   console.log(card);
   

   const clickHandler = () => {
      console.log('click')
      setPostModal(false)
      // true launches modal
      if (postModal) {
         document.body.style.overflow = 'scroll'
      }
   }

   return (
      <>
         <Box
            onClick={clickHandler}
            sx={{
               zIndex: 0,
               position: 'absolute',
               width: '100%',
            }}
         >
            <div style={{ display: 'flex', justifyContent: 'center' }}>
               {error && <p className="error">{error}</p>}
               {isPending && <p className="loading">Loading...</p>}
               {card && (
                  <div className={styles.singleCard}>
                     <div style={{ textDecoration: 'none', color: 'black' }}>
                        <div>
                           <img src={card.image} />

                           <p>
                              {card.caption},{card.id}
                           </p>
                        </div>
                     </div>
                  </div>
               )}
               <div
                  className="background-modal"
                  style={{
                     zIndex: -1,
                     position: 'absolute',
                     backgroundColor: '#D9D9D9',
                     height: '200%',
                     width: '100%',
                     opacity: '50%',
                     margin: 0,
                  }}
               ></div>
            </div>

            {/* put mediaquerry on the margin on 1024 as well ?*/}
            <div className={styles.cardbar}>
               <Cardbar />
            </div>
         </Box>
      </>
   )
}
export default Posts
