import { useState } from 'react'
import Posts from './Posts'

// styles
import styles from './GridList.module.css'
import Cardbar from '../../components/cardbar/Cardbar'

import { useMediaQuery } from '@mui/material'

const GridList = ({ posts }: any) => {
   const isTabletScreen = useMediaQuery('(max-width: 1024px)')
   const [postModal, setPostModal] = useState<boolean>(false)
   const [postID, setPostID] = useState<Number>(0)

   const clickHandler = (id: number) => {
      setPostID(id)
      setPostModal(true)

      if (!postModal) {
         document.body.style.overflow = 'hidden'
      }
   }

   return (
      <>
         <div className={styles.box}>
            {postModal ? (
               <Posts
                  postModal={postModal}
                  setPostModal={setPostModal}
                  id={postID}
               />
            ) : (
               ' '
            )}
            {posts &&
               posts.map((post: any) => (
                  <>
                     {/* problem with the unique id ?  */}
                     <div className="wrapper" key={post.id}>
                        <div className={styles.card}>
                           <div
                              key={post.id}
                              onClick={() => clickHandler(post.id)}
                              style={{
                                 textDecoration: 'none',
                                 color: 'black',
                              }}
                           >
                              <img src={post.image} key={post.id} />
                           </div>
                        </div>

                        <div>{isTabletScreen ? '' : <Cardbar />}</div>
                     </div>
                  </>
               ))}
         </div>
      </>
   )
}

export default GridList
