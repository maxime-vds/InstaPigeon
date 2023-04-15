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
   photo: string
}

const Posts = ({ postModal, setPostModal, photo }: postProps) => {
   const clickHandler = () => {
      console.log('click')
      setPostModal(false)
      // true launches modal
      // if (postModal) {
      //    document.body.style.overflow = 'scroll'
      // }
   }

   return (
      <>
         <Box
            onClick={clickHandler}
            sx={{
               zIndex: 1,
               position: 'absolute',
               width: '100%',
            }}
         >
            <div style={{ display: 'flex', justifyContent: 'center' }}>
               <div className={styles.singleCard}>
                  <div style={{ textDecoration: 'none', color: 'black' }}>
                     <div>
                        <img src={photo} />

                        <p></p>
                     </div>
                  </div>
               </div>
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
               {/* can't use the same cardbar in two different places */}
               {/* <Cardbar /> */}
            </div>
         </Box>
      </>
   )
}
export default Posts
