import { useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { Button } from '../../components/button/Button'
import { Input } from '@mui/material'

import { Container, TextField, Link } from '@mui/material'

const CreatePage = () => {
   const [id, setId] = useState<number>()
   const [caption, setCaption] = useState<string>('a')
   const [comments, setComments] = useState<string>('a')
   const [likes, setLikes] = useState<number>(0)
   const [follow, setFollow] = useState<boolean>(true)
   const [image, setImageUrl] = useState<string>('a')

   const { postData, data, error } = useFetch(
      'http://localhost:3000/posts',
      'POST'
   )

   const handleSubmit = (e: { preventDefault: () => void }) => {
      e.preventDefault()

      console.log(id, caption, comments, likes, follow, image)

      postData({ caption, comments, likes, follow, image })
   }

   // pass in : caption="required", comments: "", likes : 0, image="image.svg, required"

   return (
      <Container maxWidth="xs">
         <form
            style={{
               display: 'flex',
               flexDirection: 'column',
               marginTop: '10%',
            }}
         >
            <TextField
               sx={{ mb: 2, color: '7F96FF' }}
               label="caption"
               size="medium"
               required
            />

            <TextField
               sx={{ mb: 2, color: '7F96FF' }}
               type="file"
               size="medium"
               required
            />

            {/* <label htmlFor="file">choose a file</label>
            <input
               id="file"
               style={{ marginBottom: '10px', opacity: '0%' }}
               type="file"
            /> */}

            <Button buttonText="Submit" />
         </form>
      </Container>
   )
}

export default CreatePage
