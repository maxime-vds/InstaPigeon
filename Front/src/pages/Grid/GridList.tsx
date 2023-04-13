import { Link, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Posts from './Posts'

// styles
import styles from './GridList.module.css'
import Cardbar from '../../components/cardbar/Cardbar'

import { useMediaQuery } from '@mui/material'
import { LivingOutlined } from '@mui/icons-material'




const GridList = ({ posts, id }: any) => {
   const isTabletScreen = useMediaQuery('(max-width: 1024px)')
   const [postModal, setPostModal] = useState<boolean>(true)




   const clickHandler = (e: React.MouseEvent<Element>) => {
      e.preventDefault()
      console.log(e.target);

      
      

   }


   return (
      <>
         <div className={styles.box}>
            {posts &&
               posts.map((post: any) => (
                  <>
                     {/* problem with the unique id ?  */}
                     <div className="wrapper" key={post.id}>
                        {postModal ? (
                           <div className={styles.card}>
                              <div
                                 key={post.id}
                                 onClick={(e) => clickHandler(e)}
                                 style={{
                                    textDecoration: 'none',
                                    color: 'black',
                                 }}
                              >
                                 <img src={post.image} key={post.id} />
                              </div>
                           </div>
                        ) : (

                           
                              <Posts setPostModal={setPostModal} id={id}/>
                           // <div
                           // style={{margin: '100px', backgroundColor: 'pink'}}
                           // key={post.id}
                           // onClick={() => setPostModal(true)}>shitbird</div>
                        )}

                        <div>{isTabletScreen ? '' : <Cardbar />}</div>
                     </div>
                  </>
               ))}
         </div>
      </>
   )
}

export default GridList
