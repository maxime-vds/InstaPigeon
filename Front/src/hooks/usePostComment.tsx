// export const usePostComment = ({ text, id }: { text: string; id: string }) => {
//    fetch('http://localhost:5000/comment', {
//       method: 'put',
//       headers: {
//          'Content-Type': 'application/json',
//          Authorization: 'Bearer ' + localStorage.getItem('jwt'),
//       },
//       body: JSON.stringify({
//          postId: id,
//          text,
//       }),
//    })
//       .then((res) => res.json())
//       .then((res) => {
//          console.log(res)
//       })

//    // return response object ?
//    // return new comments array
//    return usePostComment
// }





// write code to put comments into an array and update the comments live to the page

import { useState } from 'react'

export const usePostComment = () => {
   const [error, setError] = useState<string | null>(null)
   const [isPending, setIsPending] = useState<boolean>(false)
   const [comments, setComments] = useState<string[]>([])

   //fetch the comments and put them in an array 







   const addComment = async (postObject: { text: string; id: string }) => {
      setIsPending(true)
      try {
         const response = await fetch('http://localhost:5000/comment', {
            method: 'put',
            headers: {
               'Content-Type': 'application/json',
               Authorization: 'Bearer ' + localStorage.getItem('jwt'),
            },
            body: JSON.stringify({
               postId: postObject.id,
               text: postObject.text,
            }),
         })
         const comment = await response.json()
         setComments((comments) => [...comments, comment])
      } catch (err : any) {
         setError(err.message)
      } finally {
         setIsPending(false)
      }
   }

   return { addComment, comments, error, isPending }
}
