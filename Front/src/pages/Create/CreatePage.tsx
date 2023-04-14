import { useState, useEffect, ChangeEvent } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { Button } from '../../components/button/Button'
import { Input } from '@mui/material'

import { Container, TextField, Link } from '@mui/material'

interface changeProps {
   postDetails:
      | React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
      | undefined
      | void
}
const CreatePost = () => {
   const [title, setTitle] = useState('')
   const [body, setBody] = useState('')
   const [image, setImage] = useState<File | string | Blob>('')
   const [url, setUrl] = useState('')
   useEffect(() => {
      if (url) {
         fetch('/createpost', {
            method: 'post',
            headers: {
               'Content-Type': 'application/json',
               Authorization: 'Bearer ' + localStorage.getItem('jwt'),
            },
            body: JSON.stringify({
               title,
               body,
               pic: url,
            }),
         })
            .then((res) => res.json())
            .then((data) => {
               if (data.error) {
               } else {
               }
            })
            .catch((err) => {
               console.log(err)
            })
      }
   }, [url])

   const postDetails = () => {
      const data = new FormData()
      data.append('file', image)
      data.append('upload_preset', 'Sebagram')
      data.append('cloud_name', 'dz9k0tal4')
      fetch('https://api.cloudinary.com/v1_1/dz9k0tal4/image/upload', {
         method: 'post',
         body: data,
      })
         .then((res) => res.json())
         .then((data) => {
            setUrl(data.url)
         })
         .catch((err) => {
            console.log(err)
         })
   }

   // const CreatePage = () => {
   //    const [title, setTitle] = useState('')
   //    const [body, setBody] = useState('')
   //    const [photo, setPhoto] = useState('')

   //    const { postData, data, error } = useFetch(
   //       'https://api.cloudinary.com/v1_1/dz9k0tal4/image/upload%22,%7B',
   //       'POST'
   //    )

   //    const handleSubmit = (e: { preventDefault: () => void }) => {
   //       e.preventDefault()

   //       console.log(title, body, photo)

   //       postData({ title, body, photo })
   //    }

   //    // pass in : caption="required", comments: "", likes : 0, image="image.svg, required"

   return (
      <Container maxWidth="xs">
         <form
            onSubmit={postDetails}
            style={{
               display: 'flex',
               flexDirection: 'column',
               marginTop: '10%',
            }}
         >
            <TextField
               sx={{ mb: 2, color: '7F96FF' }}
               label="title"
               size="medium"
               required
               onChange={(e) => setTitle(e.target.value)}
               value={title}
            />

            <TextField
               sx={{ mb: 2, color: '7F96FF' }}
               label="body"
               size="medium"
               required
               onChange={(e) => setBody(e.target.value)}
               value={body}
            />
            {/* <TextField
               sx={{ mb: 2, color: '7F96FF' }}

               type="file"
               label="photo"
               size="medium"
               required
               onChange={(e) => setImage(e.target.files[0])}
               value={image}
            /> */}

            <input
               type="file"
               onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setImage(e.target.files?.[0] as File)
               }
            ></input>

            {/* <Input
                  sx={{ mb: 2, color: '7F96FF' }}
                  type="file"
                  size="medium"
                  required
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setImage(e.target.files?.[0] as File)}
                  value={image}
               /> */}
            {/* <TextField
               sx={{ mb: 2, color: '7F96FF' }}
               type="file"
               size="medium"
               required
            /> */}

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

export default CreatePost
