import { useNavigate, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Cardbar from '../../components/cardbar/Cardbar'

import { Box } from '@mui/system'
//components
import { usePostComment } from '../../hooks/usePostComment'
//styles
import styles from './Posts.module.css'

type postProps = {
   setPostModal: React.Dispatch<React.SetStateAction<boolean>>
   post: any
}

// put stylings in module

const Posts = ({ setPostModal, post }: postProps) => {
   const { addComment, comments, error, isPending } = usePostComment()
   const [text, setText] = useState<string>('')

   // const comments = post.comments
   useEffect(() => {
      setText('')
   }, [post])

   const submitHandler = async (
      e: React.FormEvent<HTMLFormElement>,
      id: string
   ) => {
      e.preventDefault()

      const inputElement = e.currentTarget[0] as HTMLInputElement
      const commentText = inputElement.value

      if (commentText === '') {
         console.log('empty comment')
      } else {
         const postObject = {
            text: commentText,
            id,
         }
         await addComment(postObject)
         inputElement.value = ''
      }
   }

   const clickHandler = () => {
      setPostModal(false)
      // true launches modal
      // if (postModal) {
      //    document.body.style.overflow = 'scroll'
      // }
   }

   console.log(comments)

   return (
      <>
         <Box
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
                        <img src={post.photo} />
                        {comments.map((comment: string) => (
                           <p>{comment}</p>
                        ))}
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
                     margin: 0,
                  }}
               ></div>
            </div>
            <div className={styles.cardbar}>
               {/* can't use the same cardbar in two different places */}
               {/* <Cardbar /> */}
            </div>
            <form onSubmit={(e) => submitHandler(e, post._id)}>
               <input type="text" placeholder="add a comment"></input>
               <button>comment</button>
            </form>
            <button onClick={clickHandler}>go back</button>
         </Box>
      </>
   )
}
export default Posts
