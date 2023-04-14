import { useState } from 'react'
import Posts from './Posts'

// styles
import styles from './GridList.module.css'
import Cardbar from '../../components/cardbar/Cardbar'

import { useMediaQuery } from '@mui/material'

const GridList = ({ data }: any) => {
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

   const posts = data.posts;
   // console.log(posts);
   

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
                              <img src={post.photo} key={post.id} />
                              <div><h2>{post.body}</h2></div>
                              <div><h2>{post.title}</h2></div>
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
