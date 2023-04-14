import { useState } from 'react'
import Posts from './Posts'

// styles
import styles from './GridList.module.css'
import Cardbar from '../../components/cardbar/Cardbar'

import { useMediaQuery } from '@mui/material'

const GridList = ({ data }: any) => {
   const isTabletScreen = useMediaQuery('(max-width: 1024px)')
   const [postModal, setPostModal] = useState<boolean>(false)
   const [postID, setPostID] = useState<string>('')

   const clickHandler = (photo: string) => {
      setPostID(photo)
      setPostModal(true)

      if (!postModal) {
         document.body.style.overflow = 'hidden'
      }
   }

   const posts = data.posts

   return (
      <>
         <div className={styles.box}>
            {postModal ? (
               <Posts
                  postModal={postModal}
                  setPostModal={setPostModal}
                  photo={postID}
               />
            ) : (
               ' '
            )}
            {posts &&
               posts.map((post: any) => (
                  <>
                     {/* problem with the unique id ?  */}
                     <div className="wrapper" key={post._id}>
                        {/* <div className={styles.card}> */}
                        <div
                           key={post._id}
                           onClick={() => clickHandler(post.photo)}
                           style={{
                              textDecoration: 'none',
                              color: 'black',
                           }}
                        >
                           <img src={post.photo} key={post._id} />
                           {/* <div><h2>{post._id}</h2></div> */}
                        </div>
                        {/* </div> */}

                        <>
                           {isTabletScreen ? '' : <Cardbar id={post._id} />}
                        </>
                     </div>
                  </>
               ))}
         </div>
      </>
   )
}

export default GridList
